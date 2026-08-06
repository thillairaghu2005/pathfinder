import React from 'react';
import { NavPage } from '../types';
import { COMPANY_DETAILS } from '../data/content';

interface FooterProps {
  setActivePage: (page: NavPage) => void;
  onBookConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onBookConsultation }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: NavPage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-background pt-16 pb-12 text-sm text-secondary">
      <div className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16">
          {/* Column 1: About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 border border-foreground flex items-center justify-center rounded-sm bg-foreground text-background font-heading font-bold text-xs">
                P
              </div>
              <span className="font-heading font-bold text-foreground text-base tracking-tight">
                PATHFINDERS
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed max-w-xs">
              A holistic academic coaching and mentoring academy dedicated to helping students and working professionals unlock their full potential.
            </p>
          </div>

          {/* Column 2: Services Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-foreground text-sm tracking-tight">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-foreground transition-colors">
                  Academic Coaching
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-foreground transition-colors">
                  Commerce & Management
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-foreground transition-colors">
                  Engineering & Sciences
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-foreground transition-colors">
                  Research & Dissertation Mentoring
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('workshops')} className="hover:text-foreground transition-colors">
                  Corporate & Institutional Workshops
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-foreground text-sm tracking-tight">
              Locations
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-foreground font-medium">Chennai Centre</li>
              <li className="text-foreground font-medium">Trichy Centre</li>
              <li>Online Across India & Beyond</li>
              <li className="pt-2 text-xs text-secondary">
                In-person & high-touch interactive virtual mentoring.
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Action */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-foreground text-sm tracking-tight">
              Get in Touch
            </h4>
            <p className="text-xs text-secondary leading-relaxed">
              Every academic journey starts with a simple conversation.
            </p>
            <p className="text-xs font-medium text-foreground">
              <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-navy transition-colors">
                {COMPANY_DETAILS.email}
              </a>
            </p>
            <div className="pt-2">
              <button
                onClick={onBookConsultation}
                className="h-[40px] px-5 rounded-btn border border-border text-foreground hover:bg-surface-hover transition-colors text-xs font-medium"
              >
                Schedule Discussion
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-secondary space-y-4 md:space-y-0">
          <div>
            © {currentYear} {COMPANY_DETAILS.name}. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <button onClick={() => handleNav('home')} className="hover:text-foreground transition-colors">
              Home
            </button>
            <button onClick={() => handleNav('about')} className="hover:text-foreground transition-colors">
              About Us
            </button>
            <button onClick={() => handleNav('services')} className="hover:text-foreground transition-colors">
              Services
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-foreground transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
