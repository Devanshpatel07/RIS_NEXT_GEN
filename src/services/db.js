// RIS NextGen - Central Client & Local Database Service
// Provides persistent storage for Applications, Auth, LMS Enrollments, and Progress.

const STORAGE_KEYS = {
  APPLICATIONS: 'risnext_applications_v1',
  AUTH_USER: 'risnext_auth_user_v1',
  ENROLLMENTS: 'risnext_enrollments_v1',
  RESERVATIONS: 'risnext_reservations_v1',
  LMS_PROGRESS: 'risnext_lms_progress_v1'
};

// Seed cohort course reservations with explicit batch selections
export const SEED_RESERVATIONS = [
  {
    id: "RSV-2026-001",
    courseId: "cyber-defense-01",
    courseTitle: "Cybersecurity, Ethical Hacking & Cloud Defense Fellowship",
    fullName: "Rohit Deshmukh",
    email: "rohit.deshmukh@example.com",
    phone: "+91 98765 12345",
    batchId: "batch-1",
    batchLabel: "Batch 1",
    batchDate: "21 November 2026",
    paymentOption: "emi",
    status: "Confirmed",
    fee: 36999,
    reservedAt: "2026-11-14T10:30:00.000Z"
  },
  {
    id: "RSV-2026-002",
    courseId: "ai-ml-02",
    courseTitle: "Artificial Intelligence & Machine Learning (AI/ML) Master Fellowship",
    fullName: "Sneha Nair",
    email: "sneha.nair@example.com",
    phone: "+91 98123 45678",
    batchId: "batch-2",
    batchLabel: "Batch 2",
    batchDate: "15 December 2026",
    paymentOption: "full",
    status: "Confirmed",
    fee: 44999,
    reservedAt: "2026-11-15T08:15:00.000Z"
  }
];

// Default seed applications
const SEED_APPLICATIONS = [
  {
    id: "APP-2026-001",
    opportunity: "Technical Mentor",
    fullName: "Siddharth Verma",
    email: "siddharth.v@example.com",
    phone: "+91 98765 43210",
    expertise: "Cybersecurity & Cloud Defense",
    experience: "6 Years",
    linkedin: "https://linkedin.com/in/siddharth-verma",
    resumeName: "Siddharth_Verma_Resume.pdf",
    introduction: "Lead Cloud Security Architect with extensive experience in SIEM, zero-trust architectures, and mentoring engineers into SOC operations.",
    status: "Under Review",
    submittedAt: "2026-11-10T14:30:00.000Z"
  },
  {
    id: "APP-2026-002",
    opportunity: "Tutor",
    fullName: "Pooja Raghavan",
    email: "pooja.raghavan@example.com",
    phone: "+91 98111 22334",
    expertise: "Artificial Intelligence & Machine Learning",
    experience: "5 Years",
    linkedin: "https://linkedin.com/in/pooja-raghavan",
    resumeName: "Pooja_Raghavan_CV.pdf",
    introduction: "Staff ML Engineer specializing in PyTorch and autonomous multi-agent pipelines. Passionate about hands-on live teaching.",
    status: "Interview Scheduled",
    submittedAt: "2026-11-12T09:15:00.000Z"
  }
];

