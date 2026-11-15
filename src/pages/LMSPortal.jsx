import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Play,
  CheckCircle2,
  Lock,
  Download,
  Clock,
  FileText,
  LogOut,
  Calendar,
  ShieldCheck
} from 'lucide-react';
import CTAButton from '../components/CTAButton';
import { courses, RESERVATION_BATCHES } from '../data/courses';
import { DatabaseService, RECORDED_SESSIONS } from '../services/db';

export default function LMSPortal({ onOpenEnroll }) {
  const [currentUser, setCurrentUser] = useState(() => DatabaseService.getCurrentUser());
  const [adminBatchFilter, setAdminBatchFilter] = useState('All');
  const [reservationsList, setReservationsList] = useState(() => DatabaseService.getReservations());
  const [activeCourseId, setActiveCourseId] = useState(() => {
    const user = DatabaseService.getCurrentUser();
    return user?.enrolledCourses?.[0] || "cyber-defense-01";
  });
  const [activeSession, setActiveSession] = useState(() => {
    const user = DatabaseService.getCurrentUser();
    const initialCourse = user?.enrolledCourses?.[0] || "cyber-defense-01";
    const sessions = RECORDED_SESSIONS[initialCourse] || [];
    return sessions[0] || null;
  });
  const [progressData, setProgressData] = useState(() => {
    const user = DatabaseService.getCurrentUser();
    const initialCourse = user?.enrolledCourses?.[0] || "cyber-defense-01";
    return DatabaseService.getProgress(initialCourse);
  });

  // Login form state
  const [loginEmail, setLoginEmail] = useState("learner@risnextgen.com");
  const [loginPassword, setLoginPassword] = useState("password123");
  const [loginError, setLoginError] = useState("");

  const handleSelectCourse = (cId) => {
    setActiveCourseId(cId);
    setProgressData(DatabaseService.getProgress(cId));
    const sessions = RECORDED_SESSIONS[cId] || [];
    setActiveSession(sessions[0] || null);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");
    const res = DatabaseService.login(loginEmail, loginPassword);
    if (res.success) {
      setCurrentUser(res.user);
      setReservationsList(DatabaseService.getReservations());
      if (res.user.enrolledCourses?.length > 0) {
        handleSelectCourse(res.user.enrolledCourses[0]);
      }
    } else {
      setLoginError("Invalid credentials. Use demo: learner@risnextgen.com / password123");
    }
  };

  const handleLogout = () => {
    DatabaseService.logout();
    setCurrentUser(null);
  };

  const handleToggleModuleComplete = (moduleIdx) => {
    const updated = DatabaseService.updateProgress(activeCourseId, moduleIdx);
    if (updated) {
      setProgressData(updated);
    }
  };

  const activeCourseObj = courses.find((c) => c.id === activeCourseId) || courses[0];
  const courseSessions = RECORDED_SESSIONS[activeCourseId] || [];
  const isEnrolled = currentUser ? DatabaseService.isEnrolledInCourse(activeCourseId) : false;

  return (
    <div className="overflow-hidden">
      {/* 1. HERO BANNER */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-gradient-to-b from-[#EAF5FF]/80 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5B6B82] mb-6">
            <Link to="/" className="hover:text-[#0B3A8C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#00A8F0]">LMS Learning Portal</span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FF] border border-[#00A8F0]/30 text-[#0B3A8C] text-xs font-semibold tracking-wider uppercase mb-3">
                <BookOpen className="w-3.5 h-3.5 text-[#00A8F0]" />
                <span>Unified Learning Management System</span>
              </div>
              <h1 className="font-['Rajdhani'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A1A33] tracking-tight">
                LMS Portal & Recorded Sessions
              </h1>
              <p className="text-sm sm:text-base text-[#5B6B82] mt-2 max-w-2xl">
                Access your authorized live cohorts, replay high-definition class recordings, download lecture notes, and track your syllabus completion.
              </p>
            </div>

            {/* Auth Badge / User pill */}
            {currentUser ? (
              <div className="flex items-center gap-4 p-3 bg-white rounded-2xl border border-[#D8E8F8] shadow-sm shrink-0">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-10 h-10 rounded-xl object-cover ring-2 ring-[#00A8F0]"
                />
                <div>
                  <div className="font-['Rajdhani'] font-bold text-base text-[#0A1A33] leading-tight">
                    {currentUser.name}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#5B6B82]">
                    <span className="px-2 py-0.5 rounded-md bg-[#EAF5FF] text-[#0B3A8C] font-semibold">
                      {currentUser.role}
                    </span>
                    <span>&bull;</span>
                    <span>{currentUser.enrolledCourses?.length || 0} Enrolled</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  title="Logout"
                  className="p-2 rounded-xl text-[#5B6B82] hover:text-rose-600 hover:bg-rose-50 transition-colors ml-2 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="text-xs font-semibold text-[#5B6B82] bg-white px-4 py-2.5 rounded-2xl border border-[#D8E8F8] shadow-xs">
                🔒 Log in below to access your enrolled recordings
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. MAIN LMS INTERFACE */}
      <section className="py-12 bg-[#F8FBFE] border-t border-[#E1ECF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!currentUser ? (
            /* LOGIN CARD FOR UNREGISTERED USERS */
            <div className="max-w-md mx-auto bg-white rounded-3xl p-8 border border-[#D8E8F8] shadow-xl">
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#0B3A8C] flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6 text-[#00A8F0]" />
                </div>
                <h3 className="font-['Rajdhani'] font-bold text-2xl text-[#0A1A33]">
                  LMS Student Authentication
                </h3>
                <p className="text-xs text-[#5B6B82] mt-1">
                  Recorded sessions and course resources are strictly restricted to authorized enrolled learners.
                </p>
              </div>

              {loginError && (
                <div className="p-3.5 rounded-xl bg-red-50 text-red-700 text-xs font-semibold mb-4">
                  {loginError}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1">
                    Student Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#D8E8F8] focus:outline-none focus:ring-2 focus:ring-[#00A8F0]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#D8E8F8] focus:outline-none focus:ring-2 focus:ring-[#00A8F0]"
                  />
                </div>

                <CTAButton
                  type="submit"
                  variant="gradient"
                  size="md"
                  fullWidth
                >
                  Log In to LMS Dashboard
                </CTAButton>

                {/* Demo Accounts Pill */}
                <div className="pt-3 border-t border-[#E1ECF8] text-[11px] text-[#5B6B82] space-y-1">
                  <p className="font-semibold text-[#0A1A33]">Quick Demo Accounts:</p>
                  <button
                    type="button"
                    onClick={() => {
                      setLoginEmail("learner@risnextgen.com");
                      setLoginPassword("password123");
                    }}
                    className="block text-[#00A8F0] hover:underline cursor-pointer"
                  >
                    &bull; Enrolled Learner: learner@risnextgen.com
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLoginEmail("mentor@risnextgen.com");
                      setLoginPassword("password123");
                    }}
                    className="block text-[#00A8F0] hover:underline cursor-pointer"
                  >
                    &bull; Technical Mentor: mentor@risnextgen.com
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLoginEmail("admin@risnextgen.com");
                      setLoginPassword("password123");
                    }}
                    className="block text-[#00A8F0] hover:underline cursor-pointer"
                  >
                    &bull; Platform Admin: admin@risnextgen.com
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* AUTHENTICATED LMS DASHBOARD */
            <div className="space-y-8">
              {/* ADMIN BATCH RESERVATION MANAGEMENT (ONLY VISIBLE TO ADMIN ROLE) */}
              {currentUser.role === 'Admin' && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E8F8] shadow-md">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E1ECF8]">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EAF5FF] text-[#0B3A8C] mb-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#00A8F0]" />
                        <span>Platform Administration Panel</span>
                      </div>
                      <h3 className="font-['Rajdhani'] font-bold text-2xl text-[#0A1A33]">
                        Student Cohort Reservations & Batch Roster
                      </h3>
                      <p className="text-xs text-[#5B6B82] mt-0.5">
                        Identify and verify which batch each student selected during reservation.
                      </p>
                    </div>

                    {/* Batch Filter Segment */}
                    <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#F8FBFE] border border-[#D8E8F8]">
                      <button
                        type="button"
                        onClick={() => setAdminBatchFilter('All')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          adminBatchFilter === 'All'
                            ? 'bg-[#0B3A8C] text-white shadow-xs'
                            : 'text-[#5B6B82] hover:text-[#0B3A8C]'
                        }`}
                      >
                        All ({reservationsList.length})
                      </button>
                      {RESERVATION_BATCHES.map((b) => {
                        const count = reservationsList.filter((r) => r.batchId === b.id || r.batchDate === b.date).length;
                        return (
                          <button
                            key={b.id}
                            type="button"
                            onClick={() => setAdminBatchFilter(b.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              adminBatchFilter === b.id
                                ? 'bg-[#00A8F0] text-white shadow-xs'
                                : 'text-[#5B6B82] hover:text-[#0B3A8C]'
                            }`}
                          >
                            {b.label} ({count})
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Batch Summary Counters */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {RESERVATION_BATCHES.map((b) => {
                      const count = reservationsList.filter((r) => r.batchId === b.id || r.batchDate === b.date).length;
                      return (
                        <div key={b.id} className="p-4 rounded-2xl bg-[#F8FBFE] border border-[#E1ECF8]">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-[#0B3A8C] uppercase tracking-wider">{b.label}</span>
                            <span className="text-lg font-['Rajdhani'] font-extrabold text-[#0B3A8C]">{count} Students</span>
                          </div>
                          <div className="text-xs text-[#5B6B82] flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#00A8F0]" />
                            <span>Starting Date: <strong>{b.date}</strong></span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Reservations Table */}
                  <div className="overflow-x-auto rounded-2xl border border-[#E1ECF8]">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#EAF5FF] text-[#0B3A8C] uppercase font-bold tracking-wider">
                        <tr>
                          <th className="py-3 px-4">Reservation ID</th>
                          <th className="py-3 px-4">Student Details</th>
                          <th className="py-3 px-4">Enrolled Program</th>
                          <th className="py-3 px-4">Selected Batch & Date</th>
                          <th className="py-3 px-4">Payment Preference</th>
                          <th className="py-3 px-4">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E1ECF8] bg-white">
                        {reservationsList
                          .filter((r) => {
                            if (adminBatchFilter === 'All') return true;
                            return r.batchId === adminBatchFilter || r.batchLabel === adminBatchFilter || r.batchDate === adminBatchFilter;
                          })
                          .map((res) => (
                            <tr key={res.id} className="hover:bg-slate-50 transition-colors">
                              <td className="py-3.5 px-4 font-mono font-bold text-[#0B3A8C]">{res.id}</td>
                              <td className="py-3.5 px-4">
                                <div className="font-bold text-[#0A1A33]">{res.fullName}</div>
                                <div className="text-[11px] text-[#5B6B82]">{res.email} &bull; {res.phone}</div>
                              </td>
                              <td className="py-3.5 px-4 font-medium text-[#0A1A33] max-w-[200px] truncate">
                                {res.courseTitle}
                              </td>
                              <td className="py-3.5 px-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#EAF5FF] text-[#0B3A8C] border border-[#00A8F0]/30">
                                  <Calendar className="w-3 h-3 text-[#00A8F0]" />
                                  <span>{res.batchLabel}: {res.batchDate}</span>
                                </span>
                              </td>
                              <td className="py-3.5 px-4">
                                <span className="text-[#5B6B82] capitalize">
                                  {res.paymentOption === 'emi' ? 'Zero-Cost EMI' : 'One-Time Payment'}
                                </span>
                              </td>
                              <td className="py-3.5 px-4">
                                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800">
                                  {res.status || 'Confirmed'}
                                </span>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Enrolled Courses Selector Tabs */}
              <div>
                <h3 className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33] mb-3">
                  Your Enrolled Active Courses
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentUser.enrolledCourses?.map((cId) => {
                    const cObj = courses.find((c) => c.id === cId);
                    if (!cObj) return null;
                    const isSelected = activeCourseId === cId;
                    const cProgress = DatabaseService.getProgress(cId);
                    return (
                      <div
                        key={cId}
                        onClick={() => handleSelectCourse(cId)}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-white border-[#00A8F0] shadow-md ring-2 ring-[#00A8F0]/30"
                            : "bg-white border-[#D8E8F8] hover:border-[#1565C0] opacity-80"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#EAF5FF] text-[#0B3A8C]">
                            {cObj.category}
                          </span>
                          <span className="text-xs font-bold text-[#00A8F0]">
                            {cProgress.percent}% Completed
                          </span>
                        </div>

                        <h4 className="font-['Rajdhani'] font-bold text-lg text-[#0A1A33] line-clamp-1 mb-2">
                          {cObj.title}
                        </h4>

                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-[#EAF5FF] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#0B3A8C] to-[#00A8F0] rounded-full transition-all"
                            style={{ width: `${cProgress.percent}%` }}
                          />
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-[#5B6B82] mt-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#00A8F0]" />
                            {cObj.duration}
                          </span>
                          <span className="text-emerald-700 font-semibold">
                            Live 6:00 PM IST
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Main Video Stream & Learning Resources Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 8 Cols: Video Stream & Active Session Notes */}
                <div className="lg:col-span-8 bg-white rounded-3xl border border-[#D8E8F8] p-6 sm:p-8 shadow-sm">
                  {isEnrolled ? (
                    <div>
                      {activeSession ? (
                        <div>
                          {/* Video Player */}
                          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black mb-6 shadow-lg">
                            <video
                              controls
                              poster={activeSession.thumbnail}
                              src={activeSession.videoUrl}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 border border-white/20">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                              <span>Authorized HD Recording Stream</span>
                            </div>
                          </div>

                          {/* Session Info */}
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E1ECF8]">
                            <div>
                              <span className="text-xs font-semibold text-[#00A8F0] uppercase tracking-wider">
                                {activeCourseObj.title}
                              </span>
                              <h3 className="font-['Rajdhani'] font-bold text-2xl text-[#0A1A33] mt-1">
                                {activeSession.title}
                              </h3>
                              <p className="text-xs text-[#5B6B82] mt-1 flex items-center gap-3">
                                <span>Recorded on: {activeSession.date}</span>
                                <span>&bull;</span>
                                <span>Duration: {activeSession.duration}</span>
                                <span>&bull;</span>
                                <span>Instructor: {activeSession.speaker}</span>
                              </p>
                            </div>
                          </div>

                          {/* Lecture Notes & Resources */}
                          <div className="mt-6 space-y-4">
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-1.5">
                                Session Synthesis & Architectural Notes:
                              </h4>
                              <p className="text-sm text-[#5B6B82] leading-relaxed">
                                {activeSession.notes}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-2">
                                Downloadable Session Code & Assets:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {activeSession.resources?.map((res, rIdx) => (
                                  <div
                                    key={rIdx}
                                    className="px-3.5 py-2 rounded-xl bg-[#F8FBFE] border border-[#D8E8F8] text-xs font-medium text-[#0A1A33] flex items-center gap-2 hover:border-[#00A8F0] cursor-pointer"
                                  >
                                    <FileText className="w-3.5 h-3.5 text-[#00A8F0]" />
                                    <span>{res}</span>
                                    <Download className="w-3 h-3 text-[#5B6B82] ml-1" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="py-12 text-center text-sm text-[#5B6B82]">
                          No recorded sessions found for this course yet. Next live session starts at 6:00 PM IST.
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Restricted Notice */
                    <div className="py-16 text-center">
                      <Lock className="w-12 h-12 text-amber-500 mx-auto mb-3" />
                      <h4 className="font-['Rajdhani'] font-bold text-2xl text-[#0A1A33] mb-2">
                        Recorded Live Sessions Restricted
                      </h4>
                      <p className="text-sm text-[#5B6B82] max-w-md mx-auto mb-6">
                        Under our intellectual property policy, recorded sessions and companion code repositories are only accessible to confirmed enrolled learners.
                      </p>
                      <button
                        type="button"
                        onClick={() => onOpenEnroll && onOpenEnroll(activeCourseObj)}
                        className="px-6 py-3 rounded-xl bg-[#0B3A8C] text-white font-bold text-xs hover:bg-[#1565C0] transition-colors"
                      >
                        Enroll in {activeCourseObj.title}
                      </button>
                    </div>
                  )}
                </div>

                {/* Right 4 Cols: Playlist & Progress Tracking */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Playlist */}
                  <div className="bg-white rounded-3xl border border-[#D8E8F8] p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E1ECF8]">
                      <h4 className="font-['Rajdhani'] font-bold text-lg text-[#0A1A33]">
                        Recorded Sessions Archive
                      </h4>
                      <span className="text-xs font-semibold text-[#00A8F0]">
                        {courseSessions.length} Available
                      </span>
                    </div>

                    <div className="space-y-3">
                      {courseSessions.map((session) => {
                        const isCurrent = activeSession?.id === session.id;
                        return (
                          <div
                            key={session.id}
                            onClick={() => setActiveSession(session)}
                            className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                              isCurrent
                                ? "bg-[#EAF5FF] border-[#00A8F0] shadow-xs"
                                : "bg-white border-[#D8E8F8] hover:border-[#1565C0]"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-xl bg-[#0B3A8C] text-white flex items-center justify-center shrink-0 mt-0.5">
                                <Play className="w-3.5 h-3.5 fill-white" />
                              </div>
                              <div>
                                <h5 className="font-bold text-xs text-[#0A1A33] line-clamp-2">
                                  {session.title}
                                </h5>
                                <div className="text-[11px] text-[#5B6B82] mt-1 flex items-center gap-2">
                                  <span>{session.duration}</span>
                                  <span>&bull;</span>
                                  <span>{session.date}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Syllabus Modules Progress Card */}
                  <div className="bg-white rounded-3xl border border-[#D8E8F8] p-6 shadow-sm">
                    <h4 className="font-['Rajdhani'] font-bold text-lg text-[#0A1A33] mb-3">
                      Curriculum Progress Tracker
                    </h4>

                    <div className="space-y-2.5">
                      {[
                        "Module 1: Foundations & Architecture",
                        "Module 2: Advanced Implementation Lab",
                        "Module 3: Scalability & Production Tuning",
                        "Module 4: Enterprise Capstone Defense"
                      ].map((modName, mIdx) => {
                        const isDone = progressData?.completedModules?.includes(mIdx);
                        return (
                          <button
                            key={mIdx}
                            type="button"
                            onClick={() => handleToggleModuleComplete(mIdx)}
                            className={`w-full p-3 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                              isDone
                                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                                : "bg-[#F8FBFE] border-[#D8E8F8] text-[#5B6B82] hover:border-[#00A8F0]"
                            }`}
                          >
                            <span className="line-clamp-1">{modName}</span>
                            <CheckCircle2 className={`w-4 h-4 shrink-0 ${isDone ? "text-emerald-600" : "text-slate-300"}`} />
                          </button>
                        );
                      })}
                    </div>

                    <p className="text-[11px] text-[#5B6B82] mt-4 text-center">
                      Click any module to toggle completion status.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
