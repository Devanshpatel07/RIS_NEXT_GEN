import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Compass,
  CheckCircle2,
  ArrowRight,
  Send,
  Upload,
  User,
  Mail,
  Phone,
  FileText,
  Clock,
  ShieldCheck,
  Code2,
  ChevronRight,
  DollarSign,
  Laptop,
  Globe
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';
import { ApiService } from '../services/api';
import { DatabaseService } from '../services/db';

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

// Three official application opportunities as requested
const opportunities = [
  {
    id: "tutor",
    title: "Tutor",
    badge: "100% Remote • Live Instruction",
    icon: GraduationCap,
    location: "Remote / Online",
    workModel: "100% Remote",
    trainingMode: "Online",
    tagline: "Lead live interactive training cohorts online and shape engineering fundamentals.",
    timings: "Weekday evenings (after 5:00 PM IST) or Weekend sessions",
    commitment: "8 - 12 Hours / Week",
    remuneration: "Competitive Monthly Honorarium / Hourly Benchmarks",
    overview: "As an official 100% Remote RIS NextGen Tutor, you will deliver structured live online masterclasses in Cybersecurity, AI/ML, Full Stack, or Database engineering. You will explain complex architectural paradigms, write live production code, and interact with ambitious learners virtually in real-time.",
    keyResponsibilities: [
      "Conduct live interactive online sessions starting at 6:00 PM IST on scheduled training days.",
      "Break down intricate architectural concepts into practical, hands-on implementation steps.",
      "Facilitate live coding walkthroughs, virtual debugging drills, and immediate query resolution.",
      "Collaborate with our curriculum team remotely to keep syllabus content aligned with industry shifts."
    ],
    idealProfile: [
      "3+ years of professional software engineering or technical training experience.",
      "Strong command over Cybersecurity, AI/ML, Cloud Native systems, or Database architectures.",
      "Articulate technical communication and high comfort with online live lecturing tools."
    ]
  },
  {
    id: "technical-mentor",
    title: "Technical Mentor",
    badge: "100% Remote • 1-on-1 Mentorship",
    icon: Code2,
    location: "Remote / Online",
    workModel: "100% Remote",
    trainingMode: "Online",
    tagline: "Provide deep 1-on-1 code reviews, architectural critiques, and capstone evaluations online.",
    timings: "Flexible Weekend slots (7:00 AM – 10:00 PM IST) & Evening check-ins",
    commitment: "4 - 6 Hours / Week",
    remuneration: "₹3,500 – ₹5,000 / Hour",
    overview: "Designed for Senior, Staff, and Principal Engineers at leading enterprise and product organizations working remotely. Guide small pods of learners through virtual capstone defenses, system design dilemmas, and rigorous technical mock interview drills.",
    keyResponsibilities: [
      "Conduct detailed weekly 1-on-1 remote code reviews on student pull requests and repositories.",
      "Evaluate capstone project architectures against enterprise scalability and security benchmarks.",
      "Deliver tailored technical mock interviews simulating MAANG & Tier-1 hiring standards via video call.",
      "Unblock learners on advanced edge cases in distributed systems, AI pipelines, or cloud infra."
    ],
    idealProfile: [
      "5+ years building and deploying scalable systems at product firms or enterprise integrators.",
      "Deep expertise in system architecture, microservices, cloud defense, or deep learning.",
      "High empathy and actionable feedback delivery for aspiring engineers in remote settings."
    ]
  },
  {
    id: "career-guidance-expert",
    title: "Career Guidance Expert",
    badge: "100% Remote • Career Advisory",
    icon: Compass,
    location: "Remote / Online",
    workModel: "100% Remote",
    trainingMode: "Online",
    tagline: "Guide career transitions, optimize profiles, and mentor learners through hiring loops online.",
    timings: "Flexible Evening & Weekend appointment windows",
    commitment: "3 - 6 Hours / Week",
    remuneration: "Structured Advisory Retainer + Placement Bonuses",
    overview: "Bridge the gap between technical capability and hiring success remotely. Work with learners virtually on resume engineering, LinkedIn presence, executive storytelling, technical recruiter alignment, and salary negotiation strategies.",
    keyResponsibilities: [
      "Conduct virtual 1-on-1 career mapping sessions to identify transferable strengths and target roles.",
      "Audit and overhaul technical resumes and portfolio project writeups for recruiter screening.",
      "Run behavioral and leadership mock interview video drills for engineering & PM roles.",
      "Advise learners on offer negotiations and strategic career transition pathways."
    ],
    idealProfile: [
      "4+ years experience in technical talent acquisition, engineering leadership, or career coaching.",
      "Deep network across hiring managers, tech recruiters, and talent partners.",
      "Proven track record of placing candidates into high-growth software and data roles remotely."
    ]
  }
];

