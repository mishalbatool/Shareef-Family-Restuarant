import React from 'react';
import { Logo } from './Logo.tsx';
import { Phone, MapPin, Facebook, ArrowUp, Utensils, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#141312] text-[#F8F1E5] border-t border-[#C5A15B]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12">
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-7 lg:col-span-5 space-y-4">
            <Logo size="lg" />
            <p className="text-xs sm:text-sm text-[#F8F1E5]/75 leading-relaxed max-w-sm mt-4 font-light">
              Experience genuine Chinioti hospitality, authentic wok-seared Karahi, charcoal-grilled BBQ, 
              and exclusive private family dining halls on Jhang-Chiniot Road.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#242220] border border-[#C5A15B]/30 hover:border-[#C5A15B] text-[#C5A15B] hover:text-[#DFBF7D] flex items-center justify-center transition-colors min-w-[36px]"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.telUri}
                className="w-9 h-9 rounded-lg bg-[#242220] border border-[#C5A15B]/30 hover:border-[#C5A15B] text-[#C5A15B] hover:text-[#DFBF7D] flex items-center justify-center transition-colors min-w-[36px]"
                aria-label="Call Restaurant"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.googleReviewsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 h-9 rounded-lg bg-[#242220] border border-[#C5A15B]/30 hover:border-[#C5A15B] text-xs text-[#DFBF7D] flex items-center gap-1.5 transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-[#C5A15B] text-[#C5A15B]" />
                <span className="font-mono tabular-nums font-semibold">{BUSINESS_INFO.reviewsCount} Google Reviews</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-5 lg:col-span-3 space-y-4">
            <h3 className="font-serif-luxury text-sm sm:text-base font-semibold text-[#F8F1E5] tracking-wide">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 text-xs sm:text-sm text-[#F8F1E5]/75">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#C5A15B] transition-colors inline-flex items-center gap-1.5 py-1"
                  >
                    <span className="text-[#C5A15B]/40">·</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Location Info */}
          <div className="md:col-span-12 lg:col-span-4 space-y-4 border-t md:border-t-0 pt-6 md:pt-0 border-[#C5A15B]/15">
            <h3 className="font-serif-luxury text-sm sm:text-base font-semibold text-[#F8F1E5] tracking-wide">
              Location & Details
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 text-xs text-[#F8F1E5]/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A15B] shrink-0 mt-0.5" />
                <span>
                  <strong>Shareef Family Hotel</strong>
                  <br />
                  Jhang-Chiniot Road, Chiniot, Pakistan
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A15B] shrink-0" />
                <a
                  href={BUSINESS_INFO.telUri}
                  className="hover:text-[#C5A15B] font-mono tabular-nums font-semibold text-xs sm:text-sm transition-colors text-[#F8F1E5]"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 sm:col-span-2 lg:col-span-1">
                <Utensils className="w-4 h-4 text-[#C5A15B] shrink-0" />
                <span>All-you-can-eat · Happy-hour food · Private dining</span>
              </div>
            </div>

            <div className="pt-1">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C5A15B] hover:text-[#DFBF7D] underline underline-offset-4"
              >
                facebook.com/ShareefFamiyRestaurant
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line Bar with Clean Typography */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#C5A15B]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F1E5]/60 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Shareef Family Hotel, Chiniot. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden sm:inline">Jhang-Chiniot Road, Chiniot, Pakistan</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 sm:px-3 rounded-md bg-[#242220] border border-[#C5A15B]/30 hover:border-[#C5A15B] text-[#C5A15B] hover:text-[#DFBF7D] transition-colors flex items-center gap-1.5 min-h-[36px]"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] uppercase tracking-wider font-semibold">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
