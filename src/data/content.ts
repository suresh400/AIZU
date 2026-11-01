// ─────────────────────────────────────────────────────────────
//  AIZU Foundation — Complete Site Content
//  All text, numbers, links, and data from aizufoundation.com
// ─────────────────────────────────────────────────────────────

import aizuCoinImg from '../assets/aizuCoin.png'
import communityCareImg from '../assets/community Care.jpg'
import socialWelfareImg from '../assets/socialWelfare.jpeg'
import futureTechImg from '../assets/FutureTech.jpg'
import whoweareImg from '../assets/whoweare.png'
import foodDonationImg from '../assets/FoodDonation.jpeg'
import productionImg from '../assets/Production.jpg'
import launchEventImg from '../assets/launchEvent.jpg'
import officeOpeningImg from '../assets/OfficeOpening.jpeg'
import cofounderShareImg from '../assets/cofounderShare.jpeg'
import communityImg from '../assets/community.jpeg'

export const meta = {
  title: 'AIZU Foundation | Building Communities. Empowering Futures.',
  description:
    'AIZU Foundation connects people, ideas, and innovation to create real impact. We bridge advanced technology with social welfare for a better tomorrow.',
  ogImage: '/assets/images/aizu-logo.png',
  url: 'https://aizufoundation.com/',
}

// ─── Navigation ──────────────────────────────────────────────
export const nav = {
  logo: {
    src: '/assets/images/aizu-logo.png',
    alt: 'AIZU Foundation Logo',
    text: 'AIZU FOUNDATION',
  },
  links: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Donations', href: '/donations' },
    { label: 'Gallery', href: '/gallery' },
  ],
}

// ─── Hero Section ─────────────────────────────────────────────
export const hero = {
  tag: 'Welcome to AIZU Foundation',
  headline: ['Building Communities.', 'Empowering Futures.'],
  paragraph:
    'Aizu Foundation connects people, ideas, and innovation to create real impact. We bridge advanced technology with social welfare for a better tomorrow.',
  buttons: [
    { label: 'Join Community', href: 'https://t.me/aizuofficial', primary: true },
    { label: 'Explore Programs', href: '/programs', primary: false },
  ],
  floatingCards: [
    {
      icon: 'GraduationCap',
      title: 'Education',
      subtitle: 'AI & Blockchain skills',
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation',
      subtitle: 'Future-ready solutions',
    },
    {
      icon: 'Globe',
      title: 'Global Community',
      subtitle: 'Connecting changemakers',
    },
    {
      icon: 'Heart',
      title: 'Social Welfare',
      subtitle: 'Care where it counts',
    },
  ],
}

// ─── AIZU Coin Section ───────────────────────────────────────
export const coin = {
  tag: 'AIZU Coin',
  heading: 'AIZU Coin',
  subHeading: 'Community Allocation',
  tagline: '10 Million AIZU Coins reserved',
  taglineRest: 'to empower communities, fund future education, and support welfare drives.',
  description:
    'This allocation supports community initiatives, token-holder rewards, ecosystem expansion, strategic partnerships, and long-term sustainability.',
  stats: [
    { label: 'Reserved Tokens', value: '10M', raw: 10000000 },
    { label: 'Total Supply', value: '10B', raw: 10000000000 },
    { label: 'Use Cases', value: '5', raw: 5 },
  ],
  allocationLabel: 'Community Reserve Allocation',
  allocationValue: '10M',
  allocationPercent: 10,
  tags: ['Community', 'Rewards', 'Ecosystem', 'Partnerships', 'Sustainability'],
  coinImage: aizuCoinImg,
  buttons: [
    { label: 'Learn More', href: 'https://aizuex.com/', primary: false },
    { label: 'Buy $AIZU', href: 'https://aizuex.com/', primary: true },
  ],
}

