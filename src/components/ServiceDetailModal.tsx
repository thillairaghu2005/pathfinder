import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookConsultation?: (serviceTitle: string) => void;
  onBookService?: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookConsultation,
  onBookService
}) => {
  if (!service) return null;

  const handleBook = () => {
    onClose();
    if (onBookConsultation) {
      onBookConsultation(service.title);
    } else if (onBookService) {
      onBookService(service.title);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-card p-7 md:p-9 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-secondary hover:text-foreground rounded-btn hover:bg-surface-hover transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-5">
          <div>
            <div className="flex items-center space-x-2">
              <span className="inline-block px-3 py-1 bg-[#FAF6ED] text-xs font-semibold text-navy rounded-full">
                {service.categoryLabel}
              </span>
              {service.pricingPerHour && (
                <span className="inline-block px-3 py-1 bg-surface-muted text-xs font-semibold text-gold-dark rounded-full">
                  {service.pricingPerHour}
                </span>
              )}
            </div>

            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground tracking-tight mt-2.5">
              {service.title}
            </h2>
            <p className="text-secondary text-sm leading-relaxed mt-1.5">
              {service.fullDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div>
              <h4 className="font-heading font-bold text-foreground text-xs uppercase tracking-wider mb-2.5">
                Target Learners / Audience
              </h4>
              <ul className="space-y-1.5">
                {service.audience.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-navy shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-foreground text-xs uppercase tracking-wider mb-2.5">
                Key Learning Outcomes
              </h4>
              <ul className="space-y-1.5">
                {service.outcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-navy shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-2">
            <h4 className="font-heading font-bold text-foreground text-xs uppercase tracking-wider mb-2">
              Available Delivery Formats
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {service.formatOptions.map((fmt, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#FAF6ED] text-xs font-medium text-navy rounded-btn">
                  {fmt}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-medium text-secondary hover:text-foreground transition-colors"
            >
              Close
            </button>

            <button
              onClick={handleBook}
              className="h-[42px] px-6 rounded-btn bg-navy text-white text-xs font-semibold tracking-wide hover:bg-navy-hover transition-colors flex items-center space-x-2 shadow-xs"
            >
              <span>Book Hourly Mentoring</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
