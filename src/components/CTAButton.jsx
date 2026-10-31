import React from 'react';
import { Link } from 'react-router-dom';

export default function CTAButton({
  children,
  to,
  href,
  onClick,
  variant = 'gradient',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  fullWidth = false,
  ...props
}) {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-xl gap-1.5',
    md: 'px-6 py-3 text-sm font-semibold rounded-xl gap-2',
    lg: 'px-8 py-4 text-base font-bold rounded-2xl gap-2.5'
  }[size] || 'px-6 py-3 text-sm font-semibold rounded-xl gap-2';

  const variantStyles = {
    gradient: 'text-white bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] hover:from-[#082a66] hover:via-[#10529d] hover:to-[#0092d0] shadow-md hover:shadow-lg hover:shadow-[#00A8F0]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#00A8F0] focus-visible:ring-offset-2',
    outline: 'border-2 border-[#1565C0] text-[#0B3A8C] bg-white/80 hover:bg-[#1565C0] hover:text-white hover:border-[#1565C0] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[#1565C0] focus-visible:ring-offset-2',
    white: 'bg-white text-[#0B3A8C] hover:bg-[#EAF5FF] shadow-lg hover:shadow-xl hover:shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 font-bold',
    ghost: 'text-[#0B3A8C] hover:bg-[#EAF5FF] hover:text-[#00A8F0] transition-colors focus-visible:ring-2 focus-visible:ring-[#1565C0]'
  }[variant] || '';

  const baseStyles = `inline-flex items-center justify-center tracking-wide transition-all select-none cursor-pointer ${sizeStyles} ${variantStyles} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${baseStyles}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`group ${baseStyles}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`group ${baseStyles}`} {...props}>
      {content}
    </button>
  );
}