// ─── Programs ────────────────────────────────────────────────
export const programs = {
  tag: 'Our Work',
  heading: 'Our Impact Programs',
  subheading: 'Real solutions for real community needs.',
  items: [
    {
      id: '01',
      label: 'Program 01',
      title: 'AIZU Community Care',
      description:
        'Our foundational pillar, focused on the immediate well-being of our neighbors. We organize regular wellness checks, senior companionship programs, and community cleanup drives.',
      detail:
        'Our AI-driven logistics ensure help reaches where it\'s needed most efficiently.',
      tags: ['Weekly Senior Socials', 'Wellness Checks', 'Youth Mentorship'],
      image: communityCareImg,
      stats: [],
      color: 'orange',
    },
    {
      id: '02',
      label: 'Program 02',
      title: 'Social Welfare Initiatives',
      description:
        'Tackling food insecurity and healthcare access across underserved villages. Our teams coordinate food drives, medical camps, and hygiene distribution to make lasting change.',
      detail:
        'We partner with local governments and NGOs to amplify impact across 12 villages.',
      tags: ['Food Drives', 'Medical Camps', 'Hygiene Kits'],
      image: socialWelfareImg,
      stats: [
        { value: '500+', label: 'Families Helped' },
        { value: '12', label: 'Villages Reached' },
        { value: '200+', label: 'Volunteers' },
        { value: '50+', label: 'Drives Conducted' },
      ],
      color: 'amber',
    },
    {
      id: '03',
      label: 'Program 03',
      title: 'Future Tech Education',
      description:
        'Empowering the next generation with knowledge of blockchain, AI, and decentralized systems. We run workshops, bootcamps, and mentorship programs to equip youth with future-ready skills.',
      detail: 'In partnership with AIZUEX Exchange and global mentors.',
      tags: ['Blockchain Bootcamps', 'AI Workshops', 'Youth Mentorship'],
      image: futureTechImg,
      stats: [
        { value: '50+', label: 'Workshops' },
        { value: '1K+', label: 'Students Trained' },
      ],
      color: 'orange',
    },
  ],
}

// ─── Trust Badges ────────────────────────────────────────────
export const trust = [
  { icon: 'Trophy', text: 'Best Crypto Exchange 2025' },
  { icon: 'Star', text: '500+ Community Events' },
  { icon: 'Shield', text: '100% Community-Driven' },
  { icon: 'Zap', text: 'Fast-Growing Ecosystem' },
  { icon: 'Globe', text: '4 Operating Countries' },
  { icon: 'Award', text: 'AI-Powered Solutions' },
]

// ─── AIZU Ecosystem ─────────────────────────────────────────
export const ecosystem = {
  tag: 'The Bigger Picture',
  heading: 'AIZU Ecosystem',
  subheading:
    'A complete Web3 and technology ecosystem connecting community, finance, and innovation.',
  items: [
    {
      name: 'AIZUEX Exchange',
      description: 'Advanced crypto exchange with zero-lag trading and institutional-grade security.',
      status: 'Live Now',
      statusType: 'live' as const,
      icon: 'BarChart3',
      href: 'https://aizuex.com/',
      highlight: true,
    },
    {
      name: 'Hybrid Bot',
      description: 'Algorithmic trading bot powered by machine learning and on-chain analytics.',
      status: 'Live Now',
      statusType: 'live' as const,
      icon: 'Bot',
      href: 'https://aizuex.com/',
      highlight: false,
    },
    {
      name: 'AIZU Coin ($AIZU)',
      description: 'The native utility token powering transactions, governance, and community rewards.',
      status: 'Live Now',
      statusType: 'live' as const,
      icon: 'Coins',
      href: 'https://aizuex.com/',
      highlight: true,
    },
    {
      name: 'Staking Platform',
      description: 'Earn dynamic rewards by securing the network through flexible staking pools.',
      status: 'Coming Soon',
      statusType: 'coming' as const,
      icon: 'Activity',
      href: 'https://aizuex.com/',
      highlight: false,
    },
    {
      name: 'P2P Trading',
      description: 'Peer-to-peer fiat-to-crypto marketplace with escrow protection in 30+ fiat currencies.',
      status: 'In Development',
      statusType: 'development' as const,
      icon: 'ArrowLeftRight',
      href: 'https://aizuex.com/',
      highlight: false,
    },
    {
      name: 'AIZU Foundation',
      description: 'The philanthropic arm directing technology gains into real-world social impact.',
      status: 'Live Now',
      statusType: 'live' as const,
      icon: 'Heart',
      href: '/',
      highlight: true,
    },
    {
      name: 'Future Innovations',
      description: 'R&D pipeline exploring AI agents, decentralized compute, and Web3 education.',
      status: 'Coming Soon',
      statusType: 'coming' as const,
      icon: 'TrendingUp',
      href: 'https://aizuex.com/',
      highlight: false,
    },
  ],
}

