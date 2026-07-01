export interface Suite {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  areaSqFt: number;
  guests: number;
  bed: string;
  view: string;
  description: string;
  image: string;
  gallery: string[];
  amenities: string[];
  highlights: string[];
  floorPlanNote: string;
  isFeatured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'suites' | 'dining' | 'spa' | 'architecture' | 'pools';
  image: string;
  caption: string;
  location: string;
  specs?: string;
}

export interface DiningVenue {
  id: string;
  name: string;
  chef: string;
  accolade: string;
  cuisine: string;
  dressCode: string;
  description: string;
  image: string;
  hours: string;
  tastingMenu: { course: string; name: string; description: string; pairing: string }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: string;
  description: string;
  image: string;
}

export const DESTINATIONS = [
  {
    id: 'amalfi',
    name: 'Aurelia Amalfi Sanctuary',
    location: 'Ravello Cliffs, Italy',
    temp: '24°C',
    weather: 'Sunny & Crisp Breeze',
    tagline: 'Suspended between azure Mediterranean skies and dramatic cliffs.'
  },
  {
    id: 'kyoto',
    name: 'Aurelia Kyoto Imperial Retreat',
    location: 'Arashiyama Bamboo Forest, Japan',
    temp: '18°C',
    weather: 'Tranquil Bamboo Mist',
    tagline: 'An architectural tribute to ancient Zen gardens and thermal spring baths.'
  },
  {
    id: 'alps',
    name: 'Aurelia Alpine Chalet Reserve',
    location: 'St. Moritz, Switzerland',
    temp: '4°C',
    weather: 'Snow-Capped Peaks',
    tagline: 'Ski-in/ski-out ultra-luxury sanctuary warmed by roaring alpine stone hearths.'
  }
];

