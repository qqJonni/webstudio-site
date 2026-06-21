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
    'inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 cursor-pointer';
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/40',
    outline: 'border border-border text-text-primary hover:border-accent hover:text-accent',
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={cls}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={cls}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
