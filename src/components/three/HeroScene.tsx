import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT_DESKTOP = 2000;
const PARTICLE_COUNT_MOBILE = 800;

function Particles({ count }: { count: number }) {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const { positions, randoms } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.2 + Math.random() * 2.5;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta) + 2.0;
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      randoms[i] = Math.random();
    }
    return { positions, randoms };
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColor1: { value: new THREE.Color('#4F46E5') },
      uColor2: { value: new THREE.Color('#7C3AED') },
      uColor3: { value: new THREE.Color('#06B6D4') },
    }),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    uniforms.uTime.value = state.clock.elapsedTime;

    const pointer = state.pointer;
    mouseRef.current.x += (pointer.x - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (pointer.y - mouseRef.current.y) * 0.05;
    uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);

    meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          count={count}
          array={randoms}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexShader={`
          uniform float uTime;
          uniform vec2 uMouse;
          attribute float aRandom;
          varying float vAlpha;
          varying float vRandom;

          void main() {
            vRandom = aRandom;
            vec3 pos = position;

            // Organic motion
            float wave = sin(pos.x * 2.0 + uTime * 0.5 + aRandom * 6.28) * 0.15;
            pos.y += wave;
            pos.x += cos(pos.y * 1.5 + uTime * 0.3) * 0.1;
            pos.z += sin(pos.z * 1.0 + uTime * 0.4 + aRandom * 3.14) * 0.1;

            // Mouse repulsion
            vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
            vec2 screenPos = mvPos.xy / mvPos.z;
            float dist = length(screenPos - uMouse * 2.0);
            float repulsion = smoothstep(1.5, 0.0, dist) * 0.5;
            pos += normalize(pos) * repulsion;

            vAlpha = 0.3 + aRandom * 0.7;
            vAlpha *= smoothstep(4.0, 1.5, length(pos));

            vec4 finalPos = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            gl_Position = finalPos;
            gl_PointSize = (1.5 + aRandom * 2.5) * (250.0 / -mvPos.z);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          uniform vec3 uColor3;
          varying float vAlpha;
          varying float vRandom;

          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;

            float glow = exp(-d * 4.0);

            vec3 color = mix(uColor1, uColor2, vRandom);
            color = mix(color, uColor3, sin(uTime * 0.5 + vRandom * 6.28) * 0.5 + 0.5);

            gl_FragColor = vec4(color, glow * vAlpha * 0.55);
          }
        `}
      />
    </points>
  );
}

function GlowOrb() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    ref.current.scale.setScalar(s);
  });

  return (
    <mesh ref={ref} position={[2.0, 0, 0]}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexShader={`
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
            vec3 color = mix(vec3(0.31, 0.27, 0.93), vec3(0.02, 0.71, 0.83), intensity);
            gl_FragColor = vec4(color, intensity * 0.25);
          }
        `}
      />
    </mesh>
  );
}

export function HeroScene({ mobile = false }: { mobile?: boolean }) {
  const count = mobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={mobile ? [1, 1] : [1, 2]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      >
        <Particles count={count} />
        <GlowOrb />
      </Canvas>
    </div>
  );
}
