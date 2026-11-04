import React, { useState } from 'react';
import {
  STUDENT_ACADEMIC_SERVICES,
  PHD_SERVICES_DETAILED,
  JOURNAL_SERVICES_DATA,
  CAREER_COUNSELLING_DATA,
  PRICING_TIERS,
  COMPANY_DETAILS
} from '../data/content';
import { ServiceItem } from '../types';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Mail
} from 'lucide-react';

interface AcademicPageProps {
  onSelectService: (service: ServiceItem) => void;
  onBookConsultation: (serviceTitle?: string) => void;
  onNavigateToPhD?: () => void;
}

export const AcademicPage: React.FC<AcademicPageProps> = ({
  onSelectService,
  onBookConsultation,
  onNavigateToPhD
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'coaching' | 'phd' | 'journals' | 'counselling' | 'pricing'>('all');
  const [studentContactSubmitted, setStudentContactSubmitted] = useState(false);
  const [studentForm, setStudentForm] = useState({
    name: '',
    email: '',
    phone: '',
    stage: 'Undergraduate (B.Com/BBA/B.Tech)',
    subject: 'Commerce & Accountancy',
    message: ''
  });

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStudentContactSubmitted(true);
  };

  return (
    <div className="w-full space-y-16 md:space-y-24 pb-20 animate-fadeIn">
      {/* 1. Academic Header */}
      <section className="pt-20 md:pt-28 max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl space-y-4">
          <h1 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-foreground tracking-tight leading-[1.12]">
            Academic Coaching, Journal & PhD Services
          </h1>

          <p className="text-secondary text-sm md:text-base leading-relaxed pt-1">
            Tailored for learners from Higher Secondary school through undergraduate degrees, MBA, and doctoral research. Transparent hourly mentoring, Scopus journal publishing, and joint parent-student career guidance.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <div className="flex items-center space-x-2 text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#EFEFEF] text-navy shadow-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon–Fri Working Days (9:00 AM – 8:00 PM)</span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#EFEFEF] text-navy shadow-xs">
              <Mail className="w-3.5 h-3.5" />
              <span>{COMPANY_DETAILS.facultyEmail}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Quick Filters (Aesthetic Lite Grey Pills) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'All Student Services' },
            { id: 'coaching', label: 'Discipline Coaching' },
            { id: 'phd', label: 'PhD Mentorship' },
            { id: 'journals', label: 'Journal Services' },
            { id: 'counselling', label: 'Career & Parent Guidance' },
            { id: 'pricing', label: 'Hourly Pricing' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-tight whitespace-nowrap transition-all duration-200 ${activeTab === tab.id
                  ? 'bg-navy text-white shadow-xs'
                  : 'bg-[#EFEFEF] text-secondary hover:text-navy hover:bg-[#E5E7EB] shadow-xs'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Core Academic Coaching Disciplines (Lite Grey Cards bg-[#EFEFEF]) */}
      {(activeTab === 'all' || activeTab === 'coaching') && (
        <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
                Subject-by-Subject Academic Coaching
              </h2>
            </div>
            <p className="text-xs md:text-sm text-secondary max-w-md">
              1-on-1 hourly coaching and monthly structured pacing across four primary faculties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STUDENT_ACADEMIC_SERVICES.map((service) => (
              <div
                key={service.id}
                className="p-7 md:p-8 rounded-card bg-[#EFEFEF] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6 relative overflow-hidden"
              >
                {service.bgImage && (
                  <div className="absolute right-0 bottom-0 pointer-events-none opacity-10 overflow-hidden w-56 h-56">
                    <img src={service.bgImage} alt="" className="w-full h-full object-contain filter invert mix-blend-multiply" />
                  </div>
                )}

                <div className="space-y-3.5 relative z-10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                      {service.title}
                    </h3>
                    <span className="text-xs font-semibold text-gold-dark">
                      {service.pricingPerHour}
                    </span>
                  </div>

                  <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <p className="text-xs text-secondary/80 pt-1">
                    Audience: {service.audience.join(', ')}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between relative z-10">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold text-navy hover:underline inline-flex items-center space-x-1"
                  >
                    <span>View Curriculum</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onBookConsultation(service.title)}
                    className="h-9 px-5 rounded-btn bg-navy text-white text-xs font-semibold hover:bg-navy-hover transition-colors shadow-xs"
                  >
                    Book Hourly Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. PHD SERVICES SECTION */}
      {(activeTab === 'all' || activeTab === 'phd') && (
        <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="p-8 md:p-10 rounded-card bg-[#14213D] text-white space-y-8 shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-2.5">
                <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white tracking-tight">
                  PhD & Doctoral Research Mentorship
                </h2>
                <p className="text-white/80 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Doctoral research can be an isolating journey. Our research guides — who have authored, supervised, and evaluated serious academic research — walk with you through every phase from synopsis defense to final viva.
                </p>
              </div>

              {onNavigateToPhD && (
                <button
                  onClick={onNavigateToPhD}
                  className="h-10 px-5 rounded-btn bg-white text-navy text-xs font-semibold tracking-wide hover:bg-gold-light transition-colors shrink-0 flex items-center space-x-2 shadow-xs"
                >
                  <span>Explore Full PhD Page</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PHD_SERVICES_DETAILED.map((item) => (
                <div key={item.id} className="p-6 rounded-btn bg-white/5 border border-white/10 hover:border-gold/40 transition-colors flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gold-light">{item.pricingPerHour}</span>
                    </div>

                    <h4 className="font-heading font-bold text-base text-white">
                      {item.title}
                    </h4>

                    <p className="text-white/70 text-xs leading-relaxed">
                      {item.shortDesc}
                    </p>

                    <ul className="space-y-1.5 pt-1">
                      {item.details.map((d, idx) => (
                        <li key={idx} className="text-[11px] text-white/80 flex items-start space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onBookConsultation(`PhD: ${item.title}`)}
                      className="w-full py-2 rounded-btn bg-white/10 hover:bg-white text-white hover:text-navy text-xs font-semibold transition-colors"
                    >
                      Book PhD Consultation (₹1,500/hr)
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. JOURNAL SERVICES SECTION (Lite Grey Cards bg-[#EFEFEF]) */}
      {(activeTab === 'all' || activeTab === 'journals') && (
        <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
                Journal Publication Services
              </h2>
            </div>
            <p className="text-xs md:text-sm text-secondary max-w-md">
              Guidance for postgraduate and doctoral authors targeting Scopus, Web of Science, and UGC-CARE indexed journals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {JOURNAL_SERVICES_DATA.map((j) => (
              <div key={j.id} className="p-7 rounded-card bg-[#EFEFEF] shadow-xs flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-btn bg-white/80 flex items-center justify-center text-navy shadow-xs">
                    <BookOpen className="w-4 h-4 text-navy" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-foreground">
                    {j.title}
                  </h3>

                  <p className="text-secondary text-xs leading-relaxed">
                    {j.shortDesc}
                  </p>

                  <p className="text-xs text-secondary/90 pt-1">
                    Target: {j.indexingCovered.join(', ')}
                  </p>

                  <div className="space-y-1 pt-1">
                    <ul className="space-y-1 text-xs text-secondary">
                      {j.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-navy shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => onBookConsultation(`Journal: ${j.title}`)}
                  className="w-full h-10 rounded-btn bg-navy text-white text-xs font-semibold hover:bg-navy-hover transition-colors shadow-xs"
                >
                  Consult Journal Mentors
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. CAREER COUNSELLING SECTION (Lite Grey Cards bg-[#EFEFEF]) */}
      {(activeTab === 'all' || activeTab === 'counselling') && (
        <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="p-7 md:p-10 rounded-card bg-[#EFEFEF] space-y-6 shadow-xs">
            <div className="max-w-2xl space-y-2">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
                Career Counselling: For Parents as well as Students
              </h2>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Academic choices shouldn't be made in isolation or under emotional pressure. We host structured, objective counselling sessions involving both students and parents to evaluate natural aptitudes, degrees, and long-term career realities together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {CAREER_COUNSELLING_DATA.map((item) => (
                <div key={item.id} className="p-6 rounded-card bg-white shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-navy">
                      {item.target === 'parents-and-students' ? 'Joint Parent + Student' : item.target === 'parents' ? 'For Parents' : 'For Students'}
                    </span>
                    <span className="text-xs font-semibold text-secondary">₹800 / session</span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-secondary text-xs leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-1 pt-1">
                    {item.keyBenefits.map((b, bIdx) => (
                      <li key={bIdx} className="text-xs text-secondary flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-navy shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => onBookConsultation('Parent & Student Career Counselling')}
                className="h-10 px-7 rounded-btn bg-navy text-white text-xs font-semibold tracking-wide hover:bg-navy-hover transition-colors shadow-xs inline-flex items-center space-x-2"
              >
                <span>Schedule Joint Counselling Session (₹800)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 7. TRANSPARENT PRICING PER HOUR COST (Lite Grey Cards bg-[#EFEFEF]) */}
      {(activeTab === 'all' || activeTab === 'pricing') && (
        <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-foreground tracking-tight">
              Transparent Pricing (Per Hour Cost)
            </h2>
            <p className="text-secondary text-xs sm:text-sm">
              No locked contracts. Learn at your own pace with modular, hourly rates or continuous monthly tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PRICING_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className="p-6 rounded-card bg-[#EFEFEF] shadow-xs transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div>
                    <h4 className="font-heading font-bold text-base text-foreground">
                      {tier.level}
                    </h4>
                    <p className="text-[11px] text-secondary mt-0.5">
                      {tier.targetAudience}
                    </p>
                  </div>

                  <div className="py-2">
                    <span className="font-heading font-bold text-2xl text-navy">{tier.perHourRate}</span>
                    <span className="text-xs text-secondary font-medium"> / hour</span>
                    <p className="text-[10px] text-secondary mt-1">{tier.monthlyTrackNote}</p>
                  </div>

                  <ul className="space-y-1.5 text-xs text-secondary">
                    {tier.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-navy shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onBookConsultation(`Hourly Coaching: ${tier.level} (${tier.perHourRate}/hr)`)}
                  className="w-full py-2.5 rounded-btn text-xs font-semibold bg-white text-navy hover:bg-navy hover:text-white transition-colors shadow-xs"
                >
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. Direct Student & Academic Desk Contact (Lite Grey Card bg-[#EFEFEF]) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-7 md:p-10 rounded-card bg-[#EFEFEF] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
                Connect Directly with Faculty
              </h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Whether you need urgent doubt clearing, regular semester mentoring, dissertation guidance, or a joint parent counselling session — our faculty desk is at your service.
              </p>

              <div className="space-y-2.5 pt-1 text-xs text-secondary">
                <div className="flex items-center space-x-3 p-3 rounded-btn bg-white shadow-xs">
                  <Mail className="w-4 h-4 text-navy shrink-0" />
                  <div>
                    <span className="block text-[10px] font-semibold text-secondary">Direct Faculty Email:</span>
                    <a href={`mailto:${COMPANY_DETAILS.facultyEmail}`} className="font-semibold text-navy hover:underline">
                      {COMPANY_DETAILS.facultyEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-btn bg-white shadow-xs">
                  <Clock className="w-4 h-4 text-navy shrink-0" />
                  <div>
                    <span className="block text-[10px] font-semibold text-secondary">Working Schedule:</span>
                    <span className="font-semibold text-navy">Monday – Friday: 9:00 AM – 8:00 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 md:p-7 rounded-card bg-white shadow-xs">
              {studentContactSubmitted ? (
                <div className="py-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-heading font-bold text-lg text-foreground">Academic Inquiry Received</h4>
                  <p className="text-secondary text-xs max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-foreground">{studentForm.name}</span>. Our faculty desk will review your details and write back to <span className="font-semibold text-navy">{studentForm.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setStudentContactSubmitted(false)}
                    className="text-xs font-semibold text-navy underline pt-2"
                  >
                    Send another question
                  </button>
                </div>
              ) : (
                <form onSubmit={handleStudentSubmit} className="space-y-3.5">
                  <h4 className="font-heading font-bold text-base text-navy">
                    Student & Scholar Quick Inquiry
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Student / Parent name"
                        value={studentForm.name}
                        onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="student@example.com"
                        value={studentForm.email}
                        onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Academic Stage</label>
                      <select
                        value={studentForm.stage}
                        onChange={(e) => setStudentForm({ ...studentForm, stage: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      >
                        <option>Higher Secondary (11th & 12th)</option>
                        <option>Undergraduate (B.Com/BBA/B.Tech)</option>
                        <option>Postgraduate & MBA</option>
                        <option>PhD & Doctoral Research</option>
                        <option>Parent & Student Career Guidance</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 94440 00000"
                        value={studentForm.phone}
                        onChange={(e) => setStudentForm({ ...studentForm, phone: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Subject / Requirement</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="e.g. Need assistance with B.Com Accountancy / PhD Thesis Data Analysis..."
                      value={studentForm.message}
                      onChange={(e) => setStudentForm({ ...studentForm, message: e.target.value })}
                      className="w-full p-3 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-10 rounded-btn bg-navy text-white text-xs font-semibold tracking-wide hover:bg-navy-hover transition-colors shadow-xs"
                  >
                    Send to faculty@pathfinder.com
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
