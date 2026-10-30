import React, { useState, useMemo } from 'react';
import { Search, X, Utensils, Info, Phone, ArrowUpRight } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem, BUSINESS_INFO } from '../data/restaurantData.ts';

export const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItemModal, setActiveItemModal] = useState<MenuItem | null>(null);

  // Filter items instantly by category and search query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-16 md:py-20 lg:py-28 bg-[#191817] relative border-t border-[#C5A15B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[#C5A15B]">
            Authentic Flavors of Punjab
          </span>
          <h2 className="mt-2 font-serif-luxury text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8F1E5] tracking-tight">
            Our Culinary Offerings
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#F8F1E5]/75 leading-relaxed">
            Prepared to order using freshly ground whole spices, live charcoal grills, and pure ingredients.
          </p>

          {/* Transparent Illustrative Notice Banner */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg bg-[#242220] border border-[#C5A15B]/25 text-xs text-[#DFBF7D] text-left">
            <Info className="w-3.5 h-3.5 shrink-0 text-[#C5A15B]" />
            <span>
              Illustrative menu selection. For daily live karahi cuts and official prices, call <strong>(047) 6331476</strong>.
            </span>
          </div>
        </div>

        {/* Search & Category Filter Controls (Responsive on Mobile, Tablet & Desktop) */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 sm:mb-10">
          {/* Instant Search Bar */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="w-4 h-4 text-[#C5A15B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Karahi, BBQ, Biryani)..."
              className="w-full pl-10 pr-9 py-2.5 sm:py-3 bg-[#242220] text-xs sm:text-sm text-[#F8F1E5] placeholder-[#F8F1E5]/40 rounded-lg border border-[#C5A15B]/25 focus:border-[#C5A15B] focus:outline-none focus:ring-1 focus:ring-[#C5A15B] transition-colors min-h-[42px]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F8F1E5]/50 hover:text-[#F8F1E5] p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs (Segmented Button Controls) */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 sm:px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-all duration-200 min-h-[38px] ${
                    isActive
                      ? 'bg-[#C5A15B] text-[#191817] font-semibold shadow-md shadow-[#C5A15B]/20'
                      : 'bg-[#242220] text-[#F8F1E5]/80 hover:text-[#F8F1E5] hover:bg-[#2C2926] border border-[#C5A15B]/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count & Current Filter Info */}
        <div className="flex items-center justify-between text-xs text-[#F8F1E5]/60 mb-5 sm:mb-6 px-1">
          <span>
            Showing <strong className="text-[#C5A15B] font-mono tabular-nums">{filteredItems.length}</strong> delicious options
            {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
          </span>
          {(searchQuery || selectedCategory !== 'All') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-[#C5A15B] hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Menu Grid (Optimized 2-col on Tablets 768px-1024px, 3-col on Desktop) */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#242220]/50 rounded-2xl border border-[#C5A15B]/20 p-8">
            <Utensils className="w-12 h-12 text-[#C5A15B]/40 mx-auto mb-3" />
            <h3 className="font-serif-luxury text-xl text-[#F8F1E5]">No culinary items matched "{searchQuery}"</h3>
            <p className="text-sm text-[#F8F1E5]/60 mt-1 max-w-md mx-auto">
              Try searching for our specialties like "Karahi", "Seekh", "Biryani", or browse other categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#191817] bg-[#C5A15B] rounded-lg hover:bg-[#DFBF7D]"
            >
              View Full Menu
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItemModal(item)}
                className="group cursor-pointer rounded-xl bg-[#242220] border border-[#C5A15B]/20 hover:border-[#C5A15B]/60 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col shadow-lg shadow-black/40 hover:shadow-[#C5A15B]/10"
              >
                {/* Image Container with Fallback */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1E1C1A]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242220] via-transparent to-transparent opacity-80" />

                  {/* Clean unboxed specialty indicator */}
                  {item.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#191817]/85 backdrop-blur-sm border border-[#C5A15B]/40 text-[11px] font-medium text-[#DFBF7D]">
                      {item.badge}
                    </div>
                  )}

                  {/* Quick Expand Icon */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#191817]/80 text-[#C5A15B] flex items-center justify-center border border-[#C5A15B]/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Portion Metadata */}
                    <div className="flex items-center gap-2 text-xs text-[#C5A15B]/85 mb-1.5 font-medium">
                      <span>{item.category}</span>
                      {item.portionGuide && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-[#F8F1E5]/60">{item.portionGuide}</span>
                        </>
                      )}
                    </div>

                    {/* Dish Title */}
                    <h3 className="font-serif-luxury text-base sm:text-lg font-semibold text-[#F8F1E5] group-hover:text-[#DFBF7D] transition-colors leading-snug">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs text-[#F8F1E5]/70 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Action Footer */}
                  <div className="mt-4 pt-3 border-t border-[#C5A15B]/15 flex items-center justify-between">
                    <span className="text-xs text-[#DFBF7D] italic">
                      {item.samplePrice || 'Live Order'}
                    </span>
                    <span className="text-xs font-semibold text-[#C5A15B] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      Details & Order →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Menu Action Prompt */}
        <div className="mt-12 sm:mt-14 p-6 sm:p-8 rounded-2xl bg-[#242220] border border-[#C5A15B]/30 text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="font-serif-luxury text-lg sm:text-xl md:text-2xl font-bold text-[#F8F1E5]">
            Planning a Family Dinner or Private Event?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#F8F1E5]/80 max-w-xl mx-auto leading-relaxed">
            Our private dining rooms and family banquet halls are available for reservations. 
            Speak with our manager directly to customize your feast.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BUSINESS_INFO.telUri}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#191817] bg-[#C5A15B] hover:bg-[#DFBF7D] rounded-lg transition-all shadow-md min-h-[44px]"
            >
              <Phone className="w-4 h-4" />
              <span>Call For Orders: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Item Detail / Quick Inquiry Modal (Responsive for Tablet & Mobile) */}
      {activeItemModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveItemModal(null)}
        >
          <div
            className="relative w-full max-w-lg md:max-w-xl bg-[#242220] rounded-2xl border border-[#C5A15B]/40 overflow-hidden shadow-2xl p-0 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full bg-[#1E1C1A]">
              <img
                src={activeItemModal.image}
                alt={activeItemModal.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setActiveItemModal(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#191817]/85 text-[#F8F1E5] hover:text-[#C5A15B] flex items-center justify-center border border-[#C5A15B]/30"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs text-[#C5A15B] font-semibold uppercase tracking-wider mb-1">
                <span>{activeItemModal.category}</span>
                {activeItemModal.portionGuide && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#F8F1E5]/70 normal-case">{activeItemModal.portionGuide}</span>
                  </>
                )}
              </div>

              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#F8F1E5]">
                {activeItemModal.name}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-[#F8F1E5]/80 leading-relaxed">
                {activeItemModal.description}
              </p>

              <div className="mt-5 p-3.5 rounded-lg bg-[#191817] border border-[#C5A15B]/20 text-xs text-[#DFBF7D]">
                <p>
                  <strong>Preparation Note:</strong> Prepared fresh upon order in traditional brass and iron cookware. Please allow 20–30 minutes for fresh karahi and clay handi dishes.
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={BUSINESS_INFO.telUri}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#191817] bg-[#C5A15B] hover:bg-[#DFBF7D] rounded-lg transition-colors min-h-[44px]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Inquire / Order</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveItemModal(null)}
                  className="w-full sm:w-auto px-5 py-3 text-xs text-[#F8F1E5]/80 hover:text-[#F8F1E5] border border-[#C5A15B]/30 hover:border-[#C5A15B] rounded-lg transition-colors min-h-[44px]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
