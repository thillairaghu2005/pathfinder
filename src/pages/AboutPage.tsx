import { 
  CORE_VALUES, 
  MENTOR_CATEGORIES 
} from '../data/content';
import { ArrowRight } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface AboutPageProps {
  onBookConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBookConsultation }) => {
  return (
    <div className="w-full space-y-24 md:space-y-32 pb-24 animate-fadeIn">
      {/* Editorial Page Header */}
      <section className="pt-20 md:pt-32 pb-6 max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-content space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            About Pathfinders The Guide
          </span>
          
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-foreground tracking-tight leading-tight">
            Academic rigour and human warmth, side by side.
          </h1>

          <p className="text-secondary text-lg md:text-xl leading-relaxed-custom max-w-prose-custom pt-2">
            We are a holistic academic coaching and mentoring academy dedicated to helping students and working professionals discover and unlock their true potential, from Higher Secondary school through undergraduate, postgraduate, MBA, and PhD study.
          </p>
        </div>
      </section>

      {/* 1. Who We Are & Our Story */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16">
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight">
              Who We Are
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-secondary text-base leading-relaxed-custom max-w-prose-custom">
            <p>
              We were built around a simple, deeply-held belief: that every learner deserves a guide who genuinely cares about their progress, not just their grades. That belief shapes everything we do. Our teaching is patient. Our mentoring is honest, even when honesty means telling a student something they didn't expect to hear.
            </p>
            <p>
              And our approach is always built around the individual sitting in front of us, whether that is a school student still finding their footing, a postgraduate wrestling with a dissertation deadline, or a working professional trying to add a new skill to an already full life.
            </p>
            
            {/* Magazine Pull Quote */}
            <div className="my-8 p-8 bg-surface-muted rounded-card text-foreground font-heading text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed">
              "Like the ladder in our emblem, rising to meet the globe it supports, we see learning as a climb with a destination in view, each rung a small, achievable step, and the world itself the height our students are being lifted toward."
            </div>

            <p>
              Founded on the conviction that the right guidance at the right moment can change the course of a career and sometimes a life, Pathfinders brings together strong academic fundamentals with real-world, industry-aware mentoring. We are not interested in helping students merely pass an exam. We are interested in helping them build the confidence, clarity and capability to succeed long after they have left our classrooms.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Our Philosophy */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16">
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight">
              Our Philosophy
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-secondary text-base leading-relaxed-custom max-w-prose-custom">
            <p>
              We started Pathfinders because we noticed a gap between the way academic support is usually delivered and the way learners actually experience their struggles. Coaching, too often, is treated as a transaction: a syllabus to be covered, a set of marks to be improved, a box to be ticked before the next exam. We wanted to build something different.
            </p>
            <p>
              That means we take the time to understand not just what a student is studying, but why they are studying it, what they hope it will lead to, and where they feel stuck. A first-year commerce student anxious about accountancy, a management postgraduate racing to finish a research dissertation, and a working professional preparing for a career pivot all need very different things from us, and we design our sessions accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="pt-16 space-y-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Purpose & Calling
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mt-2">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlowCard className="h-full">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-navy">
                  Our Mission
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground tracking-tight">
                  Empowering Informed Growth
                </h3>
                <p className="text-secondary text-sm md:text-base leading-relaxed">
                  To provide accessible, high-quality academic coaching and mentoring that empowers learners to make informed academic and career decisions, develop genuine subject expertise, and grow into confident, capable professionals, regardless of where they start from.
                </p>
              </div>
            </GlowCard>

            <GlowCard className="h-full">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-navy">
                  Our Vision
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground tracking-tight">
                  Depth of Difference
                </h3>
                <p className="text-secondary text-sm md:text-base leading-relaxed">
                  To be a holistic academy that develops leaders, scholars and professionals, a trusted name in academic coaching, known not for the volume of students we teach, but for the depth of difference we make in each of their lives.
                </p>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="pt-16 space-y-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Our Pillars
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mt-2">
              Core Values
            </h2>
            <p className="text-secondary text-base mt-2 max-w-prose-custom">
              A philosophy is only as real as the values that hold it up day to day. These are the ones we ask every mentor, and ourselves, to be measured against.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <GlowCard key={idx} className="h-full">
                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-xl text-foreground tracking-tight">
                    {val.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our People & Mentor Ecosystem */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="pt-16 space-y-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Faculty & Guides
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mt-2">
              Our People
            </h2>
            <p className="text-secondary text-base mt-2 max-w-prose-custom">
              Behind every session at Pathfinders is a mentor who has chosen to be there, not simply to deliver a syllabus, but to help a specific student get from where they are to where they want to be.
            </p>
          </div>

          <div className="space-y-6">
            {MENTOR_CATEGORIES.map((cat, idx) => (
              <GlowCard key={idx}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-4 space-y-1">
                    <span className="text-xs font-semibold text-navy uppercase tracking-wider">
                      {cat.role}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-foreground tracking-tight">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="lg:col-span-8">
                    <p className="text-secondary text-sm leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA (Featured Navy Blue Card) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <GlowCard backgroundColor="#14213D" className="w-full shadow-xl">
          <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white tracking-tight">
                Ready to meet your mentor?
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                We look forward to understanding your academic goals and crafting a personalized plan.
              </p>
            </div>
            <button
              onClick={onBookConsultation}
              className="h-[48px] px-8 rounded-btn bg-white text-navy text-sm font-bold hover:bg-white/90 transition-colors shrink-0 flex items-center space-x-2 shadow-xs"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </GlowCard>
      </section>
    </div>
  );
};
