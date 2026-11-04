import { 
  CoreValue, 
  DifferentiationFactor, 
  FAQItem, 
  JourneyStep, 
  MentorCategory, 
  ServiceItem,
  PhDServiceItem,
  JournalServiceItem,
  CareerCounsellingItem,
  PricingTier
} from '../types';
import img11 from '../assets/11.png';
import img22 from '../assets/22.png';
import img33 from '../assets/33.png';
import img44 from '../assets/44.png';

export const COMPANY_DETAILS = {
  name: "Pathfinders – The Guide",
  tagline: "Academic Excellence. Career Success. Lifelong Learning.",
  locations: "Chennai & Trichy | Accessible Online Across India & Beyond",
  email: "info@pathfinder.com",
  facultyEmail: "faculty@pathfinder.com",
  trainerEmail: "trainer@pathfinder.com",
  workingDays: "Monday to Friday (Mon–Fri Working Days)",
  workingHours: "9:00 AM – 8:00 PM IST (Monday – Friday)",
  foundingStoryLine1: "Pathfinders – The Guide is a holistic academic coaching and mentoring academy dedicated to helping students and working professionals discover and unlock their true potential.",
  foundingStoryLine2: "We walk alongside learners at every stage of their academic journey — from Higher Secondary school, through undergraduate and postgraduate study, all the way to MBA and PhD — offering personalised, subject-expert guidance that goes far beyond the classroom and well beyond the textbook.",
  foundingStory: "Pathfinders – The Guide is a holistic academic coaching and mentoring academy dedicated to helping students and working professionals discover and unlock their true potential.\nWe walk alongside learners at every stage of their academic journey — from Higher Secondary school, through undergraduate and postgraduate study, all the way to MBA and PhD — offering personalised, subject-expert guidance that goes far beyond the classroom and well beyond the textbook.",
  emblemMetaphor: `Like the ladder in our own emblem, rising to meet the globe it supports, we see learning as a climb with a destination in view — each rung a small, achievable step, and the world itself the height our students are being lifted toward.`,
};

export const TRUST_STRIP_ITEMS = [
  "Chennai Centre",
  "Trichy Centre",
  "Online Across India & Beyond",
  "Higher Secondary to PhD",
  "Research & Journal Mentorship",
  "Corporate & Institutional Programs",
  "Mon–Fri Dedicated Mentoring"
];

// Replaced "What Makes Us Different" with "Pathfinders Different"
export const DIFFERENTIATION_FACTORS: DifferentiationFactor[] = [
  {
    number: "01",
    title: "Holistic Mentoring",
    description: "A holistic academy that sets out to develop leaders, scholars and professionals — not simply prepare students to sit an exam. We measure success in genuine confidence and capability, not just marks on a page."
  },
  {
    number: "02",
    title: "Real-World Faculty",
    description: "Mentors who bring genuine academic credentials and real industry experience across Commerce, Management, and Engineering. Concepts are taught the way they are actually applied in real working life."
  },
  {
    number: "03",
    title: "Flexible, Life-Fitting Formats",
    description: "Hourly sessions, modular topics, and comprehensive monthly programs — built around real family, student, and work schedules so coaching adapts to the learner rather than forcing rigid templates."
  },
  {
    number: "04",
    title: "End-to-End Continuity",
    description: "From a student's first lesson through school exams, university degrees, research dissertations, and campus-to-career placement — one trusted relationship across the whole journey."
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Integrity",
    description: "We tell learners and parents the truth about where things stand, even when it's not the easiest thing to hear, because honest feedback is the only kind that actually helps someone improve."
  },
  {
    title: "Empathy",
    description: "We start every session by understanding the person in front of us, not just the syllabus in front of them — their pace, their pressures, and what success actually looks like for them."
  },
  {
    title: "Excellence",
    description: "We hold our own subject knowledge to a high standard and keep it current, because a mentor can't demand rigour from a student that they don't first demand of themselves."
  },
  {
    title: "Accessibility",
    description: "Good guidance shouldn't depend on postcode or platform. We work to make the same quality of coaching available online as it is in person, at Chennai, Trichy or anywhere in between."
  },
  {
    title: "Accountability",
    description: "We track progress honestly and adjust when something isn't working, rather than waiting quietly for an exam result to tell us what we should already have known."
  }
];

