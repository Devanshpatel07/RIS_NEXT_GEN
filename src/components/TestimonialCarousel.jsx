import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { testimonials } from '../data/courses';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto rotate testimonials every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative quotes background */}
      <div className="absolute -top-8 -left-6 text-[#1565C0]/10 pointer-events-none">
        <Quote className="w-24 h-24 rotate-180" />
      </div>

      {/* Main Review Card */}
      <div className="relative bg-white rounded-3xl p-6 sm:p-10 border border-[#D8E8F8] shadow-xl shadow-[#0B3A8C]/5 transition-all duration-300">
        
        {/* Top Header: Badge & Course */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-[#E1ECF8]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#0B3A8C] bg-[#EAF5FF] border border-[#CBE5FC]">
              <Sparkles className="w-3.5 h-3.5 text-[#00A8F0]" />
              <span>{current.highlight}</span>
            </span>
          </div>

          <div className="text-xs font-medium text-[#5B6B82] bg-slate-50 px-3 py-1 rounded-lg">
            Enrolled in: <strong className="text-[#0A1A33]">{current.courseTaken}</strong>
          </div>
        </div>

        {/* Review Quote */}
        <p className="text-base sm:text-xl text-[#0A1A33] font-medium leading-relaxed italic mb-8">
          "{current.review}"
        </p>

        {/* Student Profile Info */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <img
              src={current.avatar}
              alt={current.name}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-[#00A8F0] shadow-sm"
            />
            <div>
              <h4 className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33]">
                {current.name}
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-[#1565C0]">
                {current.role}
              </p>
              <p className="text-xs text-[#5B6B82]">
                {current.former}
              </p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex items-center gap-1">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-500" />
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Navigation Buttons & Dots */}
      <div className="flex items-center justify-between mt-8">
        {/* Indicators */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-gradient-to-r from-[#0B3A8C] to-[#00A8F0]'
                  : 'w-2.5 bg-[#CBE5FC] hover:bg-[#1565C0]/40'
              }`}
            />
          ))}
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-xl border border-[#D8E8F8] bg-white text-[#0B3A8C] hover:bg-[#EAF5FF] hover:border-[#00A8F0] flex items-center justify-center transition-all shadow-xs"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-xl border border-[#D8E8F8] bg-white text-[#0B3A8C] hover:bg-[#EAF5FF] hover:border-[#00A8F0] flex items-center justify-center transition-all shadow-xs"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
