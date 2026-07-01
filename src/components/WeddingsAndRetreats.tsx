import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/resortData';
import { HeartHandshake, Briefcase, Star, Download, CheckCircle2, ShieldCheck, Award, Calendar } from 'lucide-react';

interface WeddingsAndRetreatsProps {
  onOpenBooking: () => void;
}

export const WeddingsAndRetreats: React.FC<WeddingsAndRetreatsProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'weddings' | 'corporate'>('weddings');
  const [brochureRequested, setBrochureRequested] = useState(false);
  const [plannerEmail, setPlannerEmail] = useState('');

  const handleBrochureDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!plannerEmail) return;
    setBrochureRequested(true);
    setTimeout(() => {
      setBrochureRequested(false);
      setPlannerEmail('');
      alert('The VIP Event & Retreat Kit has been delivered to your inbox with full floor plans and buyout rates.');
    }, 1500);
  };

  return (
    <section id="weddings" className="py-24 sm:py-32 bg-gradient-to-b from-[#0e1013] via-[#13161c] to-[#0e1013] text-[#faf9f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-[11px] tracking-[0.25em] uppercase mb-4 font-semibold">
            <HeartHandshake className="w-3.5 h-3.5" /> Exclusive Buyouts & Summits
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            Destination Weddings & Executive Retreats
          </h2>
          <p className="text-[#faf9f5]/75 text-base sm:text-lg font-light leading-relaxed">
            Designed for destination wedding planners and corporate executives seeking high-end hospitality experiences, complete privacy, and bespoke visual storytelling.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#15181e] p-1.5 rounded-full border border-[#d4af37]/25 inline-flex gap-2">
            <button
              onClick={() => setActiveTab('weddings')}
              className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full text-xs tracking-widest uppercase transition ${
                activeTab === 'weddings' ? 'bg-[#d4af37] text-[#0e1013] font-semibold' : 'text-[#faf9f5]/70 hover:text-white'
              }`}
            >
              <HeartHandshake className="w-4 h-4" /> Destination Weddings
            </button>
            <button
              onClick={() => setActiveTab('corporate')}
              className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full text-xs tracking-widest uppercase transition ${
                activeTab === 'corporate' ? 'bg-[#d4af37] text-[#0e1013] font-semibold' : 'text-[#faf9f5]/70 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" /> Corporate Executive Summits
            </button>
          </div>
        </div>

        {/* Dynamic Content Card */}
        <div className="bg-[#14171d] border border-[#d4af37]/30 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 mb-24">
          <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-full">
            <img
              src={activeTab === 'weddings'
                ? 'https://images.pexels.com/photos/24433378/pexels-photo-24433378.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200'
                : 'https://images.pexels.com/photos/33803745/pexels-photo-33803745.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200'}
              alt={activeTab}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="text-xs text-[#d4af37] tracking-widest uppercase font-semibold block mb-3">
                {activeTab === 'weddings' ? 'Timeless Romance & Cinematic Venues' : 'C-Suite Confidentiality & High-Tech Serenity'}
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#faf9f5] mb-6">
                {activeTab === 'weddings' ? 'Unrivaled Cliffside Vows & Buyout Privacy' : 'Executive Think-Tanks & Leadership Summits'}
              </h3>

              <p className="text-sm sm:text-base text-[#faf9f5]/80 font-light leading-relaxed mb-8">
                {activeTab === 'weddings'
                  ? 'Exchange vows against dramatic coastal cliffs or ancient bamboo groves. Our wedding team handles full resort buyouts, Michelin catering by Chef Marco Valli, fireworks over the Mediterranean, and guest concierge coordination.'
                  : 'Empower leadership in complete seclusion. We offer private fiber-optic boardroom pavilions, executive helicopter arrivals, biometric security zones, and post-session yacht charters designed to foster strategic clarity.'}
              </p>

              {/* Venue Capacities Table */}
              <div className="bg-[#0e1013] border border-[#d4af37]/20 rounded-2xl p-5 mb-8">
                <div className="text-xs text-[#d4af37] uppercase tracking-wider font-semibold mb-3">
                  Venue Capacities & Specifications
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs font-light">
                  <div>
                    <span className="text-[#faf9f5]/50 block">Full Property Buyout</span>
                    <strong className="text-[#faf9f5]">Up to 120 Guests (All Suites)</strong>
                  </div>
                  <div>
                    <span className="text-[#faf9f5]/50 block">The Imperial Ballroom</span>
                    <strong className="text-[#faf9f5]">150 Seated Banquet</strong>
                  </div>
                  <div>
                    <span className="text-[#faf9f5]/50 block">Cliffside Solarium Terrace</span>
                    <strong className="text-[#faf9f5]">80 Cocktail / Sunset Vows</strong>
                  </div>
                  <div>
                    <span className="text-[#faf9f5]/50 block">Private Helipad Access</span>
                    <strong className="text-[#faf9f5]">Twin Turboprop Capacity</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Planner Kit Download Form */}
            <form onSubmit={handleBrochureDownload} className="space-y-3">
              <label className="text-[11px] uppercase tracking-widest text-[#d4af37] block">
                Download Event Planner & Floor Plan Dossier (PDF)
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter planner work email..."
                  value={plannerEmail}
                  onChange={e => setPlannerEmail(e.target.value)}
                  className="flex-1 bg-[#0e1013] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-xs text-[#faf9f5] focus:border-[#d4af37] focus:outline-none transition font-sans"
                />
                <button
                  type="submit"
                  className="bg-[#d4af37] hover:bg-[#e2c275] text-[#0e1013] font-semibold px-6 py-3 rounded-xl text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition shrink-0"
                >
                  {brochureRequested ? <CheckCircle2 className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                  <span>{brochureRequested ? 'Sending Kit...' : 'Download Dossier'}</span>
                </button>
              </div>
            </form>
            <div className="mt-4 pt-4 border-t border-[#d4af37]/15">
              <button
                onClick={onOpenBooking}
                className="w-full bg-[#1b1f28] hover:bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#faf9f5] hover:text-[#d4af37] font-semibold py-3 rounded-xl text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition"
              >
                <Calendar className="w-4 h-4 text-[#d4af37]" />
                <span>Schedule Private Video Consultation with Wedding Director</span>
              </button>
            </div>
          </div>
        </div>

        {/* Accolades & VIP Testimonials Section */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-[11px] tracking-[0.25em] uppercase mb-4 font-semibold">
              <Award className="w-3.5 h-3.5" /> Condé Nast Traveler & Forbes 5-Star
            </div>
            <h3 className="font-serif text-3xl sm:text-5xl font-light tracking-tight">
              Discerning Voices & Accolades
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(item => (
              <div
                key={item.id}
                className="bg-[#14171d] border border-[#d4af37]/20 rounded-2xl p-8 flex flex-col justify-between hover:border-[#d4af37]/60 transition duration-300 relative"
              >
                <div className="flex gap-1 mb-6 text-[#d4af37]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="font-serif text-lg sm:text-xl text-[#faf9f5]/90 font-light italic leading-relaxed mb-8">
                  "{item.quote}"
                </p>

                <div className="pt-6 border-t border-[#d4af37]/15 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-lg text-[#faf9f5] font-normal">{item.author}</h4>
                    <span className="text-[11px] text-[#d4af37] uppercase tracking-wider block">{item.role}</span>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-[#d4af37]/60" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