// ACADEMIC COACHING (For Students: Higher Secondary to PhD)
export const STUDENT_ACADEMIC_SERVICES: ServiceItem[] = [
  {
    id: "academic-commerce",
    category: "academic",
    categoryLabel: "Academic Coaching",
    title: "Commerce & Management",
    shortDesc: "Accountancy, Finance, Business Studies, Economics, Marketing, HR, Operations, MBA coursework, and case-study prep.",
    fullDesc: "Our flagship specialisation covering foundational accountancy to advanced strategic management. Mentors use real corporate case studies so students master concepts as tools for decision-making rather than abstract exam formulas.",
    audience: ["Higher Secondary (11th & 12th)", "B.Com / BBA Undergraduates", "MBA Candidates", "M.Com Scholars"],
    outcomes: ["Deep Conceptual Clarity", "Case-Study Mastery", "Balance Sheet & Financial Statement Analysis", "University Exam Preparedness"],
    formatOptions: ["1-on-1 Hourly Sessions", "Monthly Coaching Track", "In-Person (Chennai & Trichy)", "Live Online Mentoring"],
    pricingPerHour: "₹800 - ₹1,000 / hour",
    bgImage: img11
  },
  {
    id: "academic-engineering",
    category: "academic",
    categoryLabel: "Academic Coaching",
    title: "Engineering & Applied Sciences",
    shortDesc: "Core engineering streams, structured problem-solving, lab-oriented project guidance, and technical assessments.",
    fullDesc: "Practical, fundamentals-first coaching for engineering undergraduates and postgraduate researchers. Focuses on analytical problem solving, lab assignments, and project design.",
    audience: ["B.E. / B.Tech Undergraduates", "M.E. / M.Tech Scholars", "Diploma Engineering Students"],
    outcomes: ["Problem-Solving Rigour", "Laboratory & Project Clearance", "Technical Viva Readiness", "Foundational Strength"],
    formatOptions: ["1-on-1 Hourly Support", "Semester Assistance", "In-Person", "Online"],
    pricingPerHour: "₹800 / hour",
    bgImage: img22
  },
  {
    id: "academic-sciences",
    category: "academic",
    categoryLabel: "Academic Coaching",
    title: "Sciences & Mathematics",
    shortDesc: "Fundamentals-first coaching for Higher Secondary through postgraduate learners so nothing built on top feels shaky.",
    fullDesc: "Mathematics, Physics, Chemistry, and allied science disciplines taught with patient, step-by-step clarity. We eliminate equation anxiety and build lasting conceptual confidence.",
    audience: ["11th & 12th Standard Students", "B.Sc / M.Sc Students", "Foundational Science Aspirants"],
    outcomes: ["Mathematical Intuition", "Structured Problem Approach", "Top Board & University Grade Achievement"],
    formatOptions: ["Hourly Mentoring", "Monthly Paced Modules", "Online / Offline"],
    pricingPerHour: "₹600 - ₹800 / hour",
    bgImage: img33
  },
  {
    id: "academic-arts",
    category: "academic",
    categoryLabel: "Academic Coaching",
    title: "Arts, Humanities & Research",
    shortDesc: "Subject coaching paired with dedicated writing, critical analysis, and research-methodology guidance.",
    fullDesc: "Comprehensive academic support for literature, economics, history, sociology, and political science. Mentors assist with paper drafting, argument structure, and critical analysis.",
    audience: ["BA / MA Students", "Competitive Exam Scholars", "Humanities Researchers"],
    outcomes: ["Structured Academic Writing", "Critical Analytical Thinking", "Exhaustive Subject Understanding"],
    formatOptions: ["Modular Mentoring", "Paper Critique Sessions", "Online / Offline"],
    pricingPerHour: "₹700 - ₹900 / hour",
    bgImage: img44
  }
];