export const SUITES: Suite[] = [
  {
    id: 'penthouse-imperial',
    name: 'The Imperial Penthouse Villa',
    subtitle: 'Panoramic Cliffside Infinity & Private Butler',
    price: 3450,
    areaSqFt: 3800,
    guests: 4,
    bed: '2x King California Luxury',
    view: '270° Unobstructed Mediterranean Sea',
    description: 'Our crown jewel residence occupies the entire top level of the cliffside sanctuary. Featuring a private heated infinity pool extending over the Mediterranean, private elevator access, a dedicated 24/7 royal butler, and custom Italian marble soaking baths.',
    image: 'https://images.pexels.com/photos/27626174/pexels-photo-27626174.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400',
    gallery: [
      'https://images.pexels.com/photos/27626174/pexels-photo-27626174.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400',
      'https://images.pexels.com/photos/26859049/pexels-photo-26859049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400',
      'https://images.pexels.com/photos/29289153/pexels-photo-29289153.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400',
      'https://images.pexels.com/photos/26729558/pexels-photo-26729558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400'
    ],
    amenities: [
      'Private 14m Heated Infinity Pool',
      '24/7 Dedicated Royal Butler & Chef',
      'Bang & Olufsen Acoustic System',
      'Curated Rare Vintage Wine Cellar',
      'Private Heliport Direct Transfer',
      'Custom Diptyque & Acqua di Parma Fragrances'
    ],
    highlights: ['Private Infinity Pool', 'Two En-suite Bathrooms', 'Complimentary Champagne Bar'],
    floorPlanNote: 'Level 5 • Duplex Layout with 1,200 sq.ft Veranda Terrace',
    isFeatured: true
  },
  {
    id: 'cliffside-aurelia',
    name: 'Aurelia Cliffside Sanctuary Suite',
    subtitle: 'Private Plunge Pool & Sunset Veranda',
    price: 1950,
    areaSqFt: 1850,
    guests: 2,
    bed: '1x King Artisan Canopy',
    view: 'Panoramic Sunset Horizon View',
    description: 'Designed for romantic seclusion, this expansive suite features hand-finished stone walls, soaring vaulted ceilings, and a private plunge pool carved into the ancient rock face overlooking pristine coastal waters.',
    image: 'https://images.pexels.com/photos/26859049/pexels-photo-26859049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400',
    gallery: [
      'https://images.pexels.com/photos/26859049/pexels-photo-26859049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400',
      'https://images.pexels.com/photos/7368344/pexels-photo-7368344.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400',
      'https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400'
    ],
    amenities: [
      'Private Cliffside Plunge Jacuzzi',
      'Hand-crafted Italian Egyptian Cotton Bedding',
      'Freestanding Carrara Marble Tub',
      'Daily Champagne Sunset Aperitivo',
      'Smart Concierge Tablet Control'
    ],
    highlights: ['Sunset Facing Veranda', 'Indoor/Outdoor Rain Shower', 'Complimentary Yacht Excursion Pass'],
    floorPlanNote: 'Level 3 • Open Studio Concept with Flowing Solarium',
    isFeatured: true
  },
  {
    id: 'royal-ocean-pavilion',
    name: 'The Royal Ocean Pavilion',
    subtitle: 'Overwater Privacy & Glass Bottom Atrium',
    price: 2400,
    areaSqFt: 2200,
    guests: 3,
    bed: '1x Master King + Daybed',
    view: '360° Lagoon & Coastline',
    description: 'Step directly from your private sundeck into crystal-clear turquoise waters. Crafted with teakwood decks and structural glass flooring that illuminates marine life beneath you.',
    image: 'https://images.pexels.com/photos/29000312/pexels-photo-29000312.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400',
    gallery: [
      'https://images.pexels.com/photos/29000312/pexels-photo-29000312.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400',
      'https://images.pexels.com/photos/35236021/pexels-photo-35236021.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400',
      'https://images.pexels.com/photos/14923415/pexels-photo-14923415.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400'
    ],
    amenities: [
      'Direct Private Lagoon Access',
      'Overwater Hammock & Sundeck Loungers',
      'Personal Butler On Call',
      'Private Outdoor Spa Treatment Cabana',
      'Bespoke Silk Yukata Robes'
    ],
    highlights: ['Direct Water Access', 'Glass Atrium Floor', 'Daily Gourmet Breakfast Included'],
    floorPlanNote: 'Private Pier Wing • Independent Standalone Structure'
  },
  {
    id: 'executive-zen-suite',
    name: 'Executive Zen Sanctuary Suite',
    subtitle: 'Mineral Onsen Bath & Courtyard Garden',
    price: 1450,
    areaSqFt: 1350,
    guests: 2,
    bed: '1x King Bespoke Tatami Luxe',
    view: 'Private Japanese Moss Garden',
    description: 'A masterpiece of serenity and architectural poise. Features a private indoor-outdoor volcanic mineral onsen soaking bath surrounded by whispering bamboo and curated stone sculpture.',
    image: 'https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400',
    gallery: [
      'https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400'
    ],
    amenities: [
      'Private Heated Hinoki Wood Onsen Tub',
      'Traditional Tea Ceremony Alcove',
      'Aromatic Cedar Wood Interiors',
      'Complimentary Airport Limousine Transfer',
      'High-speed Fiber Satellite WiFi'
    ],
    highlights: ['Private Zen Garden', 'Hinoki Wood Onsen Tub', 'Matcha & Confectionery Welcome'],
    floorPlanNote: 'Sanctuary Garden Level • Ground Floor Retreat'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'The Imperial Grand Hall',
    category: 'architecture',
    image: 'https://images.pexels.com/photos/33803745/pexels-photo-33803745.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800',
    caption: 'Arching colonnades crafted from limestone, reflecting centuries of European palatial heritage mixed with contemporary lighting design.',
    location: 'Main Colonnade Wing',
    specs: 'Ceiling Height: 12 Meters • Architectural Award Winner'
  },
  {
    id: 'g-2',
    title: 'Cliffside Infinity Edge at Sunset',
    category: 'pools',
    image: 'https://images.pexels.com/photos/29289153/pexels-photo-29289153.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800',
    caption: 'Where the horizon dissolves into the sapphire sea. Temperature-controlled mineral water maintained at an invigorating 29°C year-round.',
    location: 'The Aurelia Terrace',
    specs: 'Length: 45 Meters • Built into Coastal Rock Face'
  },
  {
    id: 'g-3',
    title: 'L’Orangerie • Michelin 3-Star Ambiance',
    category: 'dining',
    image: 'https://images.pexels.com/photos/34723813/pexels-photo-34723813.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800',
    caption: 'Intimate candlelit dining beneath crystal chandeliers, serving hyper-local ingredients paired with rare Grand Cru vintages.',
    location: 'L’Orangerie Gastronomic Hall',
    specs: 'Chef: Marco Valli • Michelin Guide 3 Stars'
  },
  {
    id: 'g-4',
    title: 'Imperial Penthouse Ocean Bedchamber',
    category: 'suites',
    image: 'https://images.pexels.com/photos/27626174/pexels-photo-27626174.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800',
    caption: 'Floor-to-ceiling retractable glass doors open to uninterrupted sea breeze and private sundecks.',
    location: 'Level 5 Imperial Penthouse',
    specs: 'Bedding: Frette 1,000 Thread Count Linen'
  },
  {
    id: 'g-5',
    title: 'Sanctuary Hydrotherapy Baths',
    category: 'spa',
    image: 'https://images.pexels.com/photos/14036253/pexels-photo-14036253.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800',
    caption: 'Submerged vitality pools enriched with Dead Sea salts and Swiss alpine herbal infusions designed to restore holistic cellular equilibrium.',
    location: 'The Aurelia Spa Pavilion',
    specs: 'Water Treatments • Private Steam Suites'
  },
  {
    id: 'g-6',
    title: 'Private Champagne Sommelier Cellar',
    category: 'dining',
    image: 'https://images.pexels.com/photos/12181763/pexels-photo-12181763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800',
    caption: 'Home to over 4,500 rare bottles including pre-war Bordeaux vintages and artisan small-batch grower Champagnes.',
    location: 'Subterranean Vault Level -1',
    specs: 'Private Tasting Capacity: 8 Discerning Guests'
  },
  {
    id: 'g-7',
    title: 'The Solarium Corridor',
    category: 'architecture',
    image: 'https://images.pexels.com/photos/26729558/pexels-photo-26729558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800',
    caption: 'Polished Italian travertine marble corridors illuminated by natural daylight skylights that guide guests to their private sanctuaries.',
    location: 'West Wing Residence',
    specs: 'Material: Travertine & Hand-forged Bronze'
  },
  {
    id: 'g-8',
    title: 'Overwater Lagoon Relaxation Sundeck',
    category: 'pools',
    image: 'https://images.pexels.com/photos/35236021/pexels-photo-35236021.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800',
    caption: 'Private cabanas outfitted with plush daybeds and personalized refreshment coolers replenished hourly with iced organic coconut and berries.',
    location: 'Lagoon Club Pavilion',
    specs: 'Exclusive for Suite & Villa Guests'
  },
  {
    id: 'g-9',
    title: 'Cliffside Plunge Pool Terrace',
    category: 'suites',
    image: 'https://images.pexels.com/photos/26859049/pexels-photo-26859049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800',
    caption: 'Unwind in complete seclusion with your own heated hydro-massage Jacuzzi looking out over romantic sunset horizons.',
    location: 'Cliffside Suite Veranda',
    specs: 'Heated to 38°C • Automated Privacy Shades'
  },
  {
    id: 'g-10',
    title: 'Evening Sunset Over Coastal Sanctuary',
    category: 'pools',
    image: 'https://images.pexels.com/photos/23696832/pexels-photo-23696832.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800',
    caption: 'As dusk settles over the resort, torch-lit paths and ambient reflections transform the property into a magical nighttime retreat.',
    location: 'Coastal Promenade',
    specs: 'Twilight Ambiance & Acoustic Classical Guitar'
  }
];

