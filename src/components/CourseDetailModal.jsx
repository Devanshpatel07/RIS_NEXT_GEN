import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Video, 
  Star, 
  ArrowRight
} from 'lucide-react';
import CTAButton from './CTAButton';

export default function CourseDetailModal({ isOpen, onClose, course, onEnroll }) {
  if (!isOpen || !course) return null;

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
    skills,
    image,
    nextBatch
  } = course;

  const syllabusModules = [
    {
      title: "Module 1: Foundations & Architecture Core",
      desc: "Deep-dive into mental models, core principles, system design blueprints, and production-grade setup."
    },
    {
      title: "Module 2: Advanced Implementation & Tooling",
      desc: "Hands-on implementation of enterprise patterns, performance tuning, and cross-system integrations."
    },
    {
      title: "Module 3: Scalability, Security & Production Deployment",
      desc: "Zero-downtime CI/CD workflows, automated testing, threat mitigation, and real-time observability."
    },
    {
      title: "Module 4: Enterprise Capstone Project & Defense",
      desc: "Build and pitch an end-to-end industry capstone defended live before tech directors and hiring partners."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1A33]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#D8E8F8] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A33] via-[#0A1A33]/70 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors backdrop-blur-xs z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top category & batch */}
          <div className="absolute top-4 left-5 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#00A8F0] text-white">
              {category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white">
              {nextBatch}
            </span>
          </div>

          {/* Bottom Title info */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="flex items-center gap-3 text-xs mb-1.5 text-blue-200">
              <span className="flex items-center gap-1 font-bold text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                {rating} ({reviewsCount} reviews)
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#00A8F0]" />
                {duration}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Video className="w-3.5 h-3.5 text-[#00A8F0]" />
                {mode}
              </span>
            </div>
            <h3 className="font-['Rajdhani'] font-bold text-2xl sm:text-3xl leading-snug line-clamp-2">
              {title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {/* Overview */}
          <div>
            <h4 className="font-['Rajdhani'] font-bold text-lg text-[#0A1A33] mb-2 uppercase tracking-wide">
              Course Overview
            </h4>
            <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
              {description} This master curriculum is engineered in collaboration with principal architects and industry leaders to transform learners into top-tier performers ready to tackle real enterprise problems.
            </p>
          </div>

          {/* Skills Covered */}
          {skills && skills.length > 0 && (
            <div>
              <h4 className="font-['Rajdhani'] font-bold text-sm text-[#0A1A33] mb-2.5 uppercase tracking-wide">
                Key Skills & Technologies Covered
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#EAF5FF] text-[#0B3A8C] border border-[#CBE5FC]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* What's Included Grid */}
          <div>
            <h4 className="font-['Rajdhani'] font-bold text-sm text-[#0A1A33] mb-3 uppercase tracking-wide">
              What You Receive In This Program
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {[
                "100+ Hours of Live Interactive Masterclasses",
                "Dedicated 1-on-1 Industry Mentorship Sessions",
                "3 Production-Grade Capstones for Portfolio",
                "Lifetime Access to Lecture Recordings & Notes",
                "Verified Digital Certificate with Credential ID",
                "Direct Hiring Pipeline with 250+ Partner Brands"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#0A1A33]">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8F0] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus Curriculum Accordion Preview */}
          <div>
            <h4 className="font-['Rajdhani'] font-bold text-sm text-[#0A1A33] mb-3 uppercase tracking-wide">
              Curriculum Roadmap
            </h4>
            <div className="space-y-2.5">
              {syllabusModules.map((mod, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-[#D8E8F8] bg-slate-50/60">
                  <div className="font-['Rajdhani'] font-bold text-sm sm:text-base text-[#0B3A8C]">
                    {mod.title}
                  </div>
                  <p className="text-xs text-[#5B6B82] mt-0.5">
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-5 sm:p-6 bg-[#EAF5FF] border-t border-[#CBE5FC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#5B6B82] block">Total Program Fee</span>
            <div className="flex items-baseline gap-2">
              <span className="font-['Rajdhani'] font-bold text-3xl text-[#0B3A8C]">
                ₹{price.toLocaleString('en-IN')}
              </span>
              {oldPrice && (
                <span className="text-sm text-[#5B6B82] line-through">
                  ₹{oldPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md ml-1">
                Save 35%
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-3 rounded-xl border border-[#D8E8F8] bg-white text-xs font-semibold text-[#5B6B82] hover:bg-slate-50 cursor-pointer"
            >
              Close
            </button>
            <CTAButton
              variant="gradient"
              size="md"
              onClick={() => {
                onClose();
                if (onEnroll) onEnroll(course);
              }}
              icon={ArrowRight}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Enroll Now
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
