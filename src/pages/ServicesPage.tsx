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

  const filteredServices: ServiceItem[] = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s: ServiceItem) => s.category === activeTab);

  return (
    <div className="w-full space-y-16 md:space-y-24 pb-20 animate-fadeIn">
      {/* Header */}
      <section className="pt-20 md:pt-28 max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Programs & Specialisations
          </span>

          <h1 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-foreground tracking-tight leading-[1.12]">
            Academic Coaching & Professional Training
          </h1>

          <p className="text-secondary text-sm md:text-base leading-relaxed">
            From foundational school coaching to doctoral thesis mentoring and executive corporate workshops, built around subject mastery and humane guidance.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-tight whitespace-nowrap transition-all duration-200 ${isActive
                  ? 'bg-navy text-white shadow-xs'
                  : 'bg-[#EFEFEF] text-secondary hover:bg-[#E5E7EB] hover:text-foreground shadow-xs'
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Services Grid (Lite Grey GlowCards bg-[#EFEFEF]) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service: ServiceItem) => (
            <GlowCard key={service.id} backgroundColor="#EFEFEF" className="h-full relative overflow-hidden shadow-xs">
              {service.bgImage && (
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none mix-blend-multiply opacity-15"
                    style={{
                      transform: 'translate(12%, 10%) scale(1.8)',
                      transformOrigin: 'bottom right',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EFEFEF] via-[#EFEFEF]/80 to-transparent z-1" />
                </div>
              )}

              <div className="space-y-5 flex flex-col justify-between h-full relative z-10">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-widest text-navy bg-white/80 px-2.5 py-1 rounded">
                      {service.categoryLabel}
                    </span>
                    <span className="text-xs text-secondary font-medium">
                      1-on-1 & Modular
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-semibold text-secondary uppercase tracking-wider block">
                      Audience:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.audience.map((item: string, idx: number) => (
                        <span key={idx} className="text-[11px] px-2.5 py-0.5 bg-white/70 text-secondary rounded-full font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold text-foreground hover:text-navy transition-colors"
                  >
                    View Program Details
                  </button>

                  <button
                    onClick={onBookConsultation}
                    className="h-[38px] px-5 rounded-btn bg-navy text-white text-xs font-medium hover:bg-navy-hover transition-colors flex items-center space-x-1.5 shadow-xs"
                  >
                    <span>Book Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>
    </div>
  );
};
