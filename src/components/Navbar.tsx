import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData.ts';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile/tablet menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 84;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#191817]/95 backdrop-blur-md border-b border-[#C5A15B]/25 py-2.5 sm:py-3 shadow-xl shadow-black/40'
            : 'bg-gradient-to-b from-[#191817]/95 via-[#191817]/70 to-transparent py-3 sm:py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            {/* Zone 1: Logo & Brand Element */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15B] rounded-lg shrink-0"
              aria-label="Shareef Family Hotel Home"
            >
              <Logo size="md" />
            </a>

            {/* Zone 2: Navigation Links (Desktop 1024px+) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-[#F8F1E5]/85">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="whitespace-nowrap shrink-0 hover:text-[#C5A15B] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A15B] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Mobile/Tablet Menu Toggle */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
              {/* Direct Click-to-call button (Mobile shows icon, Tablet & Desktop shows phone number) */}
              <a
                href={BUSINESS_INFO.telUri}
                className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-[#191817] bg-[#C5A15B] hover:bg-[#DFBF7D] rounded-lg transition-all duration-200 shadow-sm hover:shadow-[#C5A15B]/20 whitespace-nowrap shrink-0 active:scale-95 min-h-[40px]"
                aria-label={`Call Shareef Family Hotel at ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline font-mono">{BUSINESS_INFO.phone}</span>
                <span className="sm:hidden font-mono text-[11px]">Call</span>
              </a>

              {/* Hamburger Button for Mobile & Tablets under 1024px */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2.5 min-w-[42px] min-h-[42px] rounded-lg text-[#F8F1E5] hover:text-[#C5A15B] hover:bg-[#242220] border border-[#C5A15B]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A15B] transition-colors"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Drawer Menu with Dimmed Backdrop */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-[#191817] border-l border-[#C5A15B]/30 h-full flex flex-col justify-between pt-24 pb-8 px-6 sm:px-8 z-10 shadow-2xl overflow-y-auto">
            <div className="flex flex-col space-y-4">
              <div className="border-b border-[#C5A15B]/20 pb-4 mb-2 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#C5A15B] font-semibold">
                  Navigation
                </span>
                <span className="text-xs text-[#F8F1E5]/50">Shareef Family Hotel</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-lg sm:text-xl font-serif-luxury font-medium text-[#F8F1E5] hover:text-[#C5A15B] transition-colors py-2 flex items-center justify-between border-b border-white/5 active:bg-[#242220] px-2 rounded"
                >
                  <span>{link.label}</span>
                  <span className="text-[#C5A15B]/60 text-sm">→</span>
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-[#C5A15B]/20 flex flex-col gap-3 mt-8">
              <a
                href={BUSINESS_INFO.telUri}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#191817] bg-[#C5A15B] hover:bg-[#DFBF7D] rounded-lg transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              <div className="text-center text-xs text-[#F8F1E5]/60 mt-1">
                <span>Jhang-Chiniot Road, Chiniot, Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
