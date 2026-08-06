import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-background rounded-card border border-border p-8 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-secondary hover:text-foreground rounded-btn hover:bg-surface-hover transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <span className="inline-block px-3 py-1 bg-surface-hover border border-border text-xs font-medium text-secondary rounded-full">
              {service.categoryLabel}
            </span>
            <h2 className="font-heading font-bold text-3xl text-foreground tracking-tight mt-3">
              {service.title}
            </h2>
            <p className="text-secondary text-base leading-relaxed mt-2">
              {service.fullDesc}
            </p>
          </div>

          <div className="border-t border-border pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm tracking-tight mb-3">
                Who It's For
              </h4>
              <ul className="space-y-2">
                {service.audience.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm tracking-tight mb-3">
                Key Outcomes
              </h4>
              <ul className="space-y-2">
                {service.outcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h4 className="font-heading font-semibold text-foreground text-sm tracking-tight mb-3">
              Available Delivery Formats
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.formatOptions.map((fmt, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-surface-muted border border-border text-xs font-medium text-foreground rounded-btn">
                  {fmt}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-6 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-medium text-secondary hover:text-foreground transition-colors"
            >
              Back to Services
            </button>

            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="h-[48px] px-7 rounded-btn bg-navy text-white text-sm font-medium hover:bg-navy-hover transition-colors flex items-center space-x-2"
            >
              <span>Book For This Program</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
