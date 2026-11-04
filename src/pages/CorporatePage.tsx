import React, { useState } from 'react';
import { CORPORATE_SERVICES_DATA, COMPANY_DETAILS } from '../data/content';
import { ServiceItem } from '../types';
import {
  Clock,
  Mail,
  CheckCircle2
} from 'lucide-react';

interface CorporatePageProps {
  onSelectService: (service: ServiceItem) => void;
  onBookConsultation: (serviceTitle?: string) => void;
}

export const CorporatePage: React.FC<CorporatePageProps> = ({
  onSelectService,
  onBookConsultation
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    contactPerson: '',
    organization: '',
    email: '',
    phone: '',
    programType: 'Corporate Training Program',
    expectedParticipants: '20-50 participants',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full space-y-16 md:space-y-24 pb-20 animate-fadeIn">
      {/* 1. Header */}
      <section className="pt-20 md:pt-28 max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl space-y-4">
          <h1 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-foreground tracking-tight leading-[1.12]">
            Corporate Training & College Workshops
          </h1>

          <p className="text-secondary text-sm md:text-base leading-relaxed pt-1">
            Pathfinders partners with organisations and universities across South India to deliver pragmatic, high-impact skill development: executive communication, leadership, campus placement bootcamps, and faculty development programs.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <div className="flex items-center space-x-2 text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#EFEFEF] text-navy shadow-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon–Fri Working Days (9:00 AM – 8:00 PM)</span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#EFEFEF] text-navy shadow-xs">
              <Mail className="w-3.5 h-3.5" />
              <span>{COMPANY_DETAILS.trainerEmail}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Institutional Programs Grid (Lite Grey Cards bg-[#EFEFEF]) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
        <div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
            Workplace & Campus Skill Modules
          </h2>
          <p className="text-secondary text-xs sm:text-sm mt-1 max-w-xl">
            Led by trainers with real corporate L&D and university placement experience, not theoretical lecture adapters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CORPORATE_SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="p-7 md:p-8 rounded-card bg-[#EFEFEF] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                    {service.title}
                  </h3>
                  <span className="text-xs font-semibold text-gold-dark">
                    Custom Scope
                  </span>
                </div>

                <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                  {service.fullDesc}
                </p>

                <p className="text-xs text-secondary/80 pt-1">
                  Target: {service.audience.join(', ')}
                </p>

                <div className="space-y-1 pt-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-secondary block">
                    Measurable Outcomes:
                  </span>
                  <ul className="space-y-1 text-xs text-secondary">
                    {service.outcomes.map((out, oIdx) => (
                      <li key={oIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-navy shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-navy hover:underline"
                >
                  View Details
                </button>

                <button
                  onClick={() => onBookConsultation(`Corporate: ${service.title}`)}
                  className="h-9 px-5 rounded-btn bg-navy text-white text-xs font-semibold tracking-wide hover:bg-navy-hover transition-colors shadow-xs"
                >
                  Request Proposal
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Delivery Model (Lite Grey Container bg-[#EFEFEF]) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-7 md:p-10 rounded-card bg-[#EFEFEF] shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-btn bg-white flex items-center justify-center text-navy font-bold text-sm shadow-xs">
                01
              </div>
              <h4 className="font-heading font-bold text-base text-foreground">Diagnostic Assessment</h4>
              <p className="text-secondary text-xs leading-relaxed">
                We meet with leadership and HR teams to assess skill gaps, participant demographics, and business objectives before designing a single session.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-btn bg-white flex items-center justify-center text-navy font-bold text-sm shadow-xs">
                02
              </div>
              <h4 className="font-heading font-bold text-base text-foreground">Interactive Facilitation</h4>
              <p className="text-secondary text-xs leading-relaxed">
                Workshops emphasize simulation, case analysis, role-playing, and hands-on drills rather than monologue PowerPoint lectures.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-btn bg-white flex items-center justify-center text-navy font-bold text-sm shadow-xs">
                03
              </div>
              <h4 className="font-heading font-bold text-base text-foreground">Post-Session Evaluation</h4>
              <p className="text-secondary text-xs leading-relaxed">
                We provide institutions with individual participant evaluation notes, engagement metrics, and recommended follow-up practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dedicated Corporate Contact Section (Lite Grey Card bg-[#EFEFEF]) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-7 md:p-10 rounded-card bg-[#EFEFEF] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
                Plan a Program for Your Team or Campus
              </h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Reach out to discuss customized duration, batch sizing, syllabus tailoring, and institutional pricing for your organization or college department.
              </p>

              <div className="space-y-2.5 pt-1 text-xs text-secondary">
                <div className="flex items-center space-x-3 p-3 rounded-btn bg-white shadow-xs">
                  <Mail className="w-4 h-4 text-navy shrink-0" />
                  <div>
                    <span className="block text-[10px] font-semibold text-secondary">Institutional Training Desk:</span>
                    <a href={`mailto:${COMPANY_DETAILS.trainerEmail}`} className="font-semibold text-navy hover:underline">
                      {COMPANY_DETAILS.trainerEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-btn bg-white shadow-xs">
                  <Clock className="w-4 h-4 text-navy shrink-0" />
                  <div>
                    <span className="block text-[10px] font-semibold text-secondary">Working Hours:</span>
                    <span className="font-semibold text-navy">Monday – Friday: 9:00 AM – 8:00 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 p-6 md:p-7 rounded-card bg-white shadow-xs">
              {submitted ? (
                <div className="py-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-heading font-bold text-lg text-foreground">Proposal Request Received</h4>
                  <p className="text-secondary text-xs max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-foreground">{form.contactPerson}</span> from <span className="font-semibold text-foreground">{form.organization}</span>. Our corporate training lead will review your requirements and respond to <span className="font-semibold text-navy">{form.email}</span> promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-navy underline pt-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <h4 className="font-heading font-bold text-base text-navy">
                    Institutional Proposal Request
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Contact Person *</label>
                      <input
                        type="text"
                        required
                        placeholder="Dean / HR Lead name"
                        value={form.contactPerson}
                        onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Company / College Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. ABC Corp / Loyola College"
                        value={form.organization}
                        onChange={(e) => setForm({ ...form, organization: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Official Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="hr@company.com / dean@college.edu"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 94440 00000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Program Type</label>
                      <select
                        value={form.programType}
                        onChange={(e) => setForm({ ...form, programType: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      >
                        <option>Corporate Training Program</option>
                        <option>Executive Skill Workshop</option>
                        <option>College Placement Bootcamp</option>
                        <option>Faculty Development Program (FDP)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Expected Batch Size</label>
                      <select
                        value={form.expectedParticipants}
                        onChange={(e) => setForm({ ...form, expectedParticipants: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      >
                        <option>Under 20 participants</option>
                        <option>20 - 50 participants</option>
                        <option>50 - 100 participants</option>
                        <option>100+ students (Entire batch)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">Scope & Skill Gaps *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Specify objectives (e.g. Business communication, Mock GD & PI, Managerial leadership)..."
                      value={form.requirements}
                      onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                      className="w-full p-3 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-10 rounded-btn bg-navy text-white text-xs font-semibold tracking-wide hover:bg-navy-hover transition-colors shadow-xs"
                  >
                    Send to trainer@pathfinder.com
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
