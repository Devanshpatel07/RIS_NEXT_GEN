import React from 'react';

export default function SectionHeading({
  badge,
  title,
  gradientWord,
  subtitle,
  align = 'center',
  isDark = false,
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} mb-12 md:mb-16 ${className}`}>
      {/* Category / Section Badge with Pixel Tech Accent */}
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FF] border border-[#00A8F0]/30 text-[#0B3A8C] text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-xs bg-[#00A8F0] animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}

      {/* Main Heading in Rajdhani Font */}
      <h2 className={`font-['Rajdhani'] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight ${isDark ? 'text-white' : 'text-[#0A1A33]'}`}>
        {title}{' '}
        {gradientWord && (
          <span className="bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] bg-clip-text text-transparent">
            {gradientWord}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg max-w-2xl leading-relaxed ${isDark ? 'text-blue-100/80' : 'text-[#5B6B82]'}`}>
          {subtitle}
        </p>
      )}

      {/* Tech decorative underline */}
      <div className={`mt-4 flex items-center gap-1.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#0B3A8C] to-[#00A8F0]"></div>
        <div className="w-2 h-1 rounded-xs bg-[#00A8F0]"></div>
        <div className="w-1 h-1 rounded-xs bg-[#1565C0]"></div>
      </div>
    </div>
  );
}
