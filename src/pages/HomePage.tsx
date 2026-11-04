import React from 'react';
import { NavPage, ServiceItem } from '../types';
import {
  COMPANY_DETAILS,
  LEARNING_JOURNEY,
} from '../data/content';
import { 
  ArrowRight, 
  ArrowUpRight, 
  GraduationCap,
  Building2,
  CheckCircle2,
  Mail
} from 'lucide-react';
import { HeroBackground } from '../components/HeroBackground';
import { BorderGlow } from '../components/BorderGlow';
import { Logo } from '../components/Logo';
import card1Image from '../assets/card1.png';

interface HomePageProps {
  setActivePage: (page: NavPage) => void;
  onBookConsultation: () => void;
  onSelectService?: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActivePage,
  onBookConsultation
}) => {
  return (
    <div className="w-full space-y-16 md:space-y-24 pb-20 animate-fadeIn">
      {/* 1. Compact & Aesthetic Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-8 md:pb-14">
        {/* Background Artwork Layer */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-0 overflow-hidden w-full h-full">
          <HeroBackground scale={0.72} orbScale={0.56} />
        </div>

        <div className="relative z-10 max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl space-y-5">
            <h1 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-foreground tracking-tight leading-[1.12]">
              Academic Excellence.<br />
              Career Success.<br />
              <span className="text-secondary font-normal">Lifelong Learning.</span>
            </h1>

            <p className="text-secondary text-sm md:text-base font-normal leading-relaxed">
              {COMPANY_DETAILS.foundingStoryLine1}
            </p>

            {/* Mobile Artwork Preview */}
            <div className="block md:hidden w-full h-[220px] relative overflow-hidden rounded-card bg-[#EFEFEF] shadow-xs my-4">
              <HeroBackground 
                scale={0.85} 
                translateX="0%" 
                translateY="0%" 
                orbScale={0.85}
                orbTranslateX="0%"
                orbTranslateY="0%"
              />
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                onClick={onBookConsultation}
                className="h-[44px] px-7 rounded-btn bg-navy text-white text-xs font-semibold tracking-wide hover:bg-navy-hover transition-colors flex items-center justify-center space-x-2 shadow-xs focus-ring"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActivePage('academic');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="h-[44px] px-7 rounded-btn bg-[#EFEFEF] text-foreground hover:bg-[#E5E7EB] transition-colors text-xs font-semibold tracking-wide flex items-center justify-center space-x-2 shadow-xs"
              >
                <span>Explore Programs</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Subtle Metadata Info */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-secondary font-medium">
              <span>Chennai & Trichy Centres</span>
              <span className="text-secondary/30">|</span>
              <span>Online Nationwide</span>
              <span className="text-secondary/30">|</span>
              <span>Mon–Fri Working Days (9 AM – 8 PM)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Segregation Gateway: Academic (For Students) vs Corporate (For Others) in Lite Grey Cards */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Academic Coaching (Lite Grey bg-[#EFEFEF]) */}
          <div className="p-7 md:p-9 rounded-card bg-[#EFEFEF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <GraduationCap className="w-6 h-6 text-navy" />
              </div>

              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground tracking-tight">
                Academic & PhD Mentorship
              </h2>

              <p className="text-secondary text-sm leading-relaxed">
                Personalised coaching from Higher Secondary (11th & 12th) through B.Com, Engineering, Sciences, MBA, and PhD research. Includes Scopus journal publishing, thesis guidance, and joint parent-student career counselling.
              </p>

              <div className="space-y-2 pt-1">
                <div className="text-xs text-secondary flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy shrink-0" />
                  <span>Commerce, Management, Engineering & Sciences</span>
                </div>
                <div className="text-xs text-secondary flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy shrink-0" />
                  <span>PhD Thesis, Statistical Analysis (SPSS/AMOS/PLS) & Viva Prep</span>
                </div>
                <div className="text-xs text-secondary flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy shrink-0" />
                  <span>Hourly Rates from ₹600/hr | Desk: faculty@pathfinder.com</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => {
                  setActivePage('academic');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="h-10 px-6 rounded-btn bg-navy text-white text-xs font-semibold tracking-wide hover:bg-navy-hover transition-colors flex items-center space-x-2"
              >
                <span>Academic Programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  setActivePage('phd');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-navy hover:underline"
              >
                PhD Services →
              </button>
            </div>
          </div>

          {/* Card 2: Corporate & College Training (Lite Grey bg-[#EFEFEF]) */}
          <div className="p-7 md:p-9 rounded-card bg-[#EFEFEF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Building2 className="w-6 h-6 text-navy" />
              </div>

              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground tracking-tight">
                Corporate Training & Workshops
              </h2>

              <p className="text-secondary text-sm leading-relaxed">
                Tailored learning and development initiatives for corporate teams, newly promoted managers, university departments, and placement cells across South India.
              </p>

              <div className="space-y-2 pt-1">
                <div className="text-xs text-secondary flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy shrink-0" />
                  <span>Business Communication, Leadership & Workplace Dynamics</span>
                </div>
                <div className="text-xs text-secondary flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy shrink-0" />
                  <span>Campus Placement Bootcamps, Mock GD & Personal Interviews</span>
                </div>
                <div className="text-xs text-secondary flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy shrink-0" />
                  <span>Custom Duration & Sizing | Desk: trainer@pathfinder.com</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => {
                  setActivePage('corporate');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="h-10 px-6 rounded-btn bg-navy text-white text-xs font-semibold tracking-wide hover:bg-navy-hover transition-colors flex items-center space-x-2"
              >
                <span>Explore Workshops</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs font-medium text-secondary">
                Mon–Fri Delivery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Emblem Metaphor Banner */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 md:p-10 rounded-card bg-[#14213D] text-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3 flex justify-center">
              <Logo size="lg" theme="light" variant="mark" />
            </div>

            <div className="lg:col-span-9 space-y-2.5">
              <blockquote className="font-heading text-lg sm:text-xl md:text-2xl text-white font-medium leading-relaxed">
                "{COMPANY_DETAILS.emblemMetaphor}"
              </blockquote>
              <p className="text-white/60 text-xs">
                — Official Foundation of Pathfinders The Guide (Chennai & Trichy)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PATHFINDERS DIFFERENT (Bento Grid) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-8">
          <div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Pathfinders Different
            </h2>
            <p className="text-secondary text-sm max-w-lg mt-1">
              A distinctive, student-first framework engineered for true mastery, long-term clarity, and real capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Tile 1: Holistic Mentoring */}
            <BorderGlow
              backgroundColor="#14213D"
              glowColor="215 90 70"
              colors={['#C5A880', '#DFC088', '#9E7D47']}
              className="md:col-span-7"
            >
              <div className="p-8 flex flex-col justify-between h-full relative overflow-hidden text-white min-h-[300px]">
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                  <img
                    src={card1Image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none mix-blend-screen opacity-20 filter invert"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#14213D] via-[#14213D]/85 to-transparent z-1" />
                </div>

                <div className="space-y-3 relative z-10">
                  <h3 className="font-heading font-bold text-2xl text-white tracking-tight">
                    Holistic Mentoring
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-xl">
                    We set out to develop leaders, scholars, and professionals, not simply prepare students to sit an exam. We measure success in genuine confidence and capability, not just marks on a page.
                  </p>
                </div>
              </div>
            </BorderGlow>

            {/* Tile 2: Real-World Faculty */}
            <BorderGlow
              backgroundColor="#14213D"
              glowColor="215 90 70"
              colors={['#C5A880', '#DFC088', '#9E7D47']}
              className="md:col-span-5"
            >
              <div className="p-8 flex flex-col justify-between h-full relative overflow-hidden text-white min-h-[300px]">
                <div className="space-y-3 relative z-10">
                  <h3 className="font-heading font-bold text-2xl text-white tracking-tight">
                    Real-World Faculty
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Mentors who bring genuine academic credentials and real industry experience across Commerce, Management, and Engineering. Concepts are taught the way they are actually applied.
                  </p>
                </div>
              </div>
            </BorderGlow>

            {/* Tile 3: Flexible Formats */}
            <BorderGlow
              backgroundColor="#14213D"
              glowColor="215 90 70"
              colors={['#C5A880', '#DFC088', '#9E7D47']}
              className="md:col-span-5"
            >
              <div className="p-8 flex flex-col justify-between h-full relative overflow-hidden text-white min-h-[300px]">
                <div className="space-y-3 relative z-10">
                  <h3 className="font-heading font-bold text-2xl text-white tracking-tight">
                    Flexible, Life-Fitting Formats
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Hourly sessions, modular topics, and comprehensive monthly programs. Coaching adapts around real lives, jobs, and family schedules rather than forcing rigid templates.
                  </p>
                </div>
              </div>
            </BorderGlow>

            {/* Tile 4: End-to-End Support */}
            <BorderGlow
              backgroundColor="#14213D"
              glowColor="215 90 70"
              colors={['#C5A880', '#DFC088', '#9E7D47']}
              className="md:col-span-7"
            >
              <div className="p-8 flex flex-col justify-between h-full relative overflow-hidden text-white min-h-[300px]">
                <div className="space-y-3 relative z-10">
                  <h3 className="font-heading font-bold text-2xl text-white tracking-tight">
                    End-to-End Support
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-xl">
                    From a student's very first lesson through school exams, university degrees, research dissertations, and campus-to-career placement — one guide, one relationship, the whole journey.
                  </p>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      {/* 5. Coaching Journey Steps (Lite Grey Cards bg-[#EFEFEF]) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-8">
          <div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Our 7-Stage Coaching Journey
            </h2>
            <p className="text-secondary text-sm mt-1">
              Every learner moves through roughly the same structured journey, tailored to their individual goals and pace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {LEARNING_JOURNEY.slice(0, 4).map((step) => (
              <div key={step.step} className="p-6 rounded-card bg-[#EFEFEF] shadow-xs flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-lg text-foreground pt-1">
                    {step.title}
                  </h4>
                  <p className="text-secondary text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Department Desks Gateway (Lite Grey Card bg-[#EFEFEF]) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 md:p-10 bg-[#EFEFEF] rounded-card shadow-sm space-y-7">
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
              Connect with the Right Department
            </h2>
            <p className="text-secondary text-xs">
              Direct responses within 24 hours. Mon–Fri Working Days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-card bg-white shadow-xs text-center space-y-2.5">
              <GraduationCap className="w-7 h-7 text-navy mx-auto" />
              <h4 className="font-heading font-bold text-base text-navy">Academic & PhD Desk</h4>
              <p className="text-xs text-secondary">Subject coaching, thesis guidance, and journal publication.</p>
              <a href="mailto:faculty@pathfinder.com" className="text-xs font-semibold text-navy hover:underline block pt-1">
                faculty@pathfinder.com
              </a>
            </div>

            <div className="p-6 rounded-card bg-white shadow-xs text-center space-y-2.5">
              <Building2 className="w-7 h-7 text-navy mx-auto" />
              <h4 className="font-heading font-bold text-base text-navy">Corporate & Workshops</h4>
              <p className="text-xs text-secondary">Corporate training programs, college seminars, and placement bootcamps.</p>
              <a href="mailto:trainer@pathfinder.com" className="text-xs font-semibold text-navy hover:underline block pt-1">
                trainer@pathfinder.com
              </a>
            </div>

            <div className="p-6 rounded-card bg-white shadow-xs text-center space-y-2.5">
              <Mail className="w-7 h-7 text-navy mx-auto" />
              <h4 className="font-heading font-bold text-base text-navy">General Admissions</h4>
              <p className="text-xs text-secondary">Physical centre visits in Chennai & Trichy and online enrollment.</p>
              <a href="mailto:info@pathfinder.com" className="text-xs font-semibold text-navy hover:underline block pt-1">
                info@pathfinder.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
