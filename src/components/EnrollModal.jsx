import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, CreditCard } from 'lucide-react';
import { courses } from '../data/courses';
import CTAButton from './CTAButton';

export default function EnrollModal({ isOpen, onClose, selectedCourse, onSuccess }) {
  const [courseId, setCourseId] = useState(selectedCourse?.id || courses[0]?.id);
  const [prevSelectedId, setPrevSelectedId] = useState(selectedCourse?.id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cohortDate, setCohortDate] = useState('15 Nov 2026 (Weekend Batch)');
  const [paymentOption, setPaymentOption] = useState('emi'); // 'emi' or 'full'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Sync courseId when selectedCourse prop changes without cascading effect
  if (selectedCourse?.id && selectedCourse.id !== prevSelectedId) {
    setPrevSelectedId(selectedCourse.id);
    setCourseId(selectedCourse.id);
  }

  if (!isOpen) return null;

  const currentCourse = courses.find((c) => c.id === courseId) || courses[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      if (onSuccess) onSuccess();
    }, 700);
  };

  const handleClose = () => {
    setIsDone(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1A33]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#D8E8F8] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] p-6 text-white relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-xs text-white mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#00A8F0]" />
            <span>Fast-Track Admission</span>
          </div>
          <h3 className="font-['Rajdhani'] font-bold text-2xl sm:text-3xl">
            Reserve Your Cohort Seat
          </h3>
          <p className="text-xs sm:text-sm text-blue-100/80 mt-1">
            Complete your application in 60 seconds. Our academic panel will verify your eligibility.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isDone ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-['Rajdhani'] font-bold text-3xl text-[#0A1A33] mb-2">
                Seat Reserved Successfully!
              </h4>
              <p className="text-sm text-[#5B6B82] max-w-md mx-auto mb-6">
                Congratulations, <strong className="text-[#0A1A33]">{name}</strong>! Your provisional enrollment in <strong className="text-[#0B3A8C]">{currentCourse.title}</strong> has been secured. Your welcome kit and login credentials have been dispatched to <strong className="text-[#0A1A33]">{email}</strong>.
              </p>
              <div className="p-4 rounded-2xl bg-[#EAF5FF] border border-[#CBE5FC] text-xs text-[#0B3A8C] max-w-md mx-auto mb-6">
                <strong>Next Step:</strong> Your dedicated student success manager will call you at <strong>{phone}</strong> to guide you through your onboarding schedule.
              </div>
              <CTAButton variant="gradient" size="md" onClick={handleClose}>
                Done & Return to Courses
              </CTAButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Selected Course Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-[#0A1A33] uppercase tracking-wider mb-1">
                  Selected Program
                </label>
                <select
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8E8F8] bg-slate-50 text-sm font-semibold text-[#0A1A33] focus:ring-2 focus:ring-[#00A8F0] focus:outline-none cursor-pointer"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} — ₹{c.price.toLocaleString('en-IN')}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pricing Overview Pill */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#EAF5FF] border border-[#CBE5FC]">
                <div>
                  <span className="text-xs text-[#5B6B82] block">Cohort Fee (After Scholarship)</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-['Rajdhani'] font-bold text-2xl text-[#0B3A8C]">
                      ₹{currentCourse.price.toLocaleString('en-IN')}
                    </span>
                    {currentCourse.oldPrice && (
                      <span className="text-xs text-[#5B6B82] line-through">
                        ₹{currentCourse.oldPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-1 rounded-md block mb-1">
                    35% Fee Waived
                  </span>
                  <span className="text-[11px] text-[#1565C0]">
                    Zero-Cost EMI from ₹{Math.round(currentCourse.price / 12).toLocaleString('en-IN')}/mo
                  </span>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#0A1A33] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E8F8] text-sm focus:ring-2 focus:ring-[#00A8F0] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0A1A33] mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E8F8] text-sm focus:ring-2 focus:ring-[#00A8F0] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0A1A33] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E8F8] text-sm focus:ring-2 focus:ring-[#00A8F0] focus:outline-none"
                />
              </div>

              {/* Cohort Date Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#0A1A33] mb-1">
                  Select Cohort Timing
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    '15 Nov 2026 (Weekend Batch)',
                    '25 Nov 2026 (Weekday Evening)'
                  ].map((batch) => (
                    <button
                      key={batch}
                      type="button"
                      onClick={() => setCohortDate(batch)}
                      className={`p-2.5 rounded-xl border text-left flex items-center justify-between cursor-pointer ${
                        cohortDate === batch
                          ? 'border-[#00A8F0] bg-[#EAF5FF] text-[#0B3A8C] font-bold'
                          : 'border-[#D8E8F8] text-[#5B6B82] hover:bg-slate-50'
                      }`}
                    >
                      <span>{batch}</span>
                      {cohortDate === batch && <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8F0]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Preferences */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-[#0A1A33] mb-1">
                  Preferred Payment Mode
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div
                    onClick={() => setPaymentOption('emi')}
                    className={`p-3 rounded-xl border text-xs cursor-pointer ${
                      paymentOption === 'emi'
                        ? 'border-[#1565C0] bg-[#EAF5FF] text-[#0B3A8C] font-bold'
                        : 'border-[#D8E8F8] text-[#5B6B82]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold mb-0.5">
                      <CreditCard className="w-3.5 h-3.5 text-[#1565C0]" />
                      <span>Zero-Cost EMI</span>
                    </div>
                    <span>Pay in 6, 9 or 12 installments</span>
                  </div>

                  <div
                    onClick={() => setPaymentOption('full')}
                    className={`p-3 rounded-xl border text-xs cursor-pointer ${
                      paymentOption === 'full'
                        ? 'border-[#1565C0] bg-[#EAF5FF] text-[#0B3A8C] font-bold'
                        : 'border-[#D8E8F8] text-[#5B6B82]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold mb-0.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#00A8F0]" />
                      <span>One-Time Payment</span>
                    </div>
                    <span>Extra ₹2,000 instant discount</span>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <CTAButton
                  type="submit"
                  variant="gradient"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Confirming Reservation...' : 'Confirm Reservation & Proceed'}
                </CTAButton>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-[#5B6B82] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  100% Risk-Free Guarantee
                </span>
                <span>&bull;</span>
                <span>7-day money-back policy</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
