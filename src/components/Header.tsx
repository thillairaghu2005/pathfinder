import { useState, useEffect, useRef } from 'react';
import { NavPage } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  activePage: NavPage;
  setActivePage: (page: NavPage) => void;
  onBookConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  onBookConsultation
}) => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (mobileMenuOpen) {
        setVisible(true);
        return;
      }

      // Always keep navbar visible when in hero section (top of page)
      if (currentScrollY <= 100) {
        setVisible(true);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        return;
      }

      // Past hero section: navbar appears whenever user scrolls up or down
      setVisible(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Hide navbar after 1.5 seconds of scroll inactivity when scrolled past hero section
      scrollTimeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 1500);
    };

    // Run handleScroll on initial load to set correct state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      setVisible(true);
    }
  }, [mobileMenuOpen]);

  const navItems: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: NavPage) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out transform ${
        scrolled 
          ? 'bg-white border-b border-border/40 shadow-sm' 
          : 'bg-transparent border-b border-transparent shadow-none'
      } ${
        visible ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className={`max-w-grid mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between transition-colors duration-200 ${
        scrolled ? 'py-2' : ''
      }`}>
        {/* Brand Logo - Minimalist Editorial Emblem */}
        <button 
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none group flex items-center space-x-3"
          aria-label="Pathfinders The Guide Home"
        >
          <div className="w-9 h-9 border border-foreground flex items-center justify-center rounded-sm bg-foreground text-background font-heading font-bold text-lg tracking-tighter transition-transform duration-200 group-hover:scale-105 shadow-sm">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg tracking-tight text-foreground leading-none">
              PATHFINDERS
            </span>
            <span className="text-[10px] tracking-[0.25em] text-secondary uppercase mt-1 font-medium leading-none">
              The Guide
            </span>
          </div>
        </button>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-sm font-medium transition-colors duration-200 py-1 ${
                  isActive ? 'text-foreground font-semibold' : 'text-secondary hover:text-foreground'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-navy rounded-full animate-fadeIn" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Right CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onBookConsultation}
            className="h-[48px] px-7 rounded-btn bg-navy text-white text-sm font-medium tracking-wide hover:bg-navy-hover transition-all duration-200 flex items-center space-x-2 group focus-ring shadow-sm hover:shadow"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:bg-surface-hover rounded-btn transition-colors focus-ring"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border/40 bg-background/95 backdrop-blur-md px-6 py-6 space-y-4 animate-fadeIn shadow-lg">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 text-base font-medium border-b border-surface-hover transition-colors ${
                  activePage === item.id ? 'text-foreground font-bold' : 'text-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookConsultation();
              }}
              className="w-full h-[48px] px-7 rounded-btn bg-navy text-white text-sm font-medium hover:bg-navy-hover transition-colors flex items-center justify-center space-x-2"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

