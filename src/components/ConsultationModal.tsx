import { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
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
    academicStage: 'Undergraduate',
    serviceInterest: initialServiceId || 'Academic Coaching',
    preferredMode: 'online',
    notes: ''
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-background rounded-card border border-border p-8 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-secondary hover:text-foreground rounded-btn hover:bg-surface-hover transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 bg-surface-hover rounded-full flex items-center justify-center mx-auto text-navy">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-foreground">
              Consultation Request Received
            </h3>
            <p className="text-secondary text-sm leading-relaxed max-w-md mx-auto">
              Thank you, <span className="font-medium text-foreground">{formData.fullName}</span>. A senior mentor from {COMPANY_DETAILS.name} will reach out to you at <span className="font-medium text-foreground">{formData.email}</span> within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="h-[48px] px-7 rounded-btn bg-navy text-white text-sm font-medium hover:bg-navy-hover transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Direct Guidance
              </span>
              <h3 className="font-heading font-bold text-2xl text-foreground tracking-tight mt-1">
                Book a 1-on-1 Consultation
              </h3>
              <p className="text-secondary text-sm mt-1">
                Speak directly with an expert mentor. No pressure, no obligations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Sundaram"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full h-11 px-4 text-sm bg-background border border-border rounded-btn focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ananya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-4 text-sm bg-background border border-border rounded-btn focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 px-4 text-sm bg-background border border-border rounded-btn focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    Academic Level
                  </label>
                  <select
                    value={formData.academicStage}
                    onChange={(e) => setFormData({ ...formData, academicStage: e.target.value })}
                    className="w-full h-11 px-3 text-sm bg-background border border-border rounded-btn focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                  >
                    <option value="Higher Secondary">Higher Secondary (11th / 12th)</option>
                    <option value="Undergraduate">Undergraduate (B.Com, BBA, B.E., B.Sc, BA)</option>
                    <option value="Postgraduate">Postgraduate (MBA, M.Com, M.Sc, M.E., MA)</option>
                    <option value="PhD Candidate">PhD / Doctoral Scholar</option>
                    <option value="Corporate / Institution">Corporate Team / University College</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                    Preferred Mode
                  </label>
                  <select
                    value={formData.preferredMode}
                    onChange={(e) => setFormData({ ...formData, preferredMode: e.target.value as any })}
                    className="w-full h-11 px-3 text-sm bg-background border border-border rounded-btn focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                  >
                    <option value="online">Online Mentoring (Pan India / Global)</option>
                    <option value="chennai">Chennai Centre (In-Person)</option>
                    <option value="trichy">Trichy Centre (In-Person)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                  How Can We Support You?
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about the subject, dissertation topic, or specific exam goals..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 text-sm bg-background border border-border rounded-btn focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-[48px] px-7 rounded-btn bg-navy text-white text-sm font-medium hover:bg-navy-hover transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Submit Consultation Request</span>
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
