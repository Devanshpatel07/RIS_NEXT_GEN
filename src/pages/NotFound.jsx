import React from 'react';
import { Home, BookOpen, PhoneCall, Sparkles } from 'lucide-react';
import CTAButton from '../components/CTAButton';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#EAF5FF]/60 via-white to-white">
      {/* Decorative blurred background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00A8F0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1565C0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Error Code Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FF] border border-[#00A8F0]/30 text-[#0B3A8C] text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#00A8F0]" />
          <span>Error 404 • Destination Not Found</span>
        </div>

        {/* Big Glitch/Tech 404 Heading */}
        <h1 className="font-['Rajdhani'] font-extrabold text-7xl sm:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] tracking-tight leading-none mb-4 select-none">
          404
        </h1>

        <h2 className="font-['Rajdhani'] font-bold text-2xl sm:text-3xl text-[#0A1A33] mb-4">
          This Page Has Drifted Out of Orbit
        </h2>

        <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed max-w-md mx-auto mb-8">
          The link you followed may be broken, or the page may have been moved. Let's get you back on track to exploring our live cohorts and engineering masterclasses.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <CTAButton
            to="/"
            variant="gradient"
            size="md"
            icon={Home}
            iconPosition="left"
          >
            Back to Home
          </CTAButton>

          <CTAButton
            to="/courses"
            variant="outline"
            size="md"
            icon={BookOpen}
            iconPosition="left"
          >
            Explore Courses
          </CTAButton>

          <CTAButton
            to="/contact"
            variant="ghost"
            size="md"
            icon={PhoneCall}
            iconPosition="left"
          >
            Contact Help Desk
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
