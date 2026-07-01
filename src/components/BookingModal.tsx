import React, { useState } from 'react';
import { SUITES, CURATED_ADDONS, Suite } from '../data/resortData';
import { X, Check, ShieldCheck, Sparkles, ArrowRight, ArrowLeft, Download, Award, Plane, Wine, Briefcase, Anchor } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSuite?: Suite | null;
  currency: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedSuite,
  currency
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>(preselectedSuite ? preselectedSuite.id : SUITES[0].id);
  const [checkIn, setCheckIn] = useState('2026-07-10');
  const [checkOut, setCheckOut] = useState('2026-07-15');
  const [guests, setGuests] = useState(2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['welcome-champagne']);
  
  // Guest form
  const [guestName, setGuestName] = useState('Lord Alexander Vance');
  const [guestEmail, setGuestEmail] = useState('a.vance@privatewealth.co.uk');
  const [guestPhone, setGuestPhone] = useState('+44 20 7946 0921');
  const [specialRequests, setSpecialRequests] = useState('Feather-free hypoallergenic bedding and private sommelier cellar tasting upon arrival.');
  const [bookingRef, setBookingRef] = useState('AUR-9842-VIP');

  if (!isOpen) return null;

  const currentSuite = SUITES.find(s => s.id === selectedSuiteId) || SUITES[0];

  const getRate = (usd: number) => {
    switch (currency) {
      case 'EUR': return Math.round(usd * 0.92);
      case 'GBP': return Math.round(usd * 0.79);
      case 'JPY': return Math.round(usd * 155);
      default: return usd;
    }
  };

  const getCurrencySymbol = () => {
    switch (currency) {
      case 'EUR': return '€';
      case 'GBP': return '£';
      case 'JPY': return '¥';
      default: return '$';
    }
  };

  const nights = 5; // Calculated demo nights
  const baseTotal = getRate(currentSuite.price) * nights;
  const addonsTotal = selectedAddons.reduce((acc, id) => {
    const item = CURATED_ADDONS.find(a => a.id === id);
    return acc + (item ? getRate(item.price) : 0);
  }, 0);
  const grandTotal = baseTotal + addonsTotal;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingRef(`AUR-${Math.floor(1000 + Math.random() * 9000)}-VIP`);
    setStep(4); // Confirmation step
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane': return <Plane className="w-5 h-5 text-[#d4af37]" />;
      case 'Wine': return <Wine className="w-5 h-5 text-[#d4af37]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#d4af37]" />;
      case 'Anchor': return <Anchor className="w-5 h-5 text-[#d4af37]" />;
      default: return <Sparkles className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 animate-fade-in overflow-y-auto">
      <div className="bg-[#13161c] border border-[#d4af37]/40 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto relative shadow-[0_0_80px_rgba(0,0,0,0.9)] my-auto">
        
        {/* Header Bar */}
        <div className="sticky top-0 bg-[#13161c]/95 backdrop-blur-md border-b border-[#d4af37]/20 px-6 sm:px-10 py-5 flex justify-between items-center z-30">
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] text-[#faf9f5]">AURELIA</span>
            <span className="text-[10px] bg-[#d4af37]/20 text-[#d4af37] px-3 py-1 rounded-full uppercase tracking-widest font-semibold">
              Frictionless VIP Reservation
            </span>
          </div>

          <button
            onClick={() => {
              setStep(1);
              onClose();
            }}
            className="p-2 rounded-full bg-[#1b1f28] hover:bg-[#d4af37] hover:text-[#0e1013] text-[#faf9f5] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicators */}
        {step < 4 && (
          <div className="px-6 sm:px-10 py-4 bg-[#0e1013]/60 border-b border-[#d4af37]/15 flex items-center justify-between text-xs font-medium">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#d4af37]' : 'text-[#faf9f5]/40'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-[#d4af37] text-[#0e1013]' : 'bg-[#1b1f28] text-white/50'}`}>1</span>
              <span>Dates & Suite</span>
            </div>
            <div className="w-10 h-[1px] bg-[#d4af37]/20" />
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#d4af37]' : 'text-[#faf9f5]/40'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? 'bg-[#d4af37] text-[#0e1013]' : 'bg-[#1b1f28] text-white/50'}`}>2</span>
              <span>Bespoke Add-Ons</span>
            </div>
            <div className="w-10 h-[1px] bg-[#d4af37]/20" />
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-[#d4af37]' : 'text-[#faf9f5]/40'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 3 ? 'bg-[#d4af37] text-[#0e1013]' : 'bg-[#1b1f28] text-white/50'}`}>3</span>
              <span>VIP Guest Dossier</span>
            </div>
          </div>
        )}

        {/* STEP 1: SUITE & DATES SELECTION */}
        {step === 1 && (
          <div className="p-6 sm:p-10 space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-[11px] tracking-widest uppercase text-[#d4af37] font-semibold block mb-2">Check-In</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={e => setCheckIn(e.target.value)}
                  className="w-full bg-[#0e1013] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#faf9f5] focus:border-[#d4af37] focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[11px] tracking-widest uppercase text-[#d4af37] font-semibold block mb-2">Check-Out (5 Nights)</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={e => setCheckOut(e.target.value)}
                  className="w-full bg-[#0e1013] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#faf9f5] focus:border-[#d4af37] focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[11px] tracking-widest uppercase text-[#d4af37] font-semibold block mb-2">Guests</label>
                <select
                  value={guests}
                  onChange={e => setGuests(Number(e.target.value))}
                  className="w-full bg-[#0e1013] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#faf9f5] focus:border-[#d4af37]"
                >
                  {[1, 2, 3, 4, 5, 6].map(g => (
                    <option key={g} value={g}>{g} Discerning Guests</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs tracking-widest uppercase text-[#d4af37] font-semibold block mb-4">
                Select Your Sanctuary Suite
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SUITES.map(suite => (
                  <div
                    key={suite.id}
                    onClick={() => setSelectedSuiteId(suite.id)}
                    className={`p-5 rounded-2xl border cursor-pointer transition flex items-center gap-4 ${
                      selectedSuiteId === suite.id
                        ? 'bg-[#d4af37]/15 border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                        : 'bg-[#0e1013] border-[#d4af37]/20 hover:border-[#d4af37]/60'
                    }`}
                  >
                    <img src={suite.image} alt={suite.name} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-lg text-[#faf9f5] truncate font-semibold">{suite.name}</h4>
                        {selectedSuiteId === suite.id && <Check className="w-5 h-5 text-[#d4af37] shrink-0" />}
                      </div>
                      <p className="text-xs text-[#faf9f5]/60 truncate mb-2">{suite.subtitle}</p>
                      <div className="text-xs font-mono text-[#d4af37] font-semibold">
                        {getCurrencySymbol()}{getRate(suite.price).toLocaleString()} / night
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#d4af37]/20 flex justify-between items-center">
              <div>
                <span className="text-xs text-[#faf9f5]/60 block uppercase">Estimated Tariff (5 Nights)</span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#d4af37]">
                  {getCurrencySymbol()}{baseTotal.toLocaleString()}
                </span>
              </div>
              <button
                onClick={() => setStep(2)}
                className="bg-[#d4af37] hover:bg-[#e2c275] text-[#0e1013] font-semibold px-8 py-4 rounded-xl tracking-widest uppercase text-xs flex items-center gap-2 shadow-lg"
              >
                <span>Continue to Add-Ons</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: BESPOKE ADD-ONS */}
        {step === 2 && (
          <div className="p-6 sm:p-10 space-y-8 animate-fade-in">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#faf9f5] mb-2">Curate Your Arrival & Privileges</h3>
              <p className="text-sm text-[#faf9f5]/70 font-light">
                Select bespoke arrival experiences and privileges to ensure seamless comfort from touchdown to departure.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {CURATED_ADDONS.map(addon => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-5 rounded-2xl border cursor-pointer transition flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-[#d4af37]/15 border-[#d4af37]'
                        : 'bg-[#0e1013] border-[#d4af37]/20 hover:border-[#d4af37]/60'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-[#1b1f28] shrink-0">
                        {renderIcon(addon.icon)}
                      </div>
                      <div>
                        <h4 className="font-serif text-lg text-[#faf9f5]">{addon.title}</h4>
                        <p className="text-xs text-[#faf9f5]/70 font-light">{addon.desc}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm text-[#d4af37] font-semibold whitespace-nowrap">
                        {addon.price === 0 ? 'Complimentary' : `+${getCurrencySymbol()}${getRate(addon.price).toLocaleString()}`}
                      </span>
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${isSelected ? 'bg-[#d4af37] border-[#d4af37] text-[#0e1013]' : 'border-white/30'}`}>
                        {isSelected && <Check className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-[#d4af37]/20 flex justify-between items-center">
              <button
                onClick={() => setStep(1)}
                className="border border-[#d4af37]/40 text-[#faf9f5] hover:text-[#d4af37] px-6 py-3.5 rounded-xl text-xs tracking-widest uppercase flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              
              <div className="text-right flex items-center gap-6">
                <div>
                  <span className="text-[10px] text-[#faf9f5]/60 uppercase block">Subtotal (Suite + Privileges)</span>
                  <span className="font-serif text-2xl font-bold text-[#d4af37]">
                    {getCurrencySymbol()}{grandTotal.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => setStep(3)}
                  className="bg-[#d4af37] hover:bg-[#e2c275] text-[#0e1013] font-semibold px-8 py-4 rounded-xl tracking-widest uppercase text-xs flex items-center gap-2 shadow-lg"
                >
                  <span>Enter Guest Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: GUEST DETAILS FORM */}
        {step === 3 && (
          <form onSubmit={handleConfirmBooking} className="p-6 sm:p-10 space-y-6 animate-fade-in">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#faf9f5] mb-2">Discerning Guest Dossier</h3>
              <p className="text-sm text-[#faf9f5]/70 font-light">
                Please provide your contact preferences for our royal butler and concierge coordination team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-widest text-[#d4af37] block mb-1.5 font-semibold">Primary VIP Name</label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={e => setGuestName(e.target.value)}
                  className="w-full bg-[#0e1013] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#faf9f5] focus:border-[#d4af37]"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-[#d4af37] block mb-1.5 font-semibold">Confidential Email</label>
                <input
                  type="email"
                  required
                  value={guestEmail}
                  onChange={e => setGuestEmail(e.target.value)}
                  className="w-full bg-[#0e1013] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#faf9f5] focus:border-[#d4af37]"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-[#d4af37] block mb-1.5 font-semibold">Concierge Contact Number</label>
                <input
                  type="tel"
                  required
                  value={guestPhone}
                  onChange={e => setGuestPhone(e.target.value)}
                  className="w-full bg-[#0e1013] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#faf9f5] focus:border-[#d4af37]"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-[#d4af37] block mb-1.5 font-semibold">Payment Guarantee</label>
                <div className="w-full bg-[#0e1013] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-xs text-[#faf9f5]/80 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  <span>Amex Platinum •••••••••••• 8842 (On File)</span>
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-[#d4af37] block mb-1.5 font-semibold">Special Butler Requests & Dietary Requirements</label>
              <textarea
                rows={3}
                value={specialRequests}
                onChange={e => setSpecialRequests(e.target.value)}
                className="w-full bg-[#0e1013] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#faf9f5] focus:border-[#d4af37]"
              />
            </div>

            <div className="pt-6 border-t border-[#d4af37]/20 flex justify-between items-center">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="border border-[#d4af37]/40 text-[#faf9f5] hover:text-[#d4af37] px-6 py-3.5 rounded-xl text-xs tracking-widest uppercase flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              
              <button
                type="submit"
                className="bg-gradient-to-r from-[#d4af37] to-[#c5a059] hover:from-[#e2c275] hover:to-[#d4af37] text-[#0e1013] font-bold px-10 py-4 rounded-xl tracking-[0.2em] uppercase text-xs shadow-[0_0_30px_rgba(212,175,55,0.5)] transition"
              >
                Confirm Royal Reservation ({getCurrencySymbol()}{grandTotal.toLocaleString()})
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: INSTANT VIP RESERVATION PASS CONFIRMATION */}
        {step === 4 && (
          <div className="p-8 sm:p-12 text-center space-y-8 animate-fade-in">
            <div className="w-20 h-20 mx-auto bg-[#d4af37]/20 rounded-full flex items-center justify-center border border-[#d4af37]/60">
              <Award className="w-10 h-10 text-[#d4af37]" />
            </div>

            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold block mb-2">
                Reservation Confirmed • Digital VIP Pass Issued
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl text-[#faf9f5]">
                We Look Forward to Welcoming You, {guestName.split(' ')[0]}
              </h3>
            </div>

            {/* VIP Pass Card Simulation */}
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#1b1f28] to-[#0e1013] border-2 border-[#d4af37] rounded-3xl p-6 sm:p-8 text-left shadow-[0_0_50px_rgba(212,175,55,0.2)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex justify-between items-start border-b border-[#d4af37]/30 pb-4 mb-6">
                <div>
                  <span className="font-serif text-2xl tracking-[0.25em] text-[#faf9f5]">AURELIA</span>
                  <span className="text-[10px] text-[#d4af37] block tracking-widest uppercase font-mono">Royal Concierge Pass</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#faf9f5]/50 block uppercase">Booking Reference</span>
                  <span className="font-mono text-sm font-bold text-[#d4af37]">{bookingRef}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <span className="text-xs text-[#faf9f5]/50 block uppercase">Reserved Residence</span>
                  <strong className="font-serif text-lg text-[#faf9f5]">{currentSuite.name}</strong>
                </div>
                <div>
                  <span className="text-xs text-[#faf9f5]/50 block uppercase">Duration</span>
                  <strong className="text-[#faf9f5]">{checkIn} ➔ {checkOut} ({nights} Nights)</strong>
                </div>
                <div>
                  <span className="text-xs text-[#faf9f5]/50 block uppercase">Discerning Guest</span>
                  <strong className="text-[#faf9f5]">{guestName} ({guests} Guests)</strong>
                </div>
                <div>
                  <span className="text-xs text-[#faf9f5]/50 block uppercase">Total Tariff</span>
                  <strong className="font-mono text-[#d4af37]">{getCurrencySymbol()}{grandTotal.toLocaleString()}</strong>
                </div>
              </div>

              <div className="bg-[#0e1013] p-4 rounded-xl border border-[#d4af37]/20 flex items-center justify-between text-xs">
                <div className="space-y-1">
                  <span className="text-[#d4af37] font-semibold block">VIP Privileges & Add-Ons Attached:</span>
                  <span className="text-[#faf9f5]/70 block">{selectedAddons.length} Curated Experiences Confirmed</span>
                </div>
                {/* Simulated QR Pass */}
                <div className="w-14 h-14 bg-white p-1 rounded-lg flex items-center justify-center shrink-0">
                  <div className="w-full h-full border-2 border-black border-dashed flex items-center justify-center text-[8px] font-bold text-black font-mono">
                    PASS QR
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => {
                  alert(`Digital VIP Pass (${bookingRef}) downloaded. Your butler will greet you upon arrival.`);
                }}
                className="bg-[#d4af37] hover:bg-[#e2c275] text-[#0e1013] font-semibold px-8 py-4 rounded-xl tracking-widest uppercase text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4" /> Download Apple Wallet / PDF Pass
              </button>

              <button
                onClick={() => {
                  setStep(1);
                  onClose();
                }}
                className="border border-[#faf9f5]/30 hover:border-[#d4af37] text-[#faf9f5] px-8 py-4 rounded-xl tracking-widest uppercase text-xs"
              >
                Return to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
