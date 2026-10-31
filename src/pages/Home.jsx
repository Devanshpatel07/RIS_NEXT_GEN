import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  CheckCircle2, 
  Users, 
  Video, 
  Briefcase, 
  Award, 
  Layers, 
  Clock, 
  Star, 
  Play
} from 'lucide-react';
import { courses, hiringPartners } from '../data/courses';
import CourseCard from '../components/CourseCard';
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';
import StatsCounter from '../components/StatsCounter';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FaqAccordion from '../components/FaqAccordion';
import LeadForm from '../components/LeadForm';

export default function Home({ onOpenEnroll, onOpenCounselor, onViewDetails }) {
  // Top 3 or 4 featured courses for Home page
  const featuredCourses = courses.filter((c) => c.isFeatured).slice(0, 4);

  // Why choose RIS NextGen features
  const whyChooseFeatures = [
    {
      icon: Video,
      title: "Live Interactive Masterclasses",
      description: "No boring pre-recorded lectures. Learn live with industry veterans, write code together, and resolve queries on the spot."
    },
    {
      icon: Users,
      title: "1-on-1 Industry Mentors",
      description: "Direct weekly guidance from Directors and Senior Engineers at MAANG and top-tier tech unicorns who review your code."
    },
    {
      icon: Layers,
      title: "Real Enterprise Capstones",
      description: "Build robust, scalable systems that solve genuine commercial challenges and speak volumes in your portfolio."
    },
    {
      icon: Briefcase,
      title: "Dedicated Career Support",
      description: "Comprehensive portfolio tailoring, technical mock interviews, executive salary negotiation, and direct hiring partner referrals."
    },
    {
      icon: Clock,
      title: "Lifetime Recorded Access",
      description: "Never miss a concept. HD session recordings, detailed class slides, and companion repositories are preserved with lifetime access."
    },
    {
      icon: Award,
      title: "Verifiable Certifications",
      description: "Earn globally recognized digital credentials with verifiable verification URLs to bolster your LinkedIn profile and resume."
    }
  ];

  // How it works timeline steps
  const howItWorksSteps = [
    {
      step: "01",
      title: "Choose Your Specialization",
      description: "Select from our curated tech, data, or product cohorts aligned directly with current market salary spikes."
    },
    {
      step: "02",
      title: "Learn Live & Collaborate",
      description: "Attend interactive weekend or evening sessions led by top practitioners and collaborate with an ambitious peer group."
    },
    {
      step: "03",
      title: "Build Production Projects",
      description: "Implement complex architecture capstones that prove your competence to hiring managers beyond theoretical trivia."
    },
    {
      step: "04",
      title: "Get Career-Ready & Hired",
      description: "Undergo rigorous mock interview drills and receive priority interviews with 250+ top hiring partner organizations."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-32 bg-gradient-to-b from-[#EAF5FF]/80 via-white to-white">
        {/* Background Decorative Tech Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A8F0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 left-0 w-72 h-72 bg-[#1565C0]/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Decorative Pixel Grid Matrix */}
        <div className="absolute top-12 right-12 hidden lg:grid grid-cols-4 gap-2 opacity-25 pointer-events-none">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-xs bg-[#1565C0]"></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#CDE3FB] shadow-xs text-xs font-bold text-[#0B3A8C] mb-6">
                <span className="flex h-2 w-2 rounded-xs bg-[#00A8F0] animate-pulse"></span>
                <span>The Future of Practical Online Higher Education</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-['Rajdhani'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A1A33] tracking-tight leading-[1.1] mb-6">
                Upgrade Your Skills.{' '}
                <span className="bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] bg-clip-text text-transparent">
                  Build Your Next-Gen Career.
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-[#5B6B82] leading-relaxed max-w-xl mb-8">
                Master high-impact tech, data, and management domains through live interactive cohorts led by senior practitioners. Build production-grade capstones and land top-tier career roles with dedicated placement support.
              </p>

              {/* Two CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
                <CTAButton
                  to="/courses"
                  variant="gradient"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Explore Courses
                </CTAButton>

                <CTAButton
                  variant="outline"
                  size="lg"
                  icon={PhoneCall}
                  iconPosition="left"
                  onClick={() => onOpenCounselor && onOpenCounselor()}
                >
                  Talk to a Counsellor
                </CTAButton>
              </div>

              {/* Micro Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E1ECF8] text-xs font-semibold text-[#0A1A33]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8F0]" />
                  <span>100% Live Cohorts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8F0]" />
                  <span>Direct Hiring Pipeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8F0]" />
                  <span>No-Cost EMI Available</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Illustration / Mockup with Floating Cards */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Card Container */}
                <div className="relative rounded-3xl bg-white p-3 sm:p-4 shadow-2xl shadow-[#0B3A8C]/15 border border-[#D8E8F8] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                    alt="Students collaborating and learning with live mentors"
                    className="w-full h-80 sm:h-96 object-cover rounded-2xl"
                  />
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A33]/70 via-transparent to-transparent rounded-3xl" />

                  {/* Play Video / Class preview pill */}
                  <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                    <div>
                      <span className="text-xs text-blue-200 block uppercase tracking-wider font-semibold">Active Cohort Session</span>
                      <h4 className="font-['Rajdhani'] font-bold text-lg text-white">System Architecture Live Lab</h4>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#00A8F0] flex items-center justify-center text-white shadow-lg animate-pulse">
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Floating Card 1: 10,000+ Learners (Top-Left) */}
                <div className="absolute -top-4 sm:-top-6 left-0 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 border border-[#D8E8F8] shadow-lg shadow-[#0B3A8C]/10 flex items-center gap-2.5 sm:gap-3 animate-float-slow z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#EAF5FF] flex items-center justify-center text-[#0B3A8C]">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A8F0]" />
                  </div>
                  <div>
                    <span className="font-['Rajdhani'] font-bold text-sm sm:text-lg text-[#0A1A33] block leading-none">
                      15,000+
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#5B6B82]">
                      Empowered Learners
                    </span>
                  </div>
                </div>

                {/* Floating Card 2: Live Mentors (Top-Right) */}
                <div className="absolute -top-4 right-0 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 border border-[#D8E8F8] shadow-lg shadow-[#0B3A8C]/10 flex items-center gap-2.5 sm:gap-3 animate-float-reverse z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400" />
                  </div>
                  <div>
                    <span className="font-['Rajdhani'] font-bold text-sm sm:text-lg text-[#0A1A33] block leading-none">
                      4.9 / 5.0
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#5B6B82]">
                      Live Mentor Rating
                    </span>
                  </div>
                </div>

                {/* Floating Card 3: Placement Support (Bottom-Right) */}
                <div className="absolute -bottom-4 sm:-bottom-6 right-0 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 border border-[#D8E8F8] shadow-lg shadow-[#0B3A8C]/10 flex items-center gap-2.5 sm:gap-3 animate-float-slow z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="font-['Rajdhani'] font-bold text-sm sm:text-lg text-[#0A1A33] block leading-none">
                      250+ Partners
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#5B6B82]">
                      Placement Support
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST / STATS STRIP */}
      <StatsCounter />

      {/* 3. FEATURED COURSES SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Flagship Cohorts"
            title="Explore Our Most In-Demand"
            gradientWord="Specializations"
            subtitle="Engineered with industry tech leads to equip you with real-world skills that modern companies actively compete for."
          />

          {/* Grid of 4 CourseCards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEnroll={(c) => onOpenEnroll && onOpenEnroll(c)}
                onViewDetails={(c) => onViewDetails && onViewDetails(c)}
              />
            ))}
          </div>

          {/* View All Courses CTA */}
          <div className="mt-12 text-center">
            <CTAButton
              to="/courses"
              variant="outline"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              View All Courses & Specializations
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE RIS NEXTGEN */}
      <section id="why-us" className="py-20 md:py-28 bg-[#EAF5FF]/50 relative">
        <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="The RIS NextGen Advantage"
            title="Why Leading Professionals Choose"
            gradientWord="RIS NextGen"
            subtitle="We don't offer generic passive video libraries. We deliver an immersive, outcomes-first educational experience designed to accelerate your career trajectory."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-[#D8E8F8] shadow-sm hover:shadow-xl hover:shadow-[#1565C0]/10 hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#EAF5FF] text-[#0B3A8C] group-hover:bg-gradient-to-r group-hover:from-[#0B3A8C] group-hover:to-[#00A8F0] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300 shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5B6B82] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS TIMELINE */}
      <section id="how-it-works" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Structured Pathway"
            title="Your 4-Step Journey to"
            gradientWord="Career Transformation"
            subtitle="A transparent, proven methodology that takes you from fundamental concepts to production-grade mastery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {howItWorksSteps.map((step, idx) => (
              <div 
                key={idx}
                className="relative bg-white rounded-2xl p-6 sm:p-7 border border-[#D8E8F8] flex flex-col group hover:border-[#00A8F0]/60 hover:shadow-lg transition-all"
              >
                {/* Step Number with tech style */}
                <div className="font-['Rajdhani'] font-extrabold text-4xl text-[#0B3A8C]/20 group-hover:text-[#00A8F0] transition-colors mb-3">
                  {step.step}
                </div>

                <h3 className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33] mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#5B6B82] leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative connector for desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#EAF5FF] border border-[#00A8F0]/40 text-[#0B3A8C] text-xs font-bold flex items-center justify-center">
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS CAROUSEL */}
      <section id="testimonials" className="py-20 md:py-28 bg-[#EAF5FF]/40 border-y border-[#D8E8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Alumni Impact"
            title="Real Learners. Real"
            gradientWord="Transformations."
            subtitle="Discover how ambitious professionals transitioned to high-impact engineering and leadership roles."
          />

          <TestimonialCarousel />
        </div>
      </section>

      {/* 7. HIRING PARTNERS / LOGOS ROW */}
      <section id="partners" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#5B6B82] mb-8">
            Our Alumni Build and Lead Systems at Top Global Companies
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-center">
            {hiringPartners.map((partner, idx) => (
              <div
                key={idx}
                className="h-16 rounded-xl border border-[#D8E8F8] bg-slate-50/70 hover:bg-[#EAF5FF] hover:border-[#00A8F0]/40 flex items-center justify-center p-4 transition-all duration-200 group"
              >
                <span className="font-['Rajdhani'] font-extrabold text-xl sm:text-2xl text-slate-400 group-hover:text-[#0B3A8C] transition-colors tracking-wider">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#5B6B82] mt-6">
            + 240 more startup and enterprise hiring partners across India, Singapore, US, and EMEA.
          </p>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section id="faq" className="py-20 md:py-28 bg-[#EAF5FF]/30 border-t border-[#D8E8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked"
            gradientWord="Questions"
            subtitle="Everything you need to know about our live formats, mentorship, admissions, and placement support."
          />

          <FaqAccordion />
        </div>
      </section>

      {/* 9. CTA BANNER: Full-Width Signature Gradient Section with Lead Form */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] text-white overflow-hidden">
        {/* Decorative background grid and shapes */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: CTA Pitch */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold text-white mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#00A8F0]" />
                <span>Next Cohort Registration Closing Soon</span>
              </div>

              <h2 className="font-['Rajdhani'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
                Ready to Start Your Journey with RIS NextGen?
              </h2>

              <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-xl mb-8">
                Take the decisive step toward an elite career in software engineering, generative AI, data science, or tech leadership. Speak to our academic counsellors today for a customized learning roadmap.
              </p>

              <div className="space-y-3.5 text-sm sm:text-base text-blue-100 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                  <span>Free 1-on-1 profile evaluation & skill gap analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                  <span>Early bird scholarship up to 35% on all cohorts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                  <span>No-risk 7-day money-back guarantee policy</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <CTAButton
                  variant="white"
                  size="lg"
                  onClick={() => onOpenEnroll && onOpenEnroll()}
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Enroll Now
                </CTAButton>
              </div>
            </div>

            {/* Right Column: Lead Capture Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
                <h3 className="font-['Rajdhani'] font-bold text-2xl text-white mb-1">
                  Request Free Counselling
                </h3>
                <p className="text-xs text-blue-100/80 mb-6">
                  Fill in your details below and an academic advisor will call you back within 30 minutes.
                </p>

                <LeadForm variant="dark" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