// ─── Photo Albums ────────────────────────────────────────────
export const albums = [
  {
    id: 'community-gallery',
    title: 'Community Gallery',
    description: 'Moments captured from our community programs, events, and everyday impact.',
    count: '10 Photos',
    cover: communityImg,
    href: '/gallery',
    images: Array.from({ length: 10 }, (_, i) =>
      `https://aizufoundation.com/media/community-gallery/${i + 1}.jpg`
    ),
  },
  {
    id: 'cofounders',
    title: 'Aizu Co-founders Share Distribution',
    description: 'Highlights from the Aizu Co-founders share distribution event.',
    count: '33 Photos',
    cover: cofounderShareImg,
    href: '/gallery',
    images: Array.from({ length: 33 }, (_, i) =>
      `https://aizufoundation.com/media/cofounders/${i + 1}.jpg`
    ),
  },
  {
    id: 'food-donation',
    title: 'Food Donation by AIZU Foundation Member "Vasireddy Sathibabu"',
    description: 'Food donation to 100 members by Vasireddy Sathibabu, AIZU member.',
    count: '15 Photos, 1 Video',
    cover: foodDonationImg,
    href: '/gallery',
    images: Array.from({ length: 15 }, (_, i) =>
      `https://aizufoundation.com/media/food-donation/${i + 1}.jpg`
    ),
  },
  {
    id: 'production',
    title: 'AIZU Production',
    description: 'Behind-the-scenes from AIZU content production and media creation.',
    count: '12 Photos',
    cover: productionImg,
    href: '/gallery',
    images: Array.from({ length: 12 }, (_, i) =>
      `https://aizufoundation.com/media/production/${i + 1}.jpg`
    ),
  },
  {
    id: 'launch-event',
    title: 'AIZU Foundation Launch Event',
    description: 'Official launch of the AIZU Foundation — a landmark moment for our community.',
    count: '20 Photos',
    cover: launchEventImg,
    href: '/gallery',
    images: Array.from({ length: 20 }, (_, i) =>
      `https://aizufoundation.com/media/launch/${i + 1}.jpg`
    ),
  },
  {
    id: 'office-openings',
    title: 'Office Openings',
    description: 'Celebrating the opening of our new offices and expanding our reach.',
    count: '8 Photos',
    cover: officeOpeningImg,
    href: '/gallery',
    images: Array.from({ length: 8 }, (_, i) =>
      `https://aizufoundation.com/media/office/${i + 1}.jpg`
    ),
  },
]

// ─── Global Stats ────────────────────────────────────────────
export const stats = [
  { value: 200, suffix: '+', label: 'Active Bots' },
  { value: 500, suffix: '+', label: 'Families Helped' },
  { value: 4, suffix: '', label: 'Countries' },
  { value: 6, suffix: '', label: 'Strategic Partners' },
]

// ─── Who We Are ──────────────────────────────────────────────
export const whoWeAre = {
  tag: 'Who We Are',
  heading: 'Checking the pulse of our community, administering care where it counts.',
  paragraphs: [
    'The AIZU Foundation is the non-profit heartbeat of the AIZU ecosystem. While our exchange and trading bots operate on algorithms, our foundation operates on empathy.',
    'Born from the belief that technology and compassion can coexist, we bridge the gap between the digital economy and real-world social welfare — one community at a time.',
  ],
  button: { label: 'Our Story', href: '/about' },
  image: whoweareImg,
}

// ─── Partners & Investors ────────────────────────────────────
export const partners = [
  {
    name: 'OpenAI',
    category: 'Technology Partner',
    logoText: 'OpenAI',
    logo: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg',
    href: 'https://openai.com/',
  },
  {
    name: 'CoinPayments',
    category: 'Payment Infrastructure',
    logoText: 'CoinPayments',
    logo: 'https://cdn.worldvectorlogo.com/logos/coinpayments.svg',
    href: 'https://www.coinpayments.net/',
  },
  {
    name: 'Solana',
    category: 'Blockchain Network',
    logoText: 'Solana',
    logo: 'https://cdn.worldvectorlogo.com/logos/solana-1.svg',
    href: 'https://solana.com/',
  },
  {
    name: 'BNB Chain',
    category: 'Ecosystem Partner',
    logoText: 'BNB Chain',
    logo: 'https://cdn.worldvectorlogo.com/logos/binance-coin-bnb-logo.svg',
    href: 'https://www.bnbchain.org/',
  },
  {
    name: 'StratQuest',
    category: 'Strategic Advisor',
    logoText: 'StratQuest',
    logo: '',
    href: 'https://aizuex.com/',
  },
  {
    name: 'BullFund',
    category: 'Investment Partner',
    logoText: 'BullFund',
    logo: '',
    href: 'https://aizuex.com/',
  },
]

