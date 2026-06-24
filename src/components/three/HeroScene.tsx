import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function TorusKnotMesh({ mobile }: { mobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color('#C8FF00') },
      uColor2: { value: new THREE.Color('#3A4250') },
    }),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    uniforms.uTime.value = state.clock.elapsedTime;

    const pointer = state.pointer;
    mouseRef.current.x += (pointer.x * 0.2 - mouseRef.current.x) * 0.03;
    mouseRef.current.y += (pointer.y * 0.15 - mouseRef.current.y) * 0.03;

    meshRef.current.rotation.x = mouseRef.current.y + state.clock.elapsedTime * 0.08;
    meshRef.current.rotation.y = mouseRef.current.x + state.clock.elapsedTime * 0.12;
  });

  const segments = mobile ? 100 : 200;
  const radialSegments = mobile ? 16 : 32;

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} position={[1.5, 0, 0]} scale={mobile ? 0.8 : 1}>
        <torusKnotGeometry args={[1, 0.35, segments, radialSegments, 2, 3]} />
        <shaderMaterial
          uniforms={uniforms}
          wireframe
          transparent
          vertexShader={`
            uniform float uTime;
            varying vec3 vPosition;
            varying float vNoise;
            void main() {
              vPosition = position;
              vec3 pos = position;
              float noise = sin(pos.x * 3.0 + uTime) * cos(pos.y * 3.0 + uTime * 0.7) * 0.06;
              pos += normal * noise;
              vNoise = noise;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `}
          fragmentShader={`
            uniform vec3 uColor;
            uniform vec3 uColor2;
            varying vec3 vPosition;
            varying float vNoise;
            void main() {
              float gradient = (vPosition.y + 1.5) / 3.0;
              vec3 color = mix(uColor2, uColor, gradient * 0.4 + vNoise * 2.0);
              float alpha = 0.15 + abs(vNoise) * 3.0;
              gl_FragColor = vec4(color, alpha);
            }
          `}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={mobile ? [1, 1] : [1, 1.5]}
        gl={{ antialias: !mobile, alpha: true, powerPreference: 'high-performance' }}
      >
        <TorusKnotMesh mobile={mobile} />
      </Canvas>
    </div>
  );
}
