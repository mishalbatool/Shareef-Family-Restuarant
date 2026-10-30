import React, { useState } from 'react';
import { Phone, MapPin, Facebook, Clock, Send, CheckCircle2, Navigation, Users } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData.ts';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '4-6 Guests',
    diningArea: 'Private Dining Room',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28 bg-[#191817] relative border-t border-[#C5A15B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[#C5A15B]">
            Visit Us or Get In Touch
          </span>
          <h2 className="mt-2 font-serif-luxury text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8F1E5] tracking-tight">
            Contact & Location
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#F8F1E5]/75 leading-relaxed">
            We look forward to welcoming you and your family. Reach out directly or plan your visit on Jhang-Chiniot Road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Business Information & Contact Cards (Responsive 2-col on Tablets) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Details Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#242220] border border-[#C5A15B]/30 shadow-xl space-y-6">
              <div>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#F8F1E5]">
                  Shareef Family Hotel
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#C5A15B] mt-1">
                  Chiniot, Punjab, Pakistan
                </p>
              </div>

              {/* Sub-grid: 2 columns on tablet (sm & md), 1 column on desktop (lg) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 pt-2 border-t border-[#C5A15B]/15">
                {/* Address with Directions Link */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#191817] border border-[#C5A15B]/30 flex items-center justify-center text-[#C5A15B] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#C5A15B] uppercase tracking-wider">Address</span>
                    <p className="text-xs sm:text-sm text-[#F8F1E5] font-medium mt-0.5 leading-snug">
                      {BUSINESS_INFO.address}
                    </p>
                    <a
                      href={BUSINESS_INFO.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#DFBF7D] hover:text-[#C5A15B] font-semibold mt-2 group"
                    >
                      <Navigation className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                      <span>Directions on Maps</span>
                    </a>
                  </div>
                </div>

                {/* Phone with Click-to-Call */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#191817] border border-[#C5A15B]/30 flex items-center justify-center text-[#C5A15B] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#C5A15B] uppercase tracking-wider">Direct Phone</span>
                    <p className="text-sm sm:text-base text-[#F8F1E5] font-serif-luxury font-bold mt-0.5">
                      {BUSINESS_INFO.phone}
                    </p>
                    <a
                      href={BUSINESS_INFO.telUri}
                      className="mt-2 inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#191817] bg-[#C5A15B] hover:bg-[#DFBF7D] rounded-md transition-all shadow-md active:scale-95 min-h-[40px]"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Click to Call</span>
                    </a>
                  </div>
                </div>

                {/* Facebook Page Link */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#191817] border border-[#C5A15B]/30 flex items-center justify-center text-[#C5A15B] shrink-0 mt-0.5">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#C5A15B] uppercase tracking-wider">Facebook</span>
                    <p className="text-xs text-[#F8F1E5]/70 mt-0.5">
                      Follow daily updates & photos.
                    </p>
                    <a
                      href={BUSINESS_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-[#DFBF7D] hover:text-[#C5A15B] font-semibold underline underline-offset-4"
                    >
                      <span>@ShareefFamiyRestaurant</span>
                    </a>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#191817] border border-[#C5A15B]/30 flex items-center justify-center text-[#C5A15B] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#C5A15B] uppercase tracking-wider">Dining Hours</span>
                    <p className="text-xs text-[#F8F1E5]/80 mt-0.5 leading-relaxed">
                      {BUSINESS_INFO.timing}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Private Room & Table Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#242220] border border-[#C5A15B]/30 shadow-xl">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A15B] mb-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>Online Reservation Request</span>
                </div>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#F8F1E5]">
                  Inquire for Family Table or Private Room
                </h3>
                <p className="text-xs text-[#F8F1E5]/70 mt-1">
                  Submit your details below and our restaurant staff will arrange your comfortable dining space.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-10 sm:py-12 text-center space-y-4 bg-[#191817]/70 rounded-xl border border-[#C5A15B]/30 p-6 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#C5A15B]/20 text-[#C5A15B] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#F8F1E5]">
                    Inquiry Received, {formData.name || 'Valued Guest'}!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#F8F1E5]/80 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting Shareef Family Hotel Chiniot. For urgent arrangements or same-day table reservations, please feel free to call us directly.
                  </p>
                  <div className="pt-2">
                    <a
                      href={BUSINESS_INFO.telUri}
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#191817] bg-[#C5A15B] hover:bg-[#DFBF7D] rounded-lg transition-colors min-h-[44px]"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call (047) 6331476</span>
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        guests: '4-6 Guests',
                        diningArea: 'Private Dining Room',
                        notes: '',
                      });
                    }}
                    className="block mx-auto text-xs text-[#C5A15B] hover:underline pt-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#DFBF7D] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Mehmood"
                        className="w-full px-4 py-2.5 sm:py-3 bg-[#191817] text-xs sm:text-sm text-[#F8F1E5] placeholder-[#F8F1E5]/40 rounded-lg border border-[#C5A15B]/25 focus:border-[#C5A15B] focus:outline-none focus:ring-1 focus:ring-[#C5A15B] min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#DFBF7D] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0300-1234567"
                        className="w-full px-4 py-2.5 sm:py-3 bg-[#191817] text-xs sm:text-sm text-[#F8F1E5] placeholder-[#F8F1E5]/40 rounded-lg border border-[#C5A15B]/25 focus:border-[#C5A15B] focus:outline-none focus:ring-1 focus:ring-[#C5A15B] min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="guests" className="block text-xs font-semibold uppercase tracking-wider text-[#DFBF7D] mb-1.5">
                        Expected Guests
                      </label>
                      <select
                        id="guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-2.5 sm:py-3 bg-[#191817] text-xs sm:text-sm text-[#F8F1E5] rounded-lg border border-[#C5A15B]/25 focus:border-[#C5A15B] focus:outline-none focus:ring-1 focus:ring-[#C5A15B] min-h-[44px]"
                      >
                        <option value="1-3 Guests">1–3 Guests</option>
                        <option value="4-6 Guests">4–6 Guests</option>
                        <option value="7-12 Guests">7–12 Guests (Family Feast)</option>
                        <option value="15+ Guests">15+ Guests (Large Gathering)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="diningArea" className="block text-xs font-semibold uppercase tracking-wider text-[#DFBF7D] mb-1.5">
                        Dining Preference
                      </label>
                      <select
                        id="diningArea"
                        value={formData.diningArea}
                        onChange={(e) => setFormData({ ...formData, diningArea: e.target.value })}
                        className="w-full px-4 py-2.5 sm:py-3 bg-[#191817] text-xs sm:text-sm text-[#F8F1E5] rounded-lg border border-[#C5A15B]/25 focus:border-[#C5A15B] focus:outline-none focus:ring-1 focus:ring-[#C5A15B] min-h-[44px]"
                      >
                        <option value="Private Dining Room">Private Dining Room (Family Privacy)</option>
                        <option value="Main Family Hall">Main Family Hall (Air-conditioned)</option>
                        <option value="Happy-Hour & Snacks">Happy-Hour Tea & BBQ</option>
                        <option value="All-You-Can-Eat Buffet">All-You-Can-Eat / Feast</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-[#DFBF7D] mb-1.5">
                      Special Requests / Preferred Time
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Celebrating family dinner at 8:30 PM, mutton karahi request..."
                      className="w-full px-4 py-2.5 sm:py-3 bg-[#191817] text-xs sm:text-sm text-[#F8F1E5] placeholder-[#F8F1E5]/40 rounded-lg border border-[#C5A15B]/25 focus:border-[#C5A15B] focus:outline-none focus:ring-1 focus:ring-[#C5A15B]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-[#191817] bg-[#C5A15B] hover:bg-[#DFBF7D] rounded-lg transition-all shadow-md active:scale-[0.99] min-h-[44px]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Reservation Request</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-[#F8F1E5]/50 text-center pt-1">
                    * Submitting informs our staff on duty. For guaranteed instant table booking, call <strong>(047) 6331476</strong>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
