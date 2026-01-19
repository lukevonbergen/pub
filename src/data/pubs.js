// Partners & Pubs - Venue Data
export const pubs = [
  {
    id: 'the-old-swan',
    name: 'The Old Swan',
    slug: 'the-old-swan',
    externalUrl: 'https://theoldswanbeaconsfield.co.uk',
    tagline: 'A charming countryside pub in the heart of Beaconsfield',
    address: {
      line1: '60 London End',
      city: 'Beaconsfield',
      postcode: 'HP9 2JD',
      country: 'England'
    },
    coordinates: { lat: 51.602117, lng: -0.632626 },
    phone: '01234 567890',
    email: 'hello@theoldswan.co.uk',
    accentColor: '#5B7553', // Forest green
    heroImage: 'https://images.unsplash.com/photo-1555658636-6e4a36218be7?q=80&w=2070&auto=format&fit=crop',
    description: 'Nestled in the picturesque town of Beaconsfield, The Old Swan offers traditional British hospitality with a contemporary twist. Our cosy bar and restaurant serves locally-sourced seasonal dishes alongside a fine selection of ales, wines, and spirits.',
    longDescription: 'Step through our doors and discover a pub that perfectly balances heritage charm with modern comfort. The Old Swan has been welcoming guests for over two centuries, and today continues that tradition with the same warmth and dedication to quality. Our kitchen team works closely with local suppliers to create seasonal menus that celebrate the best British produce, while our bar offers an expertly curated selection of cask ales, fine wines, and artisan spirits.',
    features: ['Beer Garden', 'Sunday Roast', 'Private Dining', 'Dog Friendly'],
    highlights: [
      { title: 'Award-Winning Garden', description: 'Our secluded beer garden has been voted best in Buckinghamshire' },
      { title: 'Sunday Roasts', description: 'Legendary roasts with all the trimmings, served noon until late' },
      { title: 'Private Dining', description: 'Our Oak Room seats up to 24 guests for special occasions' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1555658636-6e4a36218be7?q=80&w=2070&auto=format&fit=crop', alt: 'Pub exterior' },
      { url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1974&auto=format&fit=crop', alt: 'Cosy interior' },
      { url: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&w=2070&auto=format&fit=crop', alt: 'Beer taps' },
      { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop', alt: 'Food dish' }
    ],
    testimonial: {
      quote: "The Old Swan is everything a proper pub should be - great beer, wonderful food, and that unmistakable feeling of being welcomed home.",
      author: "The Good Pub Guide"
    },
    hours: {
      'Monday - Thursday': '11:00 - 23:00',
      'Friday - Saturday': '11:00 - 00:00',
      'Sunday': '12:00 - 22:30'
    },
    kitchenHours: {
      'Monday - Saturday': '12:00 - 21:00',
      'Sunday': '12:00 - 20:00'
    },
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.5!2d-0.6374!3d51.6036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM2JzEzLjAiTiAwwrAzOCcxNC42Ilc!5e0!3m2!1sen!2suk!4v1234567890'
  },
  {
    id: 'annies-freehouse',
    name: "Annie's Freehouse",
    slug: 'annies-freehouse',
    tagline: 'Your friendly neighbourhood pub in North Finchley',
    address: {
      line1: '168 Ballards Lane',
      city: 'London',
      postcode: 'N3 2PA',
      country: 'England'
    },
    coordinates: { lat: 51.605026, lng: -0.188021 },
    phone: '020 8123 4567',
    email: 'hello@anniesfreehouse.co.uk',
    accentColor: '#8B4513', // Saddle brown
    heroImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop',
    description: "Annie's Freehouse brings the warmth and character of a traditional pub to the heart of North Finchley. With its welcoming atmosphere, great selection of drinks, and hearty food, it's the perfect spot for a casual catch-up or a special night out.",
    longDescription: "Named after the legendary Annie herself, this freehouse has been the beating heart of North Finchley for decades. We're proud to be independent, which means we can offer you an ever-changing selection of the finest cask ales, craft beers, and wines from around the world. Our kitchen serves up honest, hearty pub food that keeps locals coming back for more.",
    features: ['Live Sports', 'Quiz Night', 'Function Room', 'Real Ales'],
    highlights: [
      { title: 'Famous Quiz Nights', description: 'Every Wednesday - North London\'s most popular pub quiz' },
      { title: 'Big Screen Sports', description: 'All major sporting events shown live with great atmosphere' },
      { title: 'Function Room', description: 'Host your event in our private space for up to 60 guests' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop', alt: 'Bar area' },
      { url: 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?q=80&w=2072&auto=format&fit=crop', alt: 'Pub atmosphere' },
      { url: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2029&auto=format&fit=crop', alt: 'Beer selection' },
      { url: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop', alt: 'Restaurant area' }
    ],
    testimonial: {
      quote: "A proper local that hasn't forgotten what pubs are all about. The quiz night is legendary!",
      author: "Time Out London"
    },
    hours: {
      'Monday - Thursday': '12:00 - 23:00',
      'Friday - Saturday': '12:00 - 00:00',
      'Sunday': '12:00 - 22:30'
    },
    kitchenHours: {
      'Monday - Saturday': '12:00 - 21:00',
      'Sunday': '12:00 - 20:00'
    },
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.5!2d-0.1823!3d51.5983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM1JzUzLjkiTiAwwrAxMCc1Ni4zIlc!5e0!3m2!1sen!2suk!4v1234567890'
  },
  {
    id: 'twomeys-freehouse',
    name: "Twomey's Freehouse",
    slug: 'twomeys-freehouse',
    tagline: 'A lively Irish-inspired pub in Wembley',
    address: {
      line1: '278 Preston Road',
      city: 'Wembley',
      postcode: 'HA3 0QA',
      country: 'England'
    },
    coordinates: { lat: 51.573067, lng: -0.294293 },
    phone: '020 8234 5678',
    email: 'hello@twomeysfreehouse.co.uk',
    accentColor: '#1E5631', // Irish green
    heroImage: 'https://images.unsplash.com/photo-1594650542433-c3f1e07a4e5f?q=80&w=2070&auto=format&fit=crop',
    description: "Twomey's Freehouse captures the spirit of Irish hospitality right here in Wembley. Whether you're dropping in for a pint of Guinness, watching the big match with friends, or enjoying our classic pub grub, you'll always find a warm welcome.",
    longDescription: "Twomey's is where Irish charm meets London vibrancy. Our pub is a celebration of everything we love about Irish hospitality - the craic, the music, the perfectly poured pint. On match days, there's nowhere better to soak up the atmosphere, and our regular live music sessions have become legendary in the local area. Come for the Guinness, stay for the welcome.",
    features: ['Live Sports', 'Guinness on Tap', 'Live Music', 'Beer Garden'],
    highlights: [
      { title: 'Perfect Pint', description: 'Award-winning Guinness - served the proper way' },
      { title: 'Live Music', description: 'Traditional Irish sessions every Friday and Saturday' },
      { title: 'Match Day HQ', description: 'The best atmosphere for watching football and rugby' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1594650542433-c3f1e07a4e5f?q=80&w=2070&auto=format&fit=crop', alt: 'Traditional bar' },
      { url: 'https://images.unsplash.com/photo-1574447215475-bfa4b5fe68fd?q=80&w=2070&auto=format&fit=crop', alt: 'Guinness pour' },
      { url: 'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?q=80&w=2070&auto=format&fit=crop', alt: 'Live music' },
      { url: 'https://images.unsplash.com/photo-1575037614876-c38a4f44f5b8?q=80&w=2070&auto=format&fit=crop', alt: 'Beer garden' }
    ],
    testimonial: {
      quote: "The closest you'll get to Dublin without leaving London. Proper Irish hospitality at its finest.",
      author: "Evening Standard"
    },
    hours: {
      'Monday - Thursday': '11:00 - 23:00',
      'Friday - Saturday': '11:00 - 01:00',
      'Sunday': '12:00 - 23:00'
    },
    kitchenHours: {
      'Monday - Saturday': '12:00 - 21:30',
      'Sunday': '12:00 - 20:30'
    },
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.5!2d-0.3001!3d51.5715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM0JzE3LjQiTiAwwrAxOCcwMC40Ilc!5e0!3m2!1sen!2suk!4v1234567890'
  },
  {
    id: 'annie-twomeys',
    name: "Annie Twomey's",
    slug: 'annie-twomeys',
    tagline: 'Where tradition meets a warm welcome in Southgate',
    address: {
      line1: '110-112 Chase Side',
      city: 'Southgate',
      postcode: 'N14 5PH',
      country: 'England'
    },
    coordinates: { lat: 51.633508, lng: -0.130934 },
    phone: '020 8345 6789',
    email: 'hello@annietwomeys.co.uk',
    accentColor: '#722F37', // Wine red
    heroImage: 'https://images.unsplash.com/photo-1571024057263-cb5bac78c9d8?q=80&w=2071&auto=format&fit=crop',
    description: "Annie Twomey's is a beloved neighbourhood pub serving Southgate and the surrounding area. With its blend of traditional charm and modern comforts, it's the perfect place to enjoy great food, quality drinks, and good company.",
    longDescription: "Annie Twomey's combines the best of traditional pub culture with contemporary dining. Our historic building has been lovingly restored, preserving original features while creating a warm, inviting space for the modern guest. The kitchen team takes pride in elevating classic pub dishes with quality ingredients and skilled preparation. Our garden terrace is a hidden gem for summer evenings.",
    features: ['Sunday Roast', 'Private Hire', 'Live Sports', 'Garden Terrace'],
    highlights: [
      { title: 'Garden Terrace', description: 'Our secluded terrace is perfect for alfresco dining' },
      { title: 'Private Events', description: 'Exclusive hire available for celebrations and gatherings' },
      { title: 'Sunday Traditions', description: 'Our roasts are worth the trip - booking essential' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1571024057263-cb5bac78c9d8?q=80&w=2071&auto=format&fit=crop', alt: 'Restaurant interior' },
      { url: 'https://images.unsplash.com/photo-1560053608-13721e0d69e8?q=80&w=2070&auto=format&fit=crop', alt: 'Outdoor terrace' },
      { url: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop', alt: 'Sunday roast' },
      { url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop', alt: 'Wine selection' }
    ],
    testimonial: {
      quote: "A warm, welcoming pub that serves food well above the usual standard. The garden is a real find.",
      author: "North London Foodie"
    },
    hours: {
      'Monday - Thursday': '11:00 - 23:00',
      'Friday - Saturday': '11:00 - 00:00',
      'Sunday': '12:00 - 22:30'
    },
    kitchenHours: {
      'Monday - Saturday': '12:00 - 21:00',
      'Sunday': '12:00 - 20:00'
    },
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.5!2d-0.1285!3d51.6322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM3JzU1LjkiTiAwwrAwNyc0Mi42Ilc!5e0!3m2!1sen!2suk!4v1234567890'
  },
  {
    id: 'the-church-inn',
    name: 'The Church Inn',
    slug: 'the-church-inn',
    tagline: 'A welcoming pub in the heart of St Mellons, Cardiff',
    address: {
      line1: 'Newport Road',
      city: 'St Mellons, Cardiff',
      postcode: 'CF3 5UN',
      country: 'Wales'
    },
    coordinates: { lat: 51.524971, lng: -3.112739 },
    phone: '029 2123 4567',
    email: 'hello@thechurchinn.co.uk',
    accentColor: '#C41E3A', // Welsh red
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032&auto=format&fit=crop',
    description: "The Church Inn has been a beloved gathering place for the St Mellons community for generations. We serve classic pub favourites alongside a carefully curated selection of Welsh and British ales, all in a warm, welcoming environment.",
    longDescription: "The Church Inn stands proud as a cornerstone of the St Mellons community. For generations, locals have gathered here to celebrate, commiserate, and simply enjoy good company. We honour that tradition while bringing fresh ideas to our menus and drinks selection. Our Sunday carvery has become a local institution, and we take special pride in showcasing Welsh ales and produce.",
    features: ['Cask Ales', 'Family Friendly', 'Beer Garden', 'Sunday Carvery'],
    highlights: [
      { title: 'Sunday Carvery', description: 'All-you-can-eat carvery with Welsh beef and lamb' },
      { title: 'Welsh Ales', description: 'Celebrating the best breweries Wales has to offer' },
      { title: 'Family Welcome', description: 'Dedicated children\'s menu and play area in the garden' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032&auto=format&fit=crop', alt: 'Traditional pub front' },
      { url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop', alt: 'Cask ales' },
      { url: 'https://images.unsplash.com/photo-1529543544277-750e4b20f835?q=80&w=2070&auto=format&fit=crop', alt: 'Carvery roast' },
      { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', alt: 'Garden area' }
    ],
    testimonial: {
      quote: "A proper community pub with heart. The carvery is outstanding value and the welcome is always genuine.",
      author: "Wales Online"
    },
    hours: {
      'Monday - Thursday': '11:00 - 23:00',
      'Friday - Saturday': '11:00 - 00:00',
      'Sunday': '12:00 - 22:30'
    },
    kitchenHours: {
      'Monday - Saturday': '12:00 - 21:00',
      'Sunday': '12:00 - 20:00'
    },
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.5!2d-3.1015!3d51.5196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMxJzEwLjYiTiAzwrAwNicwNS40Ilc!5e0!3m2!1sen!2suk!4v1234567890'
  },
  {
    id: 'the-church',
    name: 'The Church',
    slug: 'the-church',
    tagline: 'Contemporary dining in Llanishen, Cardiff',
    address: {
      line1: 'Tyr Glas Road',
      city: 'Llanishen, Cardiff',
      postcode: 'CF14 5EH',
      country: 'Wales'
    },
    coordinates: { lat: 51.52837, lng: -3.191461 },
    phone: '029 2234 5678',
    email: 'hello@thechurch-llanishen.co.uk',
    accentColor: '#2E4057', // Slate blue
    heroImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop',
    description: "The Church offers a modern take on pub dining in the vibrant Llanishen community. Our menu showcases the best of Welsh produce, complemented by an excellent selection of wines, craft beers, and classic cocktails.",
    longDescription: "The Church represents the evolution of the modern British pub. While we honour traditional values of hospitality and quality, we've created a contemporary space that's as suited to a casual dinner date as it is to a Saturday night with friends. Our chefs celebrate Welsh produce on an ever-changing seasonal menu, and our drinks selection spans everything from craft beers to handcrafted cocktails.",
    features: ['Craft Beer', 'Wine Selection', 'Private Dining', 'Outdoor Seating'],
    highlights: [
      { title: 'Welsh Produce', description: 'Seasonal menus celebrating the best local ingredients' },
      { title: 'Craft & Cocktails', description: 'Extensive selection of craft beers and signature cocktails' },
      { title: 'Contemporary Space', description: 'Stylish interiors perfect for any occasion' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop', alt: 'Modern interior' },
      { url: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2072&auto=format&fit=crop', alt: 'Cocktails' },
      { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop', alt: 'Fine dining dish' },
      { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', alt: 'Restaurant space' }
    ],
    testimonial: {
      quote: "The Church has raised the bar for pub dining in Cardiff. Sophisticated but never stuffy.",
      author: "Cardiff Life Magazine"
    },
    hours: {
      'Monday - Thursday': '11:00 - 23:00',
      'Friday - Saturday': '11:00 - 00:00',
      'Sunday': '12:00 - 22:30'
    },
    kitchenHours: {
      'Monday - Saturday': '12:00 - 21:30',
      'Sunday': '12:00 - 20:00'
    },
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.5!2d-3.1891!3d51.5297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMxJzQ2LjkiTiAzwrAxMScyMC44Ilc!5e0!3m2!1sen!2suk!4v1234567890'
  },
  {
    id: 'the-three-horse-shoes',
    name: 'The Three Horse Shoes',
    slug: 'the-three-horse-shoes',
    tagline: 'A traditional country pub near High Wycombe',
    address: {
      line1: 'Treadway Road',
      city: 'High Wycombe',
      postcode: 'HP10 9PG',
      country: 'England'
    },
    coordinates: { lat: 51.601539, lng: -0.707005 },
    phone: '01234 678901',
    email: 'hello@threehorseshoes.co.uk',
    accentColor: '#704214', // Sepia brown
    heroImage: 'https://images.unsplash.com/photo-1595257841889-eca2678454e2?q=80&w=2070&auto=format&fit=crop',
    description: "The Three Horse Shoes is a quintessential English country pub set in the beautiful Chiltern Hills. With its cosy fireplaces, traditional decor, and award-winning menu, it's the perfect destination for a leisurely lunch or evening meal.",
    longDescription: "Tucked away in the rolling Chiltern Hills, The Three Horse Shoes is everything a country pub should be. Log fires crackle in winter, while the expansive garden comes alive in summer. Our kitchen has won numerous awards for its take on British classics, using produce from farms within walking distance. After your meal, step out onto one of the many beautiful walks that pass our door.",
    features: ['Log Fires', 'Country Walks', 'Real Ales', 'Sunday Roast'],
    highlights: [
      { title: 'Historic Building', description: '17th century coaching inn full of original character' },
      { title: 'Chiltern Walks', description: 'Multiple footpaths pass right by our front door' },
      { title: 'Award-Winning Food', description: 'Rosette-awarded kitchen using hyper-local produce' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1595257841889-eca2678454e2?q=80&w=2070&auto=format&fit=crop', alt: 'Country pub exterior' },
      { url: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=2070&auto=format&fit=crop', alt: 'Cosy fireplace' },
      { url: 'https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=2077&auto=format&fit=crop', alt: 'Traditional British dish' },
      { url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop', alt: 'Countryside garden' }
    ],
    testimonial: {
      quote: "A gem of a country pub. The kind of place you want to linger over a long Sunday lunch.",
      author: "The Good Food Guide"
    },
    hours: {
      'Monday - Thursday': '11:00 - 23:00',
      'Friday - Saturday': '11:00 - 00:00',
      'Sunday': '12:00 - 22:00'
    },
    kitchenHours: {
      'Monday - Saturday': '12:00 - 21:00',
      'Sunday': '12:00 - 19:00'
    },
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.5!2d-0.7235!3d51.6126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM2JzQ1LjQiTiAwwrA0Myc0NC42Ilc!5e0!3m2!1sen!2suk!4v1234567890'
  }
];

export const getPubBySlug = (slug) => {
  return pubs.find(pub => pub.slug === slug);
};

export const groupInfo = {
  name: 'Partners & Pubs',
  tagline: 'A family of exceptional pubs across England & Wales',
  description: 'Partners & Pubs is a collection of carefully curated pubs, each with its own unique character and charm. From traditional country inns to vibrant city locals, we pride ourselves on offering exceptional hospitality, quality food and drink, and a warm welcome at every venue.',
  email: 'info@partnersandpubs.co.uk',
  phone: '020 7000 0000'
};