// ─── Countries ───────────────────────────────────────────────
export const countries = [
  {
    name: 'Japan',
    city: 'Tokyo',
    flag: '🇯🇵',
    role: 'Innovation & Strategy',
    description: 'Core strategic direction and cross-border tech development.',
    desc: 'Core strategic direction and cross-border tech development.',
    stats: 'Founding Hub',
    color: '#FF6B00',
    image:
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'India',
    city: 'Hyderabad',
    flag: '🇮🇳',
    role: 'Operations & Welfare',
    description: 'Ground operations, community care drives, and welfare distribution.',
    desc: 'Ground operations, community care drives, and welfare distribution.',
    stats: '500+ Families',
    color: '#F59E0B',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dubai',
    city: 'UAE',
    flag: '🇦🇪',
    role: 'Global Partnerships',
    description: 'International relations, regulatory alignment, and capital network.',
    desc: 'International relations, regulatory alignment, and capital network.',
    stats: 'Global Hub',
    color: '#FF8C00',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Singapore',
    city: 'Singapore',
    flag: '🇸🇬',
    role: 'Tech & Community',
    description: 'Ecosystem expansion, developer relations, and Web3 education.',
    desc: 'Ecosystem expansion, developer relations, and Web3 education.',
    stats: 'Tech Center',
    color: '#CC5500',
    image:
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80',
  },
]

// ─── CTA Section ─────────────────────────────────────────────
export const cta = {
  tag: 'Join the Movement',
  heading: 'Ready to build the future together?',
  subheading:
    'Whether you want to trade, contribute to our foundation, or learn Web3 skills — there is a place for you in AIZU.',
  button: { label: 'Join Community', href: 'https://t.me/aizuofficial' },
  buttons: [
    { label: 'Join Community', href: 'https://t.me/aizuofficial', primary: true },
    { label: 'Explore Ecosystem', href: 'https://aizuex.com/', primary: false },
  ],
}

// ─── Footer ──────────────────────────────────────────────────
export const footer = {
  logo: {
    src: '/assets/images/aizu-logo.png',
    alt: 'AIZU Foundation',
  },
  tagline:
    'Building communities. Empowering futures. The non-profit philanthropic arm of the AIZU ecosystem.',
  quickLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Donations', href: '/donations' },
    { label: 'Gallery', href: '/gallery' },
  ],
  ecosystem: [
    { label: 'AIZUEX Exchange', href: 'https://aizuex.com/' },
    { label: 'AIZU Coin ($AIZU)', href: 'https://aizuex.com/' },
    { label: 'Hybrid Bot', href: 'https://aizuex.com/' },
    { label: 'Staking Platform', href: 'https://aizuex.com/' },
  ],
  socials: [
    { label: 'Telegram', href: 'https://t.me/AIZUEX', icon: 'Send' },
    { label: 'Twitter / X', href: 'https://x.com/AIZUCoin', icon: 'Twitter' },
    { label: 'Discord', href: 'https://discord.gg/aizuex', icon: 'MessageCircle' },
  ],
  contact: {
    email: 'Support@aizuex.com',
    website: 'www.aizuex.com',
    websiteHref: 'https://www.aizuex.com',
    web: 'www.aizuex.com',
  },
  copyright: '© 2025 AIZU Foundation. All rights reserved.',
  disclaimer:
    'Student redesign concept project, not the official website. All data and content mirror the live site.',
}

