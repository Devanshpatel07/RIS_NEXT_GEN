import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Database,
  Layers,
  Terminal,
  BookOpen,
  CheckCircle2,
  Copy,
  Check,
  Play,
  ExternalLink,
  Table,
  FileCode,
  Flame
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

// Complete Database Learning Dataset
const databaseData = {
  structured: {
    title: "Structured Data",
    description: "Relational database management systems (RDBMS) enforcing ACID transactions, structured schema definitions, and mathematical relational algebra.",
    databases: [
      {
        id: "sql",
        name: "SQL (ANSI SQL)",
        badge: "Relational Standard",
        tagline: "The universal language for querying, manipulating, and defining relational databases.",
        introduction: "Structured Query Language (SQL) is the international standard (ANSI/ISO) declarative language for interacting with relational database management systems. Based on relational algebra developed by E.F. Codd, SQL allows engineers to define schemas (DDL), query and manipulate data (DML), and control transactions (TCL) with mathematical consistency.",
        coreConcepts: [
          "Tables (Relations), Rows (Tuples), and Columns (Attributes).",
          "Primary Keys for entity integrity and Foreign Keys for referential integrity.",
          "ACID Guarantees: Atomicity, Consistency, Isolation, and Durability.",
          "Normalization theory (1NF, 2NF, 3NF, BCNF) to eliminate data redundancy."
        ],
        syntaxExamples: [
          {
            title: "Table Creation & Constraints",
            code: `CREATE TABLE learners (
  learner_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  enrolled_track VARCHAR(80) NOT NULL,
  joined_date DATE DEFAULT CURRENT_DATE,
  gpa NUMERIC(3, 2) CHECK (gpa >= 0.00 AND gpa <= 4.00)
);`
          },
          {
            title: "Complex Multi-Table JOIN with Aggregation",
            code: `SELECT 
  c.course_name,
  COUNT(e.enrollment_id) AS total_students,
  ROUND(AVG(e.final_score), 2) AS average_score
FROM courses c
INNER JOIN enrollments e ON c.course_id = e.course_id
WHERE e.status = 'COMPLETED'
GROUP BY c.course_id, c.course_name
HAVING COUNT(e.enrollment_id) >= 10
ORDER BY average_score DESC;`
          }
        ],
        crudOperations: {
          create: `INSERT INTO learners (full_name, email, enrolled_track, gpa)
VALUES ('Aarav Patel', 'aarav.patel@example.com', 'Cybersecurity', 3.85);`,
          read: `SELECT learner_id, full_name, email, enrolled_track 
FROM learners 
WHERE enrolled_track = 'Cybersecurity'
ORDER BY joined_date DESC 
LIMIT 20;`,
          update: `UPDATE learners 
SET enrolled_track = 'AI/ML Master Fellowship', gpa = 3.92
WHERE email = 'aarav.patel@example.com';`,
          delete: `DELETE FROM learners 
WHERE learner_id = 1042 AND joined_date < '2024-01-01';`
        },
        practicalExercises: [
          {
            task: "Exercise 1: Find Top Performers per Category",
            prompt: "Write a query utilizing window functions (DENSE_RANK) to return the top 3 highest scoring learners per specialization track.",
            solution: `WITH RankedLearners AS (
  SELECT 
    learner_id,
    full_name,
    enrolled_track,
    final_score,
    DENSE_RANK() OVER (
      PARTITION BY enrolled_track 
      ORDER BY final_score DESC
    ) AS rank_in_track
  FROM course_grades
)
SELECT * FROM RankedLearners WHERE rank_in_track <= 3;`
          },
          {
            task: "Exercise 2: Prevent Race Conditions with Explicit Transactions",
            prompt: "Write a transactional block transferring a learner seat between cohorts while ensuring atomicity.",
            solution: `BEGIN TRANSACTION;
  UPDATE cohorts SET available_seats = available_seats + 1 WHERE cohort_id = 'CYBER-OCT';
  UPDATE cohorts SET available_seats = available_seats - 1 WHERE cohort_id = 'CYBER-NOV';
  INSERT INTO transfer_logs (learner_id, from_cohort, to_cohort, timestamp)
  VALUES (402, 'CYBER-OCT', 'CYBER-NOV', CURRENT_TIMESTAMP);
COMMIT;`
          }
        ],
        advancedTopics: [
          "B-Tree index mechanics, index-only scans, and multi-column composite index ordering.",
          "Subqueries vs Common Table Expressions (CTEs) and recursive query processing.",
          "Transaction Isolation Levels: Read Committed, Repeatable Read, Serializable.",
          "Query optimizer explain plans (cost estimates, sequential scans vs index scans)."
        ],
        learningResources: [
          { name: "ANSI SQL-92 Standard Reference", url: "https://www.iso.org/standard/18178.html" },
          { name: "PostgreSQL Interactive Query Engine", url: "https://www.postgresql.org/docs/" },
          { name: "Use The Index, Luke (SQL Indexing Guide)", url: "https://use-the-index-luke.com/" }
        ]
      },
      {
        id: "oracle",
        name: "Oracle Database",
        badge: "Enterprise RDBMS",
        tagline: "The mission-critical database engine powering Fortune 500 financial and telecommunication backbones.",
        introduction: "Oracle Database is a multi-model, enterprise-tier relational database system designed for high-concurrency online transaction processing (OLTP), large-scale data warehousing, and mission-critical cloud deployments. Featuring PL/SQL procedural extensions and Real Application Clusters (RAC), it delivers unmatched high availability and disaster recovery.",
        coreConcepts: [
          "Physical vs Logical Architecture: Datafiles, Redo Logs, Control files vs Tablespaces, Extents, Segments.",
          "PL/SQL Engine: Procedural language extensions with package encapsulation and exception handling.",
          "Multi-tenant Architecture: Container Databases (CDB) and Pluggable Databases (PDB).",
          "Oracle RAC (Real Application Clusters) for multi-node active-active clustering."
        ],
        syntaxExamples: [
          {
            title: "Oracle PL/SQL Stored Package Declaration",
            code: `CREATE OR REPLACE PACKAGE pkg_learner_mgmt AS
  PROCEDURE enroll_student(
    p_learner_id IN NUMBER,
    p_course_id IN NUMBER,
    p_status OUT VARCHAR2
  );
  FUNCTION calculate_completion(p_learner_id IN NUMBER) RETURN NUMBER;
END pkg_learner_mgmt;
/`
          },
          {
            title: "PL/SQL Package Body with Cursor & Autonomous Transaction",
            code: `CREATE OR REPLACE PACKAGE BODY pkg_learner_mgmt AS
  PROCEDURE enroll_student(
    p_learner_id IN NUMBER,
    p_course_id IN NUMBER,
    p_status OUT VARCHAR2
  ) IS
    PRAGMA AUTONOMOUS_TRANSACTION;
    v_seats NUMBER;
  BEGIN
    SELECT seats_left INTO v_seats FROM batches 
    WHERE course_id = p_course_id FOR UPDATE;
    
    IF v_seats > 0 THEN
      UPDATE batches SET seats_left = seats_left - 1 WHERE course_id = p_course_id;
      INSERT INTO enrollments (learner_id, course_id, enrolled_date)
      VALUES (p_learner_id, p_course_id, SYSDATE);
      COMMIT;
      p_status := 'SUCCESS';
    ELSE
      p_status := 'FULL';
    END IF;
  EXCEPTION
    WHEN OTHERS THEN
      ROLLBACK;
      p_status := 'ERROR: ' || SQLERRM;
  END enroll_student;
END pkg_learner_mgmt;
/`
          }
        ],
        crudOperations: {
          create: `INSERT INTO ora_learners (learner_id, full_name, email, track)
VALUES (seq_learner_id.NEXTVAL, 'Devika Nambiar', 'devika@example.com', 'Database Architecture');`,
          read: `SELECT learner_id, full_name, email, track 
FROM ora_learners 
WHERE ROWNUM <= 25 
ORDER BY learner_id;`,
          update: `UPDATE ora_learners 
SET track = 'Cloud DevOps', updated_at = SYSDATE 
WHERE learner_id = 5001;`,
          delete: `DELETE FROM ora_learners 
WHERE learner_id = 5001;`
        },
        practicalExercises: [
          {
            task: "Exercise 1: Create an Oracle Trigger for Audit Logging",
            prompt: "Write a row-level trigger capturing salary/enrollment status changes with user and timestamp auditing.",
            solution: `CREATE OR REPLACE TRIGGER trg_audit_learner_changes
BEFORE UPDATE OF track ON ora_learners
FOR EACH ROW
BEGIN
  INSERT INTO ora_learner_audit (learner_id, old_track, new_track, changed_by, changed_date)
  VALUES (:OLD.learner_id, :OLD.track, :NEW.track, USER, SYSDATE);
END;
/`
          }
        ],
        advancedTopics: [
          "Oracle Multi-Tenant PDB cloning and resource management.",
          "Automatic Storage Management (ASM) and Oracle Data Guard for zero-data-loss standby replication.",
          "Partitioning strategies: Range, List, Hash, and Composite Interval partitioning.",
          "AWR (Automatic Workload Repository) report analysis and SQL Tuning Advisor."
        ],
        learningResources: [
          { name: "Oracle Database 23ai Documentation", url: "https://docs.oracle.com/en/database/" },
          { name: "Oracle Live SQL Sandbox", url: "https://livesql.oracle.com/" }
        ]
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        badge: "Advanced Open Source RDBMS",
        tagline: "The world's most sophisticated open-source object-relational database system.",
        introduction: "PostgreSQL is an open-source object-relational database system with more than 35 years of active engineering. Renowned for its extensibility and strict standards compliance, it supports complex data types (JSONB, Arrays, PostGIS), advanced concurrency via Multi-Version Concurrency Control (MVCC), and distributed query execution.",
        coreConcepts: [
          "MVCC (Multi-Version Concurrency Control): Readers do not block writers, and writers do not block readers.",
          "Hybrid Relational + Document storage via indexed binary JSON (JSONB).",
          "Advanced Indexing: B-Tree, Hash, GiST, SP-GiST, GIN (Generalized Inverted Index), and BRIN.",
          "Write-Ahead Logging (WAL) and streaming logical/physical replication."
        ],
        syntaxExamples: [
          {
            title: "JSONB Semi-Structured Document Indexing",
            code: `CREATE TABLE capstone_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id INT NOT NULL,
  metadata JSONB NOT NULL,
  submitted_at TIMESTAMPTZ DEFAULT clock_timestamp()
);

-- Generalized Inverted Index (GIN) for high-performance JSON key search
CREATE INDEX idx_capstone_metadata ON capstone_submissions USING GIN (metadata);

-- Query searching inside nested JSONB objects:
SELECT student_id, metadata->>'repo_url' AS repo
FROM capstone_submissions
WHERE metadata @> '{"status": "APPROVED", "tech_stack": ["PostgreSQL"]}';`
          },
          {
            title: "PostgreSQL Common Table Expression (CTE) with Window Framing",
            code: `WITH monthly_enrollments AS (
  SELECT 
    date_trunc('month', enrolled_date) AS cohort_month,
    COUNT(*) AS new_students
  FROM enrollments
  GROUP BY cohort_month
)
SELECT 
  cohort_month,
  new_students,
  SUM(new_students) OVER (ORDER BY cohort_month) AS cumulative_students
FROM monthly_enrollments;`
          }
        ],
        crudOperations: {
          create: `INSERT INTO pg_students (name, email, skills)
VALUES ('Karthik Reddy', 'karthik@example.com', ARRAY['Python', 'PostgreSQL', 'Docker'])
RETURNING id, created_at;`,
          read: `SELECT id, name, skills[1] AS primary_skill 
FROM pg_students 
WHERE 'PostgreSQL' = ANY(skills);`,
          update: `UPDATE pg_students 
SET skills = array_append(skills, 'Kubernetes') 
WHERE id = '7c9e6679-7425-40de-944b-e07fc1f90ae7';`,
          delete: `DELETE FROM pg_students 
WHERE id = '7c9e6679-7425-40de-944b-e07fc1f90ae7';`
        },
        practicalExercises: [
          {
            task: "Exercise 1: Analyze Slow Queries with EXPLAIN (ANALYZE, BUFFERS)",
            prompt: "Inspect the execution plan of a sequential scan vs an index scan on a table with 500,000 records.",
            solution: `EXPLAIN (ANALYZE, BUFFERS, COSTS)
SELECT * FROM course_logs 
WHERE learner_id = 45020 AND log_time >= NOW() - INTERVAL '7 days';`
          }
        ],
        advancedTopics: [
          "Vacuuming and Auto-vacuum tuning to reclaim dead tuple storage.",
          "Connection pooling architectures with PgBouncer.",
          "Logical decoding and change data capture (CDC) pipelines with Debezium.",
          "PostGIS extensions for spatial data processing and geolocation analysis."
        ],
        learningResources: [
          { name: "Official PostgreSQL 17 Documentation", url: "https://www.postgresql.org/docs/current/" },
          { name: "PostgreSQL Exercises Platform", url: "https://pgexercises.com/" }
        ]
      }
    ]
  },
  unstructured: {
    title: "Unstructured Data (NoSQL)",
    description: "Distributed, document-oriented NoSQL database architectures engineered for dynamic schemas, horizontal scaling, and high-velocity ingestion.",
    databases: [
      {
        id: "mongodb",
        name: "MongoDB",
        badge: "Document NoSQL",
        tagline: "The premier document database designed for modern developer productivity and massive horizontal scale.",
        introduction: "MongoDB is a leading source-available, cross-platform document-oriented database program. Categorized as a NoSQL database, MongoDB utilizes JSON-like BSON (Binary JSON) documents with dynamic, flexible schemas, enabling engineers to store rich, polymorphic data without rigid schema migrations.",
        coreConcepts: [
          "BSON Documents: Field-value pairs supporting embedded arrays and sub-documents.",
          "Collections: Groups of related documents without enforced identical schemas.",
          "Aggregation Framework: Multi-stage pipeline architecture ($match, $group, $project, $lookup).",
          "Horizontal Scale-Out: Automated sharding across clusters and Replica Sets for high availability."
        ],
        syntaxExamples: [
          {
            title: "MongoDB Schema Validation & Index Definition",
            code: `db.createCollection("students", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["fullName", "email", "enrolledCourses"],
      properties: {
        fullName: { bsonType: "string", description: "Must be a string" },
        email: { bsonType: "string", pattern: "^.+@.+$" },
        enrolledCourses: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["courseId", "enrolledAt"],
            properties: {
              courseId: { bsonType: "string" },
              enrolledAt: { bsonType: "date" }
            }
          }
        }
      }
    }
  }
});

// Create compound unique index
db.students.createIndex({ email: 1 }, { unique: true });
db.students.createIndex({ "enrolledCourses.courseId": 1 });`
          },
          {
            title: "Multi-Stage Aggregation Pipeline ($match, $lookup, $group)",
            code: `db.orders.aggregate([
  // Stage 1: Filter confirmed enrollments
  { $match: { paymentStatus: "COMPLETED" } },

  // Stage 2: Join with Course documents
  {
    $lookup: {
      from: "courses",
      localField: "courseId",
      foreignField: "_id",
      as: "courseDetails"
    }
  },
  { $unwind: "$courseDetails" },

  // Stage 3: Group by specialization track
  {
    $group: {
      _id: "$courseDetails.category",
      totalRevenue: { $sum: "$amountPaid" },
      learnerCount: { $sum: 1 }
    }
  },

  // Stage 4: Sort descending
  { $sort: { totalRevenue: -1 } }
]);`
          }
        ],
        crudOperations: {
          create: `db.students.insertOne({
  fullName: "Nisha Varma",
  email: "nisha.varma@example.com",
  enrolledCourses: [
    { courseId: "cyber-defense-01", enrolledAt: new Date(), progress: 0 }
  ],
  skills: ["Penetration Testing", "Linux", "MongoDB"],
  createdAt: new Date()
});`,
          read: `db.students.find(
  { "enrolledCourses.courseId": "cyber-defense-01" },
  { fullName: 1, email: 1, "enrolledCourses.$": 1 }
).sort({ createdAt: -1 }).limit(10);`,
          update: `db.students.updateOne(
  { email: "nisha.varma@example.com", "enrolledCourses.courseId": "cyber-defense-01" },
  { 
    $set: { "enrolledCourses.$.progress": 45 },
    $currentDate: { lastActivity: true }
  }
);`,
          delete: `db.students.deleteOne({ email: "nisha.varma@example.com" });`
        },
        practicalExercises: [
          {
            task: "Exercise 1: Real-time Leaderboard with $bucket & $facet",
            prompt: "Categorize learners into progress tiers (0-25%, 26-50%, 51-75%, 76-100%) in a single round-trip.",
            solution: `db.students.aggregate([
  {
    $facet: {
      "progressDistribution": [
        {
          $bucket: {
            groupBy: "$overallProgress",
            boundaries: [0, 25, 50, 75, 100],
            default: "Completed",
            output: { count: { $sum: 1 }, students: { $push: "$fullName" } }
          }
        }
      ],
      "topLearners": [
        { $sort: { overallProgress: -1 } },
        { $limit: 5 }
      ]
    }
  }
]);`
          }
        ],
        advancedTopics: [
          "Replica set consensus protocol (Raft-variant), Heartbeats, and Arbiter nodes.",
          "Sharding key selection (Hashed vs Ranged) and balancing chunk migrations.",
          "WiredTiger storage engine: B-Tree cache, checkpoints, and snappy compression.",
          "Change Streams for real-time reactive event-driven microservice architectures."
        ],
        learningResources: [
          { name: "Official MongoDB Manual", url: "https://www.mongodb.com/docs/" },
          { name: "MongoDB University Interactive Labs", url: "https://learn.mongodb.com/" },
          { name: "Studio 3T Query Optimization Guide", url: "https://studio3t.com/academy/" }
        ]
      }
    ]
  }
};

