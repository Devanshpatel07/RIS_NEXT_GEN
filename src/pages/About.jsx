import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Sparkles,
  Award,
  Users,
  Compass,
  CheckCircle2,
  Globe,
  ArrowRight,
  TrendingUp,
  Cpu,
  Globe2,
  PhoneCall,
  Laptop,
  ShieldCheck,
  Code2,
  HeartHandshake,
  Video
} from 'lucide-react';

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';
import StatsCounter from '../components/StatsCounter';
import { hiringPartners } from '../data/courses';

export default function About({ onOpenEnroll, onOpenCounselor }) {
  // Core leadership and mentors
  const leadershipTeam = [
    {
      name: "Dr. Aditya Vikram Singhal",
      role: "Chief Academic Officer & Co-Founder",
      pedigree: "Ex-Google Principal Architect",
      education: "Ph.D. in Distributed Systems, IIT Delhi",
      bio: "Over 16 years leading high-scale distributed infra. Architected real-time stream processing systems handling 500k+ req/sec.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      skills: ["Cloud Architecture", "Distributed Systems", "Kubernetes"],
      linkedin: "https://linkedin.com"
    },
    {
      name: "Dr. Ananya Roy",
      role: "Head of AI & Machine Learning",
      pedigree: "Ex-Meta AI Research Fellow",
      education: "M.S. & Ph.D. in Computer Science, Stanford",
      bio: "Pioneered production LLM fine-tuning and agentic workflow benchmarks. Published 12+ peer-reviewed papers in NeurIPS & ICML.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      skills: ["Generative AI", "LLM Fine-tuning", "Autonomous Agents"],
      linkedin: "https://linkedin.com"
    },
    {
      name: "Vikramaditya Rao",
      role: "VP of Engineering & Systems",
      pedigree: "Ex-AWS Senior Solutions Architect",
      education: "B.Tech, BITS Pilani",
      bio: "Scaled multi-region cloud backends for Fortune 100 fintech leaders. Passionate advocate of resilient systems and event-driven microservices.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      skills: ["AWS", "Microservices", "DevOps & SRE"],
      linkedin: "https://linkedin.com"
    },
    {
      name: "Nidhi Deshmukh",
      role: "Director of Product Management Tracks",
      pedigree: "Ex-Razorpay & Swiggy Director of Product",
      education: "MBA, IIM Ahmedabad",
      bio: "Grew zero-to-one fintech and logistics products to tens of millions of MAUs. Mentored 400+ product managers into top startups.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      skills: ["Product Strategy", "Growth Loops", "Metrics & UX"],
      linkedin: "https://linkedin.com"
    },
    {
      name: "Kunal Sengupta",
      role: "Head of Career Services & Hiring Network",
      pedigree: "Ex-Talent Partner at Microsoft & Flipkart",
      education: "XLRI Jamshedpur",
      bio: "Connected over 12,000+ tech candidates with premier product companies. Deep expertise in salary negotiation and tech hiring pipelines.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      skills: ["Tech Placements", "Salary Negotiation", "Career Coaching"],
      linkedin: "https://linkedin.com"
    },
    {
      name: "Tanvi Mathur",
      role: "Lead Full Stack & UI/UX Faculty",
      pedigree: "Ex-Uber Senior Frontend Engineer",
      education: "B.Tech, NIT Trichy",
      bio: "Creator of high-performance web applications utilized by millions. Expert in React 19, modern web performance, and design systems.",
      image: "https://images.unsplash.com/photo-1534751516642-a171ed2771d1?auto=format&fit=crop&w=400&q=80",
      skills: ["React 19", "Next.js", "Design Systems"],
      linkedin: "https://linkedin.com"
    }
  ];

  // Milestones timeline
  const milestones = [
    {
      year: "2021",
      badge: "Founding Year",
      title: "Inception & The 1st Cohort",
      desc: "Founded by senior engineering architects with one mission: replace theoretical classroom lectures with rigorous production engineering. Launched Cohort 01 with 32 students; 100% placed within 90 days."
    },
    {
      year: "2022",
      badge: "Scale & Trust",
      title: "Crossing 2,000+ Engineers & Hiring Network",
      desc: "Partnered with 80+ product startups and unicorns. Introduced 1-on-1 personalized mentorship sessions with Staff Engineers from MAANG companies."
    },
    {
      year: "2024",
      badge: "Remote-First Transformation",
      title: "100% Online Ecosystem & GenAI Curricula",
      desc: "Transitioned to a modern 100% remote-first learning model, democratizing tier-1 tech education across all cities in India and globally. Unveiled cutting-edge Generative AI & Cybersecurity tracks."
    },
    {
      year: "2026",
      badge: "Today & Beyond",
      title: "500+ Learners & 15+ Industry Experts",
      desc: "Recognized as a focused high-impact training academy with verified hiring partners, structured live masterclasses at 6:00 PM IST, and industry-standard credentials."
    }
  ];

  // Core values
  const values = [
    {
      icon: Code2,
      title: "Production Code Over Theory",
      desc: "We do not teach from outdated slide decks. You write clean, scalable code from Day 1 and build enterprise distributed microservices."
    },
    {
      icon: Users,
      title: "Practitioner-Led Mentorship",
      desc: "Our mentors are not generic instructors. They are 15+ verified Industry Experts and Engineering Directors who review your code 1-on-1."
    },
    {
      icon: TrendingUp,
      title: "Relentless Career Acceleration",
      desc: "We measure our success solely by your career trajectory. Resume tailoring, algorithmic mock drills, and executive salary negotiation are standard."
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Transparency",
      desc: "No fake promises or inflated placement stats. We deliver real skills, transparent pricing, verifiable credentials, and genuine mentorship."
    },
    {
      icon: Globe2,
      title: "Active Learner Community",
      desc: "Join an active network of 500+ ambitious developers and product leads participating in live cohorts and engineering pods."
    },
    {
      icon: HeartHandshake,
      title: "Accessible Opportunity",
      desc: "Merit-based scholarships, flexible weekend cohorts, and 0% interest EMI options ensure financial constraints never hinder ambition."
    }
  ];

  // Comparison items
  const comparisonItems = [
    {
      feature: "Curriculum Updates",
      college: "Outdated, changed once every 5-8 years",
      ris: "Refreshed quarterly with MAANG & AI leads"
    },
    {
      feature: "Instructor Pedigree",
      college: "Academic professors without active tech experience",
      ris: "Staff Engineers & Directors actively building systems"
    },
    {
      feature: "Hands-on Capstones",
      college: "Generic toy projects & copy-pasted clones",
      ris: "Production microservices, RAG pipelines & multi-agents"
    },
    {
      feature: "1-on-1 Code Reviews",
      college: "Non-existent or automated automated tests",
      ris: "Weekly in-depth human code reviews by Senior SDEs"
    },
    {
      feature: "Placement Support",
      college: "Generic job board postings",
      ris: "Direct recruitment referrals across verified hiring partners"
    },
    {
      feature: "Learning Community",
      college: "Disbands upon batch graduation",
      ris: "Active cohort community & expert masterclass access"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-[#EAF5FF]/80 via-white to-white">
        {/* Background Decorative Tech Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A8F0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 left-0 w-72 h-72 bg-[#1565C0]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5B6B82] mb-6">
            <Link to="/" className="hover:text-[#0B3A8C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#00A8F0]">About Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FF] border border-[#00A8F0]/30 text-[#0B3A8C] text-xs font-semibold tracking-wider uppercase mb-5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-xs bg-[#00A8F0] animate-pulse"></span>
                <span>Our Story & Mission</span>
              </div>

              <h1 className="font-['Rajdhani'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A1A33] tracking-tight leading-[1.1] mb-6">
                Bridging Academia & High-Growth Tech{' '}
                <span className="bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] bg-clip-text text-transparent">
                  Through Live Engineering
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B82] leading-relaxed mb-8 max-w-2xl">
                RIS NextGen was founded with a singular conviction: textbook theoretical education is inadequate for modern high-scale engineering. We connect ambitious developers and professionals directly with top practitioners to master real-world systems, cloud architecture, and artificial intelligence.
              </p>

              {/* Quick highlights checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0A1A33]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>100% Live Cohorts & Recorded Sessions</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0A1A33]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>15+ Verified Industry Experts & Mentors</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0A1A33]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Verified Industry Hiring Partners</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0A1A33]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>500+ Active Dedicated Learners</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <CTAButton
                  to="/courses"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Explore Programs
                </CTAButton>

                <CTAButton
                  variant="outline"
                  size="lg"
                  icon={PhoneCall}
                  iconPosition="left"
                  onClick={() => onOpenCounselor?.()}
                >
                  Talk to Academic Dean
                </CTAButton>
              </div>
            </div>

            {/* Right Graphic / Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#1565C0]/20 to-[#00A8F0]/20 rounded-3xl blur-2xl -z-10" />

                {/* Main Image Card */}
                <div className="bg-white rounded-3xl p-3 shadow-2xl border border-[#D8E8F8] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                    alt="Engineers collaborating in live interactive session"
                    className="w-full h-80 object-cover rounded-2xl"
                  />

                  {/* Micro stats banner under photo */}
                  <div className="p-4 grid grid-cols-2 gap-4 divide-x divide-[#E1ECF8]">
                    <div className="text-center">
                      <div className="font-['Rajdhani'] font-extrabold text-2xl text-[#0B3A8C]">
                        128%
                      </div>
                      <div className="text-xs text-[#5B6B82] font-medium">
                        Average Salary Surge
                      </div>
                    </div>
                    <div className="text-center pl-4">
                      <div className="font-['Rajdhani'] font-extrabold text-2xl text-[#00A8F0]">
                        ₹18.4 LPA
                      </div>
                      <div className="text-xs text-[#5B6B82] font-medium">
                        Average Graduate CTC
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: Verified Industry Hiring Partners */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-[#D8E8F8] flex items-center gap-3 animate-float-slow hidden sm:flex">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5B6B82]">Industry Collaborations</div>
                    <div className="font-['Rajdhani'] font-bold text-lg text-[#0A1A33]">Verified Hiring Partners</div>
                  </div>
                </div>

                {/* Floating Badge 2: 15+ Industry Experts */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-[#D8E8F8] flex items-center gap-3 animate-float-reverse hidden sm:flex">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5FF] text-[#0B3A8C] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#00A8F0]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5B6B82]">Verified Mentors</div>
                    <div className="font-['Rajdhani'] font-bold text-lg text-[#0A1A33]">15+ Industry Experts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <StatsCounter />

      {/* 3. MISSION, VISION & PURPOSE */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FOUNDATION & PURPOSE"
            title="The Vision Propelling"
            gradientWord="RIS NextGen"
            subtitle="We exist to solve the greatest disconnect in global technology: preparing bright minds for how tech is actually built at scale."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="rounded-3xl p-8 bg-gradient-to-b from-[#EAF5FF]/60 to-white border border-[#D8E8F8] hover:shadow-xl hover:shadow-[#0B3A8C]/5 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#0B3A8C] text-white flex items-center justify-center mb-6 shadow-md shadow-[#0B3A8C]/20 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-['Rajdhani'] font-bold text-2xl text-[#0A1A33] mb-3">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
                To democratize elite, enterprise-grade software and executive education by connecting students directly with the builders of today's iconic digital platforms.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl p-8 bg-gradient-to-b from-[#EAF5FF]/60 to-white border border-[#D8E8F8] hover:shadow-xl hover:shadow-[#0B3A8C]/5 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#1565C0] text-white flex items-center justify-center mb-6 shadow-md shadow-[#1565C0]/20 group-hover:scale-110 transition-transform">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="font-['Rajdhani'] font-bold text-2xl text-[#0A1A33] mb-3">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
                To be the most outcome-obsessed career launchpad in the world, empowering over 100,000 professionals into global technology leadership roles by 2030.
              </p>
            </div>

            {/* Philosophy */}
            <div className="rounded-3xl p-8 bg-gradient-to-b from-[#EAF5FF]/60 to-white border border-[#D8E8F8] hover:shadow-xl hover:shadow-[#0B3A8C]/5 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#00A8F0] text-white flex items-center justify-center mb-6 shadow-md shadow-[#00A8F0]/20 group-hover:scale-110 transition-transform">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="font-['Rajdhani'] font-bold text-2xl text-[#0A1A33] mb-3">
                Our Pedagogy
              </h3>
              <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
                Learn by shipping. Every cohort is anchored around production code bases, architecture reviews, and simulated sprint planning identical to high-growth engineering teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-20 md:py-28 bg-[#F8FBFE] border-y border-[#E1ECF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHAT WE STAND FOR"
            title="The Principles That Guide"
            gradientWord="Every Decision"
            subtitle="Education requires integrity, rigor, and absolute transparency. Here are the non-negotiable pillars of our academy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl border border-[#D8E8F8] hover:border-[#00A8F0] hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] text-[#0B3A8C] group-hover:bg-gradient-to-r group-hover:from-[#0B3A8C] group-hover:to-[#00A8F0] group-hover:text-white flex items-center justify-center mb-5 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33] mb-2">
                    {val.title}
                  </h4>
                  <p className="text-sm text-[#5B6B82] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. JOURNEY & TIMELINE */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GROWTH STORY"
            title="Our Journey of"
            gradientWord="Unstoppable Impact"
            subtitle="From a small room of 30 engineers to an internationally acclaimed career acceleration engine."
          />

          <div className="relative mt-12 max-w-4xl mx-auto">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] -translate-x-1/2" />

            <div className="space-y-10 sm:space-y-12">
              {milestones.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    } gap-6 md:gap-12`}
                  >
                    {/* Node Dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-[#00A8F0] shadow-md items-center justify-center z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0B3A8C]" />
                    </div>

                    {/* Content Card */}
                    <div className="w-full md:w-1/2">
                      <div className="bg-[#EAF5FF]/40 hover:bg-white p-6 sm:p-8 rounded-3xl border border-[#D8E8F8] hover:border-[#00A8F0]/40 hover:shadow-xl transition-all">
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <span className="font-['Rajdhani'] font-extrabold text-3xl sm:text-4xl text-[#0B3A8C]">
                            {item.year}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#00A8F0]/30 text-[#00A8F0]">
                            {item.badge}
                          </span>
                        </div>
                        <h4 className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33] mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[#5B6B82] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for other half */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPARISON MATRIX: WHY WE ARE DIFFERENT */}
      <section className="py-20 md:py-28 bg-[#07152A] text-white relative overflow-hidden">
        {/* Glow accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00A8F0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#1565C0]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="BENCHMARK OF EXCELLENCE"
            title="How RIS NextGen Outclasses"
            gradientWord="Traditional Education"
            subtitle="Compare traditional rote-learning platforms with the high-stakes live mentorship of RIS NextGen cohorts."
            isDark
          />

          <div className="overflow-x-auto mt-10">
            <table className="w-full border-collapse text-left min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider text-blue-200">
                    Dimension
                  </th>
                  <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider text-blue-200/60">
                    Traditional Colleges & Generic MOOCs
                  </th>
                  <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider text-[#00A8F0] bg-white/5 rounded-t-2xl">
                    RIS NextGen Live Cohort
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonItems.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-['Rajdhani'] font-bold text-lg text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-sm text-blue-100/60">
                      {row.college}
                    </td>
                    <td className="py-4 px-6 text-sm text-emerald-300 font-medium bg-white/5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A8F0] shrink-0" />
                      <span>{row.ris}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. LEADERSHIP & FACULTY */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="LEADERSHIP & MENTORS"
            title="Learn From World-Class"
            gradientWord="Engineering Architects"
            subtitle="Our instructors have scaled systems to hundreds of millions of users at the world's most demanding technology companies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((mentor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-[#D8E8F8] overflow-hidden hover:border-[#00A8F0] hover:shadow-xl hover:shadow-[#0B3A8C]/8 transition-all group"
              >
                {/* Photo & Badge */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A33]/80 via-transparent to-transparent" />
                  
                  {/* Pedigree chip on image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="inline-block px-3 py-1 rounded-lg bg-white/95 backdrop-blur-xs text-[#0B3A8C] text-xs font-bold tracking-wide shadow-sm">
                      {mentor.pedigree}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33]">
                        {mentor.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#00A8F0] mt-0.5">
                        {mentor.role}
                      </p>
                    </div>
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${mentor.name} LinkedIn Profile`}
                      className="w-8 h-8 rounded-lg bg-[#EAF5FF] text-[#0B3A8C] hover:bg-[#0B3A8C] hover:text-white flex items-center justify-center transition-colors"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>

                  <p className="text-xs text-[#5B6B82] font-medium mt-1">
                    🎓 {mentor.education}
                  </p>

                  <p className="text-sm text-[#5B6B82] mt-3 line-clamp-3 leading-relaxed">
                    {mentor.bio}
                  </p>

                  {/* Skills tags */}
                  <div className="mt-4 pt-4 border-t border-[#E1ECF8] flex flex-wrap gap-1.5">
                    {mentor.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#EAF5FF] text-[#0B3A8C]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 100% REMOTE-FIRST WORKING & LEARNING MODEL */}
      <section className="py-20 md:py-24 bg-[#F8FBFE] border-t border-[#E1ECF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="100% REMOTE-FIRST STARTUP"
            title="Our Remote-First Working &"
            gradientWord="Virtual Learning Model"
            subtitle="RIS NextGen is an online-first technology education organization. We do not operate physical offices or offline training centers — our platform, faculty, and learner community operate 100% remotely."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location Card */}
            <div className="bg-white rounded-3xl p-8 border border-[#D8E8F8] shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] text-[#0B3A8C] flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-[#00A8F0]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#00A8F0] uppercase tracking-wider block">Location Status</span>
                    <h4 className="font-['Rajdhani'] font-bold text-2xl text-[#0A1A33]">
                      Remote / Online
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-[#5B6B82] mb-6 leading-relaxed">
                  We operate without geographic boundaries. Learners join live cohorts from metro hubs, tier-2/3 cities across India, and international locations without relocating.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs text-[#0A1A33] pt-4 border-t border-[#E1ECF8]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Zero commuting or relocation expense</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Equal access to premier tech mentors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Seamless online admission process</span>
                </li>
              </ul>
            </div>

            {/* Work Model Card */}
            <div className="bg-white rounded-3xl p-8 border border-[#00A8F0]/40 shadow-lg hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#00A8F0] text-white text-[10px] font-bold uppercase rounded-bl-xl tracking-wider">
                Organizational Model
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0B3A8C] text-white flex items-center justify-center shrink-0">
                    <Laptop className="w-6 h-6 text-[#00A8F0]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#0B3A8C] uppercase tracking-wider block">Company Operation</span>
                    <h4 className="font-['Rajdhani'] font-bold text-2xl text-[#0A1A33]">
                      100% Remote
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-[#5B6B82] mb-6 leading-relaxed">
                  Our 15+ Industry Experts, academic advisors, and support staff work 100% remotely from leading tech organizations, bringing modern distributed development standards to learners.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs text-[#0A1A33] pt-4 border-t border-[#E1ECF8]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Staff & Principal Tech leads across top firms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>1-on-1 virtual code reviews & project feedback</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Dedicated digital doubt resolution channels</span>
                </li>
              </ul>
            </div>

            {/* Training Mode Card */}
            <div className="bg-white rounded-3xl p-8 border border-[#D8E8F8] shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] text-[#0B3A8C] flex items-center justify-center shrink-0">
                    <Video className="w-6 h-6 text-[#00A8F0]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#00A8F0] uppercase tracking-wider block">Delivery Method</span>
                    <h4 className="font-['Rajdhani'] font-bold text-2xl text-[#0A1A33]">
                      Training Mode: Online
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-[#5B6B82] mb-6 leading-relaxed">
                  Interactive cohorts delivered online with scheduled live evening sessions at 6:00 PM IST, flexible weekend learning, cloud development environments, and 24/7 LMS access.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs text-[#0A1A33] pt-4 border-t border-[#E1ECF8]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Daily live evening sessions at 6:00 PM IST</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>HD recorded sessions available on LMS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Interactive coding labs & portfolio capstones</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. HIRING PARTNERS MARQUEE */}
      <section className="py-16 bg-white border-t border-[#E1ECF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#5B6B82] mb-8">
            Learners Placed Across Verified Corporate Partner Organizations
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {hiringPartners.map((partner, idx) => (
              <div
                key={idx}
                className="px-5 py-3 rounded-xl bg-[#F8FBFE] border border-[#D8E8F8] font-['Rajdhani'] font-bold text-lg text-[#0A1A33] hover:text-[#0B3A8C] hover:border-[#00A8F0] hover:scale-105 transition-all shadow-2xs"
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-['Rajdhani'] font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            Ready to Accelerate Your Career with Industry Veterans?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Take the leap. Connect with our academic advisors to receive a personalized curriculum roadmap tailored to your experience and dream company.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton
              variant="white"
              size="lg"
              onClick={() => onOpenEnroll?.()}
              icon={ArrowRight}
              iconPosition="right"
            >
              Enroll in Upcoming Cohort
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              to="/contact"
              className="border-white text-white hover:bg-white hover:text-[#0B3A8C]"
            >
              Contact Admissions Desk
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
