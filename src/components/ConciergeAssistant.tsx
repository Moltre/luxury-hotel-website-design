import React, { useState } from 'react';
import { X, Send, Sparkles, Bot } from 'lucide-react';

export const ConciergeAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'concierge'; text: string; time: string }>>([
    {
      sender: 'concierge',
      text: 'Good day. I am Julian, your dedicated Aurelia Virtual Concierge. How may I assist you with dining reservations, private aviation, or suite specifications today?',
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');

  const quickQuestions = [
    'What is the dress code at L’Orangerie?',
    'Do you arrange private helicopter arrivals?',
    'Are the infinity pools heated year-round?',
    'Can I book a full resort buyout for a wedding?'
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = { sender: 'user' as const, text: query, time: 'Just now' };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');

    setTimeout(() => {
      let response = "Our Chief Butler is reviewing your specific request. A private specialist will reach out to confirm within 15 minutes.";
      const lower = query.toLowerCase();

      if (lower.includes('dress') || lower.includes('orangerie')) {
        response = "L’Orangerie maintains an Elegant Formal / Cocktail attire code. Gentlemen are requested to wear jackets for evening dining under our crystal chandeliers.";
      } else if (lower.includes('helicopter') || lower.includes('aviation') || lower.includes('transfer')) {
        response = "Yes, our private cliffside helipad accommodates twin-engine helicopters. Flights from Naples or Rome arrive directly on site in under 25 minutes.";
      } else if (lower.includes('pool') || lower.includes('heated') || lower.includes('onsen')) {
        response = "All our infinity edge pools and private suite plunge baths are maintained at a soothing thermal temperature between 29°C and 38°C year-round.";
      } else if (lower.includes('wedding') || lower.includes('buyout') || lower.includes('retreat')) {
        response = "We offer full property buyouts accommodating up to 120 guests with complete privacy and security. You may download our Event Dossier in the Weddings section or schedule a private consultation.";
      }

      setMessages(prev => [...prev, { sender: 'concierge', text: response, time: 'Just now' }]);
    }, 700);
  };

  return (
    <div id="concierge" className="fixed bottom-6 right-6 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 bg-[#13161c] hover:bg-[#d4af37] border-2 border-[#d4af37] text-[#faf9f5] hover:text-[#0e1013] px-5 py-3.5 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.8)] transition duration-500 transform hover:scale-105"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75 group-hover:bg-black" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#d4af37] group-hover:bg-black" />
          </span>
          <Bot className="w-5 h-5 text-[#d4af37] group-hover:text-[#0e1013]" />
          <span className="text-xs tracking-widest uppercase font-semibold hidden sm:inline">24/7 Virtual Concierge</span>
        </button>
      ) : (
        <div className="bg-[#13161c]/95 backdrop-blur-2xl border border-[#d4af37]/50 rounded-3xl w-80 sm:w-96 shadow-[0_15px_60px_rgba(0,0,0,0.9)] flex flex-col h-[520px] animate-fade-in overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1b1f28] to-[#13161c] border-b border-[#d4af37]/30 p-4 px-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="font-serif text-base text-[#faf9f5] block">Julian • Chief Concierge</span>
                <span className="text-[10px] text-[#d4af37] uppercase tracking-widest flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online for VIPs
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-[#faf9f5]/60 hover:text-white hover:bg-[#1b1f28]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-light">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#d4af37] text-[#0e1013] font-medium rounded-br-none'
                      : 'bg-[#1b1f28] text-[#faf9f5]/90 border border-[#d4af37]/20 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-[#faf9f5]/40 mt-1 px-1">{m.time}</span>
              </div>
            ))}
          </div>

          {/* Quick Question Pills */}
          <div className="px-3 py-2 bg-[#0e1013]/60 border-t border-[#d4af37]/15 flex overflow-x-auto gap-1.5 scrollbar-none">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="bg-[#1b1f28] hover:bg-[#d4af37]/20 text-[#faf9f5]/80 hover:text-[#d4af37] border border-[#d4af37]/25 text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap transition shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#0e1013] border-t border-[#d4af37]/20 flex gap-2"
          >
            <input
              type="text"
              placeholder="Inquire about bespoke amenities..."
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 bg-[#1b1f28] border border-[#d4af37]/30 rounded-xl px-3.5 py-2.5 text-xs text-[#faf9f5] focus:border-[#d4af37] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#d4af37] hover:bg-[#e2c275] text-[#0e1013] p-2.5 rounded-xl transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
