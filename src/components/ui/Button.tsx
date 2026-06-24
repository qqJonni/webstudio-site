import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base transition-colors duration-300 cursor-pointer';
  const variants = {
    primary: 'bg-accent text-text-dark hover:bg-accent-hover',
    outline: 'border border-border text-text-primary hover:border-text-muted',
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a href={href} className={cls} whileTap={{ scale: 0.97 }}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} className={cls} onClick={onClick} whileTap={{ scale: 0.97 }}>
      {children}
    </motion.button>
  );
}
