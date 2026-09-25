import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Differentials from './components/Differentials';
import ServicesList from './components/ServicesList';
import LocationSection from './components/LocationSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import AdminModal from './components/AdminModal';
import BookingPage from './pages/BookingPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'booking'
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#agendamento') {
        setCurrentPage('booking');
      } else if (window.location.hash === '' || window.location.hash === '#home') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateToBooking = (serviceId = null) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setCurrentPage('booking');
    window.location.hash = 'agendamento';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToHome = () => {
    setCurrentPage('home');
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'booking') {
    return (
      <BookingPage
        initialServiceId={selectedServiceId}
        onBackToHome={handleNavigateToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#E52320] selection:text-white">
      
      <Header
        onOpenBooking={() => handleNavigateToBooking()}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
      />

      <Hero
        onOpenBooking={() => handleNavigateToBooking()}
      />

      <AboutSection />

      <Differentials />

      <ServicesList
        onSelectService={(serviceId) => handleNavigateToBooking(serviceId)}
      />

      <LocationSection />

      <TestimonialsSection />

      <FaqSection />

      <Footer
        onOpenAdmin={() => setIsAdminModalOpen(true)}
      />

      <FloatingButtons
        onOpenBooking={() => handleNavigateToBooking()}
      />

      <AdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />

    </div>
  );
}
