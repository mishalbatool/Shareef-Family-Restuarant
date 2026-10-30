import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Menu } from './components/Menu.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Reviews } from './components/Reviews.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from './data/restaurantData.ts';

export default function App() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
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
    <div className="min-h-screen bg-[#191817] text-[#F8F1E5] flex flex-col font-sans selection:bg-[#C5A15B]/30 selection:text-[#F8F1E5] overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 sm:pb-0">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick-Action Bar (< 15% height mobile viewport cap, hidden on Tablet & Desktop) */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40 bg-[#191817]/95 backdrop-blur-md border border-[#C5A15B]/40 rounded-xl p-1.5 shadow-2xl flex items-center justify-between gap-2">
        <a
          href={BUSINESS_INFO.telUri}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg bg-[#C5A15B] text-[#191817] text-xs font-semibold uppercase tracking-wider min-h-[44px] active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>Call (047) 6331476</span>
        </a>

        <button
          type="button"
          onClick={scrollToContact}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg bg-[#242220] border border-[#C5A15B]/30 text-[#F8F1E5] text-xs font-semibold uppercase tracking-wider min-h-[44px] active:scale-95 transition-transform"
        >
          <Calendar className="w-3.5 h-3.5 text-[#C5A15B] shrink-0" />
          <span>Book Table</span>
        </button>
      </div>
    </div>
  );
}
