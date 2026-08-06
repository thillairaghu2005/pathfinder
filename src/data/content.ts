import { 
  CoreValue, 
  DifferentiationFactor, 
  FAQItem, 
  JourneyStep, 
  MentorCategory, 
  ServiceItem, 
  Testimonial 
} from '../types';
import img11 from '../assets/11.png';
import img22 from '../assets/22.png';
import img33 from '../assets/33.png';
import img44 from '../assets/44.png';

export const COMPANY_DETAILS = {
  name: "Pathfinders The Guide",
  heroSubtitle: "Academic Excellence. Career Success. Lifelong Learning.",
  locations: "Chennai & Trichy | Accessible Online Across India & Beyond",
  email: "pathfinders.theguide@gmail.com",
  foundingStoryLine1: "Pathfinders The Guide is a holistic academic coaching and mentoring academy dedicated to helping students and working professionals discover and unlock their true potential.",
  foundingStoryLine2: "We walk alongside learners at every stage of their academic journey, from Higher Secondary school, through undergraduate and postgraduate study, all the way to MBA and PhD, offering personalised, subject-expert guidance that goes far beyond the classroom and well beyond the textbook.",
  foundingStory: "Pathfinders The Guide is a holistic academic coaching and mentoring academy dedicated to helping students and working professionals discover and unlock their true potential.\nWe walk alongside learners at every stage of their academic journey, from Higher Secondary school, through undergraduate and postgraduate study, all the way to MBA and PhD, offering personalised, subject-expert guidance that goes far beyond the classroom and well beyond the textbook.",
  emblemMetaphor: `Like the ladder in our emblem, rising to meet the globe it supports, we see learning as a climb with a destination in view, each rung a small, achievable step, and the world itself the height our students are being lifted toward.`,
};

export const TRUST_STRIP_ITEMS = [
  "Chennai Centre",
  "Trichy Centre",
  "Online Across India & Beyond",
  "Higher Secondary to PhD",
  "Research & Dissertation Support",
  "Corporate & College Workshops"
];

