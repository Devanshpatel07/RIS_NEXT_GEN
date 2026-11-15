// RIS NextGen - API Client Service
// Connects frontend to backend endpoints (/api/*) with seamless fallback to DatabaseService.

import { DatabaseService } from './db';

export const ApiService = {
  // Career Applications API
  async submitCareerApplication(applicationData) {
    try {
      const response = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(applicationData)
      });
      if (response.ok) {
        const data = await response.json();
        // Also persist locally
        DatabaseService.submitApplication({ ...applicationData, id: data.applicationId });
        return { success: true, ...data };
      }
    } catch {
      // Backend fallback
    }
    // Fallback directly to persistent database
    const saved = DatabaseService.submitApplication(applicationData);
    return {
      success: true,
      applicationId: saved.id,
      timestamp: saved.submittedAt,
      message: 'Application recorded successfully in platform database.'
    };
  },

  async getCareerApplications() {
    try {
      const response = await fetch('/api/careers/applications');
      if (response.ok) {
        return await response.json();
      }
    } catch {
      // Fallback
    }
    return DatabaseService.getApplications();
  },

  // Auth API
  async login(email, password) {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        const data = await response.json();
        DatabaseService.login(email, password);
        return data;
      }
    } catch {
      // Fallback
    }
    return DatabaseService.login(email, password);
  },

  // Enroll API
  async enroll(courseId, studentDetails) {
    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId, ...studentDetails })
      });
      if (response.ok) {
        DatabaseService.enrollCourse(courseId);
        return await response.json();
      }
    } catch {
      // Fallback
    }
    DatabaseService.enrollCourse(courseId);
    return { success: true, message: 'Enrolled successfully' };
  },

  // Course Cohort Reservations API
  async submitCourseReservation(reservationData) {
    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservationData)
      });
      if (response.ok) {
        const data = await response.json();
        DatabaseService.saveReservation({ ...reservationData, id: data.reservationId });
        return { success: true, ...data };
      }
    } catch {
      // Backend fallback
    }
    const saved = DatabaseService.saveReservation(reservationData);
    return {
      success: true,
      reservationId: saved.id,
      timestamp: saved.reservedAt,
      batchDate: saved.batchDate,
      batchLabel: saved.batchLabel,
      message: 'Reservation recorded successfully in platform database.'
    };
  },

  async getCourseReservations(batchFilter = 'All') {
    try {
      const response = await fetch(`/api/reservations?batch=${encodeURIComponent(batchFilter)}`);
      if (response.ok) {
        return await response.json();
      }
    } catch {
      // Fallback
    }
    return DatabaseService.getReservationsByBatch(batchFilter);
  }
};
