import { motion } from 'framer-motion';
import { brand } from '../../config/brand';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Services() {
  const ref = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHeading
          label="Услуги"
          title="Что мы делаем"
        />

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden mt-16">
          {brand.services.map((service) => (
            <motion.div
              key={service.title}
              className="gsap-reveal bg-bg-card p-8 md:p-10 group hover:bg-bg-card-hover transition-colors duration-500"
              whileHover={{ y: 0 }}
            >
              <span className="text-accent text-sm font-mono">{'{'}{service.icon}{'}'}</span>
              <h3 className="text-xl md:text-2xl font-bold mt-6 mb-4">{service.title}</h3>
              <p className="text-text-muted leading-relaxed font-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
