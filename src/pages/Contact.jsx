import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  ChevronDown,
  PhoneCall,
  User,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Globe,
  Laptop,
  Video
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';
import { courses } from '../data/courses';

export default function Contact({ onOpenEnroll, onOpenCounselor }) {
  // Inquiry types
  const inquiryTypes = [
    { id: 'admission', label: '🎓 Course Admission & Syllabus' },
    { id: 'counseling', label: '💡 1-on-1 Career Counselling' },
    { id: 'corporate', label: '🏢 Enterprise Corporate Training' },
    { id: 'hiring', label: '💼 Hiring from RIS NextGen' },
    { id: 'scholarship', label: '💰 Scholarship & EMI Plans' }
  ];

  const [selectedType, setSelectedType] = useState('admission');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseId: courses[0]?.id || '',
    experience: 'Fresher / Final Year Student',
    preferredChannel: 'WhatsApp',
    message: '',
    receiveSyllabus: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Contact page specific FAQs state
  const [openFaq, setOpenFaq] = useState(0);

  const contactFaqs = [
    {
      question: "How quickly will an academic counsellor contact me?",
      answer: "Our admissions counsellors review inquiries throughout the day. You will receive a personalized response or call within 30 minutes during working hours (9:00 AM – 8:00 PM IST, Monday through Saturday)."
    },
    {
      question: "Do you have any physical offices, or is training completely online?",
      answer: "RIS NextGen operates on a 100% remote-first model. We do not have physical offices, offline classrooms, or walk-in branches. All live cohorts, 1-on-1 mentor reviews, and career counseling sessions happen entirely online. Our Location: Remote / Online | Work Model: 100% Remote | Training Mode: Online."
    },
    {
      question: "Are early bird scholarships or fee waivers available?",
      answer: "Yes! Every quarterly cohort offers early bird merit waivers up to 35% for the first 25 applicants who clear our technical aptitude evaluation. Ask your counsellor during the callback to check your eligibility."
    },
    {
      question: "Can my employer sponsor my course enrollment?",
      answer: "Yes. Many of our learners have their tuition fully or partially reimbursed through company L&D (Learning & Development) budgets. We provide official GST invoices, corporate acceptance letters, and curriculum accreditation documents required by HR teams."
    },
    {
      question: "I am an international applicant outside India. Can I enroll?",
      answer: "Yes! Over 18% of our learners join from the US, UK, Singapore, UAE, and Europe. Our live masterclasses are scheduled on weekends or evening slots to accommodate global time zones, and we accept international credit cards and wire transfers."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const selectedCourseObj = courses.find((c) => c.id === formData.courseId) || courses[0];

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
            <span className="text-[#00A8F0]">Contact Us</span>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FF] border border-[#00A8F0]/30 text-[#0B3A8C] text-xs font-semibold tracking-wider uppercase mb-5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#00A8F0] animate-pulse"></span>
              <span>We Are Here To Help</span>
            </div>

            <h1 className="font-['Rajdhani'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A1A33] tracking-tight leading-[1.1] mb-6">
              Let's Connect & Accelerate Your{' '}
              <span className="bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] bg-clip-text text-transparent">
                Tech Career
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5B6B82] leading-relaxed">
              Have questions regarding our upcoming cohorts, syllabus deep-dives, corporate team training, or flexible scholarship options? Reach out to our admissions team directly.
            </p>
          </div>
        </div>
      </section>

      {/* 2. QUICK CONTACT INFO CARDS */}
      <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#D8E8F8] shadow-xl shadow-[#0B3A8C]/5 hover:border-[#00A8F0] hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#0B3A8C] group-hover:bg-[#0B3A8C] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33] mb-1">
              Admissions Helpline
            </h3>
            <p className="text-xs text-[#5B6B82] mb-3">
              Mon – Sat: 9:00 AM – 8:00 PM IST
            </p>
            <a
              href="tel:+919876543210"
              className="text-sm font-bold text-[#0B3A8C] hover:text-[#00A8F0] flex items-center gap-1 transition-colors"
            >
              <span>+91 98765 43210</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <div className="text-xs text-[#5B6B82] mt-1">
              Desk: +91 (80) 4120 9000
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#D8E8F8] shadow-xl shadow-[#0B3A8C]/5 hover:border-[#00A8F0] hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#0B3A8C] group-hover:bg-[#1565C0] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33] mb-1">
              Email Support
            </h3>
            <p className="text-xs text-[#5B6B82] mb-3">
              Guaranteed reply within 2 hours
            </p>
            <a
              href="mailto:risnextgenpvtltd@gmail.com"
              className="text-sm font-bold text-[#0B3A8C] hover:text-[#00A8F0] truncate block transition-colors"
              title="risnextgenpvtltd@gmail.com"
            >
              risnextgenpvtltd@gmail.com
            </a>
            <div className="text-xs text-[#5B6B82] mt-1">
              admissions@risnextgen.com
            </div>
          </div>

          {/* Card 3: Our Location: Remote / Online */}
          <div className="bg-white rounded-3xl p-6 border border-[#D8E8F8] shadow-xl shadow-[#0B3A8C]/5 hover:border-[#00A8F0] hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#0B3A8C] group-hover:bg-[#00A8F0] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33] mb-1">
              Our Location
            </h3>
            <div className="text-sm font-extrabold text-[#0B3A8C] mb-1">
              Remote / Online
            </div>
            <p className="text-xs text-[#5B6B82] mb-3 leading-relaxed">
              <strong>Work Model: 100% Remote</strong><br />
              <strong>Training Mode: Online</strong>
            </p>
            <div className="text-xs text-[#00A8F0] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Nationwide & Global Access</span>
            </div>
          </div>

          {/* Card 4: Online Digital Support Desk */}
          <div className="bg-white rounded-3xl p-6 border border-[#D8E8F8] shadow-xl shadow-[#0B3A8C]/5 hover:border-[#00A8F0] hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#0B3A8C] group-hover:bg-[#0B3A8C] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33] mb-1">
              Online Virtual Support
            </h3>
            <p className="text-xs text-[#5B6B82] mb-1">
              Live Digital Onboarding
            </p>
            <div className="text-sm font-bold text-[#0A1A33] mb-2">
              Mon – Sat: 9 AM – 8 PM IST
            </div>
            <p className="text-xs text-[#5B6B82] mb-2 leading-relaxed">
              Virtual video consultations, WhatsApp queries, and 24/7 LMS access.
            </p>
            <div className="text-xs text-[#00A8F0] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Zero Physical Commute</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN INTERACTIVE INQUIRY FORM */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Context & Guarantees */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FF] border border-[#00A8F0]/30 text-[#0B3A8C] text-xs font-semibold tracking-wider uppercase mb-3">
                    <span className="w-1.5 h-1.5 rounded-xs bg-[#00A8F0]"></span>
                    <span>Direct Admissions Access</span>
                  </div>
                  <h2 className="font-['Rajdhani'] font-bold text-3xl sm:text-4xl text-[#0A1A33] leading-tight">
                    Submit Your Inquiry for a Free Mentorship Audit
                  </h2>
                  <p className="text-sm sm:text-base text-[#5B6B82] mt-3 leading-relaxed">
                    Tell us about your background, career targets, or corporate training needs. A senior academic advisor will review your profile and reach out with an individualized curriculum roadmap.
                  </p>
                </div>

                {/* Assurance points */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F8FBFE] border border-[#E1ECF8]">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-['Rajdhani'] font-bold text-base text-[#0A1A33]">
                        30-Minute Callback Guarantee
                      </h4>
                      <p className="text-xs text-[#5B6B82] mt-0.5">
                        During active hours, an experienced technical counsellor calls you directly without robotic delays.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F8FBFE] border border-[#E1ECF8]">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF5FF] text-[#0B3A8C] flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-['Rajdhani'] font-bold text-base text-[#0A1A33]">
                        Curriculum & Capstone Deep Dive
                      </h4>
                      <p className="text-xs text-[#5B6B82] mt-0.5">
                        Receive complete week-by-week syllabus breakdowns, project repositories, and mentor profiles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F8FBFE] border border-[#E1ECF8]">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-['Rajdhani'] font-bold text-base text-[#0A1A33]">
                        Strict Zero-Spam Policy
                      </h4>
                      <p className="text-xs text-[#5B6B82] mt-0.5">
                        Your contact information is strictly confidential and never shared with third-party telemarketers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Quick Contact button */}
                <div className="pt-4 border-t border-[#E1ECF8]">
                  <p className="text-xs font-semibold text-[#5B6B82] mb-3">
                    Prefer an instant chat over a phone call?
                  </p>
                  <a
                    href="https://wa.me/919876543210?text=Hi%20RIS%20NextGen%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20cohorts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat With Admissions on WhatsApp</span>
                  </a>
                </div>

                {/* Official Social Media Channels (LinkedIn, Instagram, Facebook) */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#EAF5FF] to-white border border-[#D8E8F8]">
                  <h4 className="font-['Rajdhani'] font-bold text-sm uppercase tracking-wider text-[#0A1A33] mb-1">
                    Official Social Channels
                  </h4>
                  <p className="text-xs text-[#5B6B82] mb-3">
                    Follow RIS NextGen for live updates, masterclasses, and placement announcements:
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <a
                      href="https://www.linkedin.com/company/risnextgen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-white border border-[#D8E8F8] text-[#0A1A33] hover:text-[#0B3A8C] hover:border-[#00A8F0] hover:shadow-sm transition-all"
                    >
                      <svg className="w-5 h-5 fill-[#0A66C2]" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                      </svg>
                      <span className="text-xs font-bold">LinkedIn</span>
                    </a>

                    <a
                      href="https://www.instagram.com/risnextgen/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-white border border-[#D8E8F8] text-[#0A1A33] hover:text-[#E4405F] hover:border-[#E4405F] hover:shadow-sm transition-all"
                    >
                      <svg className="w-5 h-5 fill-[#E4405F]" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                      </svg>
                      <span className="text-xs font-bold">Instagram</span>
                    </a>

                    <a
                      href="https://www.facebook.com/risnextgen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-white border border-[#D8E8F8] text-[#0A1A33] hover:text-[#1877F2] hover:border-[#1877F2] hover:shadow-sm transition-all"
                    >
                      <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span className="text-xs font-bold">Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D8E8F8] shadow-xl shadow-[#0B3A8C]/5 relative">
                {/* Decorative pixel corner */}
                <div className="absolute top-4 right-4 flex gap-1">
                  <span className="w-2 h-2 rounded-xs bg-[#00A8F0]"></span>
                  <span className="w-2 h-2 rounded-xs bg-[#1565C0]/40"></span>
                </div>

                {submitted ? (
                  <div className="py-12 px-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-600 mx-auto flex items-center justify-center mb-5 animate-in zoom-in-75">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-['Rajdhani'] font-bold text-3xl text-[#0A1A33] mb-2">
                      Inquiry Successfully Received!
                    </h3>
                    <p className="text-base text-[#5B6B82] max-w-md mx-auto mb-6 leading-relaxed">
                      Thank you, <span className="font-semibold text-[#0A1A33]">{formData.fullName}</span>. An admissions counsellor has been assigned to your request regarding <span className="font-semibold text-[#0B3A8C]">{selectedCourseObj?.title || 'our programs'}</span>.
                    </p>

                    <div className="bg-[#EAF5FF] rounded-2xl p-5 max-w-md mx-auto text-left text-sm text-[#0B3A8C] mb-6 space-y-2 border border-[#CDE3FB]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#5B6B82]">Preferred Channel:</span>
                        <span className="font-bold">{formData.preferredChannel}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#5B6B82]">Phone:</span>
                        <span className="font-bold">{formData.phone}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#5B6B82]">Callback Time:</span>
                        <span className="font-bold text-emerald-600">Within 30 mins</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: '',
                            email: '',
                            phone: '',
                            courseId: courses[0]?.id || '',
                            experience: 'Fresher / Final Year Student',
                            preferredChannel: 'WhatsApp',
                            message: '',
                            receiveSyllabus: true
                          });
                        }}
                        className="px-6 py-2.5 rounded-xl border border-[#D8E8F8] text-xs font-semibold text-[#0B3A8C] hover:bg-[#EAF5FF] transition-colors"
                      >
                        Submit Another Inquiry
                      </button>

                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors flex items-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Inquiry Type Chips */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-3">
                        Select Inquiry Category
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {inquiryTypes.map((type) => {
                          const isSelected = selectedType === type.id;
                          return (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() => setSelectedType(type.id)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#0B3A8C] text-white shadow-sm'
                                  : 'bg-[#F8FBFE] text-[#5B6B82] border border-[#D8E8F8] hover:border-[#00A8F0] hover:text-[#0B3A8C]'
                              }`}
                            >
                              {type.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1.5">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-[#5B6B82] absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm border border-[#D8E8F8] focus:outline-none focus:ring-2 focus:ring-[#00A8F0] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1.5">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-[#5B6B82] absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            required
                            placeholder="rahul@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm border border-[#D8E8F8] focus:outline-none focus:ring-2 focus:ring-[#00A8F0] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-[#5B6B82] absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm border border-[#D8E8F8] focus:outline-none focus:ring-2 focus:ring-[#00A8F0] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      {/* Interested Program */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1.5">
                          Interested Cohort
                        </label>
                        <div className="relative">
                          <BookOpen className="w-4 h-4 text-[#5B6B82] absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <select
                            value={formData.courseId}
                            onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm border border-[#D8E8F8] focus:outline-none focus:ring-2 focus:ring-[#00A8F0] focus:border-transparent transition-all bg-white cursor-pointer appearance-none"
                          >
                            {courses.map((c) => (
                              <option key={c.id} value={c.id}>
                                {c.title} ({c.category})
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Current Experience */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1.5">
                          Current Professional Status
                        </label>
                        <select
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm border border-[#D8E8F8] focus:outline-none focus:ring-2 focus:ring-[#00A8F0] focus:border-transparent transition-all bg-white cursor-pointer"
                        >
                          <option value="Fresher / Final Year Student">Fresher / Final Year Student</option>
                          <option value="1 - 3 Years Working Professional">1 - 3 Years Working Professional</option>
                          <option value="3+ Years Senior Professional">3+ Years Senior Professional</option>
                          <option value="Non-Tech Seeking Domain Switch">Non-Tech Seeking Domain Switch</option>
                          <option value="Corporate Representative">Corporate / Team HR Lead</option>
                        </select>
                      </div>

                      {/* Preferred Contact Mode */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1.5">
                          Preferred Contact Channel
                        </label>
                        <select
                          value={formData.preferredChannel}
                          onChange={(e) => setFormData({ ...formData, preferredChannel: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm border border-[#D8E8F8] focus:outline-none focus:ring-2 focus:ring-[#00A8F0] focus:border-transparent transition-all bg-white cursor-pointer"
                        >
                          <option value="WhatsApp">WhatsApp (Fastest Response)</option>
                          <option value="Phone Call">Direct Phone Call</option>
                          <option value="Email">Email Detailed Brochure</option>
                        </select>
                      </div>
                    </div>

                    {/* Message / Specific Queries */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1.5">
                        Your Query or Career Goal (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us what you are aiming to achieve, current tech stack, or specific questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm border border-[#D8E8F8] focus:outline-none focus:ring-2 focus:ring-[#00A8F0] focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    {/* Checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.receiveSyllabus}
                        onChange={(e) => setFormData({ ...formData, receiveSyllabus: e.target.checked })}
                        className="w-4 h-4 mt-0.5 rounded-sm border-gray-300 text-[#00A8F0] focus:ring-[#00A8F0] cursor-pointer"
                      />
                      <span className="text-xs text-[#5B6B82] leading-tight">
                        Send me the official 2026 Cohort Syllabus, Capstone Project blueprints, and Career Outcomes Report via WhatsApp & Email.
                      </span>
                    </label>

                    {/* Submit Button */}
                    <CTAButton
                      type="submit"
                      variant="gradient"
                      size="lg"
                      fullWidth
                      disabled={loading}
                      icon={Send}
                      iconPosition="right"
                    >
                      {loading ? 'Submitting Details...' : 'Request Free Academic Callback'}
                    </CTAButton>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 100% REMOTE-FIRST & ONLINE OPERATIONS */}
      <section id="remote-model" className="py-20 md:py-28 bg-[#F8FBFE] border-t border-[#E1ECF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="100% REMOTE-FIRST STARTUP"
            title="Our Remote Working &"
            gradientWord="Online Learning Model"
            subtitle="RIS NextGen is a modern online-first technology education organization. We do not maintain physical offices or offline training centers — all programs and mentorship are conducted online."
          />

          {/* Core Remote Model Banner */}
          <div className="bg-gradient-to-r from-[#071B3B] via-[#0B3A8C] to-[#0A2558] rounded-3xl p-8 sm:p-10 text-white shadow-2xl mb-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00A8F0]/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/15 text-center">
              <div className="pt-4 md:pt-0">
                <span className="block text-xs uppercase tracking-widest text-blue-200 font-semibold mb-1">Our Location</span>
                <span className="text-2xl sm:text-3xl font-['Rajdhani'] font-extrabold text-white tracking-wide">Remote / Online</span>
                <p className="text-xs text-blue-100/80 mt-2">Connecting learners nationwide & globally without geographic barriers</p>
              </div>

              <div className="pt-4 md:pt-0 md:px-6">
                <span className="block text-xs uppercase tracking-widest text-blue-200 font-semibold mb-1">Work Model</span>
                <span className="text-2xl sm:text-3xl font-['Rajdhani'] font-extrabold text-[#00A8F0] tracking-wide">100% Remote</span>
                <p className="text-xs text-blue-100/80 mt-2">Distributed engineering mentors, corporate advisors & academic faculty</p>
              </div>

              <div className="pt-4 md:pt-0 md:pl-6">
                <span className="block text-xs uppercase tracking-widest text-blue-200 font-semibold mb-1">Training Mode</span>
                <span className="text-2xl sm:text-3xl font-['Rajdhani'] font-extrabold text-white tracking-wide">Online</span>
                <p className="text-xs text-blue-100/80 mt-2">Live sessions at 6:00 PM IST, interactive code labs & recorded LMS access</p>
              </div>
            </div>
          </div>

          {/* Key Pillars of Our Virtual Ecosystem */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-[#D8E8F8] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#0B3A8C] flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-[#00A8F0]" />
              </div>
              <h4 className="font-['Rajdhani'] font-bold text-lg text-[#0A1A33] mb-2">Zero Travel Barrier</h4>
              <p className="text-xs text-[#5B6B82] leading-relaxed">
                Learn from the comfort of your home or office anywhere across India or abroad without relocation or commuting costs.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#D8E8F8] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#0B3A8C] flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-[#00A8F0]" />
              </div>
              <h4 className="font-['Rajdhani'] font-bold text-lg text-[#0A1A33] mb-2">Live Interactive Cohorts</h4>
              <p className="text-xs text-[#5B6B82] leading-relaxed">
                Direct audio and screen interaction with tech leads every evening at 6:00 PM IST with real-time doubt clearing.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#D8E8F8] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#0B3A8C] flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-[#00A8F0]" />
              </div>
              <h4 className="font-['Rajdhani'] font-bold text-lg text-[#0A1A33] mb-2">24/7 LMS & Recordings</h4>
              <p className="text-xs text-[#5B6B82] leading-relaxed">
                Never miss a concept with lifetime access to high-definition recordings, project repositories, and structured modules.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#D8E8F8] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#0B3A8C] flex items-center justify-center mb-4">
                <PhoneCall className="w-6 h-6 text-[#00A8F0]" />
              </div>
              <h4 className="font-['Rajdhani'] font-bold text-lg text-[#0A1A33] mb-2">Virtual 1-on-1 Guidance</h4>
              <p className="text-xs text-[#5B6B82] leading-relaxed">
                Book private 1-on-1 career counselling, portfolio audits, and mock interview video calls tailored to your goals.
              </p>
            </div>
          </div>

          {/* Quick Remote Action Bar */}
          <div className="mt-10 bg-white rounded-2xl p-6 border border-[#D8E8F8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="font-['Rajdhani'] font-bold text-lg text-[#0A1A33]">
                Need advice on choosing the right online track?
              </h5>
              <p className="text-xs text-[#5B6B82]">
                Schedule a 15-minute virtual video call or phone guidance session with our principal mentors.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onOpenCounselor?.()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-[#0B3A8C] text-white hover:bg-[#1565C0] transition-colors cursor-pointer shadow-md"
              >
                <span>Book Virtual Counseling</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT & ADMISSION FAQ ACCORDION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="ADMISSIONS FAQS"
            title="Frequently Asked"
            gradientWord="Admissions Questions"
            subtitle="Quick answers to clarify batch timings, online training mode, LMS access, and remote admissions."
          />

          <div className="space-y-4">
            {contactFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#EAF5FF]/40 border-[#00A8F0]/50 shadow-md shadow-[#0B3A8C]/5'
                      : 'bg-white border-[#D8E8F8] hover:border-[#CBE5FC]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8F0]"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isOpen ? 'bg-[#0B3A8C] text-white' : 'bg-[#EAF5FF] text-[#0B3A8C]'
                      }`}>
                        0{index + 1}
                      </span>
                      <span className="font-['Rajdhani'] font-bold text-lg sm:text-xl text-[#0A1A33]">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[#00A8F0] text-white'
                          : 'bg-[#EAF5FF] text-[#0B3A8C]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#5B6B82] leading-relaxed animate-in fade-in-50 duration-200">
                      <p className="border-t border-[#D8E8F8]/60 pt-3">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION STRIP */}
      <section className="py-16 bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-['Rajdhani'] font-extrabold text-2xl sm:text-3xl tracking-tight">
              Ready to take your tech career to the next level?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 mt-1 max-w-xl">
              Cohort seats are strictly capped at 40 learners per batch to maintain 1-on-1 mentor code review quality.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <CTAButton
              variant="white"
              size="md"
              onClick={() => onOpenEnroll?.()}
            >
              Enroll Now
            </CTAButton>
            <CTAButton
              variant="outline"
              size="md"
              to="/courses"
              className="border-white text-white hover:bg-white hover:text-[#0B3A8C]"
            >
              Browse Courses
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