export default function Careers() {
  const [selectedOpportunity, setSelectedOpportunity] = useState(opportunities[0].id);
  const [formData, setFormData] = useState({
    opportunity: opportunities[0].title,
    fullName: "",
    email: "",
    phone: "",
    expertise: "Cybersecurity & Cloud Defense",
    experience: "3 - 5 Years",
    linkedin: "",
    resumeFile: null,
    resumeName: "",
    introduction: ""
  });

  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [recentApplications, setRecentApplications] = useState(() => DatabaseService.getApplications());
  const formRef = useRef(null);

  const handleOpportunitySelect = (opp) => {
    setSelectedOpportunity(opp.id);
    setFormData((prev) => ({
      ...prev,
      opportunity: opp.title
    }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg("Resume file size should be less than 10MB.");
        return;
      }
      setErrorMsg("");
      setFormData((prev) => ({
        ...prev,
        resumeFile: file,
        resumeName: file.name
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg("Please fill in all mandatory contact fields.");
      return;
    }

    if (!formData.linkedin.trim()) {
      setErrorMsg("Please provide your LinkedIn profile URL.");
      return;
    }

    if (!formData.resumeName && !formData.resumeFile) {
      setErrorMsg("Please upload your resume (PDF/DOCX).");
      return;
    }

    if (!formData.introduction.trim()) {
      setErrorMsg("Please provide a brief introduction about your background.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        opportunity: formData.opportunity,
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        expertise: formData.expertise,
        experience: formData.experience,
        linkedin: formData.linkedin.trim(),
        resumeName: formData.resumeName || "Uploaded_Resume.pdf",
        introduction: formData.introduction.trim()
      };

      // Connect to actual backend API and database service
      const response = await ApiService.submitCareerApplication(payload);

      setSubmittedData({
        ...payload,
        id: response.applicationId || `APP-2026-${Date.now().toString().slice(-3)}`,
        submittedAt: response.timestamp || new Date().toISOString()
      });

      // Refresh applications list from database
      const updatedList = DatabaseService.getApplications();
      setRecentApplications(updatedList);
    } catch {
      setErrorMsg("An error occurred while saving your application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-[#EAF5FF]/80 via-white to-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A8F0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 left-0 w-72 h-72 bg-[#1565C0]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5B6B82] mb-6">
            <Link to="/" className="hover:text-[#0B3A8C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#00A8F0]">Career Opportunities</span>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FF] border border-[#00A8F0]/30 text-[#0B3A8C] text-xs font-semibold tracking-wider uppercase mb-5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#00A8F0] animate-pulse"></span>
              <span>Join RIS NextGen Academic & Mentorship Faculty</span>
            </div>

            <h1 className="font-['Rajdhani'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A1A33] tracking-tight leading-[1.1] mb-6">
              Empower the Next Generation of Tech Leaders as a{' '}
              <span className="bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] bg-clip-text text-transparent">
                Tutor or Mentor
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5B6B82] leading-relaxed mb-8">
              We are actively inviting verified domain practitioners to partner with us across three dedicated 100% remote roles. Share your engineering acumen, review enterprise capstones, and guide ambitious learners completely online from anywhere.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#opportunities-grid"
                className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>View 3 Application Opportunities</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#application-form-section"
                className="px-6 py-3 rounded-xl text-sm font-bold border-2 border-[#1565C0] text-[#0B3A8C] hover:bg-[#EAF5FF] transition-all"
              >
                Apply Online Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE DEDICATED OPPORTUNITIES SECTION */}
      <section id="opportunities-grid" className="py-20 bg-[#F8FBFE] border-t border-[#E1ECF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="100% REMOTE APPLICATION ROLES"
            title="Three Strategic"
            gradientWord="Career Opportunities"
            subtitle="Choose the 100% remote role that best aligns with your expertise, availability, and career leadership goals. All teaching, mentoring, and counseling is conducted online."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunities.map((opp) => {
              const Icon = opp.icon;
              const isSelected = selectedOpportunity === opp.id;
              return (
                <div
                  key={opp.id}
                  className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 border ${
                    isSelected
                      ? "bg-white border-[#00A8F0] shadow-xl ring-2 ring-[#00A8F0]/30 -translate-y-1"
                      : "bg-white border-[#D8E8F8] shadow-sm hover:shadow-lg hover:border-[#1565C0]"
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#0B3A8C] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#EAF5FF] text-[#0B3A8C] border border-[#CDE3FB]">
                        {opp.badge}
                      </span>
                    </div>

                    <h3 className="font-['Rajdhani'] font-bold text-2xl text-[#0A1A33] mb-2">
                      {opp.title}
                    </h3>
                    <p className="text-xs text-[#00A8F0] font-semibold mb-3">
                      {opp.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed mb-5">
                      {opp.overview}
                    </p>

                    {/* Meta pills */}
                    <div className="space-y-2.5 p-4 rounded-2xl bg-[#F8FBFE] border border-[#E1ECF8] mb-5 text-xs">
                      <div className="flex items-start gap-2">
                        <Globe className="w-4 h-4 text-[#00A8F0] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[#0A1A33]">Work Model & Location:</strong>
                          <span className="text-[#0B3A8C] font-semibold">{opp.workModel} • {opp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-[#00A8F0] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[#0A1A33]">Schedule:</strong>
                          <span className="text-[#5B6B82]">{opp.timings}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Laptop className="w-4 h-4 text-[#00A8F0] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[#0A1A33]">Commitment:</strong>
                          <span className="text-[#5B6B82]">{opp.commitment}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <DollarSign className="w-4 h-4 text-[#00A8F0] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[#0A1A33]">Remuneration:</strong>
                          <span className="text-emerald-700 font-semibold">{opp.remuneration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Core Responsibilities */}
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-2">
                      Core Scope:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#5B6B82] mb-6">
                      {opp.keyResponsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply selection button */}
                  <button
                    type="button"
                    onClick={() => handleOpportunitySelect(opp)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isSelected
                        ? "bg-[#0B3A8C] text-white shadow-md"
                        : "bg-[#EAF5FF] text-[#0B3A8C] hover:bg-[#d4ebfc]"
                    }`}
                  >
                    <span>{isSelected ? "Selected for Application" : `Apply as ${opp.title}`}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. APPLICATION FORM WITH REAL BACKEND & DATABASE CONNECTION */}
      <section id="application-form-section" ref={formRef} className="py-20 md:py-28 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OFFICIAL APPLICATION"
            title="Submit Your"
            gradientWord="Candidate Profile"
            subtitle="Complete your application below. Applications are stored in our backend database and reviewed by our Academic Leadership within 48 hours."
          />

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D8E8F8] shadow-xl relative">
            {submittedData ? (
              <div className="py-10 px-4 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-600 mx-auto flex items-center justify-center mb-5 animate-in zoom-in-75">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-['Rajdhani'] font-bold text-3xl text-[#0A1A33] mb-2">
                  Application Successfully Stored in Database!
                </h3>
                <p className="text-base text-[#5B6B82] max-w-lg mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="font-bold text-[#0A1A33]">{submittedData.fullName}</span>. Your candidacy for the role of <span className="font-bold text-[#0B3A8C]">{submittedData.opportunity}</span> has been officially recorded in our platform database.
                </p>

                <div className="bg-[#EAF5FF] rounded-2xl p-6 max-w-md mx-auto text-left text-xs sm:text-sm text-[#0B3A8C] mb-8 space-y-2.5 border border-[#CDE3FB]">
                  <div className="flex items-center justify-between pb-2 border-b border-[#CDE3FB]">
                    <span className="text-[#5B6B82]">Application ID:</span>
                    <span className="font-mono font-bold text-[#0B3A8C]">{submittedData.id}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5B6B82]">Applied Role:</span>
                    <span className="font-bold">{submittedData.opportunity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5B6B82]">Domain Expertise:</span>
                    <span className="font-bold">{submittedData.expertise}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5B6B82]">Email Notification:</span>
                    <span className="font-bold">{submittedData.email}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5B6B82]">Application Status:</span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-700">
                      Under Academic Review (48 Hours)
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedData(null);
                      setFormData({
                        opportunity: opportunities[0].title,
                        fullName: "",
                        email: "",
                        phone: "",
                        expertise: "Cybersecurity & Cloud Defense",
                        experience: "3 - 5 Years",
                        linkedin: "",
                        resumeFile: null,
                        resumeName: "",
                        introduction: ""
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl border border-[#D8E8F8] text-xs font-bold text-[#0B3A8C] hover:bg-[#EAF5FF] transition-colors"
                  >
                    Submit Another Application
                  </button>

                  <Link
                    to="/contact"
                    className="px-6 py-2.5 rounded-xl bg-[#0B3A8C] text-white text-xs font-bold hover:bg-[#1565C0] transition-colors"
                  >
                    Contact Academic Affairs
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold">
                    {errorMsg}
                  </div>
                )}

                {/* 1. Opportunity Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-2">
                    Select Application Opportunity *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {opportunities.map((opp) => {
                      const isSelected = formData.opportunity === opp.title;
                      return (
                        <button
                          key={opp.id}
                          type="button"
                          onClick={() => {
                            setSelectedOpportunity(opp.id);
                            setFormData({ ...formData, opportunity: opp.title });
                          }}
                          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#0B3A8C] text-white border-[#0B3A8C] shadow-md"
                              : "bg-[#F8FBFE] text-[#5B6B82] border-[#D8E8F8] hover:border-[#00A8F0]"
                          }`}
                        >
                          <div className="font-['Rajdhani'] font-bold text-lg mb-0.5">
                            {opp.title}
                          </div>
                          <div className={`text-[11px] leading-tight ${isSelected ? "text-blue-100" : "text-[#5B6B82]"}`}>
                            {opp.badge}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#5B6B82] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Murthy"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm border border-[#D8E8F8] focus:outline-none focus:ring-2 focus:ring-[#00A8F0]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#5B6B82] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="anand@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm border border-[#D8E8F8] focus:outline-none focus:ring-2 focus:ring-[#00A8F0]"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Phone & LinkedIn */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#5B6B82] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm border border-[#D8E8F8] focus:outline-none focus:ring-2 focus:ring-[#00A8F0]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1.5">
                      LinkedIn Profile URL *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5B6B82]">
                        <LinkedInIcon />
                      </div>
                      <input
                        type="url"
                        required
                        placeholder="https://linkedin.com/in/username"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm border border-[#D8E8F8] focus:outline-none focus:ring-2 focus:ring-[#00A8F0]"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Expertise & Experience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1.5">
                      Primary Technical Expertise *
                    </label>
                    <select
                      value={formData.expertise}
                      onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm border border-[#D8E8F8] focus:outline-none focus:ring-2 focus:ring-[#00A8F0] bg-white cursor-pointer"
                    >
                      <option value="Cybersecurity & Cloud Defense">Cybersecurity & Cloud Defense</option>
                      <option value="Artificial Intelligence & Machine Learning">Artificial Intelligence & Machine Learning (AI/ML)</option>
                      <option value="Full Stack Cloud Native Engineering">Full Stack Cloud Native Engineering</option>
                      <option value="Database Architecture (SQL, Oracle, Postgres, Mongo)">Database Architecture (SQL, Oracle, Postgres, Mongo)</option>
                      <option value="Cloud DevOps, CI/CD & SRE">Cloud DevOps, CI/CD & SRE</option>
                      <option value="Product Management & Tech Leadership">Product Management & Tech Leadership</option>
                      <option value="Technical Career Coaching & Hiring">Technical Career Coaching & Hiring</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1.5">
                      Total Experience *
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm border border-[#D8E8F8] focus:outline-none focus:ring-2 focus:ring-[#00A8F0] bg-white cursor-pointer"
                    >
                      <option value="3 - 5 Years">3 - 5 Years</option>
                      <option value="5 - 8 Years">5 - 8 Years</option>
                      <option value="8 - 12 Years">8 - 12 Years</option>
                      <option value="12+ Years (Staff / Principal / Director)">12+ Years (Staff / Principal / Director)</option>
                    </select>
                  </div>
                </div>

                {/* 5. Resume Upload */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1.5">
                    Resume Upload (PDF / DOCX up to 10MB) *
                  </label>
                  <div className="relative border-2 border-dashed border-[#D8E8F8] hover:border-[#00A8F0] rounded-2xl p-6 text-center transition-all bg-[#F8FBFE]">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center">
                      <Upload className="w-8 h-8 text-[#00A8F0] mb-2" />
                      {formData.resumeName ? (
                        <div className="flex items-center gap-2 text-sm font-bold text-[#0B3A8C]">
                          <FileText className="w-4 h-4" />
                          <span>{formData.resumeName}</span>
                        </div>
                      ) : (
                        <>
                          <p className="text-sm font-semibold text-[#0A1A33]">
                            Click to select or drag and drop your resume
                          </p>
                          <p className="text-xs text-[#5B6B82] mt-1">
                            Supported formats: PDF, DOCX (Max: 10MB)
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* 6. Introduction */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1.5">
                    Introduction & Teaching / Mentoring Philosophy *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your production engineering background, key systems built, past teaching or mentoring experience, and why you wish to join RIS NextGen..."
                    value={formData.introduction}
                    onChange={(e) => setFormData({ ...formData, introduction: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-[#D8E8F8] focus:outline-none focus:ring-2 focus:ring-[#00A8F0] resize-none"
                  />
                </div>

                {/* Submit button */}
                <CTAButton
                  type="submit"
                  variant="gradient"
                  size="lg"
                  fullWidth
                  disabled={loading}
                  icon={Send}
                  iconPosition="right"
                >
                  {loading ? "Connecting to Database..." : `Submit Application for ${formData.opportunity}`}
                </CTAButton>

                <p className="text-center text-[11px] text-[#5B6B82]">
                  🔒 Your application is submitted directly to the verified RIS NextGen academic repository.
                </p>
              </form>
            )}
          </div>

          {/* Database Verification Drawer: Displays Real Stored Applications */}
          {recentApplications.length > 0 && (
            <div className="mt-12 p-6 rounded-3xl bg-[#F8FBFE] border border-[#D8E8F8]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#00A8F0]" />
                  <h4 className="font-['Rajdhani'] font-bold text-lg text-[#0A1A33]">
                    Active Applications Repository ({recentApplications.length} Recorded in Database)
                  </h4>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  Live DB Synced
                </span>
              </div>

              <div className="space-y-3">
                {recentApplications.slice(0, 3).map((app) => (
                  <div
                    key={app.id}
                    className="p-4 rounded-2xl bg-white border border-[#D8E8F8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono font-bold text-[#0B3A8C]">{app.id}</span>
                        <span className="px-2 py-0.5 rounded-md font-bold text-[11px] bg-[#EAF5FF] text-[#0B3A8C]">
                          {app.opportunity}
                        </span>
                      </div>
                      <div className="font-bold text-[#0A1A33] text-sm">{app.fullName}</div>
                      <div className="text-[#5B6B82]">Expertise: {app.expertise} &bull; {app.experience}</div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                        {app.status || 'Under Review'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
