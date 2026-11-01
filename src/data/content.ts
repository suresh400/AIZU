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
    { label: 'Join Community', href: 'mailto:Support@aizuex.com', primary: true },
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
  tag: 'Token Allocation',
  heading: 'Aizu Coins',
  subHeading: 'Community Reserve',
  tagline: '1 Crore Aizu Coins (10,000,000)',
  taglineRest: '— Allocated for Aizu Community Growth.',
  description:
    'This allocation supports community initiatives, bot-holder rewards, ecosystem expansion, strategic partnerships, and long-term sustainability.',
  stats: [
    { label: 'Reserved Tokens', value: '10M', raw: 10 },
    { label: 'Total Supply', value: '10B', raw: 10 },
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

export const programs = {
  tag: 'Our Work',
  heading: 'Our Impact Programs',
  subheading: 'Real solutions for real community needs.',
  cta: {
    tag: 'Get Involved',
    heading: 'Want to Learn More?',
    subheading: 'Reach out to discover how you can participate in or support our programs.',
    button: { label: 'Contact Us', href: 'mailto:Support@aizuex.com' },
  },
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
  tag: 'AIZU Ecosystem',
  heading: 'One Ecosystem. Infinite Possibilities.',
  subheading:
    'AIZU merges artificial intelligence with decentralized finance to create a complete crypto experience — from smart trading to community rewards.',
  items: [
    {
      name: 'AIZUEX Exchange',
      description:
        'A next-generation crypto exchange built on trust, speed, and security. Trade seamlessly, anytime, anywhere with confidence.',
      badge: '⚡ Open to Trade',
      status: '⚡ Open to Trade',
      statusType: 'live' as const,
      icon: 'BarChart3',
      actionLabel: 'Start Trading →',
      href: 'https://aizuex.com/',
      highlight: true,
    },
    {
      name: 'AIZU Hybrid Bot',
      description:
        'AI precision meets smart automation. Combines human strategy with AI-driven insights for consistent, profitable trading 24/7.',
      badge: '🔥 200+ Active Bots',
      status: '🔥 200+ Active Bots',
      statusType: 'live' as const,
      icon: 'Bot',
      actionLabel: 'Explore Bots →',
      href: 'https://aizutech.in/',
      highlight: false,
    },
    {
      name: 'AIZU Coin',
      description:
        'The utility token powering the heart of the AIZUEX ecosystem — unlocking trading benefits, rewards, and exclusive access.',
      badge: '🚀 $0.05 → Projected $1++',
      status: '🚀 $0.05 → Projected $1++',
      statusType: 'live' as const,
      icon: 'Coins',
      actionLabel: 'Buy $AIZU →',
      href: 'https://aizuex.com/',
      highlight: true,
    },
    {
      name: 'Aizu Pulse',
      description:
        'Real-time market intelligence and crypto analytics — stay ahead of the curve with live data, trends, and insights from the AIZU ecosystem.',
      badge: '📈 Live Analytics',
      status: '📈 Live Analytics',
      statusType: 'live' as const,
      icon: 'Activity',
      actionLabel: 'Explore Pulse →',
      href: 'https://aizupulse.com/',
      highlight: false,
    },
    {
      name: 'Aizu Dex',
      description:
        'A decentralized exchange built for trustless, peer-to-peer trading — swap tokens securely without intermediaries, powered by smart contracts.',
      badge: '🚀 Launching Soon',
      status: '🚀 Launching Soon',
      statusType: 'coming' as const,
      icon: 'ArrowLeftRight',
      actionLabel: 'Launching Soon',
      href: '',
      highlight: false,
    },
    {
      name: 'Aizu Foundation',
      description:
        'The philanthropic arm of AIZU — bridging technology with social welfare to empower communities through education, care, and innovation.',
      badge: '🤝 Community Impact',
      status: '🤝 Community Impact',
      statusType: 'live' as const,
      icon: 'Heart',
      actionLabel: 'Learn More →',
      href: '/about',
      highlight: true,
    },
    {
      name: 'Aizu 100X Platform',
      description:
        'A powerful mobile platform bringing the full AIZU experience — trading, staking, portfolio tracking, and community — right to your pocket.',
      badge: '📲 Coming Soon',
      status: '📲 Coming Soon',
      statusType: 'coming' as const,
      icon: 'Smartphone',
      actionLabel: 'Explore Platform →',
      href: 'https://aizutech.in/',
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
    logo: '/assets/images/partner-logos/openai.png',
    href: 'https://openai.com/',
  },
  {
    name: 'Strata Quest',
    category: 'Strategic Partner',
    logo: '/assets/images/partner-logos/strataquest.png',
    href: 'https://aizuex.com/',
  },
  {
    name: 'CoinPayments',
    category: 'Payment Infrastructure',
    logo: '/assets/images/partner-logos/coinpayments.png',
    href: 'https://www.coinpayments.net/',
  },
  {
    name: 'BSC Chain',
    category: 'Blockchain Ecosystem',
    logo: '/assets/images/partner-logos/bscchain.png',
    href: 'https://www.bnbchain.org/',
  },
  {
    name: 'Solana',
    category: 'Blockchain Network',
    logo: '/assets/images/partner-logos/solana.png',
    href: 'https://solana.com/',
  },
  {
    name: 'Bull Fund VC',
    category: 'Investment Partner',
    logo: '/assets/images/partner-logos/bullfund.png',
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
  tag: 'Get Involved',
  heading: 'Ready to Make a Difference?',
  subheading: 'Join us in building a community where technology serves humanity.',
  button: { label: 'Get Involved Today', href: 'mailto:Support@aizuex.com' },
  buttons: [
    { label: 'Get Involved Today', href: 'mailto:Support@aizuex.com', primary: true },
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
    { label: 'AIZU Hybrid Bot', href: 'https://aizutech.in/' },
    { label: 'AIZU Coin ($AIZU)', href: 'https://aizuex.com/' },
    { label: 'Aizu Pulse', href: 'https://aizupulse.com/' },
    { label: 'Aizu 100X Platform', href: 'https://aizutech.in/' },
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