export const DINING_VENUES: DiningVenue[] = [
  {
    id: 'lorangerie',
    name: 'L’Orangerie Gastronomy',
    chef: 'Marco Valli (3 Michelin Stars)',
    accolade: 'Michelin Guide 2026 • 3 Stars & Green Clover',
    cuisine: 'Modern Mediterranean Contemporary',
    dressCode: 'Elegant Formal / Cocktail Attire',
    description: 'An unforgettable culinary voyage celebrating wild Mediterranean seafood, organic estate-grown herbs, and vanguard modern European techniques.',
    image: 'https://images.pexels.com/photos/34723813/pexels-photo-34723813.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    hours: 'Dinner: 18:30 – 23:00 (Reservations Required)',
    tastingMenu: [
      { course: 'Amuse-Bouche', name: 'Alaskan King Crab Tartlet', description: 'Yuzu pearl, Sicilian blood orange foam, Oscietra caviar', pairing: 'Dom Pérignon P2 2004' },
      { course: 'First Course', name: 'Hand-Dived Amalfi Scallop', description: 'Caramelized cauliflower purée, black winter truffle jus, toasted hazelnuts', pairing: 'Corton-Charlemagne Grand Cru 2018' },
      { course: 'Main Entrée', name: 'Dry-Aged Wagyu Tenderloin A5', description: 'Morel mushrooms, bone marrow emulsion, fondant potato chartreuse', pairing: 'Château Margaux Premier Grand Cru 2012' },
      { course: 'Grand Dessert', name: 'Gold Leaf Valrhona Sphere', description: 'Madagascar vanilla bean gelato, warm salted caramel espresso infusion', pairing: 'Château d’Yquem Sauternes 2015' }
    ]
  },
  {
    id: 'azure-terrace',
    name: 'Azure Sunset Lounge & Bar',
    chef: 'Elena Rostova',
    accolade: 'World’s 50 Best Bars Top Selection',
    cuisine: 'Artisanal Tapas & Botanical Cocktails',
    dressCode: 'Smart Casual Resort Wear',
    description: 'Perched 150 meters above crashing sapphire waves. Sip mixologist-crafted cocktails infused with cliffside lemon verbena while acoustic jazz serenades sunset.',
    image: 'https://images.pexels.com/photos/24433378/pexels-photo-24433378.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    hours: 'Open Daily: 12:00 – 01:00 AM',
    tastingMenu: [
      { course: 'Signature Cocktail', name: 'The Aurelia Golden Sunset', description: 'Empress Gin, saffron cordial, organic Amalfi lemon, champagne mist', pairing: 'Served with Truffle Marcona Almonds' },
      { course: 'Tapas Plate', name: 'Bluefin Tuna Carpaccio', description: 'Ponzu gel, crispy capers, micro arugula, toasted brioche crisps', pairing: 'Franciacorta Riserva' }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'yacht-charter',
    title: 'Private Riva Yacht Riviera Exploration',
    category: 'Marine Excursions',
    duration: 'Full Day or Sunset Half-Day',
    price: 'From $2,800',
    description: 'Set sail along secluded emerald coves aboard our private 52-foot Riva Yacht. Includes personal skipper, champagne picnic by Chef Marco, and snorkeling gear.',
    image: 'https://images.pexels.com/photos/35236021/pexels-photo-35236021.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900'
  },
  {
    id: 'heli-tour',
    title: 'Alpine & Coastal Helicopter Summit',
    category: 'Aviation Excursions',
    duration: '90 Minutes',
    price: 'From $1,900',
    description: 'Lift off directly from our private helipad for breathtaking aerial vistas over coastal cliffs and distant peaks. Concludes with a champagne toast at a remote mountaintop.',
    image: 'https://images.pexels.com/photos/29289153/pexels-photo-29289153.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900'
  },
  {
    id: 'sanctuary-spa',
    title: '24-Karat Gold & Mineral Immersion Ritual',
    category: 'Holistic Spa',
    duration: '180 Minutes',
    price: 'From $650',
    description: 'An indulgent thermal spa journey incorporating gold leaf exfoliation, hot lava stone massage, and private sound bath therapy in our cliffside cabana.',
    image: 'https://images.pexels.com/photos/14036253/pexels-photo-14036253.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900'
  }
];

export const CURATED_ADDONS = [
  { id: 'transfer-heli', title: 'VIP Helicopter Direct Transfer from Airport', price: 1200, icon: 'Plane', desc: 'Arrive in 18 minutes directly at our resort helipad.' },
  { id: 'welcome-champagne', title: 'Dom Pérignon Vintage & Royal Caviar Welcome', price: 550, icon: 'Wine', desc: 'Waiting chilled in your suite upon arrival.' },
  { id: 'butler-unpacking', title: 'Executive Butler Garment Steaming & Unpacking', price: 0, icon: 'Briefcase', desc: 'Complimentary for all reserved VIP Suites.' },
  { id: 'sunset-yacht', title: 'Private 2-Hour Sunset Riva Yacht Cruise', price: 850, icon: 'Anchor', desc: 'Includes gourmet champagne canapés for two.' }
];

export const TESTIMONIALS = [
  {
    id: '1',
    quote: 'Aurelia redefined our perception of modern luxury. From the private helicopter arrival to the flawless 3-star dining at L’Orangerie, every detail felt handcrafted for us.',
    author: 'Lord & Lady Harrington',
    role: 'VIP Member Since 2022 • London',
    rating: 5
  },
  {
    id: '2',
    quote: 'As an executive retreat organizer for C-suite tech leaders, frictionless privacy is non-negotiable. Aurelia provided flawless security, ultra-fast fiber, and unmatched serene architecture.',
    author: 'Marcello Vance',
    role: 'Managing Partner, Venture Capital Summit',
    rating: 5
  },
  {
    id: '3',
    quote: 'Our destination wedding on the Aurelia Cliffside Veranda brought our guests to tears. The visual storytelling of the resort is pure cinematic perfection.',
    author: 'Elena & Julian Rostova',
    role: 'Destination Wedding Guests • Zurich',
    rating: 5
  }
];
