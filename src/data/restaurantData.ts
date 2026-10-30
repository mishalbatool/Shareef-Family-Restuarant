/**
 * Business information and curated food data for Shareef Family Hotel, Chiniot.
 * Note: Food items are realistic illustrative Pakistani specialties commonly served
 * in regional family restaurants and karahi houses. Official pricing and daily specials
 * should be confirmed directly via phone at (047) 6331476.
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'BBQ' | 'Karahi' | 'Biryani' | 'Traditional Desi Food' | 'Fast Food' | 'Drinks';
  description: string;
  image: string;
  badge?: string;
  isSpecialty?: boolean;
  portionGuide?: string;
  samplePrice?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const BUSINESS_INFO = {
  name: 'Shareef Family Hotel',
  tagline: 'Delicious Food, Memorable Moments',
  city: 'Chiniot',
  country: 'Pakistan',
  address: 'Jhang-Chiniot Road, Chiniot, Pakistan',
  phone: '(047) 6331476',
  telUri: 'tel:0476331476',
  reviewsCount: '1,024',
  rating: '4.5',
  facebookUrl: 'https://www.facebook.com/ShareefFamiyRestaurant/',
  googleReviewsSearchUrl: 'https://www.google.com/search?q=Shareef+Family+Hotel+Chiniot+reviews',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Shareef+Family+Hotel+Jhang-Chiniot+Road+Chiniot+Pakistan',
  services: [
    {
      title: 'Private Dining Room',
      description: 'Dedicated secluded family dining halls ensuring comfort and traditional privacy.',
    },
    {
      title: 'All-You-Can-Eat',
      description: 'Special weekend buffets and generous family platter feast servings.',
    },
    {
      title: 'Happy-Hour Food',
      description: 'Afternoon tea specials, freshly fried pakoras, and evening BBQ sizzlers.',
    },
  ],
  timing: 'Daily: 11:00 AM – 1:00 AM (Family Dining Available All Hours)',
};

export const MENU_CATEGORIES = [
  'All',
  'Karahi',
  'BBQ',
  'Biryani',
  'Traditional Desi Food',
  'Fast Food',
  'Drinks',
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'special-mutton-karahi',
    name: 'Special Mutton Karahi',
    category: 'Karahi',
    description: 'Fresh local mutton wok-seared in rich tomato masala, green chilies, ginger juliennes, and freshly cracked black pepper.',
    image: '/images/menu_special_karahi_1793347035084.jpg',
    badge: 'House Specialty',
    isSpecialty: true,
    portionGuide: 'Half / Full Wok',
    samplePrice: 'Market Price / By Weight',
  },
  {
    id: 'charcoal-bbq-platter',
    name: 'Royal Mixed BBQ Platter',
    category: 'BBQ',
    description: 'A smoking feast of spiced beef seekh kebabs, tender malai boti, chicken tikka skewers, charred red onions, and fresh mint raita.',
    image: '/images/menu_bbq_platter_1793347035844.jpg',
    badge: 'Popular for Families',
    isSpecialty: true,
    portionGuide: 'Serves 3-4 Persons',
    samplePrice: 'Sample / Illustrative',
  },
  {
    id: 'special-dum-biryani',
    name: 'Special Chicken Dum Biryani',
    category: 'Biryani',
    description: 'Aromatic long-grain basmati rice steamed with saffron, whole spices, tender marinated chicken, and caramelized crispy onions.',
    image: '/images/menu_sindhi_biryani_1793347037195.jpg',
    badge: 'Chef Recommendation',
    isSpecialty: true,
    portionGuide: 'Single / Family Handi',
    samplePrice: 'Sample / Illustrative',
  },
  {
    id: 'chicken-makhni-karahi',
    name: 'Chicken White Makhni Karahi',
    category: 'Karahi',
    description: 'Tender boneless chicken simmered gently in rich fresh cream, butter, yogurt, green chilies, and fragrant crushed cumin.',
    image: '/images/menu_special_karahi_1793347035084.jpg',
    portionGuide: 'Half / Full Wok',
    samplePrice: 'Sample / Illustrative',
  },
  {
    id: 'seekh-kebab-kabab',
    name: 'Charcoal Seekh Kebab Skewers',
    category: 'BBQ',
    description: 'Minced beef blended with ginger, garlic, coriander seeds, and traditional spices, slow-grilled over charcoal embers.',
    image: '/images/menu_bbq_platter_1793347035844.jpg',
    portionGuide: '4 Skewers with Chutney',
    samplePrice: 'Sample / Illustrative',
  },
  {
    id: 'chinioti-kunna-gosht',
    name: 'Chinioti Kunna Gosht (Regional Delight)',
    category: 'Traditional Desi Food',
    description: 'Chiniot\'s world-famous clay-pot slow-cooked mutton stew, prepared with whole garam masalas and stone-ground flour broth.',
    image: '/images/hero_pakistani_dining_1793347034225.jpg',
    badge: 'Chiniot Signature',
    isSpecialty: true,
    portionGuide: 'Clay Kunna Pot',
    samplePrice: 'Seasonal Specialty',
  },
  {
    id: 'daal-makhani-tarka',
    name: 'Special Daal Mash with Desi Ghee Tarka',
    category: 'Traditional Desi Food',
    description: 'White lentils cooked to creamy perfection, tempered with golden garlic, button red chilies, and pure aromatic desi ghee.',
    image: '/images/hero_pakistani_dining_1793347034225.jpg',
    portionGuide: 'Full Bowl with Tandoori Roti',
    samplePrice: 'Sample / Illustrative',
  },
  {
    id: 'tandoori-roghni-naan',
    name: 'Sesame Roghni & Garlic Naan Basket',
    category: 'Traditional Desi Food',
    description: 'Fluffy clay-oven tandoori naan brushed with pure butter, sesame seeds, and light garlic butter.',
    image: '/images/hero_pakistani_dining_1793347034225.jpg',
    portionGuide: 'Basket of 4',
    samplePrice: 'Sample / Illustrative',
  },
  {
    id: 'crispy-zinger-burger',
    name: 'Crispy Zinger Chicken Burger',
    category: 'Fast Food',
    description: 'Golden fried crispy chicken breast fillet with spicy secret marinade, crisp iceberg lettuce, and tangy garlic mayonnaise sauce.',
    image: '/images/menu_bbq_platter_1793347035844.jpg',
    portionGuide: 'Served with Seasoned Fries',
    samplePrice: 'Sample / Illustrative',
  },
  {
    id: 'club-sandwich-platter',
    name: 'Grand Three-Layer Club Sandwich',
    category: 'Fast Food',
    description: 'Toasted bread loaded with shredded spiced chicken, egg omelet, cheddar cheese, sliced tomato, and creamy herb dressing.',
    image: '/images/hero_pakistani_dining_1793347034225.jpg',
    portionGuide: '4 Cut Quarters with Fries',
    samplePrice: 'Sample / Illustrative',
  },
  {
    id: 'punjabi-sweet-lassi',
    name: 'Traditional Punjabi Sweet Lassi',
    category: 'Drinks',
    description: 'Thick hand-churned whole milk yogurt lassi topped with fresh malai cream and a dash of cardamom.',
    image: '/images/hero_pakistani_dining_1793347034225.jpg',
    badge: 'Chinioti Favorite',
    portionGuide: 'Tall Clay Tumbler',
    samplePrice: 'Sample / Illustrative',
  },
  {
    id: 'karak-doodh-patti',
    name: 'Karak Doodh Patti Chai & Green Tea',
    category: 'Drinks',
    description: 'Simmered rich buffalo milk tea with green cardamom, or traditional Peshawari green tea infused with crushed mint leaves.',
    image: '/images/dining_private_room_1793347037496.jpg',
    portionGuide: 'Served Fresh',
    samplePrice: 'Sample / Illustrative',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Grand Banquet Table',
    category: 'Dining',
    image: '/images/hero_pakistani_dining_1793347034225.jpg',
    description: 'Lavish spread of simmering karahi, biryani, and tandoori breads for family dinners.',
  },
  {
    id: 'gal-2',
    title: 'Wok-Seared Mutton Karahi',
    category: 'Kitchen',
    image: '/images/menu_special_karahi_1793347035084.jpg',
    description: 'Prepared live to order with fresh tomatoes, ginger, and authentic spices.',
  },
  {
    id: 'gal-3',
    title: 'Charcoal BBQ Mastercraft',
    category: 'BBQ',
    image: '/images/menu_bbq_platter_1793347035844.jpg',
    description: 'Smoky seekh kebabs and tender boti grilled over open charcoal braziers.',
  },
  {
    id: 'gal-4',
    title: 'Aromatic Handi Dum Biryani',
    category: 'Specialties',
    image: '/images/menu_sindhi_biryani_1793347037195.jpg',
    description: 'Slow-dum steamed basmati rice with fragrant saffron and marinated tender cuts.',
  },
  {
    id: 'gal-5',
    title: 'Private Family Dining Hall',
    category: 'Ambiance',
    image: '/images/dining_private_room_1793347037496.jpg',
    description: 'Peaceful and respectful private dining rooms designed specifically for families.',
  },
];
