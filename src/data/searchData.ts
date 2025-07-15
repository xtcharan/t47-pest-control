export interface SearchItem {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  url: string;
  category: 'residential' | 'commercial' | 'termite' | 'general';
  image?: string;
}

// Main search data array containing all searchable content
export const searchData: SearchItem[] = [
  // Residential Pest Control
  {
    id: 'ants',
    title: 'Ant Control',
    description: 'Professional ant control services for your home. We eliminate all types of ants including carpenter ants, sugar ants, and more.',
    keywords: ['ants', 'ant control', 'ant extermination', 'ant pest control', 'carpenter ants', 'sugar ants', 'ant infestation'],
    url: '/residential/ants',
    category: 'residential',
    image: '/ants.svg'
  },
  {
    id: 'spiders',
    title: 'Spider Control',
    description: 'Expert spider control services to remove dangerous and nuisance spiders from your home safely and effectively.',
    keywords: ['spiders', 'spider control', 'spider removal', 'spider extermination', 'redback spiders', 'huntsman spiders', 'web removal'],
    url: '/residential/spiders',
    category: 'residential',
    image: '/spiders.svg'
  },
  {
    id: 'cockroaches',
    title: 'Cockroach Control',
    description: 'Comprehensive cockroach control services to eliminate these disease-carrying pests from your home.',
    keywords: ['cockroaches', 'roaches', 'cockroach control', 'cockroach extermination', 'german cockroaches', 'american cockroaches'],
    url: '/residential/cockroaches',
    category: 'residential',
    image: '/cockroaches.svg'
  },
  {
    id: 'rodents',
    title: 'Rodent Control',
    description: 'Effective rodent control services to protect your home from rats, mice and other rodents.',
    keywords: ['rodents', 'rodent control', 'rat control', 'mice control', 'rat extermination', 'mice extermination', 'rodent infestation'],
    url: '/residential/rodents',
    category: 'residential',
    image: '/rodents.svg'
  },
  {
    id: 'rats-mice',
    title: 'Rats & Mice Control',
    description: 'Specialized control services for rats and mice, including trapping, baiting, and exclusion methods.',
    keywords: ['rats', 'mice', 'rat control', 'mice control', 'rodent control', 'rat extermination', 'mice extermination'],
    url: '/residential/rats-mice',
    category: 'residential',
    image: '/rats.svg'
  },
  {
    id: 'possums',
    title: 'Possum Control',
    description: 'Humane possum control and removal services to protect your home and garden from possum damage.',
    keywords: ['possums', 'possum control', 'possum removal', 'possum trapping', 'possum in roof', 'possum damage'],
    url: '/residential/possums',
    category: 'residential',
    image: '/possums.svg'
  },
  {
    id: 'mosquitoes',
    title: 'Mosquito Control',
    description: 'Effective mosquito control services to reduce mosquito populations around your home and prevent bites.',
    keywords: ['mosquitoes', 'mosquito control', 'mosquito treatment', 'mosquito prevention', 'mosquito bites', 'mosquito-borne diseases'],
    url: '/residential/mosquitoes',
    category: 'residential',
    image: '/mosquitoes.svg'
  },
  {
    id: 'flies',
    title: 'Fly Control',
    description: 'Professional fly control services to eliminate house flies, fruit flies, and other flying insects from your home.',
    keywords: ['flies', 'fly control', 'house flies', 'fruit flies', 'fly extermination', 'fly infestation', 'flying insects'],
    url: '/residential/flies',
    category: 'residential',
    image: '/flies.svg'
  },
  {
    id: 'bed-bugs',
    title: 'Bed Bug Control',
    description: 'Specialized bed bug control services to eliminate these persistent pests from your home and furniture.',
    keywords: ['bed bugs', 'bed bug control', 'bed bug treatment', 'bed bug extermination', 'bed bug bites', 'bed bug infestation'],
    url: '/residential/bed-bugs',
    category: 'residential',
    image: '/bed-bugs.svg'
  },
  {
    id: 'fleas',
    title: 'Flea Control',
    description: 'Effective flea control services to eliminate fleas from your home and protect your pets and family.',
    keywords: ['fleas', 'flea control', 'flea treatment', 'flea extermination', 'flea bites', 'pet fleas', 'flea infestation'],
    url: '/residential/fleas',
    category: 'residential',
    image: '/fleas.svg'
  },
  {
    id: 'wasps',
    title: 'Wasp Control',
    description: 'Professional wasp control services to safely remove wasp nests and prevent future infestations.',
    keywords: ['wasps', 'wasp control', 'wasp nest removal', 'wasp extermination', 'paper wasps', 'european wasps', 'wasp stings'],
    url: '/residential/wasps',
    category: 'residential',
    image: '/wasps.svg'
  },
  {
    id: 'bees',
    title: 'Bee Control',
    description: 'Humane bee control and relocation services to safely remove bees from your property.',
    keywords: ['bees', 'bee control', 'bee removal', 'bee relocation', 'honey bees', 'bee hive removal', 'bee swarm'],
    url: '/residential/bees',
    category: 'residential',
    image: '/bees.svg'
  },
  {
    id: 'moths',
    title: 'Moth Control',
    description: 'Effective moth control services to protect your clothing, carpets, and pantry from moth damage.',
    keywords: ['moths', 'moth control', 'clothes moths', 'pantry moths', 'moth extermination', 'moth infestation', 'moth damage'],
    url: '/residential/moths',
    category: 'residential',
    image: '/moths.svg'
  },
  {
    id: 'silverfish',
    title: 'Silverfish Control',
    description: 'Professional silverfish control services to eliminate these destructive pests from your home.',
    keywords: ['silverfish', 'silverfish control', 'silverfish extermination', 'silverfish treatment', 'silverfish infestation', 'paper-eating insects'],
    url: '/residential/silverfish',
    category: 'residential',
    image: '/silverfish.svg'
  },
  {
    id: 'bird-control',
    title: 'Bird Control',
    description: 'Humane bird control and deterrent services to protect your property from bird damage and droppings.',
    keywords: ['birds', 'bird control', 'bird deterrents', 'bird proofing', 'pigeon control', 'seagull control', 'bird netting'],
    url: '/residential/bird-control',
    category: 'residential',
    image: '/birds.svg'
  },
  {
    id: 'termites',
    title: 'Termite Control',
    description: 'Comprehensive termite control services to protect your home from destructive termite damage.',
    keywords: ['termites', 'termite control', 'termite treatment', 'termite inspection', 'termite damage', 'white ants', 'subterranean termites'],
    url: '/residential/termites',
    category: 'residential',
    image: '/termites.svg'
  },
  {
    id: 'pest-inspections',
    title: 'Pest Inspections',
    description: 'Thorough pest inspections to identify current infestations and potential pest problems in your home.',
    keywords: ['pest inspection', 'pest detection', 'pest audit', 'pest assessment', 'home inspection', 'pest report'],
    url: '/residential/pest-inspections',
    category: 'residential',
    image: '/inspection.svg'
  },
  {
    id: 'termite-inspections',
    title: 'Termite Inspections',
    description: 'Specialized termite inspections to detect termite activity and prevent costly damage to your home.',
    keywords: ['termite inspection', 'termite detection', 'termite assessment', 'termite audit', 'termite report', 'white ant inspection'],
    url: '/residential/termite-inspections',
    category: 'residential',
    image: '/termite-inspection.svg'
  },

  // Commercial Pest Control
  {
    id: 'restaurants',
    title: 'Restaurant Pest Control',
    description: 'Specialized pest control services for restaurants to maintain hygiene standards and protect your reputation.',
    keywords: ['restaurant pest control', 'food service pest control', 'commercial kitchen pest control', 'restaurant hygiene', 'food safety'],
    url: '/commercial/restaurants',
    category: 'commercial',
    image: '/restaurant.svg'
  },
  {
    id: 'schools',
    title: 'School Pest Control',
    description: 'Safe and effective pest control services for schools to protect students and staff from pests.',
    keywords: ['school pest control', 'educational facility pest control', 'classroom pest control', 'school hygiene', 'child-safe pest control'],
    url: '/commercial/schools',
    category: 'commercial',
    image: '/school.svg'
  },
  {
    id: 'hospitals',
    title: 'Hospital Pest Control',
    description: 'Specialized pest control services for healthcare facilities to maintain sterile environments and protect patients.',
    keywords: ['hospital pest control', 'healthcare facility pest control', 'medical center pest control', 'sterile environment', 'healthcare hygiene'],
    url: '/commercial/hospitals',
    category: 'commercial',
    image: '/hospitals.svg'
  },
  {
    id: 'childcare',
    title: 'Childcare Pest Control',
    description: 'Safe pest control services for childcare centers to protect children from pests and harmful chemicals.',
    keywords: ['childcare pest control', 'daycare pest control', 'preschool pest control', 'child-safe pest control', 'nursery pest control'],
    url: '/commercial/childcare',
    category: 'commercial',
    image: '/childcare.svg'
  },
  {
    id: 'food-processing',
    title: 'Food Processing Pest Control',
    description: 'Specialized pest control for food processing facilities to maintain food safety standards and prevent contamination.',
    keywords: ['food processing pest control', 'food manufacturing pest control', 'food safety', 'HACCP pest control', 'food grade pest control'],
    url: '/commercial/food-processing',
    category: 'commercial',
    image: '/food-processing.svg'
  },
  {
    id: 'retail',
    title: 'Retail Pest Control',
    description: 'Effective pest control services for retail stores to protect merchandise and maintain a positive shopping environment.',
    keywords: ['retail pest control', 'store pest control', 'shop pest control', 'commercial pest control', 'retail hygiene'],
    url: '/commercial/retail',
    category: 'commercial',
    image: '/retail.svg'
  },
  {
    id: 'hotels',
    title: 'Hotel Pest Control',
    description: 'Discreet and effective pest control services for hotels to protect your reputation and guest experience.',
    keywords: ['hotel pest control', 'accommodation pest control', 'hospitality pest control', 'bed bug control', 'hotel hygiene'],
    url: '/commercial/hotels',
    category: 'commercial',
    image: '/hotel.svg'
  },
  {
    id: 'offices',
    title: 'Office Pest Control',
    description: 'Professional pest control services for office buildings to create a pest-free working environment.',
    keywords: ['office pest control', 'commercial pest control', 'workplace pest control', 'business pest control', 'office hygiene'],
    url: '/commercial/offices',
    category: 'commercial',
    image: '/office.svg'
  },
  {
    id: 'warehouses',
    title: 'Warehouse Pest Control',
    description: 'Specialized pest control for warehouses to protect inventory and prevent pest-related damage.',
    keywords: ['warehouse pest control', 'storage facility pest control', 'industrial pest control', 'inventory protection', 'rodent control'],
    url: '/commercial/warehouses',
    category: 'commercial',
    image: '/warehouse.svg'
  },
  {
    id: 'it-centers',
    title: 'IT Center Pest Control',
    description: 'Specialized pest control for IT centers and server rooms to protect valuable equipment from pest damage.',
    keywords: ['IT center pest control', 'server room pest control', 'data center pest control', 'electronic equipment protection'],
    url: '/commercial/it-centers',
    category: 'commercial',
    image: '/it.svg'
  },
  {
    id: 'elderly-care',
    title: 'Elderly Care Pest Control',
    description: 'Safe pest control services for elderly care facilities to protect vulnerable residents from pests and chemicals.',
    keywords: ['elderly care pest control', 'aged care pest control', 'nursing home pest control', 'retirement home pest control', 'senior living pest control'],
    url: '/commercial/elderly-care',
    category: 'commercial',
    image: '/elderly.svg'
  },
  {
    id: 'gym-fitness',
    title: 'Gym & Fitness Pest Control',
    description: 'Specialized pest control for gyms and fitness centers to maintain hygiene and protect equipment.',
    keywords: ['gym pest control', 'fitness center pest control', 'sports facility pest control', 'health club pest control', 'gym hygiene'],
    url: '/commercial/gym-fitness',
    category: 'commercial',
    image: '/gym.svg'
  },
  {
    id: 'construction-sites',
    title: 'Construction Site Pest Control',
    description: 'Effective pest control for construction sites to prevent pest-related delays and damage.',
    keywords: ['construction site pest control', 'building site pest control', 'development pest control', 'pre-construction pest control'],
    url: '/commercial/construction-sites',
    category: 'commercial',
    image: '/construction.svg'
  },

  // Termite Solutions
  {
    id: 'termite-inspection',
    title: 'Termite Inspection',
    description: 'Thorough termite inspections to detect termite activity and prevent costly damage to your property.',
    keywords: ['termite inspection', 'termite detection', 'termite assessment', 'termite audit', 'termite report', 'white ant inspection'],
    url: '/termite-solutions/inspection',
    category: 'termite',
    image: '/termite-inspection.svg'
  },
  {
    id: 'termite-treatment',
    title: 'Termite Treatment',
    description: 'Effective termite treatment solutions to eliminate existing termite infestations and protect your property.',
    keywords: ['termite treatment', 'termite control', 'termite extermination', 'termite elimination', 'termite colony destruction'],
    url: '/termite-solutions/treatment',
    category: 'termite',
    image: '/termite-treatment.svg'
  },
  {
    id: 'termite-prevention',
    title: 'Termite Prevention',
    description: 'Proactive termite prevention measures to protect your property from future termite infestations.',
    keywords: ['termite prevention', 'termite protection', 'termite proofing', 'termite deterrent', 'termite barrier'],
    url: '/termite-solutions/prevention',
    category: 'termite',
    image: '/termite-prevention.svg'
  },
  {
    id: 'termite-damage-repair',
    title: 'Termite Damage Repair',
    description: 'Professional repair services for termite-damaged structures to restore the integrity of your property.',
    keywords: ['termite damage repair', 'termite damage restoration', 'structural repair', 'timber replacement', 'termite damage assessment'],
    url: '/termite-solutions/damage-repair',
    category: 'termite',
    image: '/termite-repair.svg'
  },
  {
    id: 'pre-purchase-inspection',
    title: 'Pre-Purchase Termite Inspection',
    description: 'Comprehensive termite inspections for property buyers to identify potential termite issues before purchase.',
    keywords: ['pre-purchase inspection', 'building inspection', 'property inspection', 'termite inspection', 'home buyer inspection'],
    url: '/termite-solutions/pre-purchase',
    category: 'termite',
    image: '/pre-purchase.svg'
  },
  {
    id: 'annual-inspection',
    title: 'Annual Termite Inspection',
    description: 'Regular annual termite inspections to detect early signs of termite activity and prevent major damage.',
    keywords: ['annual termite inspection', 'yearly termite check', 'regular termite inspection', 'termite monitoring', 'preventative inspection'],
    url: '/termite-solutions/annual',
    category: 'termite',
    image: '/annual-inspection.svg'
  },
  {
    id: 'termite-barriers',
    title: 'Termite Barriers',
    description: 'Installation of physical and chemical termite barriers to prevent termites from entering your property.',
    keywords: ['termite barriers', 'termite shields', 'chemical barriers', 'physical barriers', 'termite prevention', 'termite protection'],
    url: '/termite-solutions/barriers',
    category: 'termite',
    image: '/termite-barrier.svg'
  },
  {
    id: 'termite-baiting',
    title: 'Termite Baiting',
    description: 'Effective termite baiting systems to eliminate termite colonies and protect your property.',
    keywords: ['termite baiting', 'termite bait stations', 'termite colony elimination', 'termite control', 'termite management'],
    url: '/termite-solutions/baiting',
    category: 'termite',
    image: '/termite-baiting.svg'
  },

  {
    id: 'commercial-termite',
    title: 'Commercial Termite Control',
    description: 'Specialized termite control services for commercial properties to protect your business assets.',
    keywords: ['commercial termite control', 'business termite protection', 'industrial termite control', 'commercial termite inspection'],
    url: '/termite-solutions/commercial',
    category: 'termite',
    image: '/commercial-termite.svg'
  },

  // General Pages
  {
    id: 'home',
    title: 'T47 Pest Control - Professional Pest Control Services',
    description: 'Professional pest control services for residential and commercial properties. 24/7 service available.',
    keywords: ['pest control', 'pest management', 'pest extermination', 'pest removal', 'pest treatment', 'pest prevention'],
    url: '/',
    category: 'general',
    image: '/logo.png'
  },
  {
    id: 'about',
    title: 'About T47 Pest Control - Professional Pest Management Experts | Australia',
    description: 'Learn about T47 Pest Control, Australia\'s trusted pest management experts. Professional, licensed, and insured pest control services with same-day availability and eco-friendly solutions.',
    keywords: ['about T47 pest control', 'professional pest control company', 'licensed pest control', 'insured pest control', 'australian pest control experts', 'pest management team', 'pest control history', 'eco-friendly pest control', 'same-day service', 'certified technicians'],
    url: '/about',
    category: 'general',
    image: '/pest-control-team.webp'
  },
  {
    id: 'contact',
    title: 'Contact T47 Pest Control',
    description: 'Get in touch with our pest control experts for a free quote or to schedule a service.',
    keywords: ['contact us', 'pest control contact', 'pest control quote', 'pest control service', 'pest control booking'],
    url: '/contact',
    category: 'general',
    image: '/contact.svg'
  },

  // Blog Posts
  {
    id: 'blog-termite-species-australia',
    title: 'Complete Guide to Australian Termite Species: Identification and Control',
    description: 'Comprehensive guide to identifying and controlling different termite species in Australia including subterranean, drywood, and dampwood termites.',
    keywords: ['australian termites', 'termite species', 'termite identification', 'subterranean termites', 'drywood termites', 'dampwood termites', 'termite control australia'],
    url: '/blog/australian-termite-species-identification-guide',
    category: 'general',
    image: '/termites.svg'
  },
  {
    id: 'blog-ant-species-control',
    title: 'Australian Ant Species: Bull Ants, Black House Ants & Effective Control Methods',
    description: 'Expert guide to identifying and controlling Australian ant species including bull ants, black house ants, pharaoh ants, and carpenter ants.',
    keywords: ['bull ant', 'black house ant', 'pharaoh ant', 'carpenter ant', 'ant control australia', 'ant species identification', 'ant extermination'],
    url: '/blog/australian-ant-species-control-guide',
    category: 'general',
    image: '/ants.svg'
  },
  {
    id: 'blog-spider-identification',
    title: 'Dangerous Australian Spiders: Identification, Prevention & Professional Control',
    description: 'Complete guide to identifying dangerous Australian spiders including redback, funnel-web, and huntsman spiders with professional control solutions.',
    keywords: ['australian spiders', 'redback spider', 'funnel web spider', 'huntsman spider', 'spider identification', 'spider control', 'venomous spiders australia'],
    url: '/blog/dangerous-australian-spiders-identification-control',
    category: 'general',
    image: '/spiders.svg'
  },
  {
    id: 'blog-cockroach-prevention',
    title: 'Cockroach Prevention: How to Keep Your Home Cockroach-Free Year-Round',
    description: 'Professional tips and strategies for preventing cockroach infestations in Australian homes including German, American, and Australian cockroaches.',
    keywords: ['cockroach prevention', 'german cockroach', 'american cockroach', 'australian cockroach', 'cockroach control', 'home pest prevention'],
    url: '/blog/cockroach-prevention-tips-australian-homes',
    category: 'general',
    image: '/cockroaches.svg'
  },
  {
    id: 'blog-seasonal-pest-control',
    title: 'Seasonal Pest Control Guide: What Pests to Expect Throughout the Year',
    description: 'Comprehensive seasonal pest control guide for Australian homes covering spring, summer, autumn, and winter pest activity patterns.',
    keywords: ['seasonal pest control', 'spring pests', 'summer pests', 'winter pest control', 'pest calendar australia', 'year round pest control'],
    url: '/blog/seasonal-pest-control-guide-australia',
    category: 'general',
    image: '/bug.svg'
  },
  {
    id: 'blog-diy-vs-professional',
    title: 'DIY vs Professional Pest Control: When to Call the Experts',
    description: 'Expert comparison of DIY pest control methods versus professional services, including cost analysis and effectiveness for Australian pests.',
    keywords: ['diy pest control', 'professional pest control', 'pest control cost', 'when to call exterminator', 'pest control comparison'],
    url: '/blog/diy-vs-professional-pest-control-australia',
    category: 'general',
    image: '/pest-inspection.svg'
  },
  {
    id: 'blog-australian-wasp-species',
    title: 'Australian Wasp Species: European Wasps, Paper Wasps & Safe Removal',
    description: 'Complete guide to Australian wasp species including European wasps, paper wasps, and mud daubers. Learn identification, risks, and professional removal methods.',
    keywords: ['european wasp', 'paper wasp', 'mud dauber', 'yellow jacket', 'hornet', 'wasp control australia', 'wasp nest removal', 'wasp identification', 'wasp sting treatment'],
    url: '/blog/australian-wasp-species-identification-control',
    category: 'general',
    image: '/wasps.svg'
  }
];