// ─── About Page ──────────────────────────────────────────────
export const about = {
  hero: {
    tag: 'About Us',
    heading: 'Our Mission & Story',
    subheading: 'Driven by compassion, powered by technology.',
  },
  identity: {
    tag: 'Our Identity',
    heading: 'Who We Are',
    paragraph:
      'The AIZU Foundation is a non-profit organization dedicated to checking the pulse of our community and administering care where it counts.',
  },
  originStory: {
    tag: '🌱 Origin',
    heading: 'Our Origin Story',
    p1: 'Founded in 2024, AIZU began as a small community initiative to help local seniors navigate the digital world. We quickly realized that the gap wasn\'t just digital — it was social.',
    p2: 'Today, we stand at the intersection of traditional social welfare and modern technological education, bridging AI and blockchain with human care.',
    image: '/assets/images/about-community.png',
  },
  vision: {
    tag: '🔭 Vision',
    heading: 'Our Vision',
    quote: '"The Future is in your hands."',
    description:
      'A world where community support systems are as smart and decentralized as the technologies we build. As the philanthropic arm of AIZU Technologies, we envision a future where AI and blockchain work together.',
    points: [
      'AI-Driven Efficiency in Welfare',
      'Transparent & Secure Aid',
      'Accessible Future Tech Education',
    ],
    image: '/assets/images/tech.jpg',
  },
  missionBanner: {
    heading: 'Our Mission & Vision',
    description:
      'We are dedicated to creating a future where technology serves humanity. By integrating Artificial Intelligence and Blockchain into community care, we ensure transparency, efficiency, and dignity for all.',
  },
  team: {
    tag: 'The People',
    heading: 'Meet Our Team',
    subheading:
      'The visionary leaders, technocrats, and dedicated community members driving the AIZU Foundation.',
    members: [
      {
        name: 'Chilakalapudi Satya Narayana',
        role: 'CEO & Founder',
        image: '/assets/images/team/1.Chilakalapudi satya narayana.png',
        badge: 'Executive',
      },
      {
        name: 'Siva Teja',
        role: 'CTO & Founder',
        image: '/assets/images/team/2.Siva Teja.png',
        badge: 'Executive',
      },
      {
        name: 'K V Ramachandra Raju',
        role: 'Associate Founder',
        image: '/assets/images/team/3.Kakarlapudi Raju.png',
        badge: 'Associate Founder',
      },
      {
        name: 'M Vishweshwara Rao',
        role: 'Associate Founder',
        image: '/assets/images/team/5.M Vishweshwara Rao.png',
        badge: 'Associate Founder',
      },
      {
        name: 'Chilakapudi Raju (CLR)',
        role: 'Associate Founder',
        image: '/assets/images/team/4.Chilakapudi Raju.png',
        badge: 'Associate Founder',
      },
      {
        name: 'Santhosh N Mepurathu',
        role: 'Associate Founder',
        image: '/assets/images/team/6.SANTHOSH N MEPURATHU.png',
        badge: 'Associate Founder',
      },
      {
        name: 'Gandikota Srinivas',
        role: 'Aizu Foundation Chairman',
        image: '/assets/images/team/7.Gandikota Srinivas.png',
        badge: 'Chairman',
      },
      {
        name: 'M. Raju Yadav',
        role: 'Foundation Member',
        image: '/assets/images/team/8.M. Raju Yadav.png',
        badge: 'Foundation Member',
      },
      {
        name: 'Satti Babu',
        role: 'Foundation Member',
        image: '/assets/images/team/9.Satti babu.jpeg',
        badge: 'Foundation Member',
      },
      {
        name: 'P Banu Prakash Reddy',
        role: 'Foundation Member',
        image: '/assets/images/team/10.P Banu prakesh Reddy.jpeg',
        badge: 'Foundation Member',
      },
      {
        name: 'Phani Kumar',
        role: 'Foundation Member',
        image: '/assets/images/team/11.phani kumar.jpeg',
        badge: 'Foundation Member',
      },
    ],
  },
}

