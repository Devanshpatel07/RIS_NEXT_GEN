import React, { useState, useEffect, useRef } from 'react';
import { Users, BookOpen, UserCheck, Building2 } from 'lucide-react';

const statsData = [
  {
    id: 1,
    target: 15000,
    prefix: '',
    suffix: '+',
    label: 'Learners Empowered',
    subtext: 'Across 28+ countries',
    icon: Users,
    color: '#00A8F0'
  },
  {
    id: 2,
    target: 45,
    prefix: '',
    suffix: '+',
    label: 'Industry-Ready Courses',
    subtext: 'Designed with tech leads',
    icon: BookOpen,
    color: '#1565C0'
  },
  {
    id: 3,
    target: 180,
    prefix: '',
    suffix: '+',
    label: 'Expert Mentors',
    subtext: 'From MAANG & Unicorns',
    icon: UserCheck,
    color: '#0B3A8C'
  },
  {
    id: 4,
    target: 250,
    prefix: '',
    suffix: '+',
    label: 'Hiring Partners',
    subtext: 'Actively recruiting graduates',
    icon: Building2,
    color: '#00A8F0'
  }
];

export default function StatsCounter() {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1800; // ms
          const steps = 40;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            // Ease-out cubic calculation
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            setCounts(
              statsData.map((stat) => Math.floor(stat.target * easeOutProgress))
            );

            if (currentStep >= steps) {
              setCounts(statsData.map((stat) => stat.target));
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#D8E8F8] shadow-xl shadow-[#0B3A8C]/8 relative overflow-hidden">
        {/* Decorative corner pixel accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#EAF5FF] to-transparent rounded-bl-full pointer-events-none" />
        <div className="absolute top-4 right-4 flex gap-1">
          <span className="w-2 h-2 rounded-xs bg-[#00A8F0]"></span>
          <span className="w-2 h-2 rounded-xs bg-[#1565C0]/40"></span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#E1ECF8]">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id} 
                className={`flex flex-col items-center text-center group ${
                  index > 1 ? 'pt-6 lg:pt-0' : index === 1 ? 'pt-0' : ''
                } lg:px-4`}
              >
                {/* Icon Circle */}
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 shadow-xs"
                  style={{ backgroundColor: '#EAF5FF', color: stat.color }}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                {/* Animated Number */}
                <div className="font-['Rajdhani'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A1A33] tracking-tight">
                  {stat.prefix}
                  {counts[index].toLocaleString()}
                  {stat.suffix}
                </div>

                {/* Label */}
                <div className="font-semibold text-sm sm:text-base text-[#0B3A8C] mt-1">
                  {stat.label}
                </div>

                {/* Subtext */}
                <div className="text-xs text-[#5B6B82] mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