// PHD SPECIFIC SERVICES (Specific service for doctoral scholars)
export const PHD_SERVICES_DETAILED: PhDServiceItem[] = [
  {
    id: "phd-topic-proposal",
    title: "Topic Selection & Research Proposal Defense",
    shortDesc: "Formulating novel, researchable problem statements and crafting robust synopsis/proposals that withstand academic review committees.",
    details: [
      "Novelty assessment & feasibility analysis across Commerce, Management, Humanities, and Engineering",
      "Formulation of clear research objectives, research questions, and conceptual frameworks",
      "Drafting and refining synopsis/proposals in standard university formats",
      "Defense rehearsal & presentation slide structuring for doctoral scrutiny committee meetings"
    ],
    pricingPerHour: "₹1,500 / hour",
    iconName: "Compass"
  },
  {
    id: "phd-lit-review",
    title: "Systematic Literature Review & Gap Analysis",
    shortDesc: "Deep thematic synthesis of high-impact indexed literature to establish incontrovertible research gaps.",
    details: [
      "Systematic search protocols across Scopus, Web of Science, Google Scholar, and JSTOR",
      "Bibliometric mapping, citation networking, and VOSviewer / PRISMA framework integration",
      "Critical synthesis matrix connecting historical foundations to current paradigm shifts",
      "Pinpoint articulation of theoretical and empirical research gaps"
    ],
    pricingPerHour: "₹1,500 / hour",
    iconName: "BookOpen"
  },
  {
    id: "phd-methodology-stats",
    title: "Research Methodology & Statistical Analysis",
    shortDesc: "End-to-end guidance in research design, sampling methods, questionnaire design, and rigorous quantitative or qualitative data analysis.",
    details: [
      "Quantitative data analysis via SPSS, AMOS (SEM), SmartPLS (PLS-SEM), R, and Python",
      "Qualitative analysis through thematic coding and NVivo framework",
      "Instrument reliability (Cronbach's Alpha) & construct validity testing (CFA, EFA)",
      "Interpretation of statistical output tables, hypothesis testing, and reporting"
    ],
    pricingPerHour: "₹1,800 / hour",
    iconName: "BarChart3"
  },
  {
    id: "phd-thesis-writing",
    title: "Thesis Chapter Writing & Structuring Guidance",
    shortDesc: "Step-by-step mentoring through the long, often isolating journey of writing all five core thesis chapters.",
    details: [
      "Chapter 1 to Chapter 5 cohesive structuring with logical academic transitions",
      "Scientific argumentation, academic tone calibration, and clarity enhancement",
      "Eliminating redundancy, resolving methodological inconsistencies, and rigorous editing",
      "Plagiarism screening (Turnitin / Urkund compliant guidance) and ethical standards compliance"
    ],
    pricingPerHour: "₹1,500 / hour",
    iconName: "FileText"
  },
  {
    id: "phd-viva-defense",
    title: "Pre-Submission Viva Voce & Defense Preparation",
    shortDesc: "Realistic mock defense panels to give scholars confidence and authority before external examiners.",
    details: [
      "Comprehensive slide deck preparation emphasizing contributions to knowledge",
      "Anticipating examiner critiques on methodology, sample size, and statistical boundaries",
      "Mock oral questioning simulating actual university defense panels",
      "Handling difficult examiner inquiries with composure and scholarly grounding"
    ],
    pricingPerHour: "₹1,500 / hour",
    iconName: "GraduationCap"
  }
];

