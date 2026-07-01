import React, { useState } from 'react';
import { SUITES, Suite } from '../data/resortData';
import { Bed, Users, Maximize, Eye, Check, Sparkles, ArrowRight, X, Compass, ShieldCheck } from 'lucide-react';

interface SuitesShowcaseProps {
  onReserveSuite: (suite: Suite) => void;
  currency: string;
}

export const SuitesShowcase: React.FC<SuitesShowcaseProps> = ({ onReserveSuite, currency }) => {
  const [selectedSuiteForDetails, setSelectedSuiteForDetails] = useState<Suite | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'featured'>('all');

  const getPriceFormatted = (basePriceUSD: number) => {
    switch (currency) {
      case 'EUR': return `€${Math.round(basePriceUSD * 0.92).toLocaleString()}`;
      case 'GBP': return `£${Math.round(basePriceUSD * 0.79).toLocaleString()}`;
      case 'JPY': return `¥${Math.round(basePriceUSD * 155).toLocaleString()}`;
      default: return `$${basePriceUSD.toLocaleString()}`;
    }
  };

  const displayedSuites = activeTab === 'all' ? SUITES : SUITES.filter(s => s.isFeatured);

  return (
    <section id="suites" className="py-24 sm:py-32 bg-gradient-to-b from-[#0e1013] via-[#121419] to-[#0e1013] text-[#faf9f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-[11px] tracking-[0.25em] uppercase mb-4 font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Curated Accommodations
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight">
              Bespoke Suites & Private Villas
            </h2>
            <p className="mt-4 text-[#faf9f5]/75 text-base sm:text-lg font-light leading-relaxed">
              Every residence is thoughtfully crafted with unobstructed ocean or zen garden panoramas, hand-loomed textiles, and dedicated 24-hour royal butler service.
            </p>
          </div>

          <div className="flex gap-2 bg-[#15181e] p-1.5 rounded-full border border-[#d4af37]/25 shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full text-xs tracking-widest uppercase transition ${
                activeTab === 'all' ? 'bg-[#d4af37] text-[#0e1013] font-semibold' : 'text-[#faf9f5]/70 hover:text-white'
              }`}
            >
              All Sanctuaries
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-2 rounded-full text-xs tracking-widest uppercase transition ${
                activeTab === 'featured' ? 'bg-[#d4af37] text-[#0e1013] font-semibold' : 'text-[#faf9f5]/70 hover:text-white'
              }`}
            >
              Signature Penthouse
            </button>
          </div>
        </div>

        {/* Suites Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {displayedSuites.map(suite => (
            <div
              key={suite.id}
              className="group bg-[#14171d] border border-[#d4af37]/25 rounded-2xl overflow-hidden hover:border-[#d4af37] transition duration-500 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image & Price Overlay */}
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src={suite.image}
                    alt={suite.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14171d] via-transparent to-black/30" />
                  
                  <div className="absolute top-4 right-4 bg-[#0e1013]/90 backdrop-blur-md border border-[#d4af37]/40 rounded-full px-4 py-1.5 text-right">
                    <span className="text-[10px] text-[#faf9f5]/60 uppercase tracking-widest block">From</span>
                    <span className="font-serif text-lg font-bold text-[#d4af37]">
                      {getPriceFormatted(suite.price)}
                    </span>
                    <span className="text-[10px] text-[#faf9f5]/60 uppercase"> / night</span>
                  </div>

                  {suite.isFeatured && (
                    <div className="absolute top-4 left-4 bg-[#d4af37] text-[#0e1013] font-bold text-[10px] tracking-[0.2em] uppercase px-3.5 py-1 rounded-full shadow-lg">
                      Royal Flagship
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#faf9f5]/90 bg-[#0e1013]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-[#d4af37]/20">
                    <span className="flex items-center gap-1.5"><Maximize className="w-3.5 h-3.5 text-[#d4af37]" /> {suite.areaSqFt} sq.ft</span>
                    <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-[#d4af37]" /> Up to {suite.guests} Guests</span>
                    <span className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5 text-[#d4af37]" /> {suite.bed}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-2 text-xs text-[#d4af37] font-semibold tracking-wider uppercase mb-2">
                    <Eye className="w-3.5 h-3.5" /> {suite.view}
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#faf9f5] group-hover:text-[#d4af37] transition duration-300 mb-2">
                    {suite.name}
                  </h3>

                  <p className="text-[#d4af37]/80 text-xs sm:text-sm tracking-wider uppercase mb-4 font-medium">
                    {suite.subtitle}
                  </p>

                  <p className="text-sm text-[#faf9f5]/80 font-light leading-relaxed mb-6 line-clamp-3">
                    {suite.description}
                  </p>

                  {/* Highlights pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {suite.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="bg-[#1b1f28] text-[#faf9f5]/90 text-xs px-3 py-1.5 rounded-lg border border-[#d4af37]/15 flex items-center gap-1.5 font-light"
                      >
                        <Check className="w-3 h-3 text-[#d4af37]" /> {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="px-7 pb-7 pt-2 border-t border-[#d4af37]/15 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setSelectedSuiteForDetails(suite)}
                  className="flex-1 border border-[#d4af37]/40 hover:bg-[#d4af37]/10 text-[#faf9f5] font-medium py-3 rounded-xl tracking-[0.15em] uppercase text-xs transition duration-300 flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4 text-[#d4af37]" />
                  Floor Plan & 360 Tour
                </button>

                <button
                  onClick={() => onReserveSuite(suite)}
                  className="flex-1 bg-gradient-to-r from-[#d4af37] to-[#c5a059] hover:from-[#e2c275] hover:to-[#d4af37] text-[#0e1013] font-semibold py-3 rounded-xl tracking-[0.15em] uppercase text-xs shadow-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  <span>Reserve Suite</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FLOOR PLAN & SUITE SPEC DETAILS MODAL */}
      {selectedSuiteForDetails && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fade-in overflow-y-auto">
          <div className="bg-[#14171d] border border-[#d4af37]/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-6 sm:p-10 shadow-2xl my-auto">
            <button
              onClick={() => setSelectedSuiteForDetails(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#1b1f28] hover:bg-[#d4af37] hover:text-[#0e1013] text-[#faf9f5] transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#d4af37] mb-2 font-semibold">
              <ShieldCheck className="w-4 h-4" /> Verified Luxury Accommodation Specs
            </div>

            <h3 className="font-serif text-3xl sm:text-5xl text-[#faf9f5] mb-2">
              {selectedSuiteForDetails.name}
            </h3>
            <p className="text-sm text-[#d4af37] mb-6 uppercase tracking-wider font-medium">
              {selectedSuiteForDetails.floorPlanNote}
            </p>

            {/* Gallery Mini Carousel inside modal */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {selectedSuiteForDetails.gallery.map((img, idx) => (
                <div key={idx} className="h-28 rounded-xl overflow-hidden border border-[#d4af37]/30">
                  <img src={img} alt="Suite perspective" className="w-full h-full object-cover hover:scale-110 transition duration-300" />
                </div>
              ))}
            </div>

            {/* Floor Plan Layout Visual Representation */}
            <div className="bg-[#0e1013] border border-[#d4af37]/30 rounded-xl p-6 mb-8 text-center">
              <div className="flex items-center justify-center gap-2 text-xs text-[#d4af37] tracking-widest uppercase mb-3 font-semibold">
                <Compass className="w-4 h-4" /> Architectural Floor Plan & Layout Flow
              </div>
              <p className="text-sm text-[#faf9f5]/80 font-light max-w-2xl mx-auto mb-4">
                The layout offers distinct private zoning: a grand reception gallery flows into the master sleeping chamber with 180° acoustic glass doors opening directly onto the private heated plunge pool and sunset veranda.
              </p>
              <div className="inline-block bg-[#1b1f28] px-6 py-3 rounded-lg border border-[#d4af37]/40 text-xs font-mono text-[#d4af37]">
                [ Master Chamber ] ── [ Italian Carrara Spa Bath ] ── [ Sunset Veranda & Plunge Pool ]
              </div>
            </div>

            {/* Full Amenities Checklist */}
            <div className="mb-8">
              <h4 className="font-serif text-2xl text-[#faf9f5] mb-4">Privileged Residence Amenities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {selectedSuiteForDetails.amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#1b1f28]/60 p-3.5 rounded-xl border border-[#d4af37]/15 text-sm text-[#faf9f5]/90">
                    <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-[#d4af37]/20">
              <div>
                <span className="text-xs text-[#faf9f5]/60 uppercase block">Exclusive Tariff</span>
                <span className="font-serif text-3xl font-bold text-[#d4af37]">
                  {getPriceFormatted(selectedSuiteForDetails.price)}
                </span>
                <span className="text-xs text-[#faf9f5]/60"> per night (Breakfast & Butler included)</span>
              </div>

              <button
                onClick={() => {
                  const suite = selectedSuiteForDetails;
                  setSelectedSuiteForDetails(null);
                  onReserveSuite(suite);
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-[#d4af37] to-[#c5a059] hover:from-[#e2c275] hover:to-[#d4af37] text-[#0e1013] font-semibold px-8 py-4 rounded-xl tracking-[0.2em] uppercase text-xs shadow-lg transition"
              >
                Proceed to Reservation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
