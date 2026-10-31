// RIS NextGen - Courses Dataset
// Edit or add courses below. Each course has clean metadata for filtering, sorting, and display.

export const COURSE_CATEGORIES = [
  "All",
  "Technology",
  "Data Science",
  "Business",
  "Finance",
  "Design",
  "Career Skills"
];

export const courses = [
  {
    id: "fsd-cloud-01",
    title: "Full Stack Software Engineering & Cloud Native Systems",
    category: "Technology",
    description: "Master modern microservices, React 19, Node.js, Docker, Kubernetes, and AWS deployment with production-grade capstones.",
    duration: "24 Weeks",
    mode: "Live Interactive",
    rating: 4.9,
    reviewsCount: 1840,
    price: 38999,
    oldPrice: 59999,
    enrolledCount: "4,200+",
    badge: "Bestseller",
    isFeatured: true,
    level: "Beginner to Advanced",
    nextBatch: "Starts 15th Nov 2026",
    skills: ["React", "Node.js", "Docker", "AWS", "PostgreSQL", "Microservices"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ai-llm-02",
    title: "Generative AI, LLM Applications & Agentic Systems",
    category: "Technology",
    description: "Build autonomous multi-agent pipelines, RAG architecture, fine-tune models, and deploy production AI applications.",
    duration: "16 Weeks",
    mode: "Live Interactive",
    rating: 4.95,
    reviewsCount: 2150,
    price: 44999,
    oldPrice: 69999,
    enrolledCount: "3,800+",
    badge: "Trending 🔥",
    isFeatured: true,
    level: "Intermediate",
    nextBatch: "Starts 12th Nov 2026",
    skills: ["LangChain", "Vector DBs", "PyTorch", "OpenAI APIs", "Autonomous Agents"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ds-ml-03",
    title: "Applied Data Science, Machine Learning & Big Data Analytics",
    category: "Data Science",
    description: "From data wrangling to predictive analytics and MLOps. Work on real enterprise datasets with mentorship from Fortune 500 leads.",
    duration: "20 Weeks",
    mode: "Live Interactive",
    rating: 4.88,
    reviewsCount: 1420,
    price: 34999,
    oldPrice: 54999,
    enrolledCount: "2,950+",
    badge: "High Placement Rate",
    isFeatured: true,
    level: "All Levels",
    nextBatch: "Starts 20th Nov 2026",
    skills: ["Python", "Pandas", "Scikit-Learn", "Apache Spark", "Tableau", "MLOps"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pm-exec-04",
    title: "Strategic Product Management & Tech Leadership",
    category: "Business",
    description: "Drive product lifecycle from ideation to scale. Learn user research, PRD authoring, unit economics, and data-driven prioritization.",
    duration: "14 Weeks",
    mode: "Live Interactive",
    rating: 4.85,
    reviewsCount: 980,
    price: 29999,
    oldPrice: 47999,
    enrolledCount: "1,850+",
    badge: "Top Rated",
    isFeatured: true,
    level: "Beginner to Intermediate",
    nextBatch: "Starts 18th Nov 2026",
    skills: ["Product Strategy", "Wireframing", "A/B Testing", "Agile", "Metrics & KPIs"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fintech-val-05",
    title: "Corporate Financial Modeling, M&A & Fintech Valuation",
    category: "Finance",
    description: "Hands-on financial statement analysis, DCF valuation, venture capital deal structuring, and algorithmic trading foundations.",
    duration: "16 Weeks",
    mode: "Hybrid Live",
    rating: 4.82,
    reviewsCount: 840,
    price: 31999,
    oldPrice: 49999,
    enrolledCount: "1,620+",
    badge: "Industry Certified",
    isFeatured: false,
    level: "Intermediate to Advanced",
    nextBatch: "Starts 25th Nov 2026",
    skills: ["Financial Modeling", "Valuation", "LBO", "Equity Research", "Fintech APIs"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cyber-defense-06",
    title: "Cybersecurity, Ethical Hacking & Cloud Defense Fellowship",
    category: "Technology",
    description: "Master threat modeling, penetration testing, SIEM operations, zero-trust architectures, and incident response simulations.",
    duration: "18 Weeks",
    mode: "Live Interactive",
    rating: 4.91,
    reviewsCount: 1120,
    price: 36999,
    oldPrice: 55999,
    enrolledCount: "2,100+",
    badge: "High Demand",
    isFeatured: false,
    level: "Intermediate",
    nextBatch: "Starts 10th Dec 2026",
    skills: ["Network Security", "Kali Linux", "Wireshark", "Metasploit", "Cloud Security"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "uiux-design-07",
    title: "Enterprise UI/UX Design & Design Systems Engineering",
    category: "Design",
    description: "Create scalable design systems in Figma, conduct cognitive walkthroughs, test user behaviors, and hand off pixel-perfect specs.",
    duration: "12 Weeks",
    mode: "Self-Paced + Live Mentorship",
    rating: 4.89,
    reviewsCount: 1320,
    price: 24999,
    oldPrice: 39999,
    enrolledCount: "3,100+",
    badge: "Portfolio Ready",
    isFeatured: false,
    level: "Beginner Friendly",
    nextBatch: "Immediate Access + Weekly Live Q&A",
    skills: ["Figma", "Design Tokens", "User Research", "Prototyping", "Micro-interactions"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "devops-sre-08",
    title: "Cloud DevOps, CI/CD Pipelines & Site Reliability Engineering",
    category: "Technology",
    description: "Automate zero-downtime deployments with Terraform, GitHub Actions, Kubernetes, Prometheus, and Grafana monitoring.",
    duration: "16 Weeks",
    mode: "Live Interactive",
    rating: 4.92,
    reviewsCount: 1560,
    price: 37999,
    oldPrice: 58999,
    enrolledCount: "2,740+",
    badge: "Career Accelerator",
    isFeatured: false,
    level: "Intermediate to Advanced",
    nextBatch: "Starts 5th Dec 2026",
    skills: ["Kubernetes", "Terraform", "CI/CD", "Docker", "Prometheus", "AWS EKS"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "exec-comm-09",
    title: "Executive Communication, Negotiation & Career Mastery",
    category: "Career Skills",
    description: "Propel into senior management. Hone cross-functional persuasion, executive presence, salary negotiation, and high-stakes pitching.",
    duration: "8 Weeks",
    mode: "Weekend Live Masterclasses",
    rating: 4.87,
    reviewsCount: 760,
    price: 19999,
    oldPrice: 29999,
    enrolledCount: "1,450+",
    badge: "Fast-Track",
    isFeatured: false,
    level: "All Professionals",
    nextBatch: "Starts 22nd Nov 2026",
    skills: ["Strategic Pitching", "Conflict Resolution", "Negotiation", "Leadership Presence"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "growth-mkt-10",
    title: "Performance Marketing, SEO & Tech Growth Hacking",
    category: "Business",
    description: "Master omnichannel customer acquisition, conversion rate optimization (CRO), Meta/Google ad bidding algorithms, and retention loops.",
    duration: "12 Weeks",
    mode: "Live Interactive",
    rating: 4.84,
    reviewsCount: 920,
    price: 22999,
    oldPrice: 34999,
    enrolledCount: "2,080+",
    badge: "ROI Focused",
    isFeatured: false,
    level: "Beginner to Intermediate",
    nextBatch: "Starts 28th Nov 2026",
    skills: ["Meta Ads", "Google Ads", "Technical SEO", "Growth Loops", "GA4 Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "react-native-11",
    title: "Mobile App Development with React Native & Expo",
    category: "Technology",
    description: "Build cross-platform iOS and Android apps with native device APIs, state management, offline support, and app store publishing.",
    duration: "14 Weeks",
    mode: "Live Interactive",
    rating: 4.86,
    reviewsCount: 1040,
    price: 29999,
    oldPrice: 45999,
    enrolledCount: "1,980+",
    badge: "Hands-on",
    isFeatured: false,
    level: "Intermediate",
    nextBatch: "Starts 1st Dec 2026",
    skills: ["React Native", "Expo", "Redux Toolkit", "Native Modules", "App Store CI/CD"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fin-wealth-12",
    title: "Personal Wealth Management, Quant Trading & Derivatives",
    category: "Finance",
    description: "Learn algorithmic backtesting in Python, options trading strategies, risk hedging, and institutional portfolio management techniques.",
    duration: "12 Weeks",
    mode: "Live Interactive",
    rating: 4.81,
    reviewsCount: 690,
    price: 27999,
    oldPrice: 42999,
    enrolledCount: "1,340+",
    badge: "Quant Edge",
    isFeatured: false,
    level: "Intermediate",
    nextBatch: "Starts 8th Dec 2026",
    skills: ["Python for Finance", "Options Strategies", "Risk Hedging", "Portfolio Theory"],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"
  }
];

// Testimonials data for student reviews carousel
export const testimonials = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "Senior Full Stack Engineer at Swiggy",
    former: "Former Junior Support Dev",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    courseTaken: "Full Stack & Cloud Native Systems",
    review: "The curriculum at RIS NextGen is unmatched. The live architecture reviews and 1-on-1 mentor guidance helped me transition from a support role to an SDE-2 with a 140% salary hike.",
    highlight: "140% Salary Hike"
  },
  {
    id: 2,
    name: "Pooja Krishnamurthy",
    role: "AI Application Specialist at Zomato",
    former: "Former Python Developer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    courseTaken: "Generative AI & LLM Systems",
    review: "Unlike theoretical tutorials, we actually deployed custom RAG agents and multi-model workflows. The placement cell scheduled 4 interviews in my first month after completing the capstone.",
    highlight: "Placement within 30 days"
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Lead Product Manager at Razorpay",
    former: "Former Business Analyst",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    courseTaken: "Strategic Product Management",
    review: "The live case studies were directly applicable to real high-scale fintech challenges. Learning from practitioners who are active Directors of Product makes all the difference.",
    highlight: "Promoted to Lead PM"
  },
  {
    id: 4,
    name: "Sneha Mukherjee",
    role: "Data Scientist at Fractal Analytics",
    former: "Former QA Engineer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    courseTaken: "Applied Data Science & Machine Learning",
    review: "RIS NextGen gave me the practical confidence I needed. The hands-on projects in MLOps and predictive modeling were the star highlights during my technical interviews.",
    highlight: "Switched to Data Science"
  },
  {
    id: 5,
    name: "Rohan Varma",
    role: "DevOps Engineer at Paytm",
    former: "System Administrator",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    courseTaken: "Cloud DevOps & SRE",
    review: "Setting up real Kubernetes clusters and automated CI/CD pipelines under senior mentorship gave me the exact production exposure required for high-paying roles.",
    highlight: "Double Certified & Hired"
  }
];

// FAQs data
export const faqs = [
  {
    question: "How are classes conducted at RIS NextGen?",
    answer: "All our premier cohorts are conducted via live, interactive online sessions with senior industry practitioners. You can ask questions in real-time, participate in live coding, and collaborate with peers. All sessions are recorded and uploaded within 2 hours with lifetime access."
  },
  {
    question: "Is there guaranteed placement assistance?",
    answer: "Yes! Our dedicated Career Support Cell provides comprehensive resume and LinkedIn optimization, 1-on-1 mock technical interviews, portfolio reviews, and direct interview scheduling with our network of 250+ top hiring partners across tech and corporate sectors."
  },
  {
    question: "What if I miss a live lecture?",
    answer: "No problem at all! Every lecture is recorded in high definition and available on your student dashboard alongside class notes, source code, and supplementary readings. Plus, you can attend weekly doubt-clearing office hours with teaching assistants."
  },
  {
    question: "Do I receive a certificate upon course completion?",
    answer: "Yes, you will receive an industry-recognized, verifiable digital certificate with a unique verification URL and credential ID that you can directly add to your LinkedIn profile and resume."
  },
  {
    question: "Are flexible EMI or installment payment plans available?",
    answer: "Yes! We offer no-cost EMI options ranging from 3 to 12 months with leading credit/debit cards, as well as easy educational loan options through our financing partners with instant paperless approval."
  },
  {
    question: "Can working professionals manage these courses alongside a full-time job?",
    answer: "Absolutely. Our schedules are intentionally curated for working professionals and ambitious college students. Live classes are held on weekday evenings (after 8:00 PM IST) or on weekends, allowing you to learn without disrupting your work schedule."
  }
];

// Hiring partners logos placeholder data
export const hiringPartners = [
  { name: "Google", logoText: "Google" },
  { name: "Microsoft", logoText: "Microsoft" },
  { name: "Amazon", logoText: "Amazon" },
  { name: "Swiggy", logoText: "Swiggy" },
  { name: "Zomato", logoText: "Zomato" },
  { name: "Razorpay", logoText: "Razorpay" },
  { name: "Paytm", logoText: "Paytm" },
  { name: "Flipkart", logoText: "Flipkart" },
  { name: "Infosys", logoText: "Infosys" },
  { name: "TCS", logoText: "TCS" }
];
