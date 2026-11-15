import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  Globe,
  Clock,
  ArrowUp,
  ShieldCheck,
  Award
} from 'lucide-react';
import Logo from './Logo';

// Clean SVG Brand Icons for Footer (LinkedIn, Instagram, Facebook)
const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { component: LinkedInIcon, href: 'https://www.linkedin.com/company/risnextgen', label: 'LinkedIn' },
    { component: InstagramIcon, href: 'https://www.instagram.com/risnextgen/', label: 'Instagram' },
    { component: FacebookIcon, href: 'https://www.facebook.com/risnextgen', label: 'Facebook' },
  ];

  return (
    <footer className="relative bg-[#07152A] text-white overflow-hidden border-t border-[#1565C0]/30">
      {/* Background radial glow and tech grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00A8F0_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00A8F0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#1565C0]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">

          {/* Col 1: Brand Info & Mission */}
          <div className="lg:col-span-2">
            <Logo variant="dark" size="lg" />
            <p className="mt-5 text-sm sm:text-base text-blue-100/75 leading-relaxed max-w-sm">
              RIS NextGen is an elite tech and executive education platform. We bridge the gap between academic theory and high-growth industry demands through live cohorts, top mentors, and real-world capstone projects.
            </p>

            {/* Accreditations badge */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-blue-200">
                <ShieldCheck className="w-4 h-4 text-[#00A8F0]" />
                <span>Govt & Industry Recognized</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-blue-200">
                <Award className="w-4 h-4 text-[#00A8F0]" />
                <span>15+ Industry Experts &bull; 500+ Learners</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map((item, idx) => {
                const IconComponent = item.component;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-200 hover:text-white hover:bg-gradient-to-r hover:from-[#1565C0] hover:to-[#00A8F0] hover:border-transparent transition-all duration-200 hover:-translate-y-1 cursor-pointer"
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-['Rajdhani'] font-bold text-lg text-white tracking-wide uppercase flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#00A8F0]"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100/70">
              <li>
                <Link to="/" className="hover:text-[#00A8F0] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#00A8F0] transition-colors">Explore All Courses</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#00A8F0] transition-colors">Careers & Hiring</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00A8F0] transition-colors">About Us & Mission</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00A8F0] transition-colors">Contact Admissions</Link>
              </li>
              <li>
                <a href="/#schedule" className="hover:text-[#00A8F0] transition-colors">Training Schedule</a>
              </li>
              <li>
                <a href="/#partners" className="hover:text-[#00A8F0] transition-colors">Hiring Partners</a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-[#00A8F0] transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Domains */}
          <div>
            <h4 className="font-['Rajdhani'] font-bold text-lg text-white tracking-wide uppercase flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#00A8F0]"></span>
              Popular Domains
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100/70">
              <li>
                <Link to="/courses?category=Technology" className="hover:text-[#00A8F0] transition-colors">
                  Generative AI & LLMs
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Technology" className="hover:text-[#00A8F0] transition-colors">
                  Full Stack Cloud Engineering
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Data Science" className="hover:text-[#00A8F0] transition-colors">
                  Data Science & Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Business" className="hover:text-[#00A8F0] transition-colors">
                  Product Management Mastery
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Finance" className="hover:text-[#00A8F0] transition-colors">
                  Financial Modeling & Valuation
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Technology" className="hover:text-[#00A8F0] transition-colors">
                  DevOps & Cloud Native Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Admissions */}
          <div>
            <h4 className="font-['Rajdhani'] font-bold text-lg text-white tracking-wide uppercase flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#00A8F0]"></span>
              Admissions Desk
            </h4>
            <div className="space-y-3.5 text-sm text-blue-100/75">
              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-[#00A8F0] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Our Location: Remote / Online</span>
                  <span className="text-xs text-blue-200/80">Work Model: 100% Remote &bull; Training Mode: Online</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00A8F0] shrink-0" />
                <span>+91 98765 43210 / +91 (80) 4120 9000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00A8F0] shrink-0" />
                <span>risnextgenpvtltd@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#00A8F0] shrink-0" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM IST</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A8F0] hover:text-white transition-colors"
              >
                <span>Online Admissions & Contact Help →</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/60">
          <p>© 2026 RIS NextGen. All rights reserved. Empowering future-ready leaders.</p>

          <div className="flex flex-wrap items-center gap-5">
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span>&bull;</span>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#honor" className="hover:text-white transition-colors">Honor Code</a>
            <span>&bull;</span>
            <a href="#refund" className="hover:text-white transition-colors">Refund Policy</a>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="ml-2 w-8 h-8 rounded-lg bg-white/10 hover:bg-[#00A8F0] text-white flex items-center justify-center transition-all hover:-translate-y-1 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
