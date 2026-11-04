import React, { useState, useEffect } from 'react';
import { 
  CORE_VALUES, 
  MENTOR_CATEGORIES,
  COMPANY_DETAILS
} from '../data/content';
import { Mail } from 'lucide-react';
import { Logo } from '../components/Logo';

interface AboutPageProps {
  onBookConsultation: () => void;
  setActivePage?: (page: any) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBookConsultation }) => {
  const [activeSection, setActiveSection] = useState<string>('story');

  const navSections = [
    { id: 'story', label: 'Who We Are' },
    { id: 'emblem', label: 'Our Emblem' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'mission', label: 'Mission & Vision' },
    { id: 'values', label: 'Core Values' },
    { id: 'faculty', label: 'Faculty & Mentors' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 130;
      for (const section of navSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full space-y-16 md:space-y-24 pb-20 animate-fadeIn">
      {/* Editorial Header */}
      <section className="pt-20 md:pt-28 pb-2 max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl space-y-4">
          <h1 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-foreground tracking-tight leading-[1.12]">
            Academic rigour and human warmth, side by side.
          </h1>

          <p className="text-secondary text-sm md:text-base leading-relaxed pt-1">
            Pathfinders – The Guide is a holistic academic coaching and mentoring academy dedicated to helping students and working professionals discover and unlock their true potential, from Higher Secondary school through undergraduate, postgraduate, MBA, and PhD study.
          </p>
        </div>
      </section>

      {/* In-Page Sub-Navigation Bar */}
      <section className="sticky top-20 z-40 bg-[#FAF8F5]/90 backdrop-blur-md py-2.5">
        <div className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between overflow-x-auto scrollbar-none gap-2">
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              {navSections.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-tight whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-navy text-white shadow-xs'
                        : 'text-secondary hover:text-navy hover:bg-[#EFEFEF]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="hidden md:flex items-center space-x-2 text-xs text-secondary font-medium">
              <span>Mon–Fri Working Days</span>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Who We Are */}
      <section id="story" className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-4 space-y-2">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
              Who We Are
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4 text-secondary text-sm md:text-base leading-relaxed">
            <p>
              We were built around a simple, deeply-held belief: that every learner deserves a guide who genuinely cares about their progress, not just their grades. That belief shapes everything we do. Our teaching is patient. Our mentoring is honest, even when honesty means telling a student something they didn't expect to hear.
            </p>
            <p>
              And our approach is always built around the individual sitting in front of us, whether that is a school student still finding their footing, a postgraduate wrestling with a dissertation deadline, or a working professional trying to add a new skill to an already full life.
            </p>
            <p>
              Founded on the conviction that the right guidance at the right moment can change the course of a career — and sometimes a life — Pathfinders brings together strong academic fundamentals with real-world, industry-aware mentoring. We are not interested in helping students merely pass an exam. We are interested in helping them build the confidence, clarity and capability to succeed long after they have left our classrooms.
            </p>
            <div className="pt-2 text-xs text-foreground font-medium flex items-center space-x-2">
              <span className="font-bold text-navy">Physical Hubs:</span>
              <span>Chennai Centre & Trichy Centre | Accessible Online Pan India</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Emblem & Metaphor (Lite Grey Card) */}
      <section id="emblem" className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12 pt-4">
        <div className="p-7 md:p-10 rounded-card bg-[#EFEFEF] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-card shadow-xs text-center space-y-3">
              <Logo size="lg" variant="mark" />
              <div className="space-y-0.5">
                <span className="font-heading font-bold text-base text-navy tracking-tight">The Emblem</span>
                <p className="text-[11px] text-secondary">The Ladder Rising to Meet the Globe</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-3">
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground">
                "Learning as a climb with a destination in view."
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {COMPANY_DETAILS.emblemMetaphor}
              </p>
              <p className="text-secondary text-xs leading-relaxed">
                This philosophy carries through from school classrooms to doctoral defenses and corporate boardrooms: continuous, grounded elevation guided by mentors who walk alongside each learner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Philosophy */}
      <section id="philosophy" className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-4 space-y-2">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
              Our Philosophy
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4 text-secondary text-sm md:text-base leading-relaxed">
            <p>
              We started Pathfinders because we noticed a gap between the way academic support is usually delivered and the way learners actually experience their struggles. Coaching, too often, is treated as a transaction: a syllabus to be covered, a set of marks to be improved, a box to be ticked before the next exam. We wanted to build something different: a place where academic rigour and human warmth sit comfortably side by side.
            </p>
            <p>
              That means we take the time to understand not just what a student is studying, but why they are studying it, what they hope it will lead to, and where they feel stuck. A first-year commerce student anxious about accountancy, a management postgraduate racing to finish a research dissertation, and a working professional preparing for a career pivot all need very different things from us — and we design our sessions accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision (Lite Grey Cards) */}
      <section id="mission" className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12 pt-4">
        <div className="space-y-6">
          <div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 md:p-9 rounded-card bg-[#EFEFEF] shadow-xs space-y-3">
              <h3 className="font-heading font-bold text-xl text-foreground">
                Our Mission
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                To provide accessible, high-quality academic coaching and mentoring that empowers learners to make informed academic and career decisions, develop genuine subject expertise, and grow into confident, capable professionals.
              </p>
            </div>

            <div className="p-7 md:p-9 rounded-card bg-[#14213D] text-white shadow-xs space-y-3">
              <h3 className="font-heading font-bold text-xl text-white">
                Our Vision
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                To be a holistic academy that develops leaders, scholars and professionals — known not for the volume of students we teach, but for the depth of difference we make in each of their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values (Lite Grey Cards) */}
      <section id="values" className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12 pt-4">
        <div className="space-y-6">
          <div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
              Our Core Values
            </h2>
            <p className="text-secondary text-xs mt-1">
              A philosophy is only as real as the values that hold it up day to day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_VALUES.map((val, idx) => (
              <div key={idx} className="p-6 rounded-card bg-[#EFEFEF] shadow-xs space-y-2">
                <h3 className="font-heading font-bold text-lg text-foreground">
                  {val.title}
                </h3>
                <p className="text-secondary text-xs leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Faculty & Mentors (Lite Grey Cards) */}
      <section id="faculty" className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12 pt-4">
        <div className="space-y-6">
          <div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
              Our Faculty & Specialist Mentors
            </h2>
            <p className="text-secondary text-xs mt-1 max-w-xl">
              Behind every session is a mentor chosen for genuine academic excellence paired with real industry or research experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MENTOR_CATEGORIES.map((m, idx) => (
              <div key={idx} className="p-6 rounded-card bg-[#EFEFEF] space-y-2 shadow-xs">
                <h4 className="font-heading font-bold text-base text-foreground">
                  {m.title}
                </h4>
                <p className="text-secondary text-xs leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Box for About Page (Lite Grey Card) */}
          <div className="p-7 md:p-8 rounded-card bg-[#EFEFEF] flex flex-col md:flex-row items-center justify-between gap-5 shadow-xs">
            <div className="space-y-1.5 text-left">
              <h4 className="font-heading font-bold text-lg text-navy">Have questions about our mentors or methodology?</h4>
              <p className="text-secondary text-xs">Write to our admissions desk or book an initial discussion.</p>
              <div className="flex items-center space-x-2 text-xs font-medium text-navy pt-1">
                <Mail className="w-3.5 h-3.5 text-navy" />
                <a href="mailto:info@pathfinder.com" className="hover:underline font-semibold">info@pathfinder.com</a>
                <span className="text-secondary">| Mon–Fri 9:00 AM – 8:00 PM</span>
              </div>
            </div>

            <button
              onClick={onBookConsultation}
              className="h-[42px] px-7 rounded-btn bg-navy text-white text-xs font-semibold tracking-wide hover:bg-navy-hover transition-colors shrink-0 shadow-xs"
            >
              Book Conversation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
