import React, { useState } from 'react';
import { DINING_VENUES, EXPERIENCES, DiningVenue } from '../data/resortData';
import { Utensils, Wine, Clock, Award, Compass, Sparkles, X, ArrowRight, Shield } from 'lucide-react';

interface DiningAndExperiencesProps {
  onInquireExperience: (title: string) => void;
}

export const DiningAndExperiences: React.FC<DiningAndExperiencesProps> = ({ onInquireExperience }) => {
  const [activeMenuVenue, setActiveMenuVenue] = useState<DiningVenue | null>(null);

  return (
    <section id="dining" className="py-24 sm:py-32 bg-[#0e1013] text-[#faf9f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gastronomy Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-[11px] tracking-[0.25em] uppercase mb-4 font-semibold">
              <Utensils className="w-3.5 h-3.5" /> Gastronomy & Oenology
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Michelin-Starred Culinary Art
            </h2>
            <p className="text-[#faf9f5]/75 text-base sm:text-lg font-light leading-relaxed">
              Dine on extraordinary creations crafted by world-renowned chefs. Our cellars house over 4,500 rare bottles curated by Master Sommeliers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {DINING_VENUES.map(venue => (
              <div
                key={venue.id}
                className="group bg-[#14171d] border border-[#d4af37]/25 rounded-2xl overflow-hidden hover:border-[#d4af37] transition duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14171d] via-transparent to-black/40" />
                    
                    <div className="absolute top-4 left-4 bg-[#0e1013]/90 backdrop-blur-md border border-[#d4af37]/40 rounded-full px-4 py-1.5 flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span className="text-[11px] font-semibold text-[#d4af37] tracking-wider uppercase">
                        {venue.accolade.split('•')[1] || venue.accolade}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8">
                    <div className="text-xs text-[#d4af37] tracking-widest uppercase mb-2 font-semibold">
                      Chef: {venue.chef}
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl text-[#faf9f5] group-hover:text-[#d4af37] transition duration-300 mb-4">
                      {venue.name}
                    </h3>

                    <p className="text-sm text-[#faf9f5]/80 font-light leading-relaxed mb-6">
                      {venue.description}
                    </p>

                    <div className="space-y-2.5 text-xs text-[#faf9f5]/70 border-t border-[#d4af37]/15 pt-5 mb-6">
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-[#d4af37]" />
                        <span><strong>Service Hours:</strong> {venue.hours}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Shield className="w-4 h-4 text-[#d4af37]" />
                        <span><strong>Dress Code:</strong> {venue.dressCode}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-7 pb-7 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setActiveMenuVenue(venue)}
                    className="flex-1 border border-[#d4af37]/40 hover:bg-[#d4af37]/10 text-[#faf9f5] font-medium py-3 rounded-xl tracking-[0.15em] uppercase text-xs transition duration-300 flex items-center justify-center gap-2"
                  >
                    <Wine className="w-4 h-4 text-[#d4af37]" />
                    Preview Tasting Menu
                  </button>

                  <button
                    onClick={() => onInquireExperience(`Table Reservation: ${venue.name}`)}
                    className="flex-1 bg-gradient-to-r from-[#d4af37] to-[#c5a059] hover:from-[#e2c275] hover:to-[#d4af37] text-[#0e1013] font-semibold py-3 rounded-xl tracking-[0.15em] uppercase text-xs transition duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Reserve Table</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bespoke Experiences Section */}
        <div id="experiences">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-[11px] tracking-[0.25em] uppercase mb-4 font-semibold">
              <Compass className="w-3.5 h-3.5" /> Curated Excursions
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Bespoke Experiences & Sanctuary
            </h2>
            <p className="text-[#faf9f5]/75 text-base sm:text-lg font-light leading-relaxed">
              From private yacht charters along the sunlit coastline to helicopter excursions over alpine glaciers, we craft moments tailored exclusively for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXPERIENCES.map(exp => (
              <div
                key={exp.id}
                className="group bg-[#14171d] border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37] transition duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14171d] via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 bg-[#0e1013]/90 backdrop-blur-md border border-[#d4af37]/40 rounded-full px-3 py-1 text-xs text-[#d4af37] font-semibold">
                      {exp.price}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#d4af37] font-semibold block mb-2">
                      {exp.category} • {exp.duration}
                    </span>
                    <h3 className="font-serif text-2xl text-[#faf9f5] group-hover:text-[#d4af37] transition duration-300 mb-3">
                      {exp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#faf9f5]/75 font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onInquireExperience(exp.title)}
                    className="w-full border border-[#d4af37]/40 hover:bg-[#d4af37] hover:text-[#0e1013] text-[#faf9f5] font-medium py-3 rounded-xl tracking-[0.15em] uppercase text-xs transition duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Inquire & Reserve</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SAMPLE TASTING MENU MODAL */}
      {activeMenuVenue && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fade-in overflow-y-auto">
          <div className="bg-[#14171d] border border-[#d4af37]/40 rounded-2xl max-w-3xl w-full max-h-[88vh] overflow-y-auto relative p-6 sm:p-10 shadow-2xl my-auto">
            <button
              onClick={() => setActiveMenuVenue(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#1b1f28] hover:bg-[#d4af37] hover:text-[#0e1013] text-[#faf9f5] transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#d4af37] mb-2 font-semibold">
              <Sparkles className="w-4 h-4" /> {activeMenuVenue.accolade}
            </div>

            <h3 className="font-serif text-3xl sm:text-5xl text-[#faf9f5] mb-2">
              {activeMenuVenue.name}
            </h3>
            <p className="text-sm text-[#d4af37] mb-8 uppercase tracking-wider font-medium">
              Curated by Chef {activeMenuVenue.chef}
            </p>

            <div className="space-y-6 mb-8">
              {activeMenuVenue.tastingMenu.map((item, idx) => (
                <div key={idx} className="bg-[#1b1f28]/60 p-5 rounded-xl border border-[#d4af37]/15">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] tracking-widest uppercase text-[#d4af37] font-semibold">{item.course}</span>
                    <span className="text-xs text-[#faf9f5]/50 italic font-serif">Pairing: {item.pairing}</span>
                  </div>
                  <h4 className="font-serif text-2xl text-[#faf9f5] mb-1.5">{item.name}</h4>
                  <p className="text-sm text-[#faf9f5]/80 font-light">{item.description}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const venueName = activeMenuVenue.name;
                setActiveMenuVenue(null);
                onInquireExperience(`Table Reservation: ${venueName}`);
              }}
              className="w-full bg-gradient-to-r from-[#d4af37] to-[#c5a059] hover:from-[#e2c275] hover:to-[#d4af37] text-[#0e1013] font-semibold py-4 rounded-xl tracking-[0.2em] uppercase text-xs shadow-lg transition"
            >
              Request Table Reservation
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
