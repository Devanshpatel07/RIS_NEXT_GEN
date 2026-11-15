import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, CreditCard, Calendar } from 'lucide-react';
import { courses, RESERVATION_BATCHES } from '../data/courses';
import CTAButton from './CTAButton';
import { ApiService } from '../services/api';
import { DatabaseService } from '../services/db';

export default function EnrollModal({ isOpen, onClose, selectedCourse, onSuccess }) {
  const [courseId, setCourseId] = useState(selectedCourse?.id || courses[0]?.id);
  const [prevSelectedId, setPrevSelectedId] = useState(selectedCourse?.id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedBatchId, setSelectedBatchId] = useState(RESERVATION_BATCHES[0].id);
  const [paymentOption, setPaymentOption] = useState('emi'); // 'emi' or 'full'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [reservationReceipt, setReservationReceipt] = useState(null);

  // Sync courseId when selectedCourse prop changes without cascading effect
  if (selectedCourse?.id && selectedCourse.id !== prevSelectedId) {
    setPrevSelectedId(selectedCourse.id);
    setCourseId(selectedCourse.id);
  }

  if (!isOpen) return null;

  const currentCourse = courses.find((c) => c.id === courseId) || courses[0];
  const selectedBatch = RESERVATION_BATCHES.find((b) => b.id === selectedBatchId) || RESERVATION_BATCHES[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const reservationPayload = {
      courseId: currentCourse.id,
      courseTitle: currentCourse.title,
      fullName: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      batchId: selectedBatch.id,
      batchLabel: selectedBatch.label,
      batchDate: selectedBatch.date,
      paymentOption,
      fee: currentCourse.price
    };

    try {
      const result = await ApiService.submitCourseReservation(reservationPayload);
      setReservationReceipt(result);
    } catch {
      const fallback = DatabaseService.saveReservation(reservationPayload);
      setReservationReceipt(fallback);
    } finally {
      setIsSubmitting(false);
      setIsDone(true);
      if (onSuccess) onSuccess();
    }
  };

  const handleClose = () => {
    setIsDone(false);
    setReservationReceipt(null);
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
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-['Rajdhani'] font-bold text-3xl text-[#0A1A33] mb-1">
                Seat Reserved Successfully!
              </h4>
              <p className="text-xs text-[#5B6B82] mb-5">
                Provisional enrollment confirmation & academic verification receipt
              </p>

              {/* Confirmed Details Summary Card */}
              <div className="p-4 rounded-2xl bg-[#F8FBFE] border border-[#D8E8F8] text-left max-w-md mx-auto mb-5 space-y-2.5 text-xs shadow-xs">
                <div className="flex items-center justify-between pb-2 border-b border-[#E1ECF8]">
                  <span className="text-[#5B6B82]">Reservation ID:</span>
                  <span className="font-mono font-bold text-[#0B3A8C]">{reservationReceipt?.reservationId || reservationReceipt?.id || 'RSV-2026-CONFIRMED'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#5B6B82]">Student Name:</span>
                  <span className="font-semibold text-[#0A1A33]">{name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#5B6B82]">Program:</span>
                  <span className="font-semibold text-[#0A1A33] line-clamp-1">{currentCourse.title}</span>
                </div>

                {/* Prominently Display Confirmed Batch */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#EAF5FF] border border-[#00A8F0]/40">
                  <span className="font-bold text-[#0B3A8C] flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#00A8F0]" />
                    Confirmed Batch:
                  </span>
                  <span className="font-bold text-[#0B3A8C] text-sm">
                    {selectedBatch.label}: {selectedBatch.date}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#5B6B82]">Payment Preference:</span>
                  <span className="font-semibold text-[#0A1A33]">
                    {paymentOption === 'emi' ? 'Zero-Cost EMI' : 'One-Time Payment'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#5B6B82]">Official Live Class Time:</span>
                  <span className="font-semibold text-[#0A1A33]">6:00 PM IST (Online)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#EAF5FF] border border-[#CBE5FC] text-xs text-[#0B3A8C] max-w-md mx-auto mb-6">
                <strong>Next Step:</strong> Welcome kit and LMS portal credentials have been dispatched to <strong>{email}</strong>. Your academic advisor will contact you at <strong>{phone}</strong> before your batch commences on <strong>{selectedBatch.date}</strong>.
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
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-[#0A1A33]">
                    Select Cohort Timing
                  </label>
                  <span className="text-[11px] text-[#00A8F0] font-semibold">
                    Live 6:00 PM IST
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  {RESERVATION_BATCHES.map((batch) => {
                    const isSelected = selectedBatchId === batch.id;
                    return (
                      <button
                        key={batch.id}
                        type="button"
                        onClick={() => setSelectedBatchId(batch.id)}
                        className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#00A8F0] bg-[#EAF5FF] text-[#0B3A8C] font-bold shadow-xs ring-1 ring-[#00A8F0]'
                            : 'border-[#D8E8F8] bg-white text-[#5B6B82] hover:bg-slate-50 hover:border-[#1565C0]/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`text-[11px] font-bold uppercase tracking-wider ${isSelected ? 'text-[#0B3A8C]' : 'text-[#5B6B82]'}`}>
                            {batch.label}
                          </span>
                          {isSelected ? (
                            <CheckCircle2 className="w-4 h-4 text-[#00A8F0] shrink-0" />
                          ) : (
                            <span className="w-4 h-4 rounded-full border border-[#D8E8F8] shrink-0" />
                          )}
                        </div>
                        <span className={`text-xs ${isSelected ? 'text-[#0A1A33] font-bold' : 'text-[#0A1A33] font-medium'}`}>
                          {batch.date}
                        </span>
                      </button>
                    );
                  })}
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
