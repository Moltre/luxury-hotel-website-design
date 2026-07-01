import React, { useState, useEffect } from 'react';
import { Sparkles, Globe, Compass, Calendar, Menu, X, PhoneCall, ChevronDown } from 'lucide-react';
import { DESTINATIONS } from '../data/resortData';

interface NavbarProps {
  currentDestIndex: number;
  setCurrentDestIndex: (idx: number) => void;
  currency: string;
  setCurrency: (curr: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentDestIndex,
  setCurrentDestIndex,
  currency,
  setCurrency,
  onOpenBooking
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const [currDropdownOpen, setCurrDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentDest = DESTINATIONS[currentDestIndex];
  const currencies = ['USD ($)', 'EUR (€)', 'GBP (£)', 'JPY (¥)'];

  const navLinks = [
    { name: 'Suites & Villas', href: '#suites' },
    { name: 'Immersive Gallery', href: '#gallery' },
    { name: 'Gastronomy & Spa', href: '#dining' },
    { name: 'Bespoke Experiences', href: '#experiences' },
    { name: 'Weddings & Retreats', href: '#weddings' }
  ];

  return (
    <>
      {/* Top micro-bar for VIP hospitality context */}
      <div className="bg-[#0b0c0e] text-[#b5a37b] text-xs border-b border-[#d4af37]/15 py-2 px-4 sm:px-8 hidden md:flex justify-between items-center z-50 relative">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
            <span className="tracking-widest uppercase font-medium">Forbes Travel Guide 5-Star Award Winner 2026</span>
          </span>
          <span className="text-[#faf9f5]/40">•</span>
          <span className="text-[#faf9f5]/80 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            Location: <strong className="text-[#d4af37]">{currentDest.name}</strong> ({currentDest.temp}, {currentDest.weather})
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#concierge" className="hover:text-[#faf9f5] transition flex items-center gap-1.5">
            <PhoneCall className="w-3.5 h-3.5" /> Private 24/7 Concierge
          </a>
          
          {/* Destination Selector */}
          <div className="relative">
            <button
              onClick={() => setDestDropdownOpen(!destDropdownOpen)}
              className="flex items-center gap-1 hover:text-[#faf9f5] transition"
            >
              <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Sanctuary Switcher</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {destDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-[#14171d] border border-[#d4af37]/30 rounded-lg shadow-2xl py-2 z-50 text-[#faf9f5]">
                <div className="px-3 py-1 text-[10px] text-[#d4af37] tracking-wider uppercase font-semibold">Select Destination</div>
                {DESTINATIONS.map((dest, idx) => (
                  <button
                    key={dest.id}
                    onClick={() => {
                      setCurrentDestIndex(idx);
                      setDestDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs hover:bg-[#d4af37]/15 transition flex flex-col ${
                      currentDestIndex === idx ? 'bg-[#d4af37]/20 border-l-2 border-[#d4af37]' : ''
                    }`}
                  >
                    <span className="font-serif font-semibold text-sm text-[#faf9f5]">{dest.name}</span>
                    <span className="text-[#faf9f5]/60 text-[11px]">{dest.location}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Currency Selector */}
          <div className="relative">
            <button
              onClick={() => setCurrDropdownOpen(!currDropdownOpen)}
              className="flex items-center gap-1 hover:text-[#faf9f5] transition"
            >
              <span>{currency}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {currDropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-[#14171d] border border-[#d4af37]/30 rounded-lg shadow-2xl py-1 z-50 text-white">
                {currencies.map(curr => (
                  <button
                    key={curr}
                    onClick={() => {
                      setCurrency(curr.split(' ')[0]);
                      setCurrDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#d4af37]/20 transition ${
                      currency === curr.split(' ')[0] ? 'text-[#d4af37] font-semibold' : ''
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Sticky Luxury Navbar */}
      <header
        className={`fixed top-0 md:top-8 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0e1013]/90 backdrop-blur-md border-b border-[#d4af37]/25 py-3.5 shadow-2xl md:top-0'
            : 'bg-gradient-to-b from-[#0e1013]/80 via-[#0e1013]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] font-light text-[#faf9f5] group-hover:text-[#d4af37] transition duration-300">
              AURELIA
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#d4af37] uppercase font-sans -mt-1 font-medium">
              Residences & Sanctuary
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs tracking-[0.15em] uppercase font-medium text-[#faf9f5]/85 hover:text-[#d4af37] transition duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Area */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden rounded-full border border-[#d4af37]/60 bg-gradient-to-r from-[#d4af37]/15 to-[#d4af37]/5 px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-semibold text-[#faf9f5] transition duration-500 hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#c5a059] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-[#0e1013] transition duration-300">
                <Calendar className="w-3.5 h-3.5 text-[#d4af37] group-hover:text-[#0e1013]" />
                Explore Your Stay
              </span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#faf9f5] hover:text-[#d4af37] transition"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0e1013] flex flex-col justify-between p-8 lg:hidden animate-fade-in">
          <div className="flex justify-between items-center border-b border-[#d4af37]/20 pb-6">
            <span className="font-serif text-2xl tracking-[0.25em] text-[#faf9f5]">AURELIA</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#faf9f5] hover:text-[#d4af37]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-6 my-auto">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl tracking-wider text-[#faf9f5] hover:text-[#d4af37] transition"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-6 border-t border-[#d4af37]/20 space-y-4">
              <div className="text-xs text-[#d4af37] tracking-widest uppercase">Destination Sanctuary:</div>
              <div className="grid grid-cols-1 gap-2">
                {DESTINATIONS.map((dest, idx) => (
                  <button
                    key={dest.id}
                    onClick={() => {
                      setCurrentDestIndex(idx);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left text-sm p-2 rounded ${
                      currentDestIndex === idx ? 'bg-[#d4af37]/20 text-[#d4af37] font-semibold' : 'text-[#faf9f5]/80'
                    }`}
                  >
                    {dest.name} ({dest.temp})
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full bg-[#d4af37] text-[#0e1013] font-semibold py-3.5 rounded tracking-[0.2em] uppercase text-xs shadow-lg"
          >
            Explore Your Stay
          </button>
        </div>
      )}
    </>
  );
};
