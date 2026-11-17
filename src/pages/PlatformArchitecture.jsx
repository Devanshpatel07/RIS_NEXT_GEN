import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Layout,
  Server,
  Database,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

// Architecture layers dataset
const architectureLayers = [
  {
    id: "frontend",
    title: "1. Frontend Layer",
    subtitle: "Client-facing responsive web application & student interface",
    icon: Layout,
    color: "#00A8F0",
    status: "Implemented & Live",
    components: [
      { name: "Responsive Web UI", desc: "React 19 + Tailwind CSS v4 design system tested on mobile, tablet, and 4K displays.", status: "Live" },
      { name: "Dynamic Course Catalog", desc: "Client-side search, filtering by domain, and upcoming cohort scheduling.", status: "Live" },
      { name: "Career Application Portal", desc: "Integrated application form for Tutors, Mentors, and Career Guidance Experts.", status: "Live" },
      { name: "LMS Learning Portal", desc: "Stream player for authorized recorded sessions and downloadable class assets.", status: "Live" },
      { name: "Database Learning Lab", desc: "Interactive query engine and syntax explorer for SQL and MongoDB.", status: "Live" },
      { name: "Student Progress Dashboard", desc: "Granular syllabus tracking and module milestone validation.", status: "Live" }
    ],
    technicalSpecs: [
      "Technology: React 19, Vite, Tailwind CSS v4, React Router v7",
      "State Management: Reactive local database state + async API service",
      "Performance: Sub-second bundle load, tree-shaken Lucide icons",
      "Accessibility: WCAG 2.1 AA compliant contrast & responsive touch targets"
    ]
  },
  {
    id: "backend",
    title: "2. Backend Layer",
    subtitle: "Enterprise REST APIs, security validation, and business logic",
    icon: Server,
    color: "#0B3A8C",
    status: "Implemented & Active",
    components: [
      { name: "Authentication & RBAC", desc: "Role-based access control protecting recorded sessions for enrolled learners.", status: "Live" },
      { name: "Career Application APIs", desc: "Endpoints (/api/careers/apply) validating, processing, and storing applications.", status: "Live" },
      { name: "Enrollment Management APIs", desc: "Fast-track cohort seat reservation and automated verification pipelines.", status: "Live" },
      { name: "Course Management APIs", desc: "REST endpoints delivering course metadata, schedules, and faculty profiles.", status: "Live" },
      { name: "Webhook & Notification Service", desc: "Automated email confirmations and mentor interview routing.", status: "Planned" }
    ],
    technicalSpecs: [
      "Protocols: REST over HTTPS, JSON payloads, Bearer token auth",
      "Validation: Strict input sanitization, file size/MIME verification",
      "Middleware: Vite Dev Middleware & Node.js microservices",
      "Security: Rate-limiting, CORS whitelisting, zero-trust endpoint access"
    ]
  },
  {
    id: "database",
    title: "3. Database Layer",
    subtitle: "Hybrid relational and document persistence engines",
    icon: Database,
    color: "#1565C0",
    status: "Implemented & Active",
    components: [
      { name: "Relational DB (PostgreSQL / SQL)", desc: "ACID-compliant storage for users, enrollments, billing, and credentials.", status: "Live" },
      { name: "Document DB (MongoDB)", desc: "Flexible BSON storage for curriculum capstones, assignments, and audit logs.", status: "Live" },
      { name: "Application Repository", desc: "Persistent store for Tutor, Mentor, and Guidance Expert candidate profiles.", status: "Live" },
      { name: "Progress & Milestone Records", desc: "Per-learner module completion states and timestamp logs.", status: "Live" },
      { name: "Enterprise Multi-Region Standby", desc: "Active-passive automated failover for continuous availability.", status: "Planned" }
    ],
    technicalSpecs: [
      "Relational Engine: ANSI SQL, PostgreSQL 17, Oracle DB compatible schemas",
      "NoSQL Engine: MongoDB with compound indexing on student collections",
      "Data Integrity: Foreign key constraints, unique email indices",
      "Backup Cadence: Automated snapshots with point-in-time recovery"
    ]
  },
  {
    id: "lms",
    title: "4. Learning Management Layer",
    subtitle: "Live cohort streaming, recorded archives, and curriculum assets",
    icon: GraduationCap,
    color: "#00A8F0",
    status: "Implemented & Active",
    components: [
      { name: "Live Masterclass Infrastructure", desc: "Interactive live cohort streaming scheduled at 6:00 PM IST on training days.", status: "Live" },
      { name: "Authorized Recording Archive", desc: "HD session replays uploaded within 2 hours, gated exclusively to enrolled students.", status: "Live" },
      { name: "Learning Resources Repository", desc: "Downloadable architectural slides, starter repos, and code blueprints.", status: "Live" },
      { name: "Student Progress Engine", desc: "Interactive module completion verification and graduation status.", status: "Live" },
      { name: "Automated Code Assessment Engine", desc: "Automated test runner for learner capstone submissions.", status: "Planned" }
    ],
    technicalSpecs: [
      "Media Streaming: Adaptive bitrate HTML5 video with authenticated tokens",
      "Schedule Engine: Weekday Evening (after 5 PM) & Weekend (7 AM - 10 PM IST)",
      "Asset Delivery: Low-latency global CDN edge caching",
      "Integrations: GitHub repository sync for lab assignments"
    ]
  },
  {
    id: "admin",
    title: "5. Admin & Governance Layer",
    subtitle: "Institutional controls, curriculum authoring, and faculty management",
    icon: ShieldCheck,
    color: "#0B3A8C",
    status: "Core Live / Extensible",
    components: [
      { name: "Application Management", desc: "Review candidate profiles, filter by domain expertise, and schedule interviews.", status: "Live" },
      { name: "Course Schedule Management", desc: "Configure cohort launch schedules, live timings, and seat availability.", status: "Live" },
      { name: "Student Enrollment Governance", desc: "Approve fast-track admissions and grant role-based LMS access.", status: "Live" },
      { name: "Hiring Partner Integration", desc: "Manage verified relationships with partner organizations.", status: "Live" },
      { name: "Comprehensive Analytics Dashboard", desc: "Cohort completion metrics, attendance tracking, and drop-off heatmaps.", status: "Planned" }
    ],
    technicalSpecs: [
      "Role-Based Access: Superadmin, Academic Dean, Mentor, Learner tiers",
      "Audit Logging: Immutable tracking of all enrollment and status edits",
      "Security: Multi-factor authentication readiness, strict session timeouts"
    ]
  }
];

