import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import EnrollModal from './components/EnrollModal';
import CourseDetailModal from './components/CourseDetailModal';
import LoginModal from './components/LoginModal';

// Component to scroll to top automatically when route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  // Global modal state
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Handlers
  const handleOpenEnroll = (course = null) => {
    setSelectedCourse(course);
    setIsEnrollOpen(true);
  };

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
    setIsDetailOpen(true);
  };

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };

  const handleOpenCounselor = () => {
    // Open enrollment modal or pre-fill counsellor modal
    setIsEnrollOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0A1A33] overflow-x-hidden w-full max-w-full">
      <ScrollToTop />

      {/* Global Navbar */}
      <Navbar
        onOpenEnroll={() => handleOpenEnroll()}
        onOpenLogin={handleOpenLogin}
        onOpenCounselor={handleOpenCounselor}
      />

      {/* Main Page Routing */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onOpenEnroll={handleOpenEnroll}
                onOpenCounselor={handleOpenCounselor}
                onViewDetails={handleViewDetails}
              />
            }
          />
          <Route
            path="/courses"
            element={
              <Courses
                onOpenEnroll={handleOpenEnroll}
                onOpenCounselor={handleOpenCounselor}
                onViewDetails={handleViewDetails}
              />
            }
          />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Modals */}
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        selectedCourse={selectedCourse}
      />

      <CourseDetailModal
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        course={selectedCourse}
        onEnroll={(c) => handleOpenEnroll(c)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </div>
  );
}
