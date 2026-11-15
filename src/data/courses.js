// RIS NextGen - Official Courses & Platform Dataset

export const COURSE_CATEGORIES = [
  "All",
  "Technology",
  "Data Science",
  "Business",
  "Finance",
  "Design"
];

// Official Launch Dates: 15 November 2026 & 21 November 2026
// Course Sequence: 1. Cybersecurity, 2. AI/ML, 3. Other courses according to relevance.
export const courses = [
  {
    id: "cyber-defense-01",
    title: "Cybersecurity, Ethical Hacking & Cloud Defense Fellowship",
    category: "Technology",
    description: "Master threat modeling, penetration testing, SIEM operations, zero-trust architectures, and incident response simulations with hands-on lab environments.",
    duration: "18 Weeks",
    mode: "100% Online Live (6:00 PM IST)",
    price: 36999,
    oldPrice: 55999,
    enrolledCount: "120+ Enrolled",
    badge: "Upcoming Launch • 15 Nov",
    isFeatured: true,
    isUpcoming: true,
    launchDate: "15 November 2026",
    registrationStatus: "Registration Open",
    level: "Intermediate",
    nextBatch: "Starts 15th Nov 2026 (Live 6:00 PM IST)",
    scheduleType: "Weekday Evening & Weekend Labs",
    skills: ["Network Security", "Kali Linux", "Wireshark", "Metasploit", "Cloud Security", "SIEM"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ai-ml-02",
    title: "Artificial Intelligence & Machine Learning (AI/ML) Master Fellowship",
    category: "Technology",
    description: "Build autonomous multi-agent pipelines, RAG architectures, neural networks, fine-tune foundation models, and deploy production AI microservices.",
    duration: "16 Weeks",
    mode: "100% Online Live (6:00 PM IST)",
    price: 44999,
    oldPrice: 69999,
    enrolledCount: "140+ Enrolled",
    badge: "Upcoming Launch • 21 Nov",
    isFeatured: true,
    isUpcoming: true,
    launchDate: "21 November 2026",
    registrationStatus: "Registration Open",
    level: "Intermediate",
    nextBatch: "Starts 21st Nov 2026 (Live 6:00 PM IST)",
    scheduleType: "Weekday Evening & Weekend Labs",
    skills: ["Python", "PyTorch", "LangChain", "Vector DBs", "RAG Systems", "MLOps"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fsd-cloud-03",
    title: "Full Stack Software Engineering & Cloud Native Systems",
    category: "Technology",
    description: "Master modern microservices, React 19, Node.js, Docker, Kubernetes, and AWS cloud deployment with production-grade capstone architectures.",
    duration: "24 Weeks",
    mode: "100% Online Live (6:00 PM IST)",
    price: 38999,
    oldPrice: 59999,
    enrolledCount: "150+ Enrolled",
    badge: "Popular Cohort",
    isFeatured: true,
    isUpcoming: false,
    launchDate: "Ongoing Admissions",
    registrationStatus: "Registration Open",
    level: "Beginner to Advanced",
    nextBatch: "Starts 28th Nov 2026",
    scheduleType: "Weekday Evening (Post 5 PM) & Weekend Flexible",
    skills: ["React", "Node.js", "Docker", "AWS", "PostgreSQL", "Microservices"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ds-ml-04",
    title: "Applied Data Science, Machine Learning & Big Data Analytics",
    category: "Data Science",
    description: "From data wrangling to predictive analytics, statistical modeling, and MLOps. Work on real enterprise datasets with mentorship from industry leads.",
    duration: "20 Weeks",
    mode: "100% Online Live (6:00 PM IST)",
    price: 34999,
    oldPrice: 54999,
    enrolledCount: "110+ Enrolled",
    badge: "Core Track",
    isFeatured: true,
    isUpcoming: false,
    launchDate: "Ongoing Admissions",
    registrationStatus: "Registration Open",
    level: "All Levels",
    nextBatch: "Starts 30th Nov 2026",
    scheduleType: "Weekday Evening & Weekend Labs",
    skills: ["Python", "Pandas", "Scikit-Learn", "Apache Spark", "Tableau", "MLOps"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "devops-sre-05",
    title: "Cloud DevOps, CI/CD Pipelines & Site Reliability Engineering",
    category: "Technology",
    description: "Automate zero-downtime deployments with Terraform, GitHub Actions, Kubernetes, Prometheus, and Grafana infrastructure monitoring.",
    duration: "16 Weeks",
    mode: "100% Online Live (6:00 PM IST)",
    price: 37999,
    oldPrice: 58999,
    enrolledCount: "95+ Enrolled",
    badge: "Industry Certified",
    isFeatured: false,
    isUpcoming: false,
    launchDate: "Ongoing Admissions",
    registrationStatus: "Registration Open",
    level: "Intermediate to Advanced",
    nextBatch: "Starts 5th Dec 2026",
    scheduleType: "Weekday Evening & Weekend Labs",
    skills: ["Kubernetes", "Terraform", "CI/CD", "Docker", "Prometheus", "AWS EKS"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "database-eng-06",
    title: "Database Engineering & Modern Data Architecture (SQL & NoSQL)",
    category: "Technology",
    description: "Master structured database engines (PostgreSQL, Oracle, SQL) and unstructured NoSQL systems (MongoDB). Learn high-performance query optimization and replication.",
    duration: "14 Weeks",
    mode: "100% Online Live (6:00 PM IST)",
    price: 32999,
    oldPrice: 48999,
    enrolledCount: "80+ Enrolled",
    badge: "Hands-on Lab",
    isFeatured: false,
    isUpcoming: false,
    launchDate: "Ongoing Admissions",
    registrationStatus: "Registration Open",
    level: "Beginner to Intermediate",
    nextBatch: "Starts 8th Dec 2026",
    scheduleType: "Weekday Evening & Weekend Labs",
    skills: ["PostgreSQL", "Oracle Database", "SQL", "MongoDB", "Indexing", "Query Tuning"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pm-exec-07",
    title: "Strategic Product Management & Tech Leadership",
    category: "Business",
    description: "Drive product lifecycle from ideation to scale. Learn user research, PRD authoring, unit economics, data-driven prioritization, and roadmapping.",
    duration: "14 Weeks",
    mode: "100% Online Live (6:00 PM IST)",
    price: 29999,
    oldPrice: 47999,
    enrolledCount: "85+ Enrolled",
    badge: "Executive Track",
    isFeatured: false,
    isUpcoming: false,
    launchDate: "Ongoing Admissions",
    registrationStatus: "Registration Open",
    level: "Beginner to Intermediate",
    nextBatch: "Starts 10th Dec 2026",
    scheduleType: "Weekday Evening & Weekend Sessions",
    skills: ["Product Strategy", "Wireframing", "A/B Testing", "Agile", "Metrics & KPIs"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "react-native-08",
    title: "Mobile App Development with React Native & Expo",
    category: "Technology",
    description: "Build cross-platform iOS and Android apps with native device APIs, state management, offline support, and app store deployment pipelines.",
    duration: "14 Weeks",
    mode: "100% Online Live (6:00 PM IST)",
    price: 29999,
    oldPrice: 45999,
    enrolledCount: "75+ Enrolled",
    badge: "Project Driven",
    isFeatured: false,
    isUpcoming: false,
    launchDate: "Ongoing Admissions",
    registrationStatus: "Registration Open",
    level: "Intermediate",
    nextBatch: "Starts 12th Dec 2026",
    scheduleType: "Weekday Evening & Weekend Sessions",
    skills: ["React Native", "Expo", "Redux Toolkit", "Native Modules", "App Store CI/CD"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "uiux-design-09",
    title: "Enterprise UI/UX Design & Design Systems Engineering",
    category: "Design",
    description: "Create scalable design systems in Figma, conduct cognitive walkthroughs, test user behaviors, and hand off production design specs.",
    duration: "12 Weeks",
    mode: "100% Online Live (6:00 PM IST)",
    price: 24999,
    oldPrice: 39999,
    enrolledCount: "90+ Enrolled",
    badge: "Portfolio Ready",
    isFeatured: false,
    isUpcoming: false,
    launchDate: "Ongoing Admissions",
    registrationStatus: "Registration Open",
    level: "Beginner Friendly",
    nextBatch: "Starts 15th Dec 2026",
    scheduleType: "Weekday Evening & Weekend Labs",
    skills: ["Figma", "Design Tokens", "User Research", "Prototyping", "Micro-interactions"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fintech-val-10",
    title: "Corporate Financial Modeling, M&A & Fintech Valuation",
    category: "Finance",
    description: "Hands-on financial statement analysis, DCF valuation, venture capital deal structuring, and algorithmic trading foundations.",
    duration: "16 Weeks",
    mode: "100% Online Live (6:00 PM IST)",
    price: 31999,
    oldPrice: 49999,
    enrolledCount: "65+ Enrolled",
    badge: "Finance Core",
    isFeatured: false,
    isUpcoming: false,
    launchDate: "Ongoing Admissions",
    registrationStatus: "Registration Open",
    level: "Intermediate to Advanced",
    nextBatch: "Starts 18th Dec 2026",
    scheduleType: "Weekday Evening & Weekend Sessions",
    skills: ["Financial Modeling", "Valuation", "LBO", "Equity Research", "Fintech APIs"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
  }
];

// Official Cohort Reservation Batches
// Three independent batches with specific starting dates (no weekday/weekend categorizations)
export const RESERVATION_BATCHES = [
  {
    id: "batch-1",
    label: "Batch 1",
    date: "21 November 2026"
  },
  {
    id: "batch-2",
    label: "Batch 2",
    date: "15 December 2026"
  },
  {
    id: "batch-3",
    label: "Batch 3",
    date: "15 January 2027"
  }
];

// Official Upcoming Courses with specified launch dates (15 Nov & 21 Nov 2026)
export const upcomingCourses = [
  {
    id: "cyber-defense-01",
    title: "Cybersecurity, Ethical Hacking & Cloud Defense Fellowship",
    launchDate: "15 November 2026",
    time: "100% Online Live Session: 6:00 PM IST",
    status: "Registration Open",
    duration: "18 Weeks",
    category: "Technology",
    seatsStatus: "Seats Filling Fast",
    highlight: "Official Launch Batch 1",
    skills: ["Network Security", "Kali Linux", "Wireshark", "Metasploit", "Cloud Security", "SIEM"]
  },
  {
    id: "ai-ml-02",
    title: "Artificial Intelligence & Machine Learning (AI/ML) Master Fellowship",
    launchDate: "21 November 2026",
    time: "100% Online Live Session: 6:00 PM IST",
    status: "Registration Open",
    duration: "16 Weeks",
    category: "Technology",
    seatsStatus: "Early Registration Open",
    highlight: "Official Launch Batch 2",
    skills: ["Python", "PyTorch", "LangChain", "Vector DBs", "RAG Systems", "MLOps"]
  }
];

// Verified Industry Hiring Partners - Strictly verified partner companies
export const hiringPartners = [
  { name: "Eldeco System Indicator", tier: "Verified Partner", industry: "Systems Integration & Infrastructure" },
  { name: "Technowise Solution Limited", tier: "Verified Partner", industry: "Enterprise IT Solutions" },
  { name: "RISIIT Sys LLC", tier: "Verified Partner", industry: "Cloud & Cyber Architecture" }
];

// Comprehensive FAQs covering:
// Course availability, timings, weekday/weekend schedules, enrollment, LMS access,
// recorded sessions, expert mentorship, certificates, career opportunities, payment & EMI options.
export const faqs = [
  {
    id: "faq-remote-model",
    question: "Is training conducted online, or do you have physical centers?",
    answer: "RIS NextGen operates on a 100% remote-first business model. We do not have physical office locations, branch locations, or offline training centers. All cohorts, live masterclasses at 6:00 PM IST, 1-on-1 mentor code reviews, and career counseling are delivered 100% online. Our Location: Remote / Online | Work Model: 100% Remote | Training Mode: Online."
  },
  {
    id: "faq-availability",
    question: "What courses are currently available for enrollment?",
    answer: "Our core training programs span Cybersecurity & Cloud Defense, Artificial Intelligence & Machine Learning (AI/ML), Full Stack Software Engineering, Applied Data Science, Cloud DevOps & SRE, Database Engineering (SQL & MongoDB), and Strategic Product Management. Official upcoming launch batches commence on 15 November 2026 and 21 November 2026."
  },
  {
    id: "faq-timings",
    question: "What are the official live session timings?",
    answer: "Our official interactive live masterclasses commence at 6:00 PM IST on scheduled training days. Weekday training sessions run during the evening after 5:00 PM IST to accommodate working professionals and university students."
  },
  {
    id: "faq-schedule",
    question: "How do the Weekday and Weekend schedules work?",
    answer: "We offer two flexible online learning tracks: (1) Weekday Schedule: Evening interactive sessions held after 5:00 PM IST with dedicated doubt resolution; (2) Weekend Schedule: Hands-on code sprints, architectural labs, and mentor consultations available from 7:00 AM to 10:00 PM IST."
  },
  {
    id: "faq-enrollment",
    question: "How does the course enrollment process work?",
    answer: "Enrollment is a straightforward 3-step online process: (1) Select your preferred course and batch date; (2) Complete the fast-track application form with your academic/professional background; (3) Complete the tuition verification to receive immediate LMS login credentials, orientation schedules, and prerequisite materials."
  },
  {
    id: "faq-lms-access",
    question: "How do I access the LMS (Learning Management System) portal?",
    answer: "Upon confirmed enrollment, learners receive dedicated LMS login credentials. The LMS portal allows you to access enrolled courses, view live session links, submit assignments, track module progress, and review course documentation 24/7 from any device."
  },
  {
    id: "faq-recorded-sessions",
    question: "Are recorded sessions available if I miss a live class?",
    answer: "Yes! High-definition recordings of every live masterclass are processed and uploaded to the LMS within 2 hours of session completion. Under our strict intellectual property policy, recorded sessions are securely accessible exclusively to verified, enrolled learners."
  },
  {
    id: "faq-expert-mentorship",
    question: "What mentorship support is provided during the training?",
    answer: "Learners receive direct weekly guidance from our 15+ verified Industry Experts who actively work as Senior Engineers, Architects, and Tech Directors. Mentorship includes 1-on-1 virtual code reviews, architectural feedback, and personal doubt-clearing sessions."
  },
  {
    id: "faq-certificates",
    question: "Do I receive an accredited certificate upon completion?",
    answer: "Yes, graduates who successfully complete their coursework and capstone project receive an industry-recognized, verifiable digital certificate featuring a unique credential ID and verification URL to showcase on LinkedIn and professional resumes."
  },
  {
    id: "faq-career-opportunities",
    question: "What career guidance and hiring opportunities are offered?",
    answer: "Our Career Services unit connects graduates directly with verified hiring partners including Eldeco System Indicator, Technowise Solution Limited, and RISIIT Sys LLC. We provide technical mock interviews, resume optimization, and priority interview referrals."
  },
  {
    id: "faq-payments-emi",
    question: "What payment and EMI options are available?",
    answer: "We offer transparent fee structures with zero-cost EMI plans ranging from 3 to 12 months with leading credit cards and educational financing partners. Net banking, UPI, debit cards, and corporate sponsorship invoices are also accepted."
  }
];

// Schedule details dataset for dedicated training schedule section
export const trainingSchedules = {
  location: "Remote / Online",
  workModel: "100% Remote",
  trainingMode: "Online",
  liveTiming: "6:00 PM IST",
  weekday: {
    title: "Weekday Evening Schedule",
    timings: "Evening Sessions after 5:00 PM IST",
    description: "Designed for working professionals and university students. Attend live interactive masterclasses without interrupting work or daytime classes.",
    highlights: [
      "Regular live learning and peer interaction",
      "Official live masterclass at 6:00 PM IST",
      "Immediate Q&A and code resolution",
      "Recorded access uploaded within 2 hours"
    ]
  },
  weekend: {
    title: "Weekend Intensive Schedule",
    timings: "Available from 7:00 AM to 10:00 PM IST",
    description: "Flexible, high-impact weekend slots featuring hands-on implementation labs, capstone sprints, and 1-on-1 expert mentor reviews.",
    highlights: [
      "Flexible learning and session timings",
      "Deep-dive system architecture labs",
      "1-on-1 code reviews with Industry Experts",
      "Dedicated doubt-clearing office hours"
    ]
  }
};
