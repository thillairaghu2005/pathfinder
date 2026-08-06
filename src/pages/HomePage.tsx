import { useState } from 'react';
import { NavPage, ServiceItem } from '../types';
import {
  COMPANY_DETAILS,
  LEARNING_JOURNEY,
  SERVICES_DATA,
  TESTIMONIALS
} from '../data/content';
import { ArrowRight, ArrowUpRight, Compass, Award, Clock, TrendingUp } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';
import { HeroBackground } from '../components/HeroBackground';
import { BorderGlow } from '../components/BorderGlow';
import card1Image from '../assets/card1.png';
import card2Image from '../assets/card2.png';
import card3Image from '../assets/card3.png';
import card4Image from '../assets/card4.png';

interface HomePageProps {
  setActivePage: (page: NavPage) => void;
  onBookConsultation: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActivePage,
  onBookConsultation,
  onSelectService
}) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(SERVICES_DATA[0].id);

  return (
    <div className="w-full space-y-24 md:space-y-32 pb-24 animate-fadeIn">
      {/* 1. Hero Section with Background Image */}
      <section className="relative overflow-hidden pt-20 md:pt-32 pb-16 md:pb-24">
        {/* Background Image Layer (Desktop Only) */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-0 overflow-hidden w-full h-full">
          <HeroBackground />
        </div>

        <div className="relative z-10 max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-content space-y-6 md:space-y-8">
            {/* Large Typography Headline */}
            <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl text-foreground tracking-tight leading-[1.08] max-w-4xl">
              Academic Excellence.<br />
              Career Success.<br />
              Lifelong Learning.
            </h1>

            {/* Executive Paragraph in 2 lines */}
            <div className="text-secondary text-base md:text-xl font-normal leading-relaxed space-y-3">
              <p>{COMPANY_DETAILS.foundingStoryLine1}</p>
              <p>{COMPANY_DETAILS.foundingStoryLine2}</p>
            </div>

            {/* Mobile Visual Block: Hero Image & WebGL GlowOrb (Below Wordings, Above Buttons on Mobile) */}
            <div className="block md:hidden w-full h-[280px] sm:h-[340px] relative overflow-hidden rounded-2xl border border-border/40 bg-surface/50 my-6 shadow-xs">
              <HeroBackground 
                scale={0.95} 
                translateX="0%" 
                translateY="0%" 
                orbScale={1.15} 
                orbTranslateX="0%" 
                orbTranslateY="0%" 
              />
            </div>

            {/* CTAs */}
            <div className="pt-2 md:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onBookConsultation}
                className="h-[48px] px-8 rounded-btn bg-navy text-white text-sm font-medium hover:bg-navy-hover transition-colors flex items-center justify-center space-x-2 shadow-sm focus-ring"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActivePage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="h-[48px] px-8 rounded-btn border border-border text-foreground hover:bg-surface-hover transition-colors text-sm font-medium flex items-center justify-center"
              >
                Explore Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Preview (Large Split Layout) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Our Emblem & Belief
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight leading-tight">
              Learning as a climb with a destination in view.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="text-secondary text-base md:text-lg leading-relaxed-custom max-w-prose-custom">
              {COMPANY_DETAILS.emblemMetaphor}
            </p>
            <p className="text-secondary text-base leading-relaxed-custom max-w-prose-custom">
              Founded on the conviction that the right guidance at the right moment can change the course of a career and sometimes a life, Pathfinders brings together strong academic fundamentals with real-world, industry-aware mentoring.
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 text-sm font-semibold text-foreground hover:text-navy transition-colors"
              >
                <span>Read Full Philosophy & Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What Makes Us Different - Bento Grid Layout */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Why Pathfinders
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mt-2">
                What Makes Us Different
              </h2>
            </div>
            <p className="text-secondary text-sm md:text-base max-w-md">
              A distinctive, student-first framework engineered for true mastery, long-term clarity, and real capability.
            </p>
          </div>

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Bento Tile 1: Holistic Mentoring (Featured Dark Navy Card - 7 cols) */}
            <BorderGlow
              backgroundColor="#14213D"
              glowColor="215 90 70"
              colors={['#38bdf8', '#818cf8', '#c084fc']}
              className="md:col-span-7"
            >
              <div className="p-8 md:p-10 flex flex-col justify-between h-full relative overflow-hidden text-white min-h-[380px]">
                {/* Background Image Artwork Layer (card1.png) */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                  <img
                    src={card1Image}
                    alt="Holistic Mentoring Artwork"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none mix-blend-screen opacity-35 filter invert"
                    style={{
                      transform: 'translate(10%, 5%) scale(1.0)',
                      transformOrigin: 'bottom right',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#14213D] via-[#14213D]/70 to-transparent z-1" />
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-semibold text-xs text-white/70 tracking-widest uppercase">
                      Core Distinction
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
                      <Compass className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading font-bold text-2xl md:text-4xl text-white tracking-tight">
                      Holistic Mentoring
                    </h3>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                      We set out to develop leaders, scholars, and professionals, not simply prepare students to sit an exam. We measure success in confidence and capability, not just marks on a page.
                    </p>
                  </div>
                </div>

                <div className="pt-8 flex flex-wrap items-center gap-2 relative z-10">
                  <span className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/15">
                    Capability over Marks
                  </span>
                  <span className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/15">
                    Leader Development
                  </span>
                  <span className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/15">
                    Confidence First
                  </span>
                </div>
              </div>
            </BorderGlow>

            {/* Bento Tile 2: Real-World Faculty (5 cols) */}
            <BorderGlow
              backgroundColor="#14213D"
              glowColor="215 90 70"
              colors={['#38bdf8', '#818cf8', '#c084fc']}
              className="md:col-span-5"
            >
              <div className="p-8 flex flex-col justify-between h-full relative overflow-hidden text-white min-h-[380px]">
                {/* Background Image Artwork Layer (card3.png) */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                  <img
                    src={card3Image}
                    alt="Real-World Faculty Artwork"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none mix-blend-screen opacity-35 filter invert"
                    style={{
                      transform: 'translate(4%, 8%) scale(1.0)',
                      transformOrigin: 'bottom right',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#14213D] via-[#14213D]/75 to-transparent z-1" />
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-semibold text-xs text-white/70 tracking-widest uppercase">
                      Expertise
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-2xl text-white tracking-tight">
                      Real-World Faculty
                    </h3>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      Mentors who bring genuine academic excellence and real industry experience across Commerce, Management, and Engineering. Concepts are taught the way they are actually applied.
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap gap-2 relative z-10">
                  <span className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/15">
                    Commerce & Finance
                  </span>
                  <span className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/15">
                    Management & MBA
                  </span>
                  <span className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/15">
                    Engineering & Tech
                  </span>
                </div>
              </div>
            </BorderGlow>

            {/* Bento Tile 3: Flexible Formats (5 cols) */}
            <BorderGlow
              backgroundColor="#14213D"
              glowColor="215 90 70"
              colors={['#38bdf8', '#818cf8', '#c084fc']}
              className="md:col-span-5"
            >
              <div className="p-8 flex flex-col justify-between h-full relative overflow-hidden text-white min-h-[380px]">
                {/* Background Image Artwork Layer (card4.png) */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                  <img
                    src={card4Image}
                    alt="Flexible Formats Artwork"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none mix-blend-screen opacity-35 filter invert"
                    style={{
                      transform: 'translate(1%, 8%) scale(1.0)',
                      transformOrigin: 'bottom right',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#14213D] via-[#14213D]/75 to-transparent z-1" />
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-semibold text-xs text-white/70 tracking-widest uppercase">
                      Adaptability
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-2xl text-white tracking-tight">
                      Flexible Formats
                    </h3>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      Hourly sessions, comprehensive monthly programs, online or in person. Coaching adapts around real lives, jobs, and family schedules rather than forcing rigid templates.
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap gap-2 relative z-10">
                  <span className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/15">
                    1-on-1 Hourly
                  </span>
                  <span className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/15">
                    Monthly Coaching
                  </span>
                  <span className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/15">
                    Online & In-Person
                  </span>
                </div>
              </div>
            </BorderGlow>

            {/* Bento Tile 4: End-to-End Support (7 cols) */}
            <BorderGlow
              backgroundColor="#14213D"
              glowColor="215 90 70"
              colors={['#38bdf8', '#818cf8', '#c084fc']}
              className="md:col-span-7"
            >
              <div className="p-8 md:p-10 flex flex-col justify-between h-full relative overflow-hidden text-white min-h-[380px]">
                {/* Background Image Artwork Layer (card2.png) */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                  <img
                    src={card2Image}
                    alt="End-to-End Support Artwork"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none mix-blend-screen opacity-35 filter invert"
                    style={{
                      transform: 'translate(12%, 5%) scale(1.2)',
                      transformOrigin: 'bottom right',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#14213D] via-[#14213D]/70 to-transparent z-1" />
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-semibold text-xs text-white/70 tracking-widest uppercase">
                      Continuity
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-white tracking-tight">
                      End-to-End Support
                    </h3>
                    <p className="text-white/80 text-base leading-relaxed max-w-xl">
                      From a learner's first lesson in a subject through exam prep, academic dissertations, and placement season, with one trusted guide and relationship across the entire journey.
                    </p>
                  </div>
                </div>

                <div className="pt-8 relative z-10">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 bg-white/10 border border-white/15 rounded-btn text-center space-y-1 backdrop-blur-xs">
                      <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider block">Stage 1</span>
                      <span className="text-xs font-semibold text-white block">Higher Sec</span>
                    </div>
                    <div className="p-3 bg-white/10 border border-white/15 rounded-btn text-center space-y-1 shadow-2xs">
                      <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider block">Stage 2</span>
                      <span className="text-xs font-semibold text-white block">Undergrad</span>
                    </div>
                    <div className="p-3 bg-white/10 border border-white/15 rounded-btn text-center space-y-1 shadow-2xs">
                      <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider block">Stage 3</span>
                      <span className="text-xs font-semibold text-white block">Postgrad / MBA</span>
                    </div>
                    <div className="p-3 bg-white/10 border border-white/15 rounded-btn text-center space-y-1 shadow-2xs">
                      <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider block">Stage 4</span>
                      <span className="text-xs font-semibold text-white block">PhD / Career</span>
                    </div>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      {/* 5. Services Preview (Editorial Minimalist List Style matching prompt design) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Ecosystem of Guidance
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-foreground tracking-tight uppercase mt-2">
                Services Built for Real Progress
              </h2>
            </div>

            <button
              onClick={() => {
                setActivePage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-sm font-semibold text-foreground hover:text-navy transition-colors self-start md:self-auto shrink-0"
            >
              View All Programs
            </button>
          </div>

          {/* Minimalist Accordion List */}
          <div className="space-y-4">
            {SERVICES_DATA.slice(0, 4).map((service) => {
              const isExpanded = expandedServiceId === service.id;

              return (
                <div
                  key={service.id}
                  className="py-4 md:py-6 transition-colors group cursor-pointer"
                  onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                >
                  {/* Row Header */}
                  <div className="flex items-center justify-between gap-4 md:gap-8">
                    <div className="flex items-center space-x-6 md:space-x-10 min-w-0">
                      <h3 className="font-heading font-black text-xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight uppercase leading-tight group-hover:text-navy transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
                      {/* Sleek Circular Icon Button (↗) */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(service);
                        }}
                        aria-label={`Open details for ${service.title}`}
                        className={`w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${isExpanded
                          ? 'bg-navy text-white shadow-md rotate-45'
                          : 'bg-foreground text-background group-hover:scale-105 group-hover:bg-navy group-hover:text-white'
                          }`}
                        title="Open Details"
                      >
                        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content Drawer wrapped in Navy Blue GlowCard (#14213D) */}
                  {isExpanded && (
                    <div className="pt-6 md:pt-8 animate-fadeIn">
                      <GlowCard backgroundColor="#14213D" className="w-full shadow-xl relative overflow-hidden">
                        {/* Background Image Artwork Layer */}
                        {service.bgImage && (
                          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                            <img
                              src={service.bgImage}
                              alt={service.title}
                              className="absolute inset-0 w-full h-full object-contain pointer-events-none mix-blend-screen opacity-25 filter invert"
                              style={{
                                transform: 'translate(20%, 25%) scale(1.8)',
                                transformOrigin: 'bottom right',
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#14213D] via-[#14213D]/80 to-transparent z-1" />
                          </div>
                        )}

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                          <div className="lg:col-span-5 space-y-3">
                            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                              {service.categoryLabel}
                            </span>
                            <p className="text-white/80 text-sm md:text-base leading-relaxed">
                              {service.shortDesc}
                            </p>
                          </div>

                          <div className="lg:col-span-7 space-y-5">
                            <p className="text-white/95 text-sm leading-relaxed font-normal">
                              {service.fullDesc}
                            </p>

                            <div className="pt-2 flex flex-wrap gap-2">
                              {service.audience.map((item, i) => (
                                <span key={i} className="text-xs px-3.5 py-1.5 bg-white/10 border border-white/15 text-white/90 rounded-full font-medium">
                                  {item}
                                </span>
                              ))}
                            </div>

                            <div className="pt-3 flex flex-wrap items-center gap-4">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onSelectService(service);
                                }}
                                className="h-[44px] px-6 rounded-btn bg-white text-navy text-xs font-bold hover:bg-white/90 transition-colors inline-flex items-center space-x-2 shadow-xs"
                              >
                                <span>Full Program Scope</span>
                                <ArrowUpRight className="w-4 h-4" />
                              </button>

                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onBookConsultation();
                                }}
                                className="h-[44px] px-6 rounded-btn border border-white/25 text-white text-xs font-medium hover:bg-white/10 transition-colors"
                              >
                                Book Consultation
                              </button>
                            </div>
                          </div>
                        </div>
                      </GlowCard>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Learning Journey */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              How We Work
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mt-2">
              Our Coaching Journey
            </h2>
            <p className="text-secondary text-base mt-2 max-w-prose-custom">
              Every learner moves through roughly the same structured journey, even though what happens inside it is tailored to every individual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEARNING_JOURNEY.slice(0, 4).map((step) => (
              <GlowCard key={step.step} className="min-h-[260px] md:min-h-[300px] h-full">
                <div className="space-y-6 flex flex-col justify-between h-full py-2 px-1">
                  <div className="space-y-4">
                    <h4 className="font-heading font-bold text-2xl md:text-3xl text-foreground tracking-tight">
                      {step.title}
                    </h4>

                    <p className="text-secondary text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between text-xs text-secondary font-medium mt-auto">
                    <span>Tailored Mentor Guidance</span>
                    <span className="text-navy font-semibold">Learn Framework →</span>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={() => {
                setActivePage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-secondary hover:text-foreground transition-colors"
            >
              Explore all 7 stages of our coaching framework →
            </button>
          </div>
        </div>
      </section>

      {/* 7. Testimonials (Without Top Divider Line) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="pt-16 space-y-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Learner Perspectives
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mt-2">
              Measured in Capability, Not Just Marks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <GlowCard key={idx} className="h-full">
                <div className="space-y-6 flex flex-col justify-between h-full">
                  <p className="text-foreground text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  <div className="pt-4 mt-auto">
                    <div className="font-heading font-bold text-sm text-foreground">
                      {t.author}
                    </div>
                    <div className="text-xs text-secondary mt-0.5">
                      {t.role} • {t.location}
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA Banner */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-12 md:p-16 bg-navy text-white rounded-card space-y-6 text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            Begin your learning journey.
          </h2>
          <p className="text-white/80 text-base max-w-xl mx-auto leading-relaxed">
            Every academic journey starts with a simple conversation. Connect with our mentors to discuss your goals, schedule, and personalized coaching plan.
          </p>
          <div className="pt-4">
            <button
              onClick={onBookConsultation}
              className="h-[48px] px-8 rounded-btn bg-white text-navy text-sm font-medium hover:bg-surface-hover transition-colors inline-flex items-center space-x-2"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
