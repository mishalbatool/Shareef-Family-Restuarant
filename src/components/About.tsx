import React from 'react';
import { Users, HeartHandshake, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData.ts';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-28 bg-[#191817] relative border-t border-[#C5A15B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Column: Atmospheric Visual Frame */}
          <div className="lg:col-span-6 relative max-w-2xl mx-auto lg:max-w-none w-full">
            <div className="relative rounded-2xl overflow-hidden border border-[#C5A15B]/30 shadow-2xl shadow-black/60 group">
              <img
                src="/images/dining_room.jpg"
                alt="Private family dining ambiance at Shareef Family Hotel"
                className="w-full h-[320px] sm:h-[380px] md:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191817]/90 via-transparent to-black/20" />
              
              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3.5 sm:p-4 rounded-xl bg-[#242220]/90 backdrop-blur-md border border-[#C5A15B]/30">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-serif-luxury text-sm sm:text-base font-semibold text-[#F8F1E5]">
                      Dedicated Private Dining Rooms
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#C5A15B] mt-0.5">
                      Reserved specifically for family gatherings and celebrations
                    </p>
                  </div>
                  <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#C5A15B]/20 text-[#C5A15B]">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle decorative gold corner frame */}
            <div className="absolute -top-3 -left-3 w-12 sm:w-16 h-12 sm:h-16 border-t-2 border-l-2 border-[#C5A15B]/40 pointer-events-none rounded-tl-xl" />
            <div className="absolute -bottom-3 -right-3 w-12 sm:w-16 h-12 sm:h-16 border-b-2 border-r-2 border-[#C5A15B]/40 pointer-events-none rounded-br-xl" />
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 max-w-2xl mx-auto lg:max-w-none w-full">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A15B] mb-2 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chiniot Dining Experience</span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8F1E5] tracking-tight text-balance leading-tight">
              A Place for Great Food & Family Moments
            </h2>

            {/* Introduction Copy */}
            <div className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4 text-sm sm:text-base text-[#F8F1E5]/80 leading-relaxed font-light">
              <p>
                Situated prominently along <strong className="text-[#F8F1E5] font-medium">Jhang-Chiniot Road</strong>, 
                <strong className="text-[#C5A15B] font-medium"> Shareef Family Hotel</strong> is crafted to be a true sanctuary 
                for families who cherish authentic taste, pristine hospitality, and unhurried togetherness.
              </p>
              <p>
                Whether you are traveling through Chiniot or gathering with loved ones for an evening celebration, 
                our restaurant offers a comfortable, air-conditioned dining ambiance alongside secluded private family dining rooms 
                designed with full privacy in mind.
              </p>
              <p>
                From sizzling wok-seared Karahis and char-grilled BBQ skewers to aromatic Dum Biryani and comforting traditional Desi specialties, 
                every meal is prepared fresh with high-grade ingredients and true Punjabi culinary warmth.
              </p>
            </div>

            {/* Four Core Pillars (Optimized 2-col on Tablet & Desktop) */}
            <div className="mt-7 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-6 border-t border-[#C5A15B]/20">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#242220]/50 border border-[#C5A15B]/15">
                <div className="w-8 h-8 rounded-lg bg-[#191817] border border-[#C5A15B]/30 flex items-center justify-center text-[#C5A15B] shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#F8F1E5]">Family-First Privacy</h3>
                  <p className="text-[11px] sm:text-xs text-[#F8F1E5]/60 mt-0.5">Secluded dining halls for comfort & peaceful meals.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#242220]/50 border border-[#C5A15B]/15">
                <div className="w-8 h-8 rounded-lg bg-[#191817] border border-[#C5A15B]/30 flex items-center justify-center text-[#C5A15B] shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#F8F1E5]">Warm Hospitality</h3>
                  <p className="text-[11px] sm:text-xs text-[#F8F1E5]/60 mt-0.5">Attentive and respectful staff dedicated to your care.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#242220]/50 border border-[#C5A15B]/15">
                <div className="w-8 h-8 rounded-lg bg-[#191817] border border-[#C5A15B]/30 flex items-center justify-center text-[#C5A15B] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#F8F1E5]">Fresh Quality Cuts</h3>
                  <p className="text-[11px] sm:text-xs text-[#F8F1E5]/60 mt-0.5">Live karahi and BBQ prepared fresh upon order.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#242220]/50 border border-[#C5A15B]/15">
                <div className="w-8 h-8 rounded-lg bg-[#191817] border border-[#C5A15B]/30 flex items-center justify-center text-[#C5A15B] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#F8F1E5]">Easy Road Access</h3>
                  <p className="text-[11px] sm:text-xs text-[#F8F1E5]/60 mt-0.5">Convenient location with ample parking on Jhang Road.</p>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="mt-7 sm:mt-8 flex items-center gap-4">
              <a
                href={BUSINESS_INFO.telUri}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#191817] bg-[#C5A15B] hover:bg-[#DFBF7D] px-5 py-3 rounded-lg transition-all shadow-md min-h-[44px]"
              >
                Reserve Family Room: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
