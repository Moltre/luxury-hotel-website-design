import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { DESTINATIONS } from '../data/resortData';

interface HeroProps {
  currentDestIndex: number;
  onExploreClick: () => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.pexels.com/photos/29289153/pexels-photo-29289153.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920',
    tag: 'Azure Horizon Sanctuary'
  },
  {
    image: 'https://images.pexels.com/photos/33803745/pexels-photo-33803745.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920',
    tag: 'Architectural Heritage & Colonnades'
  },
  {
    image: 'https://images.pexels.com/photos/27626174/pexels-photo-27626174.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920',
    tag: 'The Imperial Penthouse Bedchamber'
  },
  {
    image: 'https://images.pexels.com/photos/34723813/pexels-photo-34723813.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920',
    tag: 'L’Orangerie • Michelin Gastronomy'
  }
];

export const Hero: React.FC<HeroProps> = ({ currentDestIndex, onExploreClick }) => {
  const [slideIdx, setSlideIdx] = useState(0);
  const [ambientAudio, setAmbientAudio] = useState(false);
  const currentDest = DESTINATIONS[currentDestIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx(prev => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#0e1013]">
      {/* Background Slideshow with Smooth Zoom & Fade */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === slideIdx ? 'opacity-100 scale-105 transition-transform duration-[8000ms]' : 'opacity-0 scale-100'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.tag}
            className="w-full h-full object-cover"
          />
          {/* Deep Charcoal / Gold Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-[#0e1013]/55 to-[#0e1013]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-[#0e1013]/90" />
        </div>
      ))}

      {/* Floating Ambiance Toggle & Current Destination Indicator */}
      <div className="absolute top-28 md:top-36 left-6 right-6 max-w-7xl mx-auto flex justify-between items-center z-20 pointer-events-none">
        <div className="pointer-events-auto bg-[#14171d]/80 backdrop-blur-md border border-[#d4af37]/30 rounded-full px-4 py-1.5 flex items-center gap-2 text-xs text-[#faf9f5]">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
          <span className="text-[#d4af37] font-semibold uppercase tracking-wider">Live Sanctuary:</span>
          <span className="font-serif">{currentDest.name}</span>
        </div>

        <button
          onClick={() => setAmbientAudio(!ambientAudio)}
          className="pointer-events-auto bg-[#14171d]/80 hover:bg-[#d4af37]/20 backdrop-blur-md border border-[#d4af37]/30 rounded-full px-4 py-1.5 flex items-center gap-2 text-xs text-[#faf9f5] transition duration-300"
          title="Toggle Coastal Soundscape Simulation"
        >
          {ambientAudio ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
              <span className="text-[#d4af37]">Ambiance: Mediterranean Waves On</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#faf9f5]/60" />
              <span className="text-[#faf9f5]/70">Acoustic Ambiance: Muted</span>
            </>
          )}
        </button>
      </div>

      {/* Main Hero Copy Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] text-[11px] tracking-[0.25em] uppercase font-semibold mb-8 animate-fade-in">
          ★ The Pinnacle of Timeless Hospitality ★
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-light text-[#faf9f5] leading-[1.08] tracking-tight mb-8">
          Luxury Redefined, <br className="hidden sm:block" />
          <span className="italic font-normal bg-gradient-to-r from-[#faf9f5] via-[#e2c275] to-[#d4af37] bg-clip-text text-transparent">
            Elegance Elevated,
          </span>{' '}
          <br className="hidden md:block" />
          Moments Unforgettable
        </h1>

        <p className="max-w-2xl mx-auto text-[#faf9f5]/85 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 tracking-wide font-sans">
          Step into a world where contemporary design meets timeless hospitality. Discover curated suites, world-class dining, and bespoke experiences crafted for discerning guests.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={onExploreClick}
            className="group relative overflow-hidden bg-[#d4af37] hover:bg-[#e2c275] text-[#0e1013] font-semibold px-9 py-4 rounded-full tracking-[0.2em] uppercase text-xs shadow-[0_0_35px_rgba(212,175,55,0.45)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span className="relative z-10 font-bold">Explore Your Stay</span>
          </button>

          <a
            href="#gallery"
            className="border border-[#faf9f5]/30 hover:border-[#d4af37] bg-black/20 hover:bg-[#d4af37]/10 backdrop-blur-md text-[#faf9f5] hover:text-[#d4af37] font-medium px-8 py-4 rounded-full tracking-[0.18em] uppercase text-xs transition duration-300"
          >
            Immersive Gallery
          </a>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex justify-center items-center gap-3 mt-14">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlideIdx(idx)}
              className="flex items-center group py-2"
            >
              <span
                className={`h-1 rounded-full transition-all duration-500 ${
                  idx === slideIdx ? 'w-10 bg-[#d4af37]' : 'w-2 bg-[#faf9f5]/30 group-hover:bg-[#faf9f5]/60'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Scroll Down Hint */}
      <a
        href="#suites"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-[#faf9f5]/60 hover:text-[#d4af37] transition duration-300 group"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Scroll to Discover</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
      </a>
    </section>
  );
};
