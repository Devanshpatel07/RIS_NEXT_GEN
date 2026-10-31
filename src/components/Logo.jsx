import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'md', variant = 'light', showTagline = true, className = '' }) {
  const isDark = variant === 'dark'; // for dark backgrounds like footer

  const sizeClass = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8 sm:w-10 sm:h-10',
    lg: 'w-10 h-10 sm:w-12 sm:h-12'
  }[size] || 'w-8 h-8 sm:w-10 sm:h-10';

  return (
    <Link to="/" className={`inline-flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8F0] rounded-lg ${className}`}>
      {/* Brand Icon: Gradient 'R' with upward arrow and pixel blocks */}
      <div 
        className={`relative shrink-0 ${sizeClass} transition-transform duration-300 group-hover:scale-105`}
      >
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full drop-shadow-sm"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`risGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B3A8C" />
              <stop offset="50%" stopColor="#1565C0" />
              <stop offset="100%" stopColor="#00A8F0" />
            </linearGradient>
            <linearGradient id={`arrowGrad-${variant}`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A8F0" />
              <stop offset="100%" stopColor="#67e8f9" />
            </linearGradient>
          </defs>

          {/* Badge Background */}
          <rect 
            x="4" 
            y="4" 
            width="92" 
            height="92" 
            rx="24" 
            fill={isDark ? '#0f244a' : '#EAF5FF'} 
            stroke={isDark ? '#1e3a6d' : '#CBE5FC'} 
            strokeWidth="2" 
          />

          {/* Decorative Pixel Blocks */}
          <rect x="70" y="20" width="8" height="8" rx="2" fill="#00A8F0" opacity="0.9" />
          <rect x="80" y="14" width="6" height="6" rx="1.5" fill="#1565C0" opacity="0.8" />
          <rect x="76" y="32" width="7" height="7" rx="1.5" fill="#0B3A8C" opacity="0.6" />
          <rect x="16" y="68" width="6" height="6" rx="1.5" fill="#00A8F0" opacity="0.5" />
          <rect x="22" y="76" width="7" height="7" rx="1.5" fill="#1565C0" opacity="0.6" />

          {/* Stem of R */}
          <rect x="26" y="24" width="12" height="52" rx="3" fill={`url(#risGrad-${variant})`} />
          
          {/* Upper loop of R */}
          <path 
            d="M 38 24 L 56 24 C 67 24 73 30 73 39 C 73 48 67 54 56 54 L 38 54 Z" 
            fill={`url(#risGrad-${variant})`} 
          />
          {/* Inner cutout of loop */}
          <path 
            d="M 38 34 L 54 34 C 59 34 62 36 62 39 C 62 42 59 44 54 44 L 38 44 Z" 
            fill={isDark ? '#0f244a' : '#EAF5FF'} 
          />

          {/* Diagonal leg of R transformed into an UPWARD GROWTH ARROW */}
          <path 
            d="M 47 48 L 68 76 L 56 76 L 41 53 Z" 
            fill={`url(#risGrad-${variant})`} 
          />
          
          {/* Upward Growth Arrow in top right */}
          <polygon 
            points="62,28 75,15 67,15 67,9 81,9 81,23 75,23 75,15" 
            fill={`url(#arrowGrad-${variant})`} 
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-tight select-none">
        <div className="font-['Rajdhani'] font-bold tracking-wider uppercase flex items-center gap-1 text-base sm:text-xl">
          <span className={isDark ? 'text-white' : 'text-[#0B3A8C]'}>RIS</span>
          <span className="bg-gradient-to-r from-[#1565C0] to-[#00A8F0] bg-clip-text text-transparent font-extrabold">NEXTGEN</span>
          <span className="w-1.5 h-1.5 bg-[#00A8F0] rounded-xs inline-block animate-pulse"></span>
        </div>
        {showTagline && (
          <span className={`tracking-widest uppercase font-semibold text-[10px] hidden sm:block ${isDark ? 'text-blue-200/70' : 'text-[#5B6B82]'}`}>
            Next-Gen Learning &bull; Career Growth
          </span>
        )}
      </div>
    </Link>
  );
}
