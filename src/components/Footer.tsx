import React, { useState } from 'react';
import { Sparkles, Mail, CheckCircle2, Shield, Award, MapPin, Phone, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
      alert('Welcome to the Aurelia Private Circle. You will receive private previews of seasonal suite releases.');
    }, 2000);
  };

  return (
    <footer className="bg-[#0a0b0d] text-[#faf9f5] border-t border-[#d4af37]/20 relative pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Banner */}
        <div className="bg-gradient-to-r from-[#14171d] via-[#1b1f28] to-[#14171d] border border-[#d4af37]/30 rounded-3xl p-8 sm:p-12 mb-20 shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#d4af37] font-semibold flex items-center justify-center lg:justify-start gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Private Circle & Curated Privileges
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#faf9f5]">
              Join the Aurelia Discerning Society
            </h3>
            <p className="text-sm text-[#faf9f5]/75 font-light mt-2">
              Receive private invitations to seasonal Michelin dining previews, exclusive yacht explorations, and members-only villa reservations.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 min-w-[340px]">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
              <input
                type="email"
                required
                placeholder="Enter private email address..."
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-[#0e1013] border border-[#d4af37]/35 rounded-full pl-11 pr-5 py-3.5 text-xs text-[#faf9f5] focus:border-[#d4af37] focus:outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="bg-[#d4af37] hover:bg-[#e2c275] text-[#0e1013] font-semibold px-8 py-3.5 rounded-full tracking-[0.18em] uppercase text-xs transition duration-300 shrink-0 flex items-center justify-center gap-2 shadow-lg"
            >
              {subscribed ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Invited
                </>
              ) : (
                'Request Access'
              )}
            </button>
          </form>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#d4af37]/15 text-xs">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl tracking-[0.25em] text-[#faf9f5]">AURELIA</span>
              <span className="text-[9px] tracking-[0.35em] text-[#d4af37] uppercase font-mono">Residences & Sanctuary</span>
            </div>
            <p className="text-[#faf9f5]/70 font-light leading-relaxed max-w-sm">
              Luxury Redefined, Elegance Elevated, Moments Unforgettable. Crafted for discerning guests who value visual storytelling, architectural poise, and frictionless hospitality.
            </p>
            <div className="flex items-center gap-4 pt-2 text-[#d4af37]">
              <span className="flex items-center gap-1 bg-[#15181e] px-3 py-1.5 rounded-full border border-[#d4af37]/25 text-[10px] uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" /> Forbes 5-Star 2026
              </span>
              <span className="flex items-center gap-1 bg-[#15181e] px-3 py-1.5 rounded-full border border-[#d4af37]/25 text-[10px] uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" /> Condé Nast Gold List
              </span>
            </div>
          </div>

          {/* Sanctuaries Col */}
          <div className="space-y-3">
            <h4 className="font-serif text-base tracking-wider text-[#d4af37] uppercase font-semibold">Our Sanctuaries</h4>
            <ul className="space-y-2.5 text-[#faf9f5]/75">
              <li><a href="#suites" className="hover:text-[#d4af37] transition">Amalfi Coast Sanctuary</a></li>
              <li><a href="#suites" className="hover:text-[#d4af37] transition">Kyoto Imperial Retreat</a></li>
              <li><a href="#suites" className="hover:text-[#d4af37] transition">Alpine St. Moritz Lodge</a></li>
              <li><a href="#suites" className="hover:text-[#d4af37] transition">Private Island Reserve</a></li>
            </ul>
          </div>

          {/* Experiences Col */}
          <div className="space-y-3">
            <h4 className="font-serif text-base tracking-wider text-[#d4af37] uppercase font-semibold">Bespoke Privileges</h4>
            <ul className="space-y-2.5 text-[#faf9f5]/75">
              <li><a href="#dining" className="hover:text-[#d4af37] transition">L’Orangerie (3 Michelin Stars)</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition">Sanctuary Thermal Onsen</a></li>
              <li><a href="#experiences" className="hover:text-[#d4af37] transition">Private Riva Yacht Charters</a></li>
              <li><a href="#weddings" className="hover:text-[#d4af37] transition">Destination Wedding Buyouts</a></li>
            </ul>
          </div>

          {/* Contact & Aviation Col */}
          <div className="space-y-3">
            <h4 className="font-serif text-base tracking-wider text-[#d4af37] uppercase font-semibold">Private Aviation & VIP</h4>
            <div className="space-y-2 text-[#faf9f5]/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Via Bellavista 12, Ravello Cliffs, Salerno, Italy</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>+39 089 858 900 (24/7 Butler Line)</span>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Heliport Coordinates: 40.6508° N, 14.6133° E</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#faf9f5]/50 tracking-wider uppercase font-light">
          <div>
            © {new Date().getFullYear()} AURELIA RESIDENCES & SANCTUARY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#d4af37] transition">Privacy Protocol</a>
            <a href="#" className="hover:text-[#d4af37] transition">VIP Terms</a>
            <a href="#" className="hover:text-[#d4af37] transition">Concierge Charter</a>
            <a href="#" className="hover:text-[#d4af37] transition">Press Kit</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