export default function PlatformArchitecture() {
  const [selectedLayerId, setSelectedLayerId] = useState("frontend");
  const selectedLayer = architectureLayers.find((l) => l.id === selectedLayerId) || architectureLayers[0];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#EAF5FF]/80 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5B6B82] mb-6">
            <Link to="/" className="hover:text-[#0B3A8C] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/about" className="hover:text-[#0B3A8C] transition-colors">About</Link>
            <span>/</span>
            <span className="text-[#00A8F0]">Platform Architecture</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FF] border border-[#00A8F0]/30 text-[#0B3A8C] text-xs font-semibold tracking-wider uppercase mb-5 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-[#00A8F0]" />
              <span>Enterprise Technical Blueprint • Client-Facing Specification</span>
            </div>

            <h1 className="font-['Rajdhani'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A1A33] tracking-tight leading-[1.1] mb-6">
              Client-Facing Platform{' '}
              <span className="bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] bg-clip-text text-transparent">
                Architecture Overview
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5B6B82] leading-relaxed mb-6">
              A comprehensive technical overview of the RIS NextGen enterprise training architecture. Engineered for high-concurrency live masterclasses, secure role-based LMS streaming, and resilient hybrid database persistence.
            </p>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-[#0A1A33]">Implemented & Live Features</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="text-[#5B6B82]">Planned Roadmap Features</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISUAL ARCHITECTURE STACK DIAGRAM */}
      <section className="py-16 bg-white border-y border-[#E1ECF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="END-TO-END FLOW"
            title="Layered Architecture"
            gradientWord="System Topology"
            subtitle="Explore how incoming client requests traverse our frontend, secure backend APIs, persistent databases, and learning management systems."
          />

          {/* Interactive Stack Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {architectureLayers.map((layer) => {
              const Icon = layer.icon;
              const isSelected = selectedLayerId === layer.id;
              return (
                <div
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`p-5 rounded-3xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#0B3A8C] text-white border-[#0B3A8C] shadow-xl ring-2 ring-[#00A8F0]/40 -translate-y-1.5"
                      : "bg-[#F8FBFE] text-[#0A1A33] border-[#D8E8F8] hover:border-[#00A8F0]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? "bg-white/20 text-white" : "bg-[#EAF5FF] text-[#0B3A8C]"}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isSelected ? "bg-emerald-400 text-[#0A1A33]" : "bg-emerald-100 text-emerald-800"}`}>
                        Active
                      </span>
                    </div>

                    <h3 className={`font-['Rajdhani'] font-bold text-lg mb-1 ${isSelected ? "text-white" : "text-[#0A1A33]"}`}>
                      {layer.title.replace(/^\d+\.\s*/, '')}
                    </h3>
                    <p className={`text-xs line-clamp-2 leading-relaxed ${isSelected ? "text-blue-100" : "text-[#5B6B82]"}`}>
                      {layer.subtitle}
                    </p>
                  </div>

                  <div className={`mt-4 pt-3 border-t text-[11px] font-semibold flex items-center justify-between ${isSelected ? "border-white/20 text-[#00A8F0]" : "border-[#E1ECF8] text-[#0B3A8C]"}`}>
                    <span>{layer.components.length} Subsystems</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SELECTED LAYER DEEP-DIVE SPECIFICATION */}
      <section className="py-20 bg-[#F8FBFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D8E8F8] shadow-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#E1ECF8]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#00A8F0] uppercase tracking-wider">
                    Detailed Specification
                  </span>
                  <span className="text-[#5B6B82]">&bull;</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                    {selectedLayer.status}
                  </span>
                </div>
                <h2 className="font-['Rajdhani'] font-extrabold text-3xl sm:text-4xl text-[#0A1A33]">
                  {selectedLayer.title}
                </h2>
                <p className="text-sm text-[#5B6B82] mt-1">
                  {selectedLayer.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#5B6B82]">Select Layer:</span>
                <select
                  value={selectedLayerId}
                  onChange={(e) => setSelectedLayerId(e.target.value)}
                  className="px-3 py-2 rounded-xl text-xs font-bold border border-[#D8E8F8] bg-[#F8FBFE] text-[#0B3A8C] cursor-pointer"
                >
                  {architectureLayers.map((l) => (
                    <option key={l.id} value={l.id}>{l.title}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Components Grid */}
            <div className="mt-8">
              <h3 className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33] mb-4">
                Subsystems & Functional Components:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {selectedLayer.components.map((comp, idx) => {
                  const isLive = comp.status === "Live";
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#F8FBFE] border border-[#D8E8F8] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-['Rajdhani'] font-bold text-lg text-[#0A1A33]">
                            {comp.name}
                          </h4>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isLive
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                              : "bg-amber-100 text-amber-800 border border-amber-200"
                          }`}>
                            {isLive ? "Implemented & Live" : "Planned Roadmap"}
                          </span>
                        </div>
                        <p className="text-xs text-[#5B6B82] leading-relaxed">
                          {comp.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-2 border-t border-[#E1ECF8] flex items-center gap-1.5 text-[11px] font-semibold text-[#0B3A8C]">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${isLive ? "text-emerald-500" : "text-amber-500"}`} />
                        <span>{isLive ? "Operational in Production" : "Target: Q1 2027 Sprint"}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mt-10 pt-6 border-t border-[#E1ECF8]">
              <h3 className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33] mb-3">
                Technical Specifications & Security Standards:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#5B6B82]">
                {selectedLayer.technicalSpecs.map((spec, sIdx) => (
                  <div key={sIdx} className="p-3.5 rounded-xl bg-white border border-[#D8E8F8] flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#00A8F0] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLIENT PRESENTATION CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-['Rajdhani'] font-extrabold text-2xl sm:text-3xl tracking-tight">
              Presenting to Prospective Clients or Partners?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 mt-1 max-w-xl">
              Our engineering team provides dedicated architectural walkthroughs and custom enterprise white-label demonstrations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-white text-[#0B3A8C] font-bold text-xs hover:bg-[#EAF5FF] transition-colors"
            >
              Request Architecture Consultation
            </Link>
            <Link
              to="/lms"
              className="px-6 py-3 rounded-xl border border-white text-white font-bold text-xs hover:bg-white/10 transition-colors"
            >
              Test LMS Demo Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
