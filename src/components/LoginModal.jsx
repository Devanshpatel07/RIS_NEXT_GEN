import React, { useState } from 'react';
import { X, LogIn, CheckCircle2, User, Lock } from 'lucide-react';
import CTAButton from './CTAButton';

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('learner@risnextgen.com');
  const [password, setPassword] = useState('••••••••');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 600);
  };

  const handleClose = () => {
    setIsLoggedIn(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1A33]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#D8E8F8] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] p-6 text-white relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
            <LogIn className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-['Rajdhani'] font-bold text-2xl">
            Student & Mentor Portal
          </h3>
          <p className="text-xs text-blue-100/80 mt-1">
            Access your live classrooms, class recordings, and assignment feedback.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {isLoggedIn ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-['Rajdhani'] font-bold text-2xl text-[#0A1A33] mb-1">
                Welcome Back, Learner!
              </h4>
              <p className="text-xs text-[#5B6B82] mb-6">
                You have successfully authenticated into the RIS NextGen Learning Management System.
              </p>
              <CTAButton variant="gradient" size="md" onClick={handleClose} fullWidth>
                Continue to Dashboard
              </CTAButton>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#0A1A33] uppercase tracking-wider mb-1">
                  Email Address / Student ID
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#5B6B82] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="learner@risnextgen.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D8E8F8] text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8F0]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-[#0A1A33] uppercase tracking-wider">
                    Password
                  </label>
                  <a href="#reset" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to registered email."); }} className="text-xs text-[#1565C0] hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#5B6B82] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D8E8F8] text-sm focus:outline-none focus:ring-2 focus:ring-[#00A8F0]"
                  />
                </div>
              </div>

              <CTAButton
                type="submit"
                variant="gradient"
                size="md"
                fullWidth
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In to LMS'}
              </CTAButton>

              <div className="text-center pt-2">
                <span className="text-xs text-[#5B6B82]">
                  New learner?{' '}
                  <button
                    type="button"
                    onClick={handleClose}
                    className="text-[#1565C0] font-semibold hover:underline"
                  >
                    Enroll in a cohort to get credentials
                  </button>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