// JOURNAL SERVICES (In Academic Page)
export const JOURNAL_SERVICES_DATA: JournalServiceItem[] = [
  {
    id: "journal-scopus-wos",
    title: "Scopus, Web of Science & UGC-CARE Publication Advisory",
    shortDesc: "Targeted identification of authentic, indexed journals matching your paper's scope while avoiding predatory outlets.",
    indexingCovered: ["Scopus Indexed (Q1, Q2, Q3, Q4)", "Web of Science (SCI / SSCI / ESCI)", "UGC-CARE List (Group I & II)", "ABDC Journal Quality List"],
    deliverables: [
      "Aims & scope alignment to find high-probability acceptance journals",
      "Assessment of journal metrics: Impact Factor, CiteScore, and average turnaround timelines",
      "Vetting against predatory or cloned journal lists"
    ]
  },
  {
    id: "journal-manuscript-prep",
    title: "Manuscript Writing, Structuring & Academic Formatting",
    shortDesc: "Transforming raw data, coursework, or thesis chapters into concise, publication-ready research articles.",
    indexingCovered: ["IMRAD Structure", "APA 7th", "IEEE", "Harvard", "Chicago"],
    deliverables: [
      "Abstract polishing and strategic keyword optimization for indexing discoverability",
      "Structuring Introduction, Literature Review, Methodology, Findings, and Discussion",
      "Precision reference formatting, Mendeley / Zotero citation standardization",
      "Plagiarism screening and comprehensive academic language enhancement"
    ]
  },
  {
    id: "journal-peer-review-response",
    title: "Reviewer Critique Response & Revision Mentoring",
    shortDesc: "Guidance in dissecting reviewer feedback and crafting respectful, point-by-point rebuttal letters that ensure acceptance.",
    indexingCovered: ["Major Revisions", "Minor Revisions", "Rebuttal Letter Drafting"],
    deliverables: [
      "Categorizing reviewer concerns into empirical, methodological, or linguistic fixes",
      "Drafting professional, line-by-line response documents",
      "Carrying out supplementary data checks or literature additions required by editors"
    ]
  }
];

// CAREER COUNSELLING (For Parents as well as Students)
export const CAREER_COUNSELLING_DATA: CareerCounsellingItem[] = [
  {
    id: "joint-counselling",
    target: "parents-and-students",
    title: "Joint Parent-Student Alignment Sessions",
    description: "Bridging the gap between parental aspirations and student interests. We sit down together with students and parents in a calm, objective environment to evaluate options without pressure or unrealistic expectations.",
    keyBenefits: [
      "Objective third-party guidance grounded in real employment and academic trends",
      "Resolution of conflicts regarding stream choice or university preference",
      "Clear financial and academic feasibility roadmap for higher education in India and abroad"
    ]
  },
  {
    id: "school-stream-selection",
    target: "students",
    title: "Stream & Subject Selection (After 10th & 12th)",
    description: "Choosing between Commerce, Science, Computer Science, and Humanities is a foundational fork in the road. We assess the learner's natural aptitudes to make choices that remain rewarding years down the line.",
    keyBenefits: [
      "Aptitude and interest mapping rather than blindly following peer trends",
      "Detailed orientation on modern degree combinations and non-traditional careers",
      "Understanding competitive entrance exams and preparation timelines early"
    ]
  },
  {
    id: "degree-career-pivot",
    target: "students",
    title: "Undergraduate & Postgraduate Degree Direction",
    description: "Guiding college students through degree selection, elective optimization, MBA specialisation choices, and transitions from campus to career or research.",
    keyBenefits: [
      "Comparing B.Com vs BBA vs Professional Courses (CA, CMA, CS)",
      "Choosing MBA specialisations: Finance, Marketing, HR, Operations, Business Analytics",
      "Guidance for transition from campus into corporate roles or doctoral programs"
    ]
  },
  {
    id: "parent-guidance-forum",
    target: "parents",
    title: "Parent Guidance & Progress Transparency",
    description: "Parents are essential partners in a student's journey. We share honest, periodic assessments of student progress so parents stay informed without turning learning into surveillance.",
    keyBenefits: [
      "Honest, transparent evaluations of where the student stands",
      "Constructive tips on supporting students during board exams and thesis stress",
      "Direct communication channel with academic mentors"
    ]
  }
];