// ─── Donations Page ──────────────────────────────────────────
export const donations = {
  hero: {
    tag: '💝 Our Supporters',
    heading: 'Donations & Contributions',
    subheading:
      'We are deeply grateful for the generosity of our community members and core partners who make our mission possible.',
  },
  memberSection: {
    tag: 'Individual Contributions',
    heading: 'Member Donations',
    subheading:
      'Recognizing the incredible individuals who give back to the community through their selfless acts.',
  },
  events: [
    {
      id: 'school-food',
      title: 'AIZU Food Donation',
      subtitle: 'Special Friends School • Hyderabad',
      icon: '🍲',
      description:
        'Successfully conducted a Food Donation Camp for specially challenged children at Special Friends Special School, Kapra, Hyderabad, serving nutritious meals and fostering a spirit of kindness, care, and community service.',
      tags: ['🍲 Nutritious Meals', '🏫 Special School'],
      image: '/assets/images/food donation school/1.jpeg',
      gallery: [
        '/assets/images/food donation school/1.jpeg',
        '/assets/images/food donation school/2.jpeg',
        '/assets/images/food donation school/3.jpeg',
      ],
      hasGallery: true,
    },
    {
      id: 'vasireddy',
      title: 'Vasireddy Sathibabu',
      subtitle: 'AIZU Foundation Member',
      icon: '🍲',
      description:
        'Generously sponsored and organized a massive food donation drive, providing nutritious meals to over 100 community members in need.',
      tags: ['🍚 Food Distribution', '👥 100+ Members Fed'],
      image: '/assets/images/food donation by vasireddy sathibabu/1st.jpeg',
      hasGallery: false,
    },
    {
      id: 'mvr-warriors-event',
      title: 'AIZU Community Members',
      subtitle: 'Conducted by MVR Andhra Warriors',
      icon: '🥛',
      description:
        'AIZU community members joined hands with MVR Andhra Warriors to distribute free buttermilk and drinking water to the public, spreading goodwill and relief during the summer season.',
      tags: ['🥛 Buttermilk', '💧 Drinking Water', '📰 Featured in News'],
      image: '/assets/images/Aizu Foundation event/1.jpeg',
      newsHighlight: {
        image: '/assets/images/Aizu Foundation event/news.jpeg',
        tag: '📰 In the News',
        text: 'Featured in News24 Telugu — AIZU Foundation\'s free drinking water distribution program',
      },
      hasGallery: false,
    },
    {
      id: 'malkajgiri',
      title: 'Aizu Donation',
      subtitle: 'Hyd Malkajgiri Distribution',
      icon: '🚰',
      description:
        'On April 24, 2026, successfully launched a water and buttermilk distribution center at Tukaram Gate, Malkajgiri, Hyderabad, providing free drinking water and refreshing buttermilk to promote health and hydration during hot weather.',
      tags: ['💧 Water Distribution', '🥛 Buttermilk'],
      image: '/assets/images/donation hyd malkajgiri/1.jpeg',
      hasGallery: false,
    },
    {
      id: 'balajinagar',
      title: 'Balajinagar Distribution',
      subtitle: 'Community Support',
      icon: '🚰',
      description:
        'Distribution of essential supplies in Balajinagar, Hyderabad to support the local community.',
      tags: ['🚰 Essential Supplies'],
      image: '/assets/images/Balajinagar hyd/1.jpeg',
      hasGallery: false,
    },
    {
      id: 'mvr-activities',
      title: 'MVR Warriors Activities',
      subtitle: 'Community Outreach',
      icon: '🤝',
      description:
        'Community outreach and support activities organized by the MVR Warriors to give back to society.',
      tags: ['🤝 Outreach', '🫂 Support'],
      image: '/assets/images/mvr warriors/1.jpeg',
      hasGallery: false,
    },
  ],
  coinSection: {
    tag: 'Ecosystem Support',
    heading: 'AIZU Coin Donations to Foundation',
    subheading:
      'The AIZU ecosystem is deeply committed to sustainable funding for community welfare through coin-based contributions.',
    cards: [
      {
        title: 'AIZU Exchange',
        subtitle: 'Core Ecosystem Contributor',
        icon: '🪙',
        badge: 'Exchange Allocation',
        description:
          'The AIZU Exchange automatically allocates a portion of ecosystem transaction fees as AIZU Coin donations directly to the foundation, ensuring long-term sustainability.',
        tags: ['🔄 Automated Allocation', '📊 Transparent'],
        button: { label: 'Learn About AIZUEX →', href: 'https://aizuex.com/' },
      },
      {
        title: 'AIZU Coin Community',
        subtitle: 'Token Holders',
        icon: '💎',
        badge: 'Grassroots Governance',
        description:
          'AIZU Coin holders contribute directly to the foundation through community-driven donation pools and governance proposals, ensuring grassroots-level funding for welfare activities.',
        tags: ['🏛️ Governance-Driven', '🤝 Community Pools'],
        button: { label: 'Visit AIZU Coin →', href: 'https://aizucoin.com/' },
      },
    ],
  },
  cta: {
    heading: 'Want to Contribute?',
    description:
      'Every contribution, big or small, makes a difference. Reach out to learn how you can support our mission.',
    button: { label: 'Contact Us', href: 'mailto:Support@aizuex.com' },
  },
}

// ─── Gallery Page ────────────────────────────────────────────
export const gallery = {
  hero: {
    tag: 'Our Story in Pictures',
    heading: 'AIZU Gallery',
    subheading:
      'Explore curated collections from our events, productions, and community highlights.',
  },
}
