import React, { useState } from 'react';
import { 
  PHD_SERVICES_DETAILED, 
  JOURNAL_SERVICES_DATA 
} from '../data/content';
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Mail, 
  ArrowRight 
} from 'lucide-react';

interface PhDPageProps {
  onBookConsultation: (serviceTitle?: string) => void;
}

export const PhDPage: React.FC<PhDPageProps> = ({ onBookConsultation }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [phdForm, setPhdForm] = useState({
    name: '',
    email: '',
    phone: '',
    discipline: 'Commerce & Management',
    stage: 'Literature Review / Gap Analysis',
    specificNeed: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full space-y-16 md:space-y-24 pb-20 animate-fadeIn">
      {/* 1. Header */}
      <section className="pt-20 md:pt-28 max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl space-y-4">
          <h1 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-foreground tracking-tight leading-[1.12]">
            PhD Mentorship, Statistical Analysis & Thesis Guidance
          </h1>

          <p className="text-secondary text-sm md:text-base leading-relaxed pt-1">
            Writing a PhD thesis is often described as the loneliest intellectual journey. Our research guides — active scholars who have supervised dissertations and published in peer-reviewed journals — provide the structure, methodological rigour, and honest critique you need to defend with confidence.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <div className="flex items-center space-x-2 text-xs font-medium px-3.5 py-1.5 rounded-full bg-navy text-white shadow-xs">
              <span>Hourly Consulting: ₹1,500 / hr</span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#EFEFEF] text-navy shadow-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon–Fri Working Days</span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#EFEFEF] text-navy shadow-xs">
              <Mail className="w-3.5 h-3.5" />
              <span>faculty@pathfinder.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Specialized PhD Modules (Lite Grey Cards bg-[#EFEFEF]) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
        <div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
            Dedicated Services for Doctoral Scholars
          </h2>
          <p className="text-secondary text-xs sm:text-sm mt-1 max-w-xl">
            Targeted support at the exact milestones where scholars most frequently get delayed or encounter committee roadblocks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHD_SERVICES_DETAILED.map((service) => (
            <div
              key={service.id}
              className="p-7 md:p-8 rounded-card bg-[#EFEFEF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-xl text-foreground leading-snug">
                    {service.title}
                  </h3>
                  <span className="text-xs font-semibold text-gold-dark shrink-0">
                    {service.pricingPerHour}
                  </span>
                </div>

                <p className="text-secondary text-xs leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-secondary block">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-secondary">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-navy shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onBookConsultation(`PhD: ${service.title}`)}
                  className="w-full h-10 rounded-btn bg-navy text-white text-xs font-semibold tracking-wide hover:bg-navy-hover transition-colors shadow-xs flex items-center justify-center space-x-2"
                >
                  <span>Book Consultation ({service.pricingPerHour})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Statistical Analysis & Software Tooling (Lite Grey Cards bg-[#EFEFEF]) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-7 md:p-10 rounded-card bg-[#EFEFEF] space-y-6 shadow-xs">
          <div className="max-w-2xl space-y-2">
            <h3 className="font-heading font-bold text-2xl text-foreground">
              Software & Analytical Tool Mastery
            </h3>
            <p className="text-secondary text-xs sm:text-sm leading-relaxed">
              We guide you through data cleaning, hypothesis testing, model validation, and statistical table interpretation so you can defend your findings with absolute empirical certainty.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center">
            {[
              { name: 'SPSS', desc: 'Descriptive & Regression' },
              { name: 'AMOS', desc: 'SEM Modeling' },
              { name: 'SmartPLS', desc: 'PLS-SEM Path Models' },
              { name: 'R / RStudio', desc: 'Econometrics & Code' },
              { name: 'Python', desc: 'Data Analytics' },
              { name: 'NVivo', desc: 'Thematic Coding' },
            ].map((tool, idx) => (
              <div key={idx} className="p-4 rounded-card bg-white shadow-xs space-y-1">
                <div className="font-heading font-bold text-base text-navy">{tool.name}</div>
                <div className="text-[10px] text-secondary leading-tight">{tool.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Journal Services for PhD Scholars (Lite Grey Cards bg-[#EFEFEF]) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
        <div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
            Scopus & Web of Science Journal Publications
          </h2>
          <p className="text-secondary text-xs sm:text-sm mt-1 max-w-xl">
            Nearly all universities mandate 2+ indexed journal publications prior to synopsis submission. We ensure your manuscript meets rigorous peer-review standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {JOURNAL_SERVICES_DATA.map((j) => (
            <div key={j.id} className="p-7 rounded-card bg-[#EFEFEF] shadow-xs flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-btn bg-navy text-white flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-gold-light" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground">
                  {j.title}
                </h3>
                <p className="text-secondary text-xs leading-relaxed">
                  {j.shortDesc}
                </p>

                <p className="text-xs text-secondary/90 pt-1">
                  Indexing: {j.indexingCovered.join(', ')}
                </p>
              </div>

              <button
                onClick={() => onBookConsultation(`Journal: ${j.title}`)}
                className="w-full h-10 rounded-btn bg-white hover:bg-navy text-navy hover:text-white text-xs font-semibold tracking-wide transition-colors shadow-xs"
              >
                Publication Mentoring (₹1,500/hr)
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PhD Dedicated Contact & Booking Section */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-7 md:p-10 rounded-card bg-[#14213D] text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">
                Speak with an Experienced Research Guide
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Send us your current synopsis, research questions, or chapter draft. We will conduct an initial review and schedule a 1-on-1 discussion with a guide in your subject domain.
              </p>

              <div className="space-y-2.5 pt-1 text-xs text-white/90">
                <div className="p-3 rounded-btn bg-white/10 flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gold-light shrink-0" />
                  <div>
                    <span className="block text-[10px] text-white/60 font-semibold">Direct PhD Desk:</span>
                    <a href="mailto:faculty@pathfinder.com" className="text-xs font-bold text-gold-light hover:underline">
                      faculty@pathfinder.com
                    </a>
                  </div>
                </div>

                <div className="p-3 rounded-btn bg-white/10 flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-gold-light shrink-0" />
                  <div>
                    <span className="block text-[10px] text-white/60 font-semibold">Working Days:</span>
                    <span className="font-medium text-white">Monday – Friday: 9:00 AM – 8:00 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 p-6 md:p-7 rounded-card bg-[#EFEFEF] text-foreground shadow-xs">
              {formSubmitted ? (
                <div className="py-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-heading font-bold text-xl text-navy">Research Inquiry Logged</h4>
                  <p className="text-secondary text-xs max-w-md mx-auto">
                    Thank you, Scholar <span className="font-semibold text-foreground">{phdForm.name}</span>. A research mentor in {phdForm.discipline} will review your inquiry and reach back to <span className="font-semibold text-navy">{phdForm.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-semibold text-navy underline pt-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <h4 className="font-heading font-bold text-lg text-navy">Doctoral Research Intake</h4>
                    <p className="text-secondary text-xs">Direct route to faculty@pathfinder.com</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Scholar Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. S. Ramanathan"
                        value={phdForm.name}
                        onChange={(e) => setPhdForm({ ...phdForm, name: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-white border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="scholar@university.edu"
                        value={phdForm.email}
                        onChange={(e) => setPhdForm({ ...phdForm, email: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-white border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 94440 00000"
                        value={phdForm.phone}
                        onChange={(e) => setPhdForm({ ...phdForm, phone: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-white border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Current Research Stage</label>
                      <select
                        value={phdForm.stage}
                        onChange={(e) => setPhdForm({ ...phdForm, stage: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-white border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      >
                        <option>Topic Selection / Problem Formulation</option>
                        <option>Synopsis & Proposal Defense</option>
                        <option>Literature Review / Gap Analysis</option>
                        <option>Statistical Analysis (SPSS/AMOS/PLS)</option>
                        <option>Thesis Chapter Writing</option>
                        <option>Journal Paper (Scopus/WoS)</option>
                        <option>Final Viva Defense Prep</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Research Title / Area *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Briefly state your discipline and the research problem..."
                      value={phdForm.specificNeed}
                      onChange={(e) => setPhdForm({ ...phdForm, specificNeed: e.target.value })}
                      className="w-full p-3 text-xs bg-white border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-10 rounded-btn bg-navy text-white text-xs font-semibold tracking-wide hover:bg-navy-hover transition-colors shadow-xs"
                  >
                    Request PhD Consultation (₹1,500/hr)
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