// TRANSPARENT PRICING TIERS (Pricing per hour cost)
export const PRICING_TIERS: PricingTier[] = [
  {
    level: "Higher Secondary",
    targetAudience: "11th & 12th Standard Students (CBSE, State Board, ISC)",
    perHourRate: "₹600",
    monthlyTrackNote: "Monthly structured packages available from ₹4,500 / month",
    features: [
      "1-on-1 focused subject coaching in Commerce, Accountancy, Math, Sciences",
      "Doubt clearing & last-mile exam revision",
      "Regular progress updates for parents",
      "In-person at Chennai/Trichy or interactive live online"
    ]
  },
  {
    level: "Undergraduate (UG)",
    targetAudience: "B.Com, BBA, B.Sc, B.E. / B.Tech Undergraduates",
    perHourRate: "₹800",
    monthlyTrackNote: "Semester tracks & exam bootcamps available",
    features: [
      "Core discipline coaching with real-world case applications",
      "Internal assessment and university semester exam preparation",
      "Laboratory and project report guidance",
      "Flexible hourly booking tailored to college timetable"
    ],
    isPopular: true
  },
  {
    level: "Postgraduate & MBA",
    targetAudience: "MBA, M.Com, M.Sc, M.E., MA Candidates",
    perHourRate: "₹1,000",
    monthlyTrackNote: "Modular course tracks & dissertation clinics",
    features: [
      "Advanced coursework, corporate case analysis & financial modeling",
      "Dissertation methodology & literature review support",
      "Coached by industry-experienced mentors with executive backgrounds",
      "Evening and weekend slots for working professionals"
    ]
  },
  {
    level: "PhD & Doctoral Research",
    targetAudience: "Doctoral Scholars & Independent Researchers",
    perHourRate: "₹1,500",
    monthlyTrackNote: "Comprehensive milestone-based tracks available",
    features: [
      "Topic formulation, synopsis defense, and literature gap mapping",
      "Statistical analysis mentorship (SPSS, AMOS, PLS-SEM, R)",
      "Scopus & Web of Science manuscript publication advisory",
      "Pre-PhD mock viva voce & external defense training"
    ]
  },
  {
    level: "Parent & Student Counselling",
    targetAudience: "Joint Parent-Student Consultations",
    perHourRate: "₹800",
    monthlyTrackNote: "Includes diagnostic assessment and follow-up roadmap",
    features: [
      "60-minute joint session with student and parents",
      "Holistic aptitude and career path assessment",
      "Academic stream & college course decision clarity",
      "Written roadmap with actionable milestones"
    ]
  }
];

