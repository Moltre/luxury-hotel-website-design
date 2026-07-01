import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingBar } from './components/BookingBar';
import { SuitesShowcase } from './components/SuitesShowcase';
import { ImmersiveGallery } from './components/ImmersiveGallery';
import { DiningAndExperiences } from './components/DiningAndExperiences';
import { WeddingsAndRetreats } from './components/WeddingsAndRetreats';
import { BookingModal } from './components/BookingModal';
import { ConciergeAssistant } from './components/ConciergeAssistant';
import { Footer } from './components/Footer';
import { SUITES, Suite } from './data/resortData';

export function App() {
  const [currentDestIndex, setCurrentDestIndex] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedSuiteForBooking, setSelectedSuiteForBooking] = useState<Suite | null>(null);

  const handleOpenBookingWithSuite = (suite?: Suite) => {
    if (suite) {
      setSelectedSuiteForBooking(suite);
    } else {
      setSelectedSuiteForBooking(SUITES[0]);
    }
    setIsBookingModalOpen(true);
  };

  const handleCheckAvailability = (data: { checkIn: string; checkOut: string; guests: number; suiteId: string }) => {
    const suite = SUITES.find(s => s.id === data.suiteId) || SUITES[0];
    setSelectedSuiteForBooking(suite);
    setIsBookingModalOpen(true);
  };

  const handleSelectGalleryOrDiningItem = (_title: string) => {
    // Open booking modal with a personalized greeting or pre-selection
    setSelectedSuiteForBooking(SUITES[0]);
    setIsBookingModalOpen(true);
  };

  const handleExploreClick = () => {
    const suitesEl = document.getElementById('suites');
    if (suitesEl) {
      suitesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1013] text-[#faf9f5] flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-[#d4af37]">
      {/* Luxury Header */}
      <Navbar
        currentDestIndex={currentDestIndex}
        setCurrentDestIndex={setCurrentDestIndex}
        currency={currency}
        setCurrency={setCurrency}
        onOpenBooking={() => handleOpenBookingWithSuite()}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          currentDestIndex={currentDestIndex}
          onExploreClick={handleExploreClick}
        />

        {/* Floating Check Availability Widget */}
        <BookingBar
          onCheckAvailability={handleCheckAvailability}
          currency={currency}
        />

        {/* Curated Suites Showcase */}
        <SuitesShowcase
          onReserveSuite={handleOpenBookingWithSuite}
          currency={currency}
        />

        {/* Fullscreen Swipeable Immersive Gallery */}
        <ImmersiveGallery
          onSelectBookingItem={handleSelectGalleryOrDiningItem}
        />

        {/* Gastronomy & Bespoke Experiences */}
        <DiningAndExperiences
          onInquireExperience={handleSelectGalleryOrDiningItem}
        />

        {/* Destination Weddings & Corporate Retreats Planner Suite */}
        <WeddingsAndRetreats
          onOpenBooking={() => handleOpenBookingWithSuite()}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Frictionless Reservation Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedSuite={selectedSuiteForBooking}
        currency={currency}
      />

      {/* Virtual AI Luxury Concierge */}
      <ConciergeAssistant />
    </div>
  );
}

export default App;
