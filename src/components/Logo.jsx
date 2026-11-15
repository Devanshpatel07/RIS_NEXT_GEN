import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/risnextgen logo.jpg';

export default function Logo({ size = 'md', variant = 'light', showTagline = true, className = '' }) {
  const isDark = variant === 'dark'; // for dark backgrounds like footer

  const imgSizeClass = {
    sm: 'h-8 w-8 sm:h-9 sm:w-9',
    md: 'h-10 w-10 sm:h-12 sm:w-12',
    lg: 'h-12 w-12 sm:h-14 sm:w-14'
  }[size] || 'h-10 w-10 sm:h-12 sm:w-12';

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8F0] rounded-xl ${className}`}>
      {/* Official Brand Logo Image */}
      <div 
        className={`relative shrink-0 overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105 ${
          isDark 
            ? 'bg-white p-1 shadow-md shadow-black/20 ring-1 ring-white/20' 
            : 'bg-white shadow-xs border border-[#D8E8F8]'
        }`}
      >
        <img
          src={logoImg}
          alt="RIS NextGen Logo"
          className={`${imgSizeClass} object-contain rounded-lg`}
        />
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