// CORPORATE & COLLEGE WORKSHOPS (For Others / Organizations)
export const CORPORATE_SERVICES_DATA: ServiceItem[] = [
  {
    id: "corporate-executive-training",
    category: "corporate",
    categoryLabel: "Corporate Training",
    title: "Executive & Corporate Training",
    shortDesc: "Multi-session programs in business communication, leadership development, workplace writing, and team dynamics.",
    fullDesc: "Tailored learning and development initiatives for corporate teams and newly promoted managers. Designed by HR and L&D specialists with extensive real-world organizational experience.",
    audience: ["Corporate Managers & Supervisors", "Early-Career Executives", "Cross-Functional Working Teams"],
    outcomes: ["Refined Business Communication", "Leadership Capability", "Workplace Stress Management", "Professional Writing Standards"],
    formatOptions: ["Multi-Session On-Site Workshops", "Executive Masterclasses", "Hybrid Training Tracks"],
    pricingPerHour: "Custom Institutional Proposal"
  },
  {
    id: "corporate-workshops",
    category: "corporate",
    categoryLabel: "Corporate Workshops",
    title: "Focused Corporate Skill Workshops",
    shortDesc: "Short, impactful workshops on negotiation, running productive meetings, giving constructive feedback, and workplace stress.",
    fullDesc: "Intensive half-day and full-day workshops focused on specific operational and interpersonal hurdles in today's corporate environments.",
    audience: ["Mid-Level Managers", "Sales & Operations Teams", "Corporate Departments"],
    outcomes: ["Negotiation Precision", "Meeting Efficiency", "Constructive Feedback Culture", "Stress Resilience"],
    formatOptions: ["Half-Day Workshops", "Full-Day Immersives"],
    pricingPerHour: "Custom Institutional Proposal"
  },
  {
    id: "college-workshops",
    category: "college",
    categoryLabel: "College Workshops",
    title: "College & Institutional Seminars",
    shortDesc: "On-campus workshops in communication, group discussions, personal interview technique, and resume building.",
    fullDesc: "Empowering college students with real-world skills that academic marks alone don't capture. We partner directly with university departments and placement cells across South India.",
    audience: ["University Departments", "Placement & Career Cells", "Final-Year Student Batches"],
    outcomes: ["Campus Placement Readiness", "Group Discussion Confidence", "Interview Mastery", "Resume Distinction"],
    formatOptions: ["Half-Day & Full-Day Campus Seminars", "Multi-Week Placement Bootcamps"],
    pricingPerHour: "Custom Institutional Proposal"
  },
  {
    id: "campus-placement-training",
    category: "career",
    categoryLabel: "Campus Placement",
    title: "Campus to Career Placement Bootcamps",
    shortDesc: "Aptitude training, mock interviews, career path evaluation, and personalized transition mentoring for final-year students.",
    fullDesc: "Direct coaching for students preparing to transition from academia to professional industry roles or higher research applications.",
    audience: ["Final-Year College Students", "Recent Graduates", "Placement Aspirants"],
    outcomes: ["Career Direction Clarity", "Placement Success", "Aptitude Test Preparedness"],
    formatOptions: ["Batch Workshops", "1-on-1 Interview Clinics"],
    pricingPerHour: "Custom Institutional Proposal"
  }
];

export const ALL_SERVICES_COMBINED: ServiceItem[] = [
  ...STUDENT_ACADEMIC_SERVICES,
  ...CORPORATE_SERVICES_DATA
];

export const SERVICES_DATA: ServiceItem[] = ALL_SERVICES_COMBINED;

export const LEARNING_JOURNEY: JourneyStep[] = [
  {
    step: "01",
    title: "Enquiry & Conversation",
    description: "It starts with a simple, no-obligation conversation — over email, call or in person — to understand what a learner is studying, where they feel stuck, and what they're hoping coaching will help them achieve."
  },
  {
    step: "02",
    title: "Assessment & Goal-Setting",
    description: "We take stock of where a learner actually stands today — their current grasp of the subject, past academic performance, and the goal in front of them — and use that honest starting point to shape a coaching plan."
  },
  {
    step: "03",
    title: "Matching the Right Mentor",
    description: "A learner is matched with a mentor whose subject expertise and practical experience genuinely fit their level and goal, whether that is a Higher Secondary student building fundamentals or an MBA candidate preparing a dissertation."
  },
  {
    step: "04",
    title: "Personalised Coaching Plan",
    description: "Together, we agree the format that fits the learner's life — hourly sessions or a monthly program, online or in person at our Chennai or Trichy centres — and set out a realistic plan and timeline."
  },
  {
    step: "05",
    title: "Ongoing Sessions & Progress Reviews",
    description: "Regular coaching sessions are paired with honest, periodic check-ins on progress, so the plan can be adjusted the moment something isn't working, rather than waiting until the next exam to find out."
  },
  {
    step: "06",
    title: "Milestone & Transition Support",
    description: "As a learner approaches a specific milestone — a Board or university exam, a dissertation submission, or a placement drive — coaching intensifies around exactly that need."
  },
  {
    step: "07",
    title: "Staying in Touch",
    description: "Our relationship with a learner rarely ends the day a goal is met. Many students and professionals return to us for the next stage of their journey, from undergraduate study to an MBA, or from campus into a career."
  }
];

