import React from 'react';
import { NavPage } from '../types';
import { COMPANY_DETAILS } from '../data/content';
import { Logo } from './Logo';
import { Mail, Clock, MapPin } from 'lucide-react';

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
    <footer className="w-full bg-[#EFEFEF] pt-16 pb-12 text-sm text-secondary">
      <div className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">
          {/* Column 1: Brand & Emblem (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <Logo size="md" />
            <p className="text-xs text-secondary leading-relaxed max-w-sm pt-1">
              A holistic academic coaching and mentoring academy dedicated to helping students and working professionals unlock their true potential, from Higher Secondary school to PhD.
            </p>
            <p className="text-xs text-secondary/80 italic pt-1">
              "{COMPANY_DETAILS.emblemMetaphor}"
            </p>
          </div>

          {/* Column 2: Academic & PhD (Students) (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-heading font-bold text-navy text-xs uppercase tracking-wider">
              Academic & Research
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => handleNav('academic')} className="hover:text-navy transition-colors text-left">
                  Commerce & Management (B.Com/MBA)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academic')} className="hover:text-navy transition-colors text-left">
                  Engineering & Applied Sciences
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academic')} className="hover:text-navy transition-colors text-left">
                  Sciences & Mathematics
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('phd')} className="hover:text-navy transition-colors text-left font-medium text-navy">
                  PhD & Doctoral Services →
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academic')} className="hover:text-navy transition-colors text-left">
                  Journal Publication Guidance (Scopus/WoS)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academic')} className="hover:text-navy transition-colors text-left">
                  Parent & Student Career Counselling
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & College (Others) (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="font-heading font-bold text-navy text-xs uppercase tracking-wider">
              Workshops
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => handleNav('corporate')} className="hover:text-navy transition-colors text-left">
                  Corporate Training
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('corporate')} className="hover:text-navy transition-colors text-left">
                  College Seminars
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('corporate')} className="hover:text-navy transition-colors text-left">
                  Campus Placement Bootcamps
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('corporate')} className="hover:text-navy transition-colors text-left">
                  Executive Workshops
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Workspace Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-heading font-bold text-navy text-xs uppercase tracking-wider">
              Workspace Contacts
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start space-x-2">
                <Mail className="w-3.5 h-3.5 text-navy shrink-0 mt-0.5" />
                <div>
                  <span className="block text-secondary text-[10px]">Academic Desk:</span>
                  <a href={`mailto:${COMPANY_DETAILS.facultyEmail}`} className="font-semibold text-navy hover:underline">
                    {COMPANY_DETAILS.facultyEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Mail className="w-3.5 h-3.5 text-navy shrink-0 mt-0.5" />
                <div>
                  <span className="block text-secondary text-[10px]">Corporate Desk:</span>
                  <a href={`mailto:${COMPANY_DETAILS.trainerEmail}`} className="font-semibold text-navy hover:underline">
                    {COMPANY_DETAILS.trainerEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Mail className="w-3.5 h-3.5 text-navy shrink-0 mt-0.5" />
                <div>
                  <span className="block text-secondary text-[10px]">General Desk:</span>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="font-semibold text-navy hover:underline">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2 pt-1">
                <Clock className="w-3.5 h-3.5 text-navy shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-navy block text-[11px]">Mon–Fri Working Days</span>
                  <span className="text-[10px] text-secondary">9:00 AM – 8:00 PM IST</span>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-navy shrink-0 mt-0.5" />
                <span className="text-[10px] text-secondary">Chennai & Trichy | Online Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-secondary gap-3">
          <p>© {currentYear} Pathfinders – The Guide. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => handleNav('about')} className="hover:text-navy transition-colors">
              About
            </button>
            <button onClick={onBookConsultation} className="text-navy font-semibold hover:underline">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
