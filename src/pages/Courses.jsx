import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search, 
  SlidersHorizontal, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  ChevronRight,
  GraduationCap,
  Users,
  Award,
  RotateCcw
} from 'lucide-react';
import { courses, COURSE_CATEGORIES } from '../data/courses';
import CourseCard from '../components/CourseCard';
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';
import FaqAccordion from '../components/FaqAccordion';
import LeadForm from '../components/LeadForm';

export default function Courses({ onOpenEnroll, onOpenCounselor, onViewDetails }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const selectedCategory = categoryParam && COURSE_CATEGORIES.some(c => c.toLowerCase() === categoryParam.toLowerCase())
    ? COURSE_CATEGORIES.find(c => c.toLowerCase() === categoryParam.toLowerCase())
    : 'All';

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular'); // 'popular', 'rating', 'price-low', 'price-high', 'newest'
  const [selectedMode, setSelectedMode] = useState('all'); // 'all', 'live', 'hybrid'

  // Client-side filtering & sorting
  const filteredCourses = useMemo(() => {
    return courses
      .filter((course) => {
        // Category filter
        const matchesCategory =
          selectedCategory === 'All' || course.category.toLowerCase() === selectedCategory.toLowerCase();

        // Mode filter
        const matchesMode =
          selectedMode === 'all' ||
          (selectedMode === 'live' && course.mode.toLowerCase().includes('live')) ||
          (selectedMode === 'hybrid' && (course.mode.toLowerCase().includes('hybrid') || course.mode.toLowerCase().includes('self-paced')));

        // Search filter (searches title, description, and skills)
        const query = searchQuery.trim().toLowerCase();
        const matchesSearch =
          query === '' ||
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.category.toLowerCase().includes(query) ||
          (course.skills && course.skills.some((s) => s.toLowerCase().includes(query)));

        return matchesCategory && matchesMode && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'popular') return (b.reviewsCount || 0) - (a.reviewsCount || 0);
        if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'newest') return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedMode, sortBy]);

  const handleCategoryChange = (cat) => {
    if (cat === 'All') {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete('category');
      setSearchParams(nextParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedMode('all');
    setSortBy('popular');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      
      {/* 1. PAGE HEADER & BREADCRUMB */}
      <section className="bg-gradient-to-b from-[#EAF5FF] via-[#EAF5FF]/60 to-transparent pt-10 pb-12 border-b border-[#D8E8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb (Home > Courses) */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#5B6B82] mb-4">
            <Link to="/" className="hover:text-[#0B3A8C] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#00A8F0]" />
            <span className="text-[#0B3A8C] font-bold">Courses</span>
            {selectedCategory !== 'All' && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-[#00A8F0]" />
                <span className="text-[#1565C0]">{selectedCategory}</span>
              </>
            )}
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#CDE3FB] text-xs font-bold text-[#0B3A8C] mb-3">
                <Sparkles className="w-3 h-3 text-[#00A8F0]" />
                <span>Industry-Curated Curriculum</span>
              </div>
              <h1 className="font-['Rajdhani'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A1A33] tracking-tight">
                Explore Our{' '}
                <span className="bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] bg-clip-text text-transparent">
                  Next-Gen Courses
                </span>
              </h1>
              <p className="text-sm sm:text-base text-[#5B6B82] max-w-xl mt-2 leading-relaxed">
                Elevate your engineering and leadership capabilities with live interactive mentorship, real-world capstone projects, and guaranteed career acceleration.
              </p>
            </div>

            {/* Quick Search Bar */}
            <div className="w-full md:w-80 lg:w-96">
              <div className="relative">
                <Search className="w-4 h-4 text-[#5B6B82] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by topic, skill or role (e.g. AI, React)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-[#D8E8F8] shadow-xs text-sm text-[#0A1A33] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A8F0] focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#5B6B82] hover:text-[#0B3A8C]"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FILTER & SORT STRIP */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E1ECF8] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Category Chips / Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              {COURSE_CATEGORIES.map((cat) => {
                const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-[#0B3A8C] to-[#1565C0] text-white shadow-sm shadow-[#0B3A8C]/20'
                        : 'bg-slate-100 text-[#5B6B82] hover:bg-[#EAF5FF] hover:text-[#0B3A8C]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Sort & Mode Controls */}
            <div className="flex items-center justify-between lg:justify-end gap-3 shrink-0">
              {/* Results count */}
              <span className="text-xs text-[#5B6B82] font-medium hidden sm:inline-block">
                Showing <strong className="text-[#0A1A33]">{filteredCourses.length}</strong> programs
              </span>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0A1A33]">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#1565C0]" />
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-[#D8E8F8] bg-white text-xs font-semibold text-[#0A1A33] focus:ring-2 focus:ring-[#00A8F0] focus:outline-none cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Featured Cohorts</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. COURSE GRID (3 COLUMNS DESKTOP, 2 TABLET, 1 MOBILE) */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onEnroll={(c) => onOpenEnroll && onOpenEnroll(c)}
                  onViewDetails={(c) => onViewDetails && onViewDetails(c)}
                />
              ))}
            </div>
          ) : (
            /* No Results Fallback State */
            <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#D8E8F8] shadow-sm max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-[#EAF5FF] text-[#0B3A8C] mx-auto flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-[#00A8F0]" />
              </div>
              <h3 className="font-['Rajdhani'] font-bold text-2xl text-[#0A1A33] mb-2">
                No courses matched your search
              </h3>
              <p className="text-sm text-[#5B6B82] mb-6">
                Try searching with different keywords, or reset your filters to view all available cohorts.
              </p>
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#EAF5FF] text-[#0B3A8C] hover:bg-[#d5ebfe] transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset All Filters</span>
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 4. "NOT SURE WHICH COURSE TO PICK?" SECTION WITH COUNSELLOR CALLBACK FORM */}
      <section className="py-16 md:py-24 bg-[#EAF5FF]/60 border-y border-[#D8E8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D8E8F8] shadow-xl shadow-[#0B3A8C]/5 overflow-hidden relative">
            
            {/* Background decorative corner gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#00A8F0]/10 to-transparent pointer-events-none rounded-bl-full" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Left Column: Reassurance */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF5FF] border border-[#CBE5FC] text-xs font-bold text-[#0B3A8C] mb-4">
                  <PhoneCall className="w-3.5 h-3.5 text-[#00A8F0]" />
                  <span>Free Career Advisory</span>
                </div>

                <h2 className="font-['Rajdhani'] font-bold text-3xl sm:text-4xl text-[#0A1A33] leading-tight mb-4">
                  Not Sure Which Course Fits Your Career Ambition?
                </h2>

                <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed mb-6">
                  Every career journey is unique. Schedule a 1-on-1 discussion with our senior academic counsellors who evaluate your background, target roles, and recommend the highest-ROI learning roadmap.
                </p>

                <div className="space-y-3 text-xs sm:text-sm font-medium text-[#0A1A33]">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8F0]" />
                    <span>In-depth review of your current CV and LinkedIn profile</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8F0]" />
                    <span>Direct comparison of salaries and hiring trends for each track</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8F0]" />
                    <span>Zero pressure, 100% objective mentorship advice</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Callback Lead Form */}
              <div className="lg:col-span-6">
                <div className="bg-[#EAF5FF]/40 rounded-2xl p-6 sm:p-8 border border-[#CDE3FB]">
                  <h3 className="font-['Rajdhani'] font-bold text-2xl text-[#0B3A8C] mb-1">
                    Book a Free 1-on-1 Counselling Call
                  </h3>
                  <p className="text-xs text-[#5B6B82] mb-5">
                    We'll call you within 30 minutes to understand your career goals.
                  </p>

                  <LeadForm variant="light" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY LEARN WITH US MINI-SECTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The RIS Difference"
            title="What Sets RIS NextGen"
            gradientWord="Apart"
            subtitle="Built from the ground up for outcomes that matter: skill mastery, production competence, and career mobility."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-[#D8E8F8] hover:border-[#00A8F0]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] text-[#0B3A8C] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 text-[#00A8F0]" />
              </div>
              <h3 className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33] mb-2">
                Curriculum Designed by Tech Leads
              </h3>
              <p className="text-sm text-[#5B6B82] leading-relaxed">
                We don't teach obsolete syntax. Our syllabi are co-designed and reviewed by principal architects at tier-1 product companies to match actual job responsibilities.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-[#D8E8F8] hover:border-[#00A8F0]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] text-[#0B3A8C] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6 text-[#1565C0]" />
              </div>
              <h3 className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33] mb-2">
                1-on-1 Code & Architecture Reviews
              </h3>
              <p className="text-sm text-[#5B6B82] leading-relaxed">
                Receive detailed line-by-line feedback on your code and architecture from senior mentors who challenge you to build production-grade clean code.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-[#D8E8F8] hover:border-[#00A8F0]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] text-[#0B3A8C] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6 text-[#0B3A8C]" />
              </div>
              <h3 className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33] mb-2">
                Guaranteed Career Acceleration
              </h3>
              <p className="text-sm text-[#5B6B82] leading-relaxed">
                From mock behavioral and algorithmic interviews to direct hiring introductions across our 250+ hiring partner network, we stand beside you until you cross the finish line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-16 md:py-20 bg-[#EAF5FF]/30 border-t border-[#D8E8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Common Inquiries"
            title="Questions About Our"
            gradientWord="Courses & Admission"
            subtitle="Find quick answers regarding batch schedules, prerequisites, certificate credibility, and EMI financing."
          />

          <FaqAccordion />
        </div>
      </section>

      {/* 7. FULL-WIDTH CTA BANNER */}
      <section className="relative py-20 bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold text-white mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#00A8F0]" />
            <span>Limited Cohort Seats Available</span>
          </div>

          <h2 className="font-['Rajdhani'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Accelerate Your Career with RIS NextGen Today
          </h2>

          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join thousands of motivated professionals who have unlocked significant salary hikes, leadership roles, and technical breakthroughs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              variant="white"
              size="lg"
              onClick={() => onOpenEnroll && onOpenEnroll()}
              icon={ArrowRight}
              iconPosition="right"
            >
              Enroll in a Cohort
            </CTAButton>

            <button
              onClick={() => onOpenCounselor && onOpenCounselor()}
              className="px-8 py-4 rounded-2xl border-2 border-white/40 text-white font-bold hover:bg-white/10 transition-colors text-sm sm:text-base flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#00A8F0]" />
              <span>Request Free Callback</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
