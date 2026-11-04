import { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import { ConsultationFormData } from '../types';
import { COMPANY_DETAILS } from '../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    stage: 'Undergraduate (B.Com/BBA/B.Tech)',
    serviceInterest: initialServiceId || 'Academic Coaching',
    preferredMode: 'online',
    notes: '',
    departmentEmail: 'faculty@pathfinder.com'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const isCorporate = formData.serviceInterest.toLowerCase().includes('corporate') ||
    formData.serviceInterest.toLowerCase().includes('workshop') ||
    formData.serviceInterest.toLowerCase().includes('college');

  const destinationEmail = isCorporate ? COMPANY_DETAILS.trainerEmail : COMPANY_DETAILS.facultyEmail;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-xs animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-white rounded-card p-7 md:p-9 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-secondary hover:text-foreground rounded-btn hover:bg-surface-hover transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-3.5">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground">
              Consultation Scheduled
            </h3>
            <p className="text-secondary text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
              Thank you, <span className="font-semibold text-foreground">{formData.fullName}</span>. Your request has been directed to <span className="font-semibold text-navy">{destinationEmail}</span>. Our faculty will reach out to you within 24 hours.
            </p>
            <div className="pt-1 text-xs text-secondary flex items-center justify-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-navy" />
              <span>Mon–Fri Working Days: 9:00 AM – 8:00 PM IST</span>
            </div>
            <div className="pt-3">
              <button
                onClick={handleReset}
                className="h-[42px] px-7 rounded-btn bg-navy text-white text-xs font-semibold tracking-wide hover:bg-navy-hover transition-colors shadow-xs"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                Direct Guidance
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground tracking-tight mt-0.5">
                Book a 1-on-1 Consultation
              </h3>
              <p className="text-secondary text-xs mt-0.5">
                Delivered directly to <strong className="text-navy">{destinationEmail}</strong>. Mon–Fri Working Days.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. S. Meenakshi"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full h-10 px-3.5 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-10 px-3.5 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 94440 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-10 px-3.5 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">
                    Program / Service Interest
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full h-10 px-3 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                  >
                    <option>Commerce & Management (B.Com/MBA)</option>
                    <option>Engineering & Applied Sciences</option>
                    <option>Sciences & Mathematics</option>
                    <option>PhD Mentorship (₹1,500/hr)</option>
                    <option>Journal Publication (Scopus/WoS)</option>
                    <option>Parent & Student Career Counselling (₹800)</option>
                    <option>Corporate Training & Executive Workshops</option>
                    <option>College Placement Bootcamp</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">
                    Preferred Mode
                  </label>
                  <select
                    value={formData.preferredMode}
                    onChange={(e) => setFormData({ ...formData, preferredMode: e.target.value as any })}
                    className="w-full h-10 px-3 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                  >
                    <option value="online">Interactive Live Online</option>
                    <option value="chennai">Chennai Centre (In-Person)</option>
                    <option value="trichy">Trichy Centre (In-Person)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">
                  Specific Learning Goal / Inquiry
                </label>
                <textarea
                  rows={3}
                  placeholder="Share subjects, upcoming exam dates, research topic, or questions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 text-xs bg-[#FAF8F5] border border-border/80 rounded-btn focus:outline-none focus:border-navy resize-none"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full h-11 rounded-btn bg-navy text-white text-xs font-semibold tracking-wide hover:bg-navy-hover transition-colors shadow-xs flex items-center justify-center space-x-2"
                >
                  <span>Submit to {destinationEmail}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
