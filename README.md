# RIS NextGen — Education & Online Courses Web Application

A modern, high-converting, fully responsive 2-page web application built for **RIS NextGen** (an education and career accelerator brand). 

Designed with an enterprise tech-forward visual aesthetic, smooth animations, comprehensive client-side course filtering and sorting, interactive modals for enrollment and course syllabus previews, and complete mobile-first responsiveness (tested at 375px mobile, 768px tablet, and 1280px+ desktop).

---

## 🚀 Live Demo & Quick Start

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build locally
npm run preview

# 5. Run code linter
npm run lint
```

The application runs by default at `http://localhost:5173/` (or `http://localhost:4173/` when previewing production).

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/) (Client-side routing with deep link parameter support)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` brand tokens
- **Typography**: `Rajdhani` (Headings & metrics) + `Inter` (Body & UI text) via Google Fonts
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: [Oxlint](https://oxc.rs/) (Configured with 0 warnings, 0 errors)

---

## 🎨 Brand Identity & Design System

The application strictly adheres to the RIS NextGen brand system derived from the tech-forward logo:

- **Logo Icon**: Custom vectorized SVG incorporating a gradient "R", an upward career acceleration arrow, and digital pixel blocks.
- **Color Palette**:
  - **Primary Navy**: `#0B3A8C` (Deep anchors, headings, brand emphasis)
  - **Royal Blue**: `#1565C0` (Interactive elements, gradients, secondary highlights)
  - **Bright Sky/Cyan**: `#00A8F0` (Accents, glows, badges, pulse indicators)
  - **Light Background Tint**: `#EAF5FF` (Card highlights, section backdrops)
  - **Dark Body Text**: `#0A1A33` (High readability headings and dark surfaces)
  - **Muted Subtext**: `#5B6B82` (Descriptions, secondary metadata, borders `#D8E8F8` / `#E1ECF8`)
  - **Pure White**: `#FFFFFF` (Surface contrast)
- **Signature Gradient**:
  `linear-gradient(135deg, #0B3A8C 0%, #1565C0 50%, #00A8F0 100%)`
- **Design Touches**: 16px to 24px rounded corners (`rounded-2xl` / `rounded-3xl`), soft blue glow shadows (`rgba(21, 101, 192, 0.08)`), micro-interaction hover lifts, and subtle background pixel/dot matrix patterns.

---

## 📁 Project Structure

```text
risnext/
├── public/
│   ├── favicon.svg
│   └── logo-icon.svg             # Standalone brand SVG icon
├── src/
│   ├── assets/                   # Static media
│   ├── components/
│   │   ├── CourseCard.jsx        # Reusable course card with hover lift & tags
│   │   ├── CourseDetailModal.jsx # Full syllabus, modules & pricing breakdown
│   │   ├── CTAButton.jsx         # Gradient, outline, white, and subtle button variants
│   │   ├── EnrollModal.jsx       # Modal for cohort registration & EMI calculations
│   │   ├── FaqAccordion.jsx      # Interactive animated accordion
│   │   ├── Footer.jsx            # Multi-column footer with contact, links & social
│   │   ├── LeadForm.jsx          # Counselling callback lead capture form
│   │   ├── LoginModal.jsx        # Learner portal authentication modal
│   │   ├── Logo.jsx              # Vectorized scalable brand logo component
│   │   ├── Navbar.jsx            # Sticky navigation with micro-announcement bar & mobile drawer
│   │   ├── SectionHeading.jsx    # Section header with gradient word highlights
│   │   ├── StatsCounter.jsx      # Animated metrics and credibility bar
│   │   └── TestimonialCarousel.jsx # Auto-rotating alumni transformation carousel
│   ├── data/
│   │   └── courses.js            # Central data store (courses, categories, FAQs, mentors)
│   ├── pages/
│   │   ├── Home.jsx              # Landing page (Hero, stats, featured, benefits, CTA)
│   │   └── Courses.jsx           # Directory page with search, category filters, sorting
│   ├── App.jsx                   # Root layout, routing and global modal state
│   ├── index.css                 # Tailwind v4 theme definitions and utilities
│   └── main.jsx                  # React application entry point
├── index.html                    # SEO tags, OpenGraph metadata, font preconnects
├── package.json
└── vite.config.js
```