export const DIFFERENTIATION_FACTORS: DifferentiationFactor[] = [
  {
    number: "01",
    title: "Holistic Mentoring",
    description: "We set out to develop leaders, scholars, and professionals, not simply prepare students to sit an exam. We measure success in confidence and capability, not just marks on a page."
  },
  {
    number: "02",
    title: "Real-World Faculty",
    description: "Mentors who bring genuine academic excellence and real industry experience across Commerce, Management, and Engineering. Concepts are taught the way they are actually applied."
  },
  {
    number: "03",
    title: "Flexible Formats",
    description: "Hourly sessions, comprehensive monthly programs, online or in person. Coaching adapts around real lives, jobs, and family schedules rather than forcing rigid templates."
  },
  {
    number: "04",
    title: "End-to-End Support",
    description: "From a learner's first lesson in a subject through exam prep, academic dissertations, and placement season, with one trusted guide and relationship across the entire journey."
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Integrity",
    description: "We tell learners and parents the truth about where things stand, even when it's not the easiest thing to hear, because honest feedback is the only kind that actually helps someone improve."
  },
  {
    title: "Empathy",
    description: "We start every session by understanding the person in front of us, not just the syllabus — their pace, their pressures, and what success actually looks like for them."
  },
  {
    title: "Excellence",
    description: "We hold our own subject knowledge to a high standard and keep it current. A mentor cannot demand rigour from a student that they don't first demand of themselves."
  },
  {
    title: "Accessibility",
    description: "Good guidance shouldn't depend on postcode or platform. We work to make the same quality of coaching available online as it is in person in Chennai or Trichy."
  },
  {
    title: "Accountability",
    description: "We track progress honestly and adjust when something isn't working, rather than waiting quietly for an exam result to tell us what we should already have known."
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "academic-commerce",
    category: "academic",
    categoryLabel: "Academic Coaching",
    title: "Commerce & Management",
    shortDesc: "Accountancy, Finance, Business Studies, Economics, Marketing, HR, Operations, MBA coursework, and case-study prep.",
    fullDesc: "Our flagship specialisation covering foundational accountancy to advanced strategic management. Mentors use real corporate case studies so students master concepts as tools for decision-making rather than abstract exam formulas.",
    audience: ["Higher Secondary Students", "Undergraduate B.Com / BBA Scholars", "MBA Candidates", "Professional Certification Aspirants"],
    outcomes: ["Deep Conceptual Clarity", "Case-Study Mastery", "Excellence in Financial Statement Analysis", "Exam & Viva Preparedness"],
    formatOptions: ["1-on-1 Hourly Sessions", "Monthly Coaching Track", "In-Person (Chennai/Trichy)", "Interactive Live Online"],
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
    outcomes: ["Problem-Solving Rigour", "Laboratory & Project Clearance", "Technical viva readiness", "Foundational Strength"],
    formatOptions: ["1-on-1 Hourly Support", "Semester Assistance", "In-Person", "Online"],
    bgImage: img22
  },
  {
    id: "academic-sciences",
    category: "academic",
    categoryLabel: "Academic Coaching",
    title: "Sciences & Mathematics",
    shortDesc: "Fundamentals-first coaching for Higher Secondary through postgraduate learners so nothing built on top feels shaky.",
    fullDesc: "Mathematics, Physics, Chemistry, and allied science disciplines taught with patient, step-by-step clarity. We eliminate equation anxiety and build lasting conceptual confidence.",
    audience: ["11th & 12th Standard Students", "B.Sc / M.Sc Students", "Competitive Exam Candidates"],
    outcomes: ["Mathematical Intuition", "Structured Problem Approach", "Top Grade Achievement"],
    formatOptions: ["Hourly Mentoring", "Monthly Paced Modules", "Online / Offline"],
    bgImage: img33
  },
  {
    id: "academic-arts",
    category: "academic",
    categoryLabel: "Academic Coaching",
    title: "Arts, Humanities & Social Sciences",
    shortDesc: "Subject coaching paired with dedicated writing, critical analysis, and research-methodology guidance.",
    fullDesc: "Comprehensive academic support for literature, economics, history, sociology, and political science. Mentors assist with paper drafting, argument structure, and critical analysis.",
    audience: ["BA / MA Students", "Competitive Civil Service Aspirants", "Research Scholars"],
    outcomes: ["Structured Academic Writing", "Critical Analytical Thinking", "Exhaustive Subject Understanding"],
    formatOptions: ["Modular Mentoring", "Paper Critique Sessions", "Online / Offline"],
    bgImage: img44
  },
  {
    id: "research-guidance",
    category: "research",
    categoryLabel: "Research Support",
    title: "Dissertation & Thesis Mentorship",
    shortDesc: "Literature reviews, methodology design, data analysis, paper drafting, and viva defense preparation.",
    fullDesc: "Specialised guides work with postgraduate and doctoral scholars through the often lonely journey of academic research. We provide objective feedback, statistical analysis guidance, and thesis structuring support.",
    audience: ["Postgraduate Scholars (MBA, M.Com, M.Sc, M.E., MA)", "Doctoral Researchers (PhD Candidates)", "Independent Academic Authors"],
    outcomes: ["Methodological Rigour", "Publication-Ready Papers", "Confidence in Viva Voce Defence", "Timely Submission"],
    formatOptions: ["Dedicated Thesis Track", "Data Analysis Clinics", "Milestone-Based Mentoring"]
  },
  {
    id: "corporate-training",
    category: "corporate",
    categoryLabel: "Corporate Training",
    title: "Executive & Corporate Training",
    shortDesc: "Multi-session programs in business communication, leadership development, workplace writing, and team dynamics.",
    fullDesc: "Tailored learning and development initiatives for corporate teams and newly promoted managers. Designed by HR and L&D specialists with extensive real-world organizational experience.",
    audience: ["Corporate Managers & Supervisors", "Early-Career Executives", "Cross-Functional Working Teams"],
    outcomes: ["Refined Business Communication", "Leadership Capability", "Workplace Stress Management", "Professional Writing Standards"],
    formatOptions: ["Multi-Session On-Site Workshops", "Executive Masterclasses", "Hybrid Training Tracks"]
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
    formatOptions: ["Half-Day & Full-Day Campus Seminars", "Multi-Week Placement Bootcamps"]
  },
  {
    id: "career-mentoring",
    category: "career",
    categoryLabel: "Career Mentoring",
    title: "Campus to Career Transition",
    shortDesc: "Aptitude training, mock interviews, career path evaluation, and personalized transition mentoring.",
    fullDesc: "Direct 1-on-1 guidance for students preparing to transition from academia to professional industry roles or higher research applications.",
    audience: ["Final-Year College Students", "Recent Graduates", "Career Pivoters"],
    outcomes: ["Career Direction Clarity", "Placement Success", "Aptitude Test Preparedness"],
    formatOptions: ["1-on-1 Coaching", "Mock Interview Clinics", "Online & Offline"]
  }
];

export const LEARNING_JOURNEY: JourneyStep[] = [
  {
    step: "01",
    title: "Enquiry & Conversation",
    description: "A simple, no-obligation conversation over email, phone, or in person to understand what you study, where you feel stuck, and your goals."
  },
  {
    step: "02",
    title: "Assessment & Goal-Setting",
    description: "We evaluate your current subject grasp and past performance to shape an honest, customized starting point rather than a template syllabus."
  },
  {
    step: "03",
    title: "Matching the Right Mentor",
    description: "You are paired with a subject-expert mentor whose practical background and teaching style genuinely align with your target outcome."
  },
  {
    step: "04",
    title: "Personalised Coaching Plan",
    description: "We establish a schedule — hourly sessions or monthly tracking, online or offline — that respects your existing life and commitments."
  },
  {
    step: "05",
    title: "Ongoing Sessions & Reviews",
    description: "Regular sessions coupled with periodic check-ins so we adjust the approach immediately if something isn't yielding the desired clarity."
  },
  {
    step: "06",
    title: "Milestone & Transition Support",
    description: "As board exams, dissertation deadlines, or placement drives approach, coaching intensifies with targeted revision and mock evaluations."
  },
  {
    step: "07",
    title: "Staying in Touch",
    description: "Our relationship continues as you take your next steps — moving from undergrad to MBA, or from campus into a thriving career."
  }
];

