import React from 'react';
import { ArrowRight, Utensils, Star, Users, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData.ts';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const navHeight = 84;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-20 overflow-hidden">
      {/* Background Image with Dark Luxury Vignette Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Lavish Pakistani dining spread at Shareef Family Hotel Chiniot"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark overlay for contrast across all viewports */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#191817] via-[#191817]/85 to-[#191817]/65 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#191817]/40 to-[#191817]/95" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Elegant Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C5A15B]">
          <span className="w-5 sm:w-8 h-px bg-[#C5A15B]/50" />
          <span>Chiniot · Jhang-Chiniot Road</span>
          <span className="w-5 sm:w-8 h-px bg-[#C5A15B]/50" />
        </div>

        {/* Main Heading */}
        <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#F8F1E5] max-w-4xl text-balance leading-[1.18] sm:leading-[1.15]">
          Welcome to <span className="text-[#C5A15B] italic font-normal">Shareef Family Hotel</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 font-serif-luxury text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#DFBF7D] font-medium tracking-wide">
          Delicious Food, Memorable Moments
        </p>

        {/* Description */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#F8F1E5]/80 max-w-2xl leading-relaxed text-pretty">
          Experience delicious food, warm hospitality, and a welcoming family dining atmosphere at Shareef Family Hotel, Chiniot.
        </p>

        {/* Call to Actions */}
        <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => scrollTo('#menu')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#191817] bg-[#C5A15B] hover:bg-[#DFBF7D] rounded-lg transition-all duration-200 shadow-lg shadow-[#C5A15B]/15 hover:shadow-[#C5A15B]/30 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap min-h-[44px]"
          >
            <Utensils className="w-4 h-4 shrink-0" />
            <span>Explore Our Menu</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('#contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F8F1E5] bg-[#242220]/80 hover:bg-[#242220] border border-[#C5A15B]/40 hover:border-[#C5A15B] rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap min-h-[44px]"
          >
            <span>Contact Us</span>
          </button>
        </div>

        {/* Service Options & Verified Trust Strip (Optimized 2-col on Tablet, 4-col on Desktop) */}
        <div className="mt-10 sm:mt-12 md:mt-14 w-full max-w-4xl border-t border-[#C5A15B]/20 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
            {/* Service 1 */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#242220]/75 border border-[#C5A15B]/15 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#C5A15B] mb-1.5">
                  <Users className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold tracking-wide uppercase">Private Dining</span>
                </div>
                <p className="text-xs text-[#F8F1E5]/75 leading-relaxed">
                  Dedicated family rooms & respectful comfort.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#242220]/75 border border-[#C5A15B]/15 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#C5A15B] mb-1.5">
                  <Utensils className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold tracking-wide uppercase">All-You-Can-Eat</span>
                </div>
                <p className="text-xs text-[#F8F1E5]/75 leading-relaxed">
                  Feast options and generous family platters.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#242220]/75 border border-[#C5A15B]/15 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#C5A15B] mb-1.5">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold tracking-wide uppercase">Happy-Hour Food</span>
                </div>
                <p className="text-xs text-[#F8F1E5]/75 leading-relaxed">
                  Chai sessions, evening snacks & BBQ treats.
                </p>
              </div>
            </div>

            {/* Service 4: Google Reviews */}
            <a
              href={BUSINESS_INFO.googleReviewsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 sm:p-4 rounded-xl bg-[#242220]/75 border border-[#C5A15B]/30 hover:border-[#C5A15B] backdrop-blur-sm group transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1.5 text-[#C5A15B] mb-1.5">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i === 4 ? 'fill-[#C5A15B]/50' : 'fill-[#C5A15B]'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold font-mono tabular-nums text-[#F8F1E5]">4.5</span>
                </div>
                <p className="text-xs text-[#F8F1E5]/75 group-hover:text-[#C5A15B] transition-colors leading-relaxed">
                  {BUSINESS_INFO.reviewsCount} Google Reviews →
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