---

## 📖 How to Edit & Customize

### 1. How to Add or Edit Courses
All course data is decoupled and centralized in [`src/data/courses.js`](file:///e:/C#/risnext/src/data/courses.js). To add or edit a course, simply update or add an object to the `courses` array:

```javascript
{
  id: "ai-engineering-01",                     // Unique string ID
  title: "Generative AI & Agentic Systems",    // Course title
  category: "AI & Data",                       // Category (Must match COURSE_CATEGORIES)
  badge: "Bestseller",                         // Optional ribbon: "Bestseller", "Trending", "New"
  rating: 4.95,                                // Numeric rating (out of 5.0)
  reviewsCount: 1420,                          // Total student reviews
  enrolledCount: "3.2k+ Learners",             // Social proof text
  duration: "24 Weeks",                        // Program duration
  mode: "Live Cohort",                         // "Live Cohort" | "Hybrid" | "Self-Paced"
  price: 64999,                                // Discounted tuition fee (in INR)
  oldPrice: 99999,                             // Strikethrough original price
  description: "Master LLMs, LangChain, autonomous agentic workflows...",
  skills: ["Python", "LangChain", "RAG", "Vector DBs", "Agentic Systems"],
  image: "https://images.unsplash.com/...",    // High-resolution cover photo
  isFeatured: true,                            // Displays on the Home page if true
  nextBatch: "Starts Nov 15 • Weekend Live"     // Batch schedule note
}
```

### 2. How to Edit Categories
In [`src/data/courses.js`](file:///e:/C#/risnext/src/data/courses.js), update the `COURSE_CATEGORIES` array:
```javascript
export const COURSE_CATEGORIES = [
  "All",
  "Technology",
  "AI & Data",
  "Cloud & DevOps",
  "Business & Product",
  "Cybersecurity"
];
```

### 3. How to Customize Brand Colors & Fonts
Theme tokens are defined in [`src/index.css`](file:///e:/C#/risnext/src/index.css) using Tailwind v4 `@theme`:
```css
@theme {
  --color-navy: #0B3A8C;
  --color-royal: #1565C0;
  --color-cyan: #00A8F0;
  --color-tint: #EAF5FF;
  --color-dark: #0A1A33;
  --color-muted: #5B6B82;
  --font-heading: 'Rajdhani', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```
To adjust the signature gradient, modify the `.brand-gradient` class in `src/index.css`:
```css
.brand-gradient {
  background: linear-gradient(135deg, #0B3A8C 0%, #1565C0 50%, #00A8F0 100%);
}
```

### 4. How to Update Logo & Branding
The logo is encapsulated in [`src/components/Logo.jsx`](file:///e:/C#/risnext/src/components/Logo.jsx). 
- To change the company name or tagline, edit the typography strings inside `Logo.jsx`.
- To swap with a custom PNG/SVG file, replace the `<svg>` element inside `Logo.jsx` with an `<img src="/your-logo.svg" alt="RIS NextGen" />`.

---

## 📱 Responsiveness Testing

The application is thoroughly verified across standard screen breakpoints:
- **Mobile (375px - 640px)**: 
  - Sticky navbar with compact announcement banner and slide-down navigation drawer.
  - 1-column course grid with touch-friendly cards and modals.
  - Horizontal scrolling category filter chips.
- **Tablet (768px - 1024px)**: 
  - 2-column course grid.
  - Reorganized hero metrics and 2-column benefit highlights.
- **Desktop (1280px+)**: 
  - 3-column course grid on `/courses`, 4-column showcase on `/`.
  - Floating dynamic stat cards, interactive masterclass preview pill, and expanded navigation bar.

---

## 📄 License & Ownership
Created for **RIS NextGen**. All rights reserved © 2026.
