import { useState } from 'react';
import { NavPage, ServiceItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LoadingScreen } from './components/LoadingScreen';

export function App() {
  const [activePage, setActivePage] = useState<NavPage>('home');
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [pageKey, setPageKey] = useState<string>('initial');
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [initialServiceForModal, setInitialServiceForModal] = useState<string>('');

  const handleOpenConsultation = (serviceTitle?: string) => {
    if (serviceTitle) {
      setInitialServiceForModal(serviceTitle);
    } else {
      setInitialServiceForModal('');
    }
    setConsultationModalOpen(true);
  };

  const handleNavChange = (page: NavPage) => {
    if (page === activePage && !isPageLoading) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setPageKey(`${page}-${Date.now()}`);
    setIsPageLoading(true);

    setTimeout(() => {
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 150);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-navy selection:text-white">
      {/* StrokeText "Pathfinders" Loader Page - Shows on Initial Launch & Page Transitions */}
      <LoadingScreen 
        key={pageKey}
        pageKey={pageKey}
        isLoading={isPageLoading}
        onComplete={() => setIsPageLoading(false)}
      />

      {/* Navigation Header */}
      <Header 
        activePage={activePage}
        setActivePage={handleNavChange}
        onBookConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            setActivePage={handleNavChange}
            onBookConsultation={() => handleOpenConsultation()}
            onSelectService={(service) => setSelectedService(service)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onBookConsultation={() => handleOpenConsultation()}
          />
        )}

        {(activePage === 'services' || activePage === 'workshops') && (
          <ServicesPage
            filterCategory={activePage === 'workshops' ? 'corporate' : 'all'}
            onSelectService={(service) => setSelectedService(service)}
            onBookConsultation={() => handleOpenConsultation()}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Minimal Footer */}
      <Footer 
        setActivePage={handleNavChange}
        onBookConsultation={() => handleOpenConsultation()}
      />

      {/* Interactive Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialServiceId={initialServiceForModal}
      />

      {/* Detailed Service Drawer Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(title) => handleOpenConsultation(title)}
      />
    </div>
  );
}

export default App;
