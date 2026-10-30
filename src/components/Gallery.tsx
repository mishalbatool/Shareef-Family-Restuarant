import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData.ts';

export const Gallery: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeImageIndex]);

  return (
    <section id="gallery" className="py-16 md:py-20 lg:py-28 bg-[#191817] relative border-t border-[#C5A15B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[#C5A15B] mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8F1E5] tracking-tight">
            Dining & Culinary Gallery
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#F8F1E5]/75 leading-relaxed">
            A glimpse into the authentic Pakistani cuisine and welcoming family ambiance at Shareef Family Hotel.
          </p>
        </div>

        {/* Responsive Grid with Mixed Aspect Layout (2-col on Tablet 768px-1024px, 3-col on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className={`group relative rounded-xl overflow-hidden bg-[#242220] border border-[#C5A15B]/25 hover:border-[#C5A15B] cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                idx === 0 ? 'sm:col-span-2 sm:row-span-1 lg:col-span-2' : ''
              }`}
            >
              <div className={`w-full overflow-hidden ${idx === 0 ? 'h-64 sm:h-72 md:h-84' : 'h-64 sm:h-72'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#191817] via-[#191817]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#191817]/85 border border-[#C5A15B]/40 text-[#C5A15B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-105">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A15B]">
                  {item.category}
                </span>
                <h3 className="font-serif-luxury text-base sm:text-lg font-semibold text-[#F8F1E5] mt-0.5 sm:mt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#F8F1E5]/70 mt-1 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal (Accessible on Mobile & Tablet) */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 animate-in fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery preview"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 min-w-[44px] min-h-[44px] rounded-full bg-[#242220] text-[#F8F1E5] hover:text-[#C5A15B] border border-[#C5A15B]/30 z-50 flex items-center justify-center"
            aria-label="Close fullscreen gallery"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 min-w-[44px] min-h-[44px] rounded-full bg-[#242220]/85 text-[#F8F1E5] hover:text-[#C5A15B] border border-[#C5A15B]/30 hover:bg-[#242220] transition-colors z-50 flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 min-w-[44px] min-h-[44px] rounded-full bg-[#242220]/85 text-[#F8F1E5] hover:text-[#C5A15B] border border-[#C5A15B]/30 hover:bg-[#242220] transition-colors z-50 flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Active Image Container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_ITEMS[activeImageIndex].image}
              alt={GALLERY_ITEMS[activeImageIndex].title}
              className="max-h-[60vh] sm:max-h-[68vh] md:max-h-[72vh] w-auto max-w-full object-contain rounded-xl border border-[#C5A15B]/40 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-3 sm:mt-4 text-center px-2">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#C5A15B]">
                {GALLERY_ITEMS[activeImageIndex].category} · {activeImageIndex + 1} of {GALLERY_ITEMS.length}
              </span>
              <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#F8F1E5] mt-0.5 sm:mt-1">
                {GALLERY_ITEMS[activeImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#F8F1E5]/75 mt-1 max-w-lg mx-auto">
                {GALLERY_ITEMS[activeImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