export const MENTOR_CATEGORIES: MentorCategory[] = [
  {
    title: "Subject-Expert Academic Mentors",
    role: "Core Academic Faculty",
    description: "The backbone of our coaching, teaching across Commerce, Management, Engineering, Sciences, Mathematics and the Humanities. Each mentor holds strong academic credentials in their field and specialises in a small enough range of subjects to go deep."
  },
  {
    title: "Industry-Experienced Faculty",
    role: "Corporate & Consulting Mentors",
    description: "Mentors, especially in Commerce and Management, who bring real corporate, consulting or research experience into the room alongside academic qualifications. Having sat on the other side of boardroom tables, they teach case studies as rehearsals for real decisions."
  },
  {
    title: "Research & Dissertation Guides",
    role: "Postgraduate & Doctoral Guides",
    description: "Specialists who have supervised or authored serious academic research, guiding postgraduate and doctoral scholars through literature reviews, methodology design, data analysis, and the writing process itself."
  },
  {
    title: "Corporate Trainers & HR Specialists",
    role: "L&D and Organizational Leaders",
    description: "A dedicated group with backgrounds in learning and development, HR and organisational behaviour, who design and lead our corporate training programs and workshops with real workplace facilitation experience."
  },
  {
    title: "Career & Placement Coaches",
    role: "Campus Transition Specialists",
    description: "Mentors focused specifically on the transition from campus to career — running mock interviews and group discussions, reviewing resumes line by line, and coaching aptitude and reasoning skills."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do I need to commit to a long program, or can I take a single session?",
    answer: "Both are available. We offer focused, hourly sessions for a specific topic or an urgent doubt, as well as comprehensive monthly programs for learners who want continuous, structured support — the choice is entirely the learner's."
  },
  {
    question: "Is coaching available online, or only in person?",
    answer: "Both. We coach in person at our centres in Chennai and Trichy, and online for learners anywhere in India or abroad, with the same quality of attention either way."
  },
  {
    question: "What are your working days and mentoring hours?",
    answer: "Our centres and mentors operate Monday to Friday (Mon–Fri Working Days) from 9:00 AM to 8:00 PM IST. We are dedicated to focused weekday academic and corporate guidance."
  },
  {
    question: "Which email should I write to for inquiries?",
    answer: "To ensure direct, prompt attention, we provide dedicated workspace emails: write to faculty@pathfinder.com for Academic & PhD coaching, trainer@pathfinder.com for Corporate & College training, and info@pathfinder.com for general questions."
  },
  {
    question: "Do you only teach Commerce and Management?",
    answer: "No. Commerce and Management is our flagship specialisation, but we also coach Engineering, Sciences, Mathematics, and Arts and Humanities, from Higher Secondary all the way through to PhD level."
  },
  {
    question: "Can Pathfinders help with a specific PhD dissertation or research journal project?",
    answer: "Yes. Our research and dissertation guides work with postgraduate and doctoral scholars on literature reviews, research methodology, statistical data analysis (SPSS, AMOS, PLS-SEM, R), and journal publication advisory (Scopus, Web of Science, UGC-CARE)."
  },
  {
    question: "Do you offer career counselling for parents as well as students?",
    answer: "Yes. We conduct joint parent-student career roadmap sessions to align family expectations with student aptitudes, covering 10th/12th stream selection, college courses, and post-graduation transitions."
  },
  {
    question: "What is your hourly pricing structure?",
    answer: "Our academic coaching is priced transparently per hour: Higher Secondary starts at ₹600/hr, Undergraduate at ₹800/hr, Postgraduate/MBA at ₹1,000/hr, and PhD/Research Mentoring at ₹1,500/hr. Monthly and modular tracks are also available."
  },
  {
    question: "How do you match a mentor to a student?",
    answer: "We evaluate the subject and level involved, the specific goal — whether that's exam performance, a research project, or a career transition — and match against a mentor's own specialisation and experience."
  },
  {
    question: "Do you offer trial or introductory sessions?",
    answer: "In most cases, yes — the initial conversation itself often doubles as a chance for a student to meet a prospective mentor and get a feel for how a session works, before committing to a full plan."
  }
];
