import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/resortData';
import { Maximize2, X, ChevronLeft, ChevronRight, Play, Pause, ZoomIn, MapPin, Sparkles } from 'lucide-react';

interface ImmersiveGalleryProps {
  onSelectBookingItem: (title: string) => void;
}

export const ImmersiveGallery: React.FC<ImmersiveGalleryProps> = ({ onSelectBookingItem }) => {
  const [filter, setFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const categories = [
    { id: 'all', label: 'All Masterpieces' },
    { id: 'suites', label: 'Suites & Villas' },
    { id: 'dining', label: 'Michelin Gastronomy' },
    { id: 'spa', label: 'Sanctuary Spa' },
    { id: 'pools', label: 'Infinity Pools' },
    { id: 'architecture', label: 'Architectural Wonders' }
  ];

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex(i => i.id === item.id);
    setCurrentIndex(idx !== -1 ? idx : 0);
    setActiveItem(item);
    setIsZoomed(false);
  };

  const handleNext = useCallback(() => {
    if (!activeItem || filteredItems.length === 0) return;
    const nextIdx = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(nextIdx);
    setActiveItem(filteredItems[nextIdx]);
    setIsZoomed(false);
  }, [activeItem, currentIndex, filteredItems]);

  const handlePrev = useCallback(() => {
    if (!activeItem || filteredItems.length === 0) return;
    const prevIdx = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(prevIdx);
    setActiveItem(filteredItems[prevIdx]);
    setIsZoomed(false);
  }, [activeItem, currentIndex, filteredItems]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') {
        setActiveItem(null);
        setIsPlaying(false);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, handleNext, handlePrev]);

  // Slideshow auto-play in fullscreen
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && activeItem) {
      timer = setInterval(() => {
        handleNext();
      }, 4500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, activeItem, handleNext]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0e1013] text-[#faf9f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Copy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-[11px] tracking-[0.25em] uppercase mb-4 font-semibold">
            <Sparkles className="w-3 h-3" /> Visual Storytelling
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            An Immersive Sanctuary in Gallery
          </h2>
          <p className="text-[#faf9f5]/75 text-base sm:text-lg font-light leading-relaxed">
            Explore high-resolution photography showcasing premium accommodations, culinary art, and timeless architectural aesthetics. Tap any masterpiece to launch the fullscreen interactive gallery.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs tracking-[0.18em] uppercase transition duration-300 font-medium ${
                filter === cat.id
                  ? 'bg-[#d4af37] text-[#0e1013] font-semibold shadow-[0_0_25px_rgba(212,175,55,0.4)]'
                  : 'bg-[#15181e] text-[#faf9f5]/75 border border-[#d4af37]/20 hover:border-[#d4af37]/60 hover:text-[#faf9f5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className={`group relative overflow-hidden rounded-2xl bg-[#14171d] border border-[#d4af37]/20 cursor-pointer transition duration-500 hover:border-[#d4af37] hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] ${
                idx === 0 && filter === 'all' ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`w-full overflow-hidden ${idx === 0 && filter === 'all' ? 'h-80 md:h-[36rem]' : 'h-80'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Gradient & Hover Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-[#0e1013]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-[#d4af37] font-semibold bg-[#0e1013]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#d4af37]/30">
                    {item.location}
                  </span>
                  <span className="p-2 rounded-full bg-[#d4af37]/20 text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#faf9f5] font-normal mb-2 group-hover:text-[#d4af37] transition duration-300">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#faf9f5]/80 font-light line-clamp-2 leading-relaxed mb-3">
                  {item.caption}
                </p>

                {item.specs && (
                  <div className="text-[11px] text-[#d4af37]/90 font-mono tracking-wider pt-2 border-t border-[#d4af37]/20">
                    {item.specs}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN SWIPEABLE LIGHTBOX */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-[#08090b]/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-fade-in">
          {/* Lightbox Top Control Bar */}
          <div className="flex justify-between items-center z-20">
            <div className="flex items-center gap-3">
              <span className="font-serif text-xl sm:text-2xl tracking-wider text-[#d4af37]">
                AURELIA GALLERY
              </span>
              <span className="text-xs text-[#faf9f5]/50 bg-white/10 px-3 py-1 rounded-full font-mono">
                {currentIndex + 1} / {filteredItems.length}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Slideshow Play Toggle */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-2.5 rounded-full border transition flex items-center gap-1.5 text-xs uppercase tracking-wider ${
                  isPlaying
                    ? 'bg-[#d4af37] text-[#0e1013] border-[#d4af37] font-semibold'
                    : 'border-[#faf9f5]/30 text-[#faf9f5] hover:border-[#d4af37]'
                }`}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span className="hidden sm:inline">{isPlaying ? 'Playing Slideshow' : 'Auto Play'}</span>
              </button>

              {/* Zoom Toggle */}
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-2.5 rounded-full border border-[#faf9f5]/30 text-[#faf9f5] hover:border-[#d4af37] hover:text-[#d4af37] transition"
                title="Toggle High-Res Zoom"
              >
                <ZoomIn className="w-5 h-5" />
              </button>

              {/* Close Lightbox */}
              <button
                onClick={() => {
                  setActiveItem(null);
                  setIsPlaying(false);
                }}
                className="p-2.5 rounded-full bg-[#d4af37] text-[#0e1013] hover:bg-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Main Stage Image Area */}
          <div className="relative my-auto flex items-center justify-center w-full max-h-[75vh] overflow-hidden">
            {/* Left Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 z-20 p-3 sm:p-4 rounded-full bg-[#14171d]/80 hover:bg-[#d4af37] hover:text-[#0e1013] border border-[#d4af37]/30 text-[#faf9f5] transition shadow-2xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Main Lightbox Image */}
            <div className={`relative max-w-5xl transition-all duration-500 ${isZoomed ? 'scale-130 cursor-zoom-out' : 'cursor-zoom-in'}`} onClick={() => setIsZoomed(!isZoomed)}>
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[68vh] w-auto object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.9)] border border-[#d4af37]/30 mx-auto"
              />
            </div>

            {/* Right Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 z-20 p-3 sm:p-4 rounded-full bg-[#14171d]/80 hover:bg-[#d4af37] hover:text-[#0e1013] border border-[#d4af37]/30 text-[#faf9f5] transition shadow-2xl"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Bottom Storytelling Caption Bar */}
          <div className="bg-[#13161c]/90 backdrop-blur-xl border border-[#d4af37]/30 rounded-2xl p-6 max-w-4xl mx-auto w-full z-20 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-left space-y-1.5 flex-1">
              <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#d4af37]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeItem.location}</span>
                {activeItem.specs && <span className="text-[#faf9f5]/50">• {activeItem.specs}</span>}
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#faf9f5]">{activeItem.title}</h4>
              <p className="text-sm text-[#faf9f5]/80 font-light leading-relaxed">{activeItem.caption}</p>
            </div>

            <button
              onClick={() => {
                const title = activeItem.title;
                setActiveItem(null);
                onSelectBookingItem(title);
              }}
              className="w-full md:w-auto bg-gradient-to-r from-[#d4af37] to-[#c5a059] hover:from-[#e2c275] hover:to-[#d4af37] text-[#0e1013] font-semibold px-6 py-3.5 rounded-xl tracking-[0.15em] uppercase text-xs shrink-0 shadow-lg transition"
            >
              Inquire Experience
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
