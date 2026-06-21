import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`bg-bg-card border border-border rounded-2xl p-8 ${hover ? 'hover:border-accent/40 hover:bg-bg-card-hover' : ''} transition-all duration-300 ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
    >
      {children}
    </motion.div>
  );
}
