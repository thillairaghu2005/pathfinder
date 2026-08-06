import { useState } from 'react';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/content';
import { ArrowRight } from 'lucide-react';
import { GlowCard } from '../components/GlowCard';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onBookConsultation: () => void;
  filterCategory?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onBookConsultation,
  filterCategory = 'all'
}) => {
  const [activeTab, setActiveTab] = useState<string>(filterCategory);

  const tabs = [
    { id: 'all', label: 'All Services' },
    { id: 'academic', label: 'Academic Coaching' },
    { id: 'research', label: 'Research & Dissertation' },
    { id: 'corporate', label: 'Corporate Training' },
    { id: 'college', label: 'College Workshops' },
    { id: 'career', label: 'Career Mentoring' },
  ];

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeTab);

  return (
    <div className="w-full space-y-16 md:space-y-24 pb-24 animate-fadeIn">
      {/* Header */}
      <section className="pt-20 md:pt-32 max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-content space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Programs & Specialisations
          </span>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-foreground tracking-tight leading-tight">
            Academic Coaching & Professional Training
          </h1>

          <p className="text-secondary text-lg md:text-xl leading-relaxed-custom max-w-prose-custom">
            From foundational school coaching to doctoral thesis mentoring and executive corporate workshops, built around subject mastery and humane guidance.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-btn text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${isActive
                  ? 'bg-navy text-white shadow-xs'
                  : 'bg-background border border-border text-secondary hover:bg-surface-hover hover:text-foreground'
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Services Grid (White GlowCards with Crisp Dark Typography & Thin Blue Gradient Stroke) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <GlowCard key={service.id} className="h-full relative overflow-hidden">
              {/* Background Image Layer (11.png, 22.png, 33.png, 44.png) */}
              {service.bgImage && (
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none mix-blend-multiply opacity-20"
                    style={{
                      transform: 'translate(12%, 10%) scale(1.8)',
                      transformOrigin: 'bottom right',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-1" />
                </div>
              )}

              <div className="space-y-6 flex flex-col justify-between h-full relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-navy">
                      {service.categoryLabel}
                    </span>
                    <span className="text-xs text-secondary font-medium">
                      Higher Secondary to PhD
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-foreground tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-secondary text-sm md:text-base leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="pt-4 space-y-2">
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wider block">
                      Target Learners
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.audience.slice(0, 3).map((item, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 bg-surface-muted/90 border border-border text-secondary rounded-btn backdrop-blur-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between mt-auto">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold text-foreground hover:text-navy transition-colors flex items-center space-x-1.5"
                  >
                    <span>Detailed Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onBookConsultation}
                    className="h-[40px] px-5 rounded-btn bg-navy text-white text-xs font-medium hover:bg-navy-hover transition-colors"
                  >
                    Book Session
                  </button>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Custom Program Callout (Featured Navy Blue Card #14213D) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <GlowCard backgroundColor="#14213D" className="w-full shadow-xl">
          <div className="space-y-4 p-2">
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white tracking-tight">
              Need a Customized Curriculum or Institutional Workshop?
            </h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-prose-custom">
              Pathfinders designs bespoke learning tracks for specific corporate skill gaps, university departments, and placement drives across Tamil Nadu and beyond.
            </p>
            <div className="pt-2">
              <button
                onClick={onBookConsultation}
                className="h-[48px] px-7 rounded-btn bg-white text-navy text-sm font-bold hover:bg-white/90 transition-colors inline-flex items-center space-x-2 shadow-xs"
              >
                <span>Discuss Scope & Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </GlowCard>
      </section>
    </div>
  );
};