export const MENTOR_CATEGORIES: MentorCategory[] = [
  {
    title: "Subject-Expert Academic Mentors",
    role: "Core Academic Faculty",
    description: "Specializing deeply across Commerce, Management, Engineering, Sciences, Mathematics, and Humanities. Each mentor holds advanced credentials and focuses on a tight scope of subjects to ensure true depth."
  },
  {
    title: "Industry-Experienced Faculty",
    role: "Corporate & Consulting Mentors",
    description: "Mentors who have sat on the other side of boardroom tables. They teach business cases as rehearsals for real commercial decisions, helping students understand practical industry application."
  },
  {
    title: "Research & Dissertation Guides",
    role: "Postgraduate & Doctoral Guides",
    description: "Scholars who have authored and supervised academic research. They guide scholars through literature reviews, methodology design, data analysis, and thesis defense."
  },
  {
    title: "Corporate Trainers & HR Specialists",
    role: "L&D and Organizational Leaders",
    description: "Specialists with backgrounds in corporate learning, human resources, and organizational behavior who facilitate institutional workshops and executive training."
  },
  {
    title: "Career & Placement Coaches",
    role: "Campus Transition Specialists",
    description: "Coaches focused on the campus-to-career leap — running line-by-line resume reviews, aptitude clinics, group discussion coaching, and realistic mock interviews."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Pathfinders didn't just help me pass advanced accountancy; my mentor showed me how financial statements reflect real business decisions. The clarity was transformative.",
    author: "K. R. Varma",
    role: "MBA Graduate",
    location: "Chennai"
  },
  {
    quote: "Writing a PhD dissertation can be extremely isolating. Having a dedicated research guide to review my methodology and critique my chapters brought immense structure and relief.",
    author: "Dr. S. Ananthi",
    role: "Postdoctoral Researcher",
    location: "Trichy"
  },
  {
    quote: "The campus placement workshop Pathfinders conducted for our final-year engineering batch gave our students authentic interview practice. Placement rates improved significantly.",
    author: "Prof. M. Ramakrishnan",
    role: "Head of Training & Placement",
    location: "Tamil Nadu"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do I need to commit to a long program, or can I take a single session?",
    answer: "Both options are available. We offer focused, hourly sessions for a specific topic or urgent doubt, as well as comprehensive monthly programs for learners who want continuous, structured support. The choice is entirely yours."
  },
  {
    question: "Is coaching available online, or only in person?",
    answer: "Both. We coach in person at our physical centres in Chennai and Trichy, and online for learners anywhere across India or abroad, delivering the exact same personal attention."
  },
  {
    question: "Do you only teach Commerce and Management?",
    answer: "No. Commerce and Management is our flagship specialisation, but we also coach Engineering, Sciences, Mathematics, and Arts & Humanities, from Higher Secondary school all the way through to PhD level."
  },
  {
    question: "Can Pathfinders help with a specific dissertation or research project, not just regular coursework?",
    answer: "Yes. Our research and dissertation guides work with postgraduate and doctoral scholars on literature reviews, research methodology, statistical data analysis, and the writing process itself."
  },
  {
    question: "Do you run workshops for colleges or companies, or only individual coaching?",
    answer: "Both. Alongside individual academic coaching, we run structured workshops and skill-building training programs for colleges, university departments, and corporate organisations."
  },
  {
    question: "How do I get started?",
    answer: "Simply write to us at pathfinders.theguide@gmail.com or book a consultation via our website. Every academic journey starts with a simple conversation — there is no obligation."
  },
  {
    question: "Do you work with school students, or only college-level and above?",
    answer: "We coach from Higher Secondary school (11th & 12th standard) onward. A student can remain with the same academy and guiding philosophy all the way through undergraduate, master's, and doctoral study."
  },
  {
    question: "Can parents be involved in tracking a student's progress?",
    answer: "Yes, where a student and parent prefer that. We are happy to share honest, regular updates on progress with parents alongside the student, ensuring full transparency."
  },
  {
    question: "How do you match a mentor to a student?",
    answer: "We evaluate the specific subject and level, your exact goals (exam performance, research thesis, or career transition), and your learning style, then match against a mentor's distinct expertise and experience."
  },
  {
    question: "Do you offer trial or introductory sessions?",
    answer: "In most cases, yes. The initial conversation itself allows you to meet a prospective mentor and get a feel for how a session works before committing to a coaching plan."
  }
];
