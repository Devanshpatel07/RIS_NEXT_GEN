import React, { useState } from 'react';
import { Send, CheckCircle2, User, Mail, Phone, BookOpen } from 'lucide-react';
import { courses } from '../data/courses';
import CTAButton from './CTAButton';

export default function LeadForm({ 
  preselectedCourse = '', 
  variant = "light",
  onSuccess
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseId: preselectedCourse || (courses[0]?.id || ''),
    experience: 'Fresher / College Student'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) onSuccess(formData);
    }, 700);
  };

  const isDark = variant === 'dark';

  if (submitted) {
    return (
      <div className={`p-8 rounded-2xl text-center border ${isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-[#EAF5FF] border-[#CDE3FB] text-[#0A1A33]'}`}>
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="font-['Rajdhani'] font-bold text-2xl mb-2">Request Received!</h4>
        <p className={`text-sm ${isDark ? 'text-blue-100/80' : 'text-[#5B6B82]'} max-w-sm mx-auto mb-4`}>
          Thank you, <span className="font-semibold">{formData.fullName}</span>. An academic advisor will reach out to you within 30 minutes on <span className="font-semibold">{formData.phone}</span>.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              courseId: courses[0]?.id || '',
              experience: 'Fresher / College Student'
            });
          }}
          className="text-xs font-semibold text-[#00A8F0] hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Full Name */}
      <div>
        <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-blue-100' : 'text-[#0A1A33]'}`}>
          Full Name
        </label>
        <div className="relative">
          <User className="w-4 h-4 text-[#5B6B82] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-[#00A8F0] transition-all ${
              isDark 
                ? 'bg-white/10 border-white/20 text-white placeholder-blue-200/50 focus:bg-white/15' 
                : 'bg-white border-[#D8E8F8] text-[#0A1A33] placeholder-slate-400'
            }`}
          />
        </div>
      </div>

      {/* Email Address */}
      <div>
        <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-blue-100' : 'text-[#0A1A33]'}`}>
          Email Address
        </label>
        <div className="relative">
          <Mail className="w-4 h-4 text-[#5B6B82] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="email"
            required
            placeholder="rahul@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-[#00A8F0] transition-all ${
              isDark 
                ? 'bg-white/10 border-white/20 text-white placeholder-blue-200/50 focus:bg-white/15' 
                : 'bg-white border-[#D8E8F8] text-[#0A1A33] placeholder-slate-400'
            }`}
          />
        </div>
      </div>

      {/* Phone Number */}
      <div>
        <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-blue-100' : 'text-[#0A1A33]'}`}>
          Phone / WhatsApp Number
        </label>
        <div className="relative">
          <Phone className="w-4 h-4 text-[#5B6B82] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-[#00A8F0] transition-all ${
              isDark 
                ? 'bg-white/10 border-white/20 text-white placeholder-blue-200/50 focus:bg-white/15' 
                : 'bg-white border-[#D8E8F8] text-[#0A1A33] placeholder-slate-400'
            }`}
          />
        </div>
      </div>

      {/* Select Course */}
      <div>
        <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-blue-100' : 'text-[#0A1A33]'}`}>
          Interested Program
        </label>
        <div className="relative">
          <BookOpen className="w-4 h-4 text-[#5B6B82] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <select
            value={formData.courseId}
            onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
            className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-[#00A8F0] transition-all appearance-none cursor-pointer ${
              isDark 
                ? 'bg-[#0B3A8C] border-white/20 text-white' 
                : 'bg-white border-[#D8E8F8] text-[#0A1A33]'
            }`}
          >
            {courses.map((c) => (
              <option key={c.id} value={c.id} className="text-[#0A1A33] bg-white">
                {c.title} ({c.category})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Experience Level */}
      <div>
        <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-blue-100' : 'text-[#0A1A33]'}`}>
          Current Status
        </label>
        <select
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-[#00A8F0] transition-all cursor-pointer ${
            isDark 
              ? 'bg-[#0B3A8C] border-white/20 text-white' 
              : 'bg-white border-[#D8E8F8] text-[#0A1A33]'
          }`}
        >
          <option value="Fresher / College Student" className="text-[#0A1A33] bg-white">Fresher / Final Year Student</option>
          <option value="1-3 Years Experience" className="text-[#0A1A33] bg-white">1 - 3 Years Working Professional</option>
          <option value="3+ Years Experience" className="text-[#0A1A33] bg-white">3+ Years Senior Professional</option>
          <option value="Non-Tech Switching" className="text-[#0A1A33] bg-white">Non-Tech Seeking Domain Switch</option>
        </select>
      </div>

      {/* Submit Button */}
      <CTAButton
        type="submit"
        variant={isDark ? 'white' : 'gradient'}
        size="lg"
        fullWidth
        disabled={loading}
        icon={Send}
        iconPosition="right"
        className="mt-2"
      >
        {loading ? 'Submitting Details...' : 'Request Free Callback'}
      </CTAButton>

      <p className={`text-[11px] text-center ${isDark ? 'text-blue-200/60' : 'text-[#5B6B82]'}`}>
        🔒 100% confidential. No spam. You will get a personalized curriculum roadmap.
      </p>
    </form>
  );
}
