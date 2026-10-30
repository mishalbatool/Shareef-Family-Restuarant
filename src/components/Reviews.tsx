import React from 'react';
import { Star, ExternalLink, ShieldCheck, ThumbsUp, Heart, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData.ts';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-20 lg:py-28 bg-[#191817] relative border-t border-[#C5A15B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[#C5A15B] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community Reputation</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8F1E5] tracking-tight">
            Guest Trust & Google Reviews
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#F8F1E5]/75 leading-relaxed">
            Real feedback from diners, travelers, and families who visit Shareef Family Hotel in Chiniot.
          </p>
        </div>

        {/* Central Verified Trust Card (Responsive on Mobile, Tablet & Desktop) */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#242220] border border-[#C5A15B]/30 p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A15B]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* Left: Overall Rating Box */}
            <div className="md:col-span-5 text-center md:text-left border-b md:border-b-0 md:border-r border-[#C5A15B]/20 pb-6 md:pb-0 md:pr-6 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#191817] border border-[#C5A15B]/25 text-xs text-[#DFBF7D] mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A15B]" />
                <span>Verified Google Presence</span>
              </div>

              {/* Big Score */}
              <div className="flex items-baseline justify-center md:justify-start gap-2.5 sm:gap-3">
                <span className="font-serif-luxury text-5xl sm:text-6xl font-bold text-[#F8F1E5] tracking-tight">
                  {BUSINESS_INFO.rating}
                </span>
                <span className="text-lg sm:text-xl text-[#F8F1E5]/50 font-serif-luxury">/ 5.0</span>
              </div>

              {/* 5-Star Visual Display */}
              <div className="flex items-center justify-center md:justify-start gap-1 mt-2.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 sm:w-5 h-4 sm:h-5 ${
                      i === 4
                        ? 'fill-[#C5A15B]/40 text-[#C5A15B]/40'
                        : 'fill-[#C5A15B] text-[#C5A15B]'
                    }`}
                  />
                ))}
              </div>

              {/* Volume Count */}
              <p className="mt-3 text-xs sm:text-sm text-[#F8F1E5]/80 font-medium">
                Based on <strong className="text-[#C5A15B] font-mono tabular-nums">{BUSINESS_INFO.reviewsCount}</strong> Google reviews
              </p>

              {/* Button linking to Google search for verified reviews */}
              <div className="mt-5 sm:mt-6">
                <a
                  href={BUSINESS_INFO.googleReviewsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#191817] bg-[#C5A15B] hover:bg-[#DFBF7D] rounded-lg transition-all shadow-md group min-h-[44px]"
                >
                  <span>Read Reviews on Google</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Key Verified Highlights */}
            <div className="md:col-span-7 space-y-3.5 sm:space-y-4">
              <h3 className="font-serif-luxury text-base sm:text-lg font-semibold text-[#F8F1E5]">
                Why Families & Travelers Choose Us:
              </h3>

              <div className="space-y-2.5 sm:space-y-3">
                <div className="p-3 sm:p-3.5 rounded-lg bg-[#191817] border border-[#C5A15B]/15 flex items-start gap-3">
                  <div className="p-1.5 rounded bg-[#242220] text-[#C5A15B] shrink-0 mt-0.5">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#F8F1E5]">Private Family Atmosphere</h4>
                    <p className="text-[11px] sm:text-xs text-[#F8F1E5]/70 mt-0.5 leading-snug">
                      Frequent praise for quiet, private dining rooms that offer peace and family seclusion.
                    </p>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-lg bg-[#191817] border border-[#C5A15B]/15 flex items-start gap-3">
                  <div className="p-1.5 rounded bg-[#242220] text-[#C5A15B] shrink-0 mt-0.5">
                    <ThumbsUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#F8F1E5]">Authentic Karahi & Charcoal BBQ</h4>
                    <p className="text-[11px] sm:text-xs text-[#F8F1E5]/70 mt-0.5 leading-snug">
                      Celebrated for rich tomato gravies, fresh tender mutton cuts, and aromatic charcoal skewers.
                    </p>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-lg bg-[#191817] border border-[#C5A15B]/15 flex items-start gap-3">
                  <div className="p-1.5 rounded bg-[#242220] text-[#C5A15B] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#F8F1E5]">Convenient Jhang-Chiniot Road Stop</h4>
                    <p className="text-[11px] sm:text-xs text-[#F8F1E5]/70 mt-0.5 leading-snug">
                      Ideal roadside stop for travelers with spacious seating, attentive staff, and clean amenities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Strict Authenticity Notice */}
              <div className="pt-1 text-[11px] text-[#F8F1E5]/50 italic">
                * We value transparency and do not display simulated testimonials. All visitor feedback can be browsed directly on Google Maps & Google Search.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
