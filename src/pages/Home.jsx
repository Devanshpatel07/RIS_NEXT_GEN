import React from 'react';
import {
  ArrowRight,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Users,
  Briefcase,
  Play,
  Calendar,
  Clock,
  Award,
  ShieldCheck,
  Video
} from 'lucide-react';
import { courses, hiringPartners, trainingSchedules } from '../data/courses';
import CourseCard from '../components/CourseCard';
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';
import StatsCounter from '../components/StatsCounter';
import FaqAccordion from '../components/FaqAccordion';
import LeadForm from '../components/LeadForm';

export default function Home({ onOpenEnroll, onOpenCounselor, onViewDetails }) {
  // Top featured courses honoring the sequence: 1. Cybersecurity, 2. AI/ML, 3. Other courses
  const featuredCourses = courses.filter((c) => c.isFeatured).slice(0, 4);

  // How it works timeline steps
  const howItWorksSteps = [
    {
      step: "01",
      title: "Choose Your Specialization",
      description: "Select from Cybersecurity, AI/ML, Cloud Engineering, or Database Architecture aligned with current industry spikes."
    },
    {
      step: "02",
      title: "Live Interactive Learning",
      description: "Attend weekday evening masterclasses at 6:00 PM IST or flexible weekend workshops led by 15+ Industry Experts."
    },
    {
      step: "03",
      title: "Build Production Projects",
      description: "Implement complex architecture capstones and database CRUD engines that prove competence beyond theoretical trivia."
    },
    {
      step: "04",
      title: "Career Placement Pipeline",
      description: "Undergo rigorous mock interview drills and gain direct referrals to our verified Industry Hiring Partners."
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

            {/* Right Column: Hero Visual with Statistics Cards (No fake stars) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">

                {/* Main Hero Card Container */}
                <div className="relative rounded-3xl bg-white p-3 sm:p-4 shadow-2xl shadow-[#0B3A8C]/15 border border-[#D8E8F8] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                    alt="Students collaborating and learning with live mentors"
                    className="w-full h-80 sm:h-96 object-cover rounded-2xl"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A33]/75 via-transparent to-transparent rounded-3xl" />

                  {/* Session status banner */}
                  <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                    <div>
                      <span className="text-xs text-blue-200 block uppercase tracking-wider font-semibold">Live Session Time</span>
                      <h4 className="font-['Rajdhani'] font-bold text-lg text-white">Daily 6:00 PM IST Masterclass</h4>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#00A8F0] flex items-center justify-center text-white shadow-lg animate-pulse">
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Verified Stat Card 1: 500+ Learners */}
                <div className="absolute -top-4 sm:-top-6 left-0 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 border border-[#D8E8F8] shadow-lg shadow-[#0B3A8C]/10 flex items-center gap-2.5 sm:gap-3 animate-float-slow z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#EAF5FF] flex items-center justify-center text-[#0B3A8C]">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A8F0]" />
                  </div>
                  <div>
                    <span className="font-['Rajdhani'] font-bold text-sm sm:text-lg text-[#0A1A33] block leading-none">
                      500+
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#5B6B82]">
                      Active Learners
                    </span>
                  </div>
                </div>

                {/* Verified Stat Card 2: 15+ Industry Experts (No fake stars) */}
                <div className="absolute -top-4 right-0 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 border border-[#D8E8F8] shadow-lg shadow-[#0B3A8C]/10 flex items-center gap-2.5 sm:gap-3 animate-float-reverse z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#EAF5FF] flex items-center justify-center text-[#0B3A8C]">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#0B3A8C]" />
                  </div>
                  <div>
                    <span className="font-['Rajdhani'] font-bold text-sm sm:text-lg text-[#0A1A33] block leading-none">
                      15+
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#5B6B82]">
                      Industry Experts
                    </span>
                  </div>
                </div>

                {/* Verified Stat Card 3: Industry Hiring Partners */}
                <div className="absolute -bottom-4 sm:-bottom-6 right-0 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 border border-[#D8E8F8] shadow-lg shadow-[#0B3A8C]/10 flex items-center gap-2.5 sm:gap-3 animate-float-slow z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="font-['Rajdhani'] font-bold text-sm sm:text-lg text-[#0A1A33] block leading-none">
                      Hiring Partners
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#5B6B82]">
                      Verified Corporate
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS & EXPERTS SECTION (Requirement 6: 15+ Industry Experts, 500+ Learners) */}
      <StatsCounter />

      {/* 3. COURSE SEQUENCE SECTION (Requirement 4: 1. Cybersecurity, 2. AI/ML, 3. Other courses) */}
      <section className="py-20 md:py-28 bg-[#F8FBFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CURATED COHORTS"
            title="Explore Our Core"
            gradientWord="Specialization Programs"
            subtitle="Strictly sequenced according to enterprise industry relevance: Cybersecurity, Artificial Intelligence & Machine Learning, followed by Cloud Engineering."
          />

          {/* Grid of CourseCards (no price, no fake reviews) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                showPrice={false}
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
              View Full Course Catalog & Curriculum
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 6. TRAINING SCHEDULE & AVAILABILITY SECTION (Requirement 8) */}
      <section id="schedule" className="py-20 md:py-28 bg-white border-y border-[#E1ECF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="TRAINING SCHEDULE & AVAILABILITY"
            title="Flexible Learning Slots for"
            gradientWord="Professionals & Students"
            subtitle="Designed to adapt to busy college timetables and demanding corporate work hours without friction."
          />

          {/* Live Timing Master Banner */}
          <div className="max-w-4xl mx-auto mb-12 p-6 rounded-3xl bg-gradient-to-r from-[#0B3A8C] to-[#1565C0] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <Video className="w-7 h-7 text-[#00A8F0]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-cyan-200 font-bold block">Official Live-Session Timing</span>
                <h3 className="font-['Rajdhani'] font-extrabold text-2xl sm:text-3xl text-white">
                  6:00 PM IST Sharp
                </h3>
                <p className="text-xs text-blue-100 mt-0.5">
                  Live interaction, real-time code reviews, and instant doubt clarification.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenCounselor && onOpenCounselor()}
              className="px-5 py-2.5 rounded-xl bg-white text-[#0B3A8C] text-xs font-bold hover:bg-[#EAF5FF] transition-all shrink-0 cursor-pointer shadow-md"
            >
              Verify Your Timezone
            </button>
          </div>

          {/* Weekday vs Weekend Schedule Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Weekday Schedule Card */}
            <div className="rounded-3xl p-8 border-2 border-[#D8E8F8] bg-[#F8FBFE] hover:border-[#00A8F0] transition-all flex flex-col justify-between shadow-sm">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FF] text-[#0B3A8C] text-xs font-bold uppercase tracking-wider mb-4">
                  <Clock className="w-3.5 h-3.5 text-[#00A8F0]" />
                  <span>Monday to Friday</span>
                </div>

                <h3 className="font-['Rajdhani'] font-bold text-2xl sm:text-3xl text-[#0A1A33] mb-2">
                  {trainingSchedules.weekday.title}
                </h3>

                <div className="p-3 rounded-xl bg-white border border-[#D8E8F8] text-sm font-bold text-[#0B3A8C] mb-4">
                  {trainingSchedules.weekday.timings}
                </div>

                <p className="text-sm text-[#5B6B82] leading-relaxed mb-6">
                  {trainingSchedules.weekday.description}
                </p>

                <div className="space-y-3 mb-6">
                  {trainingSchedules.weekday.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-[#0A1A33]">
                      <CheckCircle2 className="w-4 h-4 text-[#00A8F0] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1ECF8]">
                <CTAButton
                  variant="gradient"
                  size="md"
                  fullWidth
                  onClick={() => onOpenEnroll && onOpenEnroll()}
                >
                  Reserve Your Cohort Seat
                </CTAButton>
              </div>
            </div>

            {/* Weekend Schedule Card */}
            <div className="rounded-3xl p-8 border-2 border-[#D8E8F8] bg-[#F8FBFE] hover:border-[#00A8F0] transition-all flex flex-col justify-between shadow-sm">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Saturday & Sunday</span>
                </div>

                <h3 className="font-['Rajdhani'] font-bold text-2xl sm:text-3xl text-[#0A1A33] mb-2">
                  {trainingSchedules.weekend.title}
                </h3>

                <div className="p-3 rounded-xl bg-white border border-[#D8E8F8] text-sm font-bold text-emerald-700 mb-4">
                  {trainingSchedules.weekend.timings}
                </div>

                <p className="text-sm text-[#5B6B82] leading-relaxed mb-6">
                  {trainingSchedules.weekend.description}
                </p>

                <div className="space-y-3 mb-6">
                  {trainingSchedules.weekend.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-[#0A1A33]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1ECF8]">
                <CTAButton
                  variant="outline"
                  size="md"
                  fullWidth
                  onClick={() => onOpenEnroll && onOpenEnroll()}
                >
                  Reserve Your Cohort Seat
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS 4-STEP METHODOLOGY */}
      <section id="how-it-works" className="py-20 md:py-28 bg-[#F8FBFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="STRUCTURED PATHWAY"
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
                {/* Step Number */}
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

      {/* 8. VERIFIED INDUSTRY HIRING PARTNERS */}
      <section id="partners" className="py-20 md:py-28 bg-white border-t border-[#E1ECF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            badge="HIRING COLLABORATIONS"
            title="Verified Industry"
            gradientWord="Hiring Partners"
            subtitle="Our learners build scalable production software and secure placements across our verified industry partner organizations."
          />

          {/* Grid of Verified Hiring Partner Organizations (Strictly 3 Companies) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch justify-center">
            {hiringPartners.map((partner, idx) => (
              <div
                key={idx}
                className="rounded-3xl border-2 border-[#D8E8F8] bg-[#F8FBFE] hover:bg-white hover:border-[#00A8F0] hover:shadow-xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#D8E8F8] text-[#0B3A8C] group-hover:bg-[#0B3A8C] group-hover:text-white flex items-center justify-center mb-4 transition-colors shadow-xs">
                  <Briefcase className="w-6 h-6 text-[#00A8F0] group-hover:text-white" />
                </div>
                <h4 className="font-['Rajdhani'] font-extrabold text-xl sm:text-2xl text-[#0A1A33] group-hover:text-[#0B3A8C] transition-colors tracking-tight">
                  {partner.name}
                </h4>
                <p className="text-xs text-[#5B6B82] mt-2 font-medium">
                  {partner.industry}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {partner.tier}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-xs text-[#5B6B82] flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00A8F0]" />
            <span>Verified enterprise partner organizations. No fabricated guarantees.</span>
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section id="faq" className="py-20 md:py-28 bg-[#F8FBFE] border-t border-[#D8E8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GOT QUESTIONS?"
            title="Frequently Asked"
            gradientWord="Questions"
            subtitle="Clear answers covering course availability, timings, weekday/weekend schedules, enrollment, LMS access, recorded sessions, mentorship, certificates, and EMI."
          />

          <FaqAccordion />
        </div>
      </section>

      {/* 11. CTA BANNER: Full-Width Signature Gradient Section with Lead Form */}
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
                <span>New Cohorts Enrolling Now • Live Sessions at 6:00 PM IST</span>
              </div>

              <h2 className="font-['Rajdhani'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
                Ready to Start Your Journey with RIS NextGen?
              </h2>

              <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-xl mb-8">
                Take the decisive step toward an elite career in software engineering, generative AI, cybersecurity, or database architecture. Speak to our academic counsellors today for a customized learning roadmap.
              </p>

              <div className="space-y-3.5 text-sm sm:text-base text-blue-100 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                  <span>Free 1-on-1 profile evaluation & skill gap analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                  <span>Interactive weekday evening (after 5 PM) & weekend schedules</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                  <span>Authorized LMS portal access with recorded live sessions</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <CTAButton
                  variant="white"
                  size="lg"
                  onClick={() => onOpenEnroll && onOpenEnroll()}
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Enroll Now
                </CTAButton>
                <CTAButton
                  variant="outline"
                  size="lg"
                  to="/contact"
                  className="border-white text-white hover:bg-white hover:text-[#0B3A8C]"
                >
                  Contact Admissions
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
