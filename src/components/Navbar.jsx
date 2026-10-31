import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles, PhoneCall, LogIn, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import CTAButton from './CTAButton';

export default function Navbar({ onOpenEnroll, onOpenLogin, onOpenCounselor }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  // Close mobile drawer on route change
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setIsOpen(false);
  }

  // Track scroll for subtle shadow lift
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Why RIS NextGen', path: '/#why-us', isAnchor: true },
    { name: 'Mentorship', path: '/#mentorship', isAnchor: true },
    { name: 'FAQ', path: '/#faq', isAnchor: true },
  ];

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] text-white text-[11px] sm:text-xs font-medium py-1.5 px-3 sm:px-4 text-center tracking-wide flex items-center justify-center gap-1.5 w-full max-w-full overflow-hidden">
        <div className="flex items-center gap-1.5 truncate max-w-full justify-center">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#EAF5FF] animate-pulse shrink-0" />
          <span className="truncate">
            Winter 2026 Cohorts: <strong>35% Early Bird Scholarship</strong>
          </span>
          <button 
            onClick={() => onOpenEnroll?.()}
            className="shrink-0 hidden xs:inline-flex sm:inline-flex items-center gap-1 underline underline-offset-2 hover:text-[#EAF5FF] font-bold ml-1 cursor-pointer"
          >
            Claim Seat <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 w-full max-w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-[#0B3A8C]/5 border-b border-[#D8E8F8]' 
            : 'bg-white/90 backdrop-blur-sm border-b border-[#E1ECF8]'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 w-full">
            {/* Logo */}
            <div className="shrink-0">
              <Logo size="md" />
            </div>

            {/* Desktop Navigation Links (>= lg: 1024px) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                if (link.isAnchor) {
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      className="px-3.5 py-2 rounded-lg text-sm font-semibold text-[#5B6B82] hover:text-[#0B3A8C] hover:bg-[#EAF5FF] transition-all"
                    >
                      {link.name}
                    </a>
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all relative ${
                        isActive
                          ? 'text-[#0B3A8C] bg-[#EAF5FF] font-bold'
                          : 'text-[#5B6B82] hover:text-[#0B3A8C] hover:bg-[#EAF5FF]'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.name}</span>
                        {isActive && (
                          <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-[#0B3A8C] to-[#00A8F0] rounded-full" />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right Side Desktop Actions (>= lg) */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenCounselor?.()}
                className="text-xs font-semibold text-[#0B3A8C] hover:text-[#00A8F0] px-3 py-2 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#00A8F0]" />
                <span>Talk to Counsellor</span>
              </button>

              <CTAButton
                variant="outline"
                size="sm"
                icon={LogIn}
                iconPosition="left"
                onClick={() => onOpenLogin?.()}
              >
                Login
              </CTAButton>

              <CTAButton
                variant="gradient"
                size="sm"
                onClick={() => onOpenEnroll?.()}
              >
                Enroll Now
              </CTAButton>
            </div>

            {/* Mobile / Tablet Actions (< lg) */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <div className="hidden sm:inline-flex">
                <CTAButton
                  variant="gradient"
                  size="sm"
                  onClick={() => onOpenEnroll?.()}
                  className="text-xs py-1.5 px-3"
                >
                  Enroll
                </CTAButton>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                className="p-2 rounded-xl border border-[#D8E8F8] text-[#0A1A33] hover:bg-[#EAF5FF] hover:text-[#0B3A8C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8F0] cursor-pointer"
              >
                {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-b border-[#D8E8F8] bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => {
                if (link.isAnchor) {
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[#5B6B82] hover:bg-[#EAF5FF] hover:text-[#0B3A8C]"
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-[#00A8F0]" />
                    </a>
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                        isActive
                          ? 'bg-[#EAF5FF] text-[#0B3A8C] font-bold'
                          : 'text-[#5B6B82] hover:bg-[#EAF5FF] hover:text-[#0B3A8C]'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#00A8F0]" />
                  </NavLink>
                );
              })}
            </div>

            <div className="flex flex-col gap-2.5 pt-3 border-t border-[#E1ECF8]">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenCounselor?.();
                }}
                className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-[#0B3A8C] bg-[#EAF5FF] hover:bg-[#d8eefc] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#00A8F0]" />
                <span>Talk to Academic Counsellor</span>
              </button>

              <div className="grid grid-cols-2 gap-2 mt-1">
                <CTAButton
                  variant="outline"
                  size="md"
                  icon={LogIn}
                  iconPosition="left"
                  fullWidth
                  onClick={() => {
                    setIsOpen(false);
                    onOpenLogin?.();
                  }}
                >
                  Login
                </CTAButton>

                <CTAButton
                  variant="gradient"
                  size="md"
                  fullWidth
                  onClick={() => {
                    setIsOpen(false);
                    onOpenEnroll?.();
                  }}
                >
                  Enroll Now
                </CTAButton>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