export default function DatabaseLearning() {
  const [activeCategory, setActiveCategory] = useState("structured"); // "structured" | "unstructured"
  const [selectedDbId, setSelectedDbId] = useState("sql"); // "sql" | "oracle" | "postgresql" | "mongodb"
  const [activeTab, setActiveTab] = useState("concepts"); // "concepts" | "syntax" | "crud" | "exercises" | "advanced" | "resources"
  const [copiedKey, setCopiedKey] = useState(null);

  // Interactive Query Playground State
  const [playgroundQuery, setPlaygroundQuery] = useState("SELECT learner_id, full_name, track, gpa FROM learners WHERE gpa >= 3.8 ORDER BY gpa DESC;");
  const [playgroundResult, setPlaygroundResult] = useState(null);
  const [runningQuery, setRunningQuery] = useState(false);

  const activeCategoryObj = databaseData[activeCategory];
  const activeDb =
    activeCategoryObj.databases.find((d) => d.id === selectedDbId) ||
    activeCategoryObj.databases[0];

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleRunPlayground = () => {
    setRunningQuery(true);
    setTimeout(() => {
      setRunningQuery(false);
      if (selectedDbId === 'mongodb') {
        setPlaygroundResult([
          { _id: "6732f91a0b12", fullName: "Aarav Patel", email: "aarav@example.com", track: "Cybersecurity", progress: 85 },
          { _id: "6732f91a0b13", fullName: "Priya Sharma", email: "priya@example.com", track: "AI/ML Fellowship", progress: 92 },
          { _id: "6732f91a0b14", fullName: "Devika Nambiar", email: "devika@example.com", track: "Database Eng", progress: 78 }
        ]);
      } else {
        setPlaygroundResult([
          { learner_id: 101, full_name: "Aarav Patel", track: "Cybersecurity", gpa: "3.92" },
          { learner_id: 104, full_name: "Priya Sharma", track: "AI/ML Fellowship", gpa: "3.89" },
          { learner_id: 108, full_name: "Rohan Varma", track: "Cloud DevOps", gpa: "3.85" }
        ]);
      }
    }, 400);
  };

  return (
    <div className="overflow-hidden">
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#EAF5FF]/80 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5B6B82] mb-6">
            <Link to="/" className="hover:text-[#0B3A8C] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/courses" className="hover:text-[#0B3A8C] transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-[#00A8F0]">Database Learning Hub</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FF] border border-[#00A8F0]/30 text-[#0B3A8C] text-xs font-semibold tracking-wider uppercase mb-5 shadow-xs">
              <Database className="w-3.5 h-3.5 text-[#00A8F0]" />
              <span>Interactive Database Curriculum & Lab</span>
            </div>

            <h1 className="font-['Rajdhani'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A1A33] tracking-tight leading-[1.1] mb-6">
              Master Structured & Unstructured{' '}
              <span className="bg-gradient-to-r from-[#0B3A8C] via-[#1565C0] to-[#00A8F0] bg-clip-text text-transparent">
                Data Architectures
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5B6B82] leading-relaxed mb-8">
              Explore enterprise database systems with live syntax examples, CRUD operations, practical exercises, and query optimization blueprints.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DUAL CATEGORY SWITCHER: STRUCTURED VS UNSTRUCTURED */}
      <section className="py-6 bg-white border-y border-[#E1ECF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("structured");
                  setSelectedDbId("sql");
                  setPlaygroundQuery("SELECT learner_id, full_name, track, gpa FROM learners WHERE gpa >= 3.8 ORDER BY gpa DESC;");
                  setPlaygroundResult(null);
                }}
                className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2.5 ${
                  activeCategory === "structured"
                    ? "bg-[#0B3A8C] text-white shadow-md shadow-[#0B3A8C]/20"
                    : "bg-[#F8FBFE] text-[#5B6B82] border border-[#D8E8F8] hover:border-[#00A8F0]"
                }`}
              >
                <Table className="w-4 h-4 text-[#00A8F0]" />
                <span>1. Structured Data (SQL, Oracle, PostgreSQL)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveCategory("unstructured");
                  setSelectedDbId("mongodb");
                  setPlaygroundQuery("db.students.find({ overallProgress: { $gte: 75 } }).sort({ overallProgress: -1 });");
                  setPlaygroundResult(null);
                }}
                className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2.5 ${
                  activeCategory === "unstructured"
                    ? "bg-[#0B3A8C] text-white shadow-md shadow-[#0B3A8C]/20"
                    : "bg-[#F8FBFE] text-[#5B6B82] border border-[#D8E8F8] hover:border-[#00A8F0]"
                }`}
              >
                <Layers className="w-4 h-4 text-[#00A8F0]" />
                <span>2. Unstructured Data (MongoDB)</span>
              </button>
            </div>

            <span className="text-xs font-semibold text-[#5B6B82]">
              Interactive Syntax & Query Playground Included
            </span>
          </div>
        </div>
      </section>

      {/* 3. DATABASE SELECTOR TABS & CONTENT EXPLORER */}
      <section className="py-12 md:py-20 bg-[#F8FBFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Databases Sub-Navigation */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {activeCategoryObj.databases.map((db) => {
              const isSelected = selectedDbId === db.id;
              return (
                <button
                  key={db.id}
                  type="button"
                  onClick={() => {
                    setSelectedDbId(db.id);
                    if (db.id === 'mongodb') {
                      setPlaygroundQuery("db.students.find({ overallProgress: { $gte: 75 } }).sort({ overallProgress: -1 });");
                    } else {
                      setPlaygroundQuery("SELECT learner_id, full_name, track, gpa FROM learners WHERE gpa >= 3.8 ORDER BY gpa DESC;");
                    }
                    setPlaygroundResult(null);
                  }}
                  className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "bg-white text-[#0B3A8C] border-2 border-[#00A8F0] shadow-md"
                      : "bg-white text-[#5B6B82] border border-[#D8E8F8] hover:border-[#00A8F0]"
                  }`}
                >
                  <Database className="w-4 h-4 text-[#00A8F0]" />
                  <span>{db.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EAF5FF] text-[#0B3A8C]">
                    {db.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Database Banner Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E8F8] shadow-md mb-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#E1ECF8]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#00A8F0] uppercase tracking-wider">
                    {activeCategoryObj.title}
                  </span>
                  <span className="text-[#5B6B82]">&bull;</span>
                  <span className="text-xs font-semibold text-[#5B6B82]">{activeDb.badge}</span>
                </div>
                <h2 className="font-['Rajdhani'] font-extrabold text-3xl sm:text-4xl text-[#0A1A33]">
                  {activeDb.name}
                </h2>
                <p className="text-sm sm:text-base text-[#5B6B82] mt-1 max-w-3xl">
                  {activeDb.tagline}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="#playground-section"
                  className="px-4 py-2.5 rounded-xl bg-[#EAF5FF] text-[#0B3A8C] text-xs font-bold hover:bg-[#d2ecfc] transition-colors flex items-center gap-1.5"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#00A8F0]" />
                  <span>Interactive Playground</span>
                </a>
                <Link
                  to="/courses"
                  className="px-4 py-2.5 rounded-xl bg-[#0B3A8C] text-white text-xs font-bold hover:bg-[#1565C0] transition-colors"
                >
                  View Database Course
                </Link>
              </div>
            </div>

            {/* 6 Sub-Sections Tabs */}
            <div className="flex flex-wrap gap-2 pt-6">
              {[
                { id: "concepts", label: "1. Concepts & Overview" },
                { id: "syntax", label: "2. Syntax & Code Examples" },
                { id: "crud", label: "3. CRUD Operations" },
                { id: "exercises", label: "4. Practical Exercises" },
                { id: "advanced", label: "5. Advanced Topics" },
                { id: "resources", label: "6. Learning Resources" }
              ].map((tab) => {
                const isCurrent = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isCurrent
                        ? "bg-[#0B3A8C] text-white shadow-xs"
                        : "bg-[#F8FBFE] text-[#5B6B82] border border-[#D8E8F8] hover:border-[#00A8F0]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* TAB 1: CONCEPTS */}
          {activeTab === "concepts" && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E8F8] shadow-sm space-y-6">
              <div>
                <h3 className="font-['Rajdhani'] font-bold text-2xl text-[#0A1A33] mb-3">
                  Introduction & Core Concepts
                </h3>
                <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
                  {activeDb.introduction}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E1ECF8]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1A33] mb-4">
                  Foundational Principles:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeDb.coreConcepts.map((concept, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#F8FBFE] border border-[#D8E8F8] flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#00A8F0] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#0A1A33] font-medium leading-relaxed">
                        {concept}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SYNTAX & CODE EXAMPLES */}
          {activeTab === "syntax" && (
            <div className="space-y-6">
              {activeDb.syntaxExamples.map((example, idx) => (
                <div key={idx} className="bg-[#07152A] rounded-3xl p-6 sm:p-7 border border-[#1565C0]/40 text-white shadow-xl overflow-hidden">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A8F0]">
                      <FileCode className="w-4 h-4" />
                      <span>{example.title}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(example.code, `syntax-${idx}`)}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedKey === `syntax-${idx}` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-blue-200" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="font-mono text-xs sm:text-sm text-blue-100 overflow-x-auto p-4 rounded-2xl bg-black/40 border border-white/5 leading-relaxed">
                    <code>{example.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: CRUD OPERATIONS */}
          {activeTab === "crud" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Create (INSERT / insertOne)", code: activeDb.crudOperations.create, color: "text-emerald-600" },
                { label: "Read (SELECT / find)", code: activeDb.crudOperations.read, color: "text-[#00A8F0]" },
                { label: "Update (UPDATE / updateOne)", code: activeDb.crudOperations.update, color: "text-amber-500" },
                { label: "Delete (DELETE / deleteOne)", code: activeDb.crudOperations.delete, color: "text-rose-500" }
              ].map((crud, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-[#D8E8F8] shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-['Rajdhani'] font-bold text-lg ${crud.color}`}>
                        {crud.label}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(crud.code, `crud-${idx}`)}
                        className="text-xs text-[#5B6B82] hover:text-[#0B3A8C] flex items-center gap-1 cursor-pointer"
                      >
                        {copiedKey === `crud-${idx}` ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedKey === `crud-${idx}` ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    <pre className="font-mono text-xs text-[#0A1A33] bg-[#F8FBFE] p-4 rounded-2xl border border-[#D8E8F8] overflow-x-auto leading-relaxed">
                      <code>{crud.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: PRACTICAL EXERCISES */}
          {activeTab === "exercises" && (
            <div className="space-y-6">
              {activeDb.practicalExercises.map((ex, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E8F8] shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-['Rajdhani'] font-bold text-xl text-[#0A1A33]">
                      {ex.task}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#EAF5FF] text-[#0B3A8C]">
                      Hands-on Lab
                    </span>
                  </div>

                  <p className="text-sm text-[#5B6B82] leading-relaxed">
                    <strong>Challenge:</strong> {ex.prompt}
                  </p>

                  <div className="pt-3 border-t border-[#E1ECF8]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                        Production Solution:
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(ex.solution, `ex-${idx}`)}
                        className="text-xs text-[#5B6B82] hover:text-[#0B3A8C] flex items-center gap-1 cursor-pointer"
                      >
                        {copiedKey === `ex-${idx}` ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedKey === `ex-${idx}` ? 'Copied' : 'Copy Solution'}</span>
                      </button>
                    </div>
                    <pre className="font-mono text-xs sm:text-sm text-blue-100 bg-[#07152A] p-4 rounded-2xl overflow-x-auto leading-relaxed">
                      <code>{ex.solution}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: ADVANCED TOPICS */}
          {activeTab === "advanced" && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E8F8] shadow-sm space-y-6">
              <div>
                <h3 className="font-['Rajdhani'] font-bold text-2xl text-[#0A1A33] mb-2">
                  Advanced Topics & Production Engineering
                </h3>
                <p className="text-sm text-[#5B6B82]">
                  Topics covered in our live engineering masterclasses and technical mock interview drills:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeDb.advancedTopics.map((topic, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F8FBFE] border border-[#D8E8F8] flex items-start gap-3">
                    <Flame className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#0A1A33] font-medium leading-relaxed">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: LEARNING RESOURCES */}
          {activeTab === "resources" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeDb.learningResources.map((res, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-[#D8E8F8] shadow-sm flex flex-col justify-between">
                  <div>
                    <BookOpen className="w-8 h-8 text-[#00A8F0] mb-3" />
                    <h4 className="font-['Rajdhani'] font-bold text-lg text-[#0A1A33] mb-1">
                      {res.name}
                    </h4>
                    <p className="text-xs text-[#5B6B82] mb-4">
                      Official verified technical reference documentation and sandbox environment.
                    </p>
                  </div>

                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3A8C] hover:text-[#00A8F0] transition-colors"
                  >
                    <span>Open Resource</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. INTERACTIVE QUERY PLAYGROUND */}
      <section id="playground-section" className="py-20 bg-[#07152A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="LIVE QUERY PLAYGROUND"
            title="Interactive Database"
            gradientWord="Execution Engine"
            subtitle="Test code queries in real-time. Execute declarative queries against simulated database catalogs."
            isDark
          />

          <div className="bg-[#0f244a] rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00A8F0]">
                <Terminal className="w-4 h-4" />
                <span>Active Engine: {activeDb.name} ({activeCategoryObj.title})</span>
              </div>

              <button
                type="button"
                onClick={handleRunPlayground}
                disabled={runningQuery}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1565C0] to-[#00A8F0] hover:from-[#0f4e96] hover:to-[#0090cf] text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>{runningQuery ? "Executing..." : "Execute Query"}</span>
              </button>
            </div>

            <textarea
              rows={4}
              value={playgroundQuery}
              onChange={(e) => setPlaygroundQuery(e.target.value)}
              className="w-full font-mono text-xs sm:text-sm text-emerald-300 bg-black/40 border border-white/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-[#00A8F0] resize-none"
            />

            {/* Query Result Box */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                  Execution Output / Result Set:
                </span>
                {playgroundResult && (
                  <span className="text-[11px] font-mono text-emerald-400">
                    &bull; 200 OK (Execution Time: 12ms)
                  </span>
                )}
              </div>

              {playgroundResult ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono border-collapse">
                    <thead>
                      <tr className="border-b border-white/20 text-[#00A8F0]">
                        {Object.keys(playgroundResult[0]).map((key) => (
                          <th key={key} className="py-2.5 px-3 uppercase">{key}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-blue-100">
                      {playgroundResult.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-white/5">
                          {Object.values(row).map((val, cIdx) => (
                            <td key={cIdx} className="py-2 px-3">{String(val)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="py-6 text-center text-xs text-blue-200/60 font-mono">
                  Click "Execute Query" above to evaluate query against the {activeDb.name} data engine.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
