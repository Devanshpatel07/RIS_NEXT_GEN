import React from 'react';
import { Star, Clock, Users, ArrowUpRight, Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

export default function CourseCard({ course, onEnroll, onViewDetails }) {
  const {
    title,
    category,
    description,
    duration,
    mode,
    rating,
    reviewsCount,
    price,
    oldPrice,
    enrolledCount,
    badge,
    skills,
    image,
    nextBatch
  } = course;

  const discountPercent = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-[#D8E8F8] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1565C0]/15 hover:border-[#00A8F0]/60 overflow-hidden">
      {/* Top Gradient Border Line (reveals on hover) */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A33]/80 via-transparent to-black/20" />

        {/* Badge (Bestseller, Trending, etc.) */}
        {badge && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#0B3A8C] to-[#1565C0] shadow-md border border-white/20 backdrop-blur-xs">
            <Sparkles className="w-3 h-3 text-[#00A8F0]" />
            <span>{badge}</span>
          </div>
        )}

        {/* Category Pill */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/90 text-[#0B3A8C] backdrop-blur-xs shadow-xs">
          {category}
        </div>

        {/* Mode Indicator Bottom Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#00A8F0] animate-pulse"></span>
            <span>{mode}</span>
          </div>

          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
            <Clock className="w-3.5 h-3.5 text-[#00A8F0]" />
            <span>{duration}</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Rating and Reviews */}
        <div className="flex items-center justify-between text-xs mb-2.5">
          <div className="flex items-center gap-1.5 font-bold text-[#0A1A33]">
            <div className="flex items-center text-amber-500">
              <Star className="w-4 h-4 fill-amber-400 stroke-amber-500" />
            </div>
            <span className="text-sm font-extrabold">{rating}</span>
            <span className="text-[#5B6B82] font-normal">({reviewsCount.toLocaleString()} reviews)</span>
          </div>

          {enrolledCount && (
            <div className="flex items-center gap-1 text-[#5B6B82] font-medium">
              <Users className="w-3.5 h-3.5 text-[#1565C0]" />
              <span>{enrolledCount}</span>
            </div>
          )}
        </div>

        {/* Course Title */}
        <h3 
          onClick={() => onViewDetails && onViewDetails(course)}
          className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33] group-hover:text-[#1565C0] transition-colors leading-snug cursor-pointer line-clamp-2 mb-2"
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#5B6B82] line-clamp-2 leading-relaxed mb-4">
          {description}
        </p>

        {/* Key Skills Tags */}
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#EAF5FF] text-[#0B3A8C] border border-[#CDE3FB]"
              >
                {skill}
              </span>
            ))}
            {skills.length > 3 && (
              <span className="text-[11px] font-medium px-1.5 py-0.5 text-[#5B6B82]">
                +{skills.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Next batch pill */}
        {nextBatch && (
          <div className="text-[11px] text-[#0B3A8C] bg-[#EAF5FF]/60 px-2.5 py-1 rounded-md mb-4 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-xs bg-[#00A8F0]"></span>
            <span className="font-medium">{nextBatch}</span>
          </div>
        )}

        {/* Pricing and Action Buttons (Pinned to bottom) */}
        <div className="mt-auto pt-4 border-t border-[#E1ECF8]">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-['Rajdhani'] font-bold text-2xl text-[#0A1A33]">
                  ₹{price.toLocaleString('en-IN')}
                </span>
                {oldPrice && (
                  <span className="text-xs text-[#5B6B82] line-through">
                    ₹{oldPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wider block">
                EMI starts ₹{Math.round(price / 12).toLocaleString('en-IN')}/mo
              </span>
            </div>

            {discountPercent > 0 && (
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                {discountPercent}% OFF
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onViewDetails && onViewDetails(course)}
              className="px-3 py-2.5 rounded-xl border border-[#D8E8F8] text-xs font-semibold text-[#0B3A8C] hover:bg-[#EAF5FF] hover:border-[#00A8F0]/40 transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>View Details</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00A8F0]" />
            </button>

            <CTAButton
              size="sm"
              variant="gradient"
              onClick={() => onEnroll && onEnroll(course)}
              className="w-full text-xs py-2.5"
            >
              Enroll Now
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
