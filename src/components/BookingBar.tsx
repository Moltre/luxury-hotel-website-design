import React, { useState } from 'react';
import { Calendar, Users, Home, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SUITES } from '../data/resortData';

interface BookingBarProps {
  onCheckAvailability: (dates: { checkIn: string; checkOut: string; guests: number; suiteId: string }) => void;
  currency: string;
}

export const BookingBar: React.FC<BookingBarProps> = ({ onCheckAvailability }) => {
  const [checkIn, setCheckIn] = useState('2026-06-15');
  const [checkOut, setCheckOut] = useState('2026-06-20');
  const [guests, setGuests] = useState(2);
  const [suiteId, setSuiteId] = useState(SUITES[0].id);
  const [showConfirmationTip, setShowConfirmationTip] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmationTip(true);
    setTimeout(() => {
      onCheckAvailability({ checkIn, checkOut, guests, suiteId });
      setShowConfirmationTip(false);
    }, 400);
  };

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 -mt-16 md:-mt-20">
      <div className="bg-[#13161c]/95 backdrop-blur-xl border border-[#d4af37]/35 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-5 md:p-7 relative overflow-hidden">
        {/* Subtle gold accent shimmer */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 items-end">
          {/* Check-In */}
          <div className="space-y-1.5">
            <label className="text-[11px] tracking-[0.18em] uppercase text-[#d4af37] font-semibold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Arrival Date
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={e => setCheckIn(e.target.value)}
              className="w-full bg-[#0e1013] border border-[#d4af37]/25 rounded-lg px-3.5 py-2.5 text-sm text-[#faf9f5] focus:border-[#d4af37] focus:outline-none transition font-sans"
            />
          </div>

          {/* Check-Out */}
          <div className="space-y-1.5">
            <label className="text-[11px] tracking-[0.18em] uppercase text-[#d4af37] font-semibold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Departure Date
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={e => setCheckOut(e.target.value)}
              className="w-full bg-[#0e1013] border border-[#d4af37]/25 rounded-lg px-3.5 py-2.5 text-sm text-[#faf9f5] focus:border-[#d4af37] focus:outline-none transition font-sans"
            />
          </div>

          {/* Guests */}
          <div className="space-y-1.5">
            <label className="text-[11px] tracking-[0.18em] uppercase text-[#d4af37] font-semibold flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> Discerning Guests
            </label>
            <select
              value={guests}
              onChange={e => setGuests(Number(e.target.value))}
              className="w-full bg-[#0e1013] border border-[#d4af37]/25 rounded-lg px-3.5 py-2.5 text-sm text-[#faf9f5] focus:border-[#d4af37] focus:outline-none transition font-sans"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'} (VIP Access)
                </option>
              ))}
            </select>
          </div>

          {/* Suite Category Preference */}
          <div className="space-y-1.5">
            <label className="text-[11px] tracking-[0.18em] uppercase text-[#d4af37] font-semibold flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5" /> Suite Preference
            </label>
            <select
              value={suiteId}
              onChange={e => setSuiteId(e.target.value)}
              className="w-full bg-[#0e1013] border border-[#d4af37]/25 rounded-lg px-3.5 py-2.5 text-sm text-[#faf9f5] focus:border-[#d4af37] focus:outline-none transition font-sans truncate"
            >
              {SUITES.map(suite => (
                <option key={suite.id} value={suite.id}>
                  {suite.name}
                </option>
              ))}
            </select>
          </div>

          {/* Action Button */}
          <div>
            <button
              type="submit"
              className="w-full h-[43px] bg-gradient-to-r from-[#d4af37] to-[#c5a059] hover:from-[#e2c275] hover:to-[#d4af37] text-[#0e1013] font-semibold rounded-lg tracking-[0.15em] uppercase text-xs shadow-[0_0_20px_rgba(212,175,55,0.4)] transition duration-300 flex items-center justify-center gap-2"
            >
              {showConfirmationTip ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#0e1013] animate-bounce" />
                  Locking Suite...
                </>
              ) : (
                <>
                  <span>Check Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