// Pre-configured LMS Registered Users (Learner, Mentor, Admin)
export const REGISTERED_USERS = [
  {
    id: "usr-01",
    email: "learner@risnextgen.com",
    password: "password123",
    name: "Aman Sharma",
    role: "Learner",
    enrolledCourses: ["cyber-defense-01", "ai-ml-02", "database-eng-06"],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "usr-02",
    email: "mentor@risnextgen.com",
    password: "password123",
    name: "Dr. Aditya Singhal",
    role: "Technical Mentor",
    enrolledCourses: ["cyber-defense-01", "ai-ml-02"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "usr-03",
    email: "admin@risnextgen.com",
    password: "password123",
    name: "Platform Admin",
    role: "Admin",
    enrolledCourses: ["cyber-defense-01", "ai-ml-02", "fsd-cloud-03"],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  }
];

// Recorded Sessions dataset exclusively accessible to authorized enrolled learners
export const RECORDED_SESSIONS = {
  "cyber-defense-01": [
    {
      id: "rec-cyber-101",
      title: "Session 01: Enterprise Threat Modeling & Attack Surfaces",
      date: "04 Nov 2026",
      duration: "1 hr 45 mins",
      speaker: "Vikramaditya Rao (Principal Cyber Architect)",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      notes: "Covers STRIDE, DREAD frameworks, and live zero-trust perimeter configuration blueprints.",
      resources: ["Threat_Model_Matrix.pdf", "Lab_01_SIEM_Rules.yaml"]
    },
    {
      id: "rec-cyber-102",
      title: "Session 02: Network Packet Inspection with Wireshark & PCAP Analysis",
      date: "07 Nov 2026",
      duration: "2 hrs 10 mins",
      speaker: "Vikramaditya Rao",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      notes: "Hands-on dissection of TCP handshake anomalies and malicious payloads.",
      resources: ["wireshark_filters.txt", "sample_incident.pcap"]
    },
    {
      id: "rec-cyber-103",
      title: "Session 03: Penetration Testing Methodologies & Kali Linux Tooling",
      date: "11 Nov 2026",
      duration: "1 hr 55 mins",
      speaker: "Dr. Aditya Singhal",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      notes: "Ethical scoping, recon, vulnerability assessment, and exploit mitigation.",
      resources: ["PenTest_Checklist_2026.pdf", "metasploit_walkthrough.md"]
    }
  ],
  "ai-ml-02": [
    {
      id: "rec-aiml-201",
      title: "Session 01: Deep Neural Network Fundamentals & PyTorch Computation Graphs",
      date: "03 Nov 2026",
      duration: "2 hrs 00 mins",
      speaker: "Dr. Ananya Roy (Ex-Meta AI Fellow)",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      notes: "Tensors, autograd engine, backward pass mechanics, and GPU acceleration setup.",
      resources: ["pytorch_intro_notebook.ipynb", "tensor_cheatsheet.pdf"]
    },
    {
      id: "rec-aiml-202",
      title: "Session 02: Transformer Attention Mechanisms & LLM Architecture",
      date: "08 Nov 2026",
      duration: "2 hrs 15 mins",
      speaker: "Dr. Ananya Roy",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      notes: "Self-attention matrix computation, Positional Encoding, and FlashAttention v2.",
      resources: ["attention_math.pdf", "mini_transformer.py"]
    },
    {
      id: "rec-aiml-203",
      title: "Session 03: Building Production RAG Pipelines with Vector DBs",
      date: "12 Nov 2026",
      duration: "1 hr 50 mins",
      speaker: "Tanvi Mathur",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      notes: "Chunking strategies, embedding distance metrics, and hybrid BM25 + dense retrieval.",
      resources: ["rag_pipeline_starter.zip", "vector_benchmarks.pdf"]
    }
  ],
  "database-eng-06": [
    {
      id: "rec-db-301",
      title: "Session 01: Relational Schema Modeling & Normalization up to BCNF",
      date: "02 Nov 2026",
      duration: "1 hr 40 mins",
      speaker: "Kunal Sengupta",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
      notes: "ACID properties, entity-relationship schemas, foreign key cascade strategies.",
      resources: ["normalization_guide.pdf", "schema_ddl.sql"]
    },
    {
      id: "rec-db-302",
      title: "Session 02: PostgreSQL Indexing Internals (B-Tree, GIN, BRIN) & EXPLAIN ANALYZE",
      date: "09 Nov 2026",
      duration: "2 hrs 05 mins",
      speaker: "Kunal Sengupta",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      notes: "Query execution plans, sequential scans vs index scans, and composite indexing.",
      resources: ["index_benchmarks.sql", "query_tuning.pdf"]
    }
  ]
};

// Database helper functions
export const DatabaseService = {
  // Applications
  getApplications() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.APPLICATIONS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(SEED_APPLICATIONS));
        return SEED_APPLICATIONS;
      }
      return JSON.parse(data);
    } catch {
      return SEED_APPLICATIONS;
    }
  },

  submitApplication(application) {
    const apps = this.getApplications();
    const newApp = {
      ...application,
      id: `APP-2026-${String(apps.length + 1).padStart(3, '0')}`,
      status: "Submitted",
      submittedAt: new Date().toISOString()
    };
    const updated = [newApp, ...apps];
    try {
      localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(updated));
    } catch {
      // ignore
    }
    return newApp;
  },

  // Auth & User Management
  getCurrentUser() {
    try {
      const user = localStorage.getItem(STORAGE_KEYS.AUTH_USER);
      if (user) return JSON.parse(user);
    } catch {
      // ignore
    }
    // Default to enrolled demo learner
    return REGISTERED_USERS[0];
  },

  login(email, password) {
    const user = REGISTERED_USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (user) {
      localStorage.setItem(STORAGE_KEYS.AUTH_USER, JSON.stringify(user));
      return { success: true, user };
    }
    // If not matching exact demo credentials, allow user to log in as guest learner with access
    const dynamicUser = {
      id: `usr-${Date.now()}`,
      email: email,
      name: email.split('@')[0],
      role: "Learner",
      enrolledCourses: ["cyber-defense-01", "ai-ml-02"],
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    };
    localStorage.setItem(STORAGE_KEYS.AUTH_USER, JSON.stringify(dynamicUser));
    return { success: true, user: dynamicUser };
  },

  logout() {
    localStorage.removeItem(STORAGE_KEYS.AUTH_USER);
  },

  // Enrollments
  getEnrollments() {
    const user = this.getCurrentUser();
    return user?.enrolledCourses || ["cyber-defense-01", "ai-ml-02"];
  },

  isEnrolledInCourse(courseId) {
    const enrolled = this.getEnrollments();
    return enrolled.includes(courseId);
  },

  enrollCourse(courseId) {
    const user = this.getCurrentUser();
    if (!user) return false;
    if (!user.enrolledCourses.includes(courseId)) {
      user.enrolledCourses.push(courseId);
      localStorage.setItem(STORAGE_KEYS.AUTH_USER, JSON.stringify(user));
    }
    return true;
  },

  // Course Cohort Seat Reservations & Batch Management
  getReservations() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.RESERVATIONS);
      if (!data) return SEED_RESERVATIONS;
      return JSON.parse(data);
    } catch {
      return SEED_RESERVATIONS;
    }
  },

  saveReservation(reservation) {
    const list = this.getReservations();
    const newReservation = {
      ...reservation,
      id: reservation.id || `RSV-2026-${String(list.length + 1).padStart(3, '0')}`,
      status: "Confirmed",
      reservedAt: new Date().toISOString()
    };
    const updated = [newReservation, ...list];
    try {
      localStorage.setItem(STORAGE_KEYS.RESERVATIONS, JSON.stringify(updated));
    } catch {
      // ignore
    }
    // Auto-enroll in active user session if user exists
    if (newReservation.courseId) {
      this.enrollCourse(newReservation.courseId);
    }
    return newReservation;
  },

  getReservationsByBatch(batchQuery) {
    const all = this.getReservations();
    if (!batchQuery || batchQuery === 'All') return all;
    return all.filter(
      (r) =>
        r.batchId === batchQuery ||
        r.batchLabel === batchQuery ||
        r.batchDate === batchQuery
    );
  },

  // LMS Progress
  getProgress(courseId) {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.LMS_PROGRESS);
      const allProgress = data ? JSON.parse(data) : {};
      return allProgress[courseId] || {
        completedModules: [0],
        totalModules: 4,
        percent: 25,
        lastAccessedSession: "Session 01"
      };
    } catch {
      return { completedModules: [0], totalModules: 4, percent: 25 };
    }
  },

  updateProgress(courseId, moduleIndex) {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.LMS_PROGRESS);
      const allProgress = data ? JSON.parse(data) : {};
      const current = allProgress[courseId] || { completedModules: [], totalModules: 4, percent: 0 };
      if (!current.completedModules.includes(moduleIndex)) {
        current.completedModules.push(moduleIndex);
        current.percent = Math.round((current.completedModules.length / current.totalModules) * 100);
        allProgress[courseId] = current;
        localStorage.setItem(STORAGE_KEYS.LMS_PROGRESS, JSON.stringify(allProgress));
      }
      return current;
    } catch {
      return null;
    }
  }
};
