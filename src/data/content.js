// Single source of truth for everything the site renders.
// Edit here rather than in the components.

export const profile = {
  name: 'Tushar Verma',
  role: 'Software Developer',
  location: 'India',
  headline: 'Software Developer building scalable full-stack and backend systems.',
  summary:
    'I build production systems, APIs, real-time pipelines, and user-facing products with a focus on scalability, reliability, and clean engineering.',
  photo: '/assets/portrait-chatgpt.webp',
  resume: 'https://drive.google.com/file/d/19VuWRETlTBUgwiX7ZrnPWHM4liWIlKIb/view',
  email: 'tushar55755575@gmail.com',
  github: 'https://github.com/Tushar656',
  githubHandle: '@Tushar656',
  linkedin: 'https://www.linkedin.com/in/tushar-verma-502a86204/',
  linkedinHandle: '@tushar-verma-502a86204',
  gfg: 'https://www.geeksforgeeks.org/user/tushar55755575/',
  gfgHandle: '@tushar55755575',
};

// Hero badges. Each one states what the number counts and where it lives —
// a bare figure like "+15%" means nothing to a visitor, so those live in
// Experience where the surrounding sentence explains them.
export const heroFacts = [
  {
    value: '~40M',
    label: 'marketing events a day',
    context: 'ingested by a pipeline I built and own, in production',
  },
  {
    value: '2+ yrs',
    label: 'building production backends',
    context: 'Node.js services, queues and workers on a live platform',
  },
  {
    value: '700+',
    label: 'DSA problems solved',
    context: 'GeeksforGeeks, LeetCode and CodeChef',
  },
];

export const about = {
  paragraphs: [
    'I am a Computer Science graduate from IIIT Surat, currently a Software Developer at Medront DataLabs (remote from agra), with 2+ years of professional experience and a six-month engineering internship before that.',
    'I work across the stack, but most of my recent work has been backend-heavy — roughly 60% backend, 40% frontend. In practice that means Node.js services, REST APIs, queues and workers, and the databases behind them, on a marketing analytics platform where the event volume is real and the reporting has to be correct.',
    'What I care about: understanding the actual problem before writing code, building the simplest thing that scales appropriately, and debugging from evidence rather than guesses.',
  ],
  education: {
    school: 'Indian Institute of Information Technology Surat',
    degree: 'B.Tech, Computer Science Engineering',
    period: 'Sep 2020 — Aug 2024',
    gpa: 'GPA 8.24',
    coursework: [
      'Operating Systems',
      'Data Structures & Algorithms',
      'Object Oriented Programming',
      'Database Management Systems',
    ],
  },
  // Explicitly forward-looking, not current expertise.
  growing: [
    'scalable backend architecture',
    'distributed systems',
    'system design',
    'cloud infrastructure',
    'AI-assisted engineering',
    'AI-powered products',
  ],
};

export const experience = [
  {
    company: 'Medront DataLabs Pte Ltd',
    role: 'Software Developer',
    period: 'Aug 2024 — Present',
    location: 'Mumbai, India',
    domain: 'Marketing analytics platform focused on improving advertising performance.',
    current: true,
    work: [
      {
        title: 'Real-Time Event Ingestion Pipeline',
        metric: '~40M events a day',
        featured: true,
        body: 'Every page view, click, cart action and purchase on a customer\'s storefront has to reach the platform before it can be reported on — around 40 million of them a day. I built and own that ingestion pipeline: queued workers, batching, caching and fault-tolerant retries, plus the production behaviour that keeps it stable when traffic spikes. The same queue-based design was later reused to power a queue-based email delivery service.',
        tech: ['Node.js', 'BullMQ', 'Redis', 'ClickHouse', 'PostgreSQL'],
      },
      {
        title: 'LinkBuilder',
        metric: 'made influencer ROI measurable',
        body: 'Brands pay influencers but often cannot tell which ones actually drove sales. I designed and built a link attribution product end to end: it issues a short URL per influencer, then tracks what happens behind that link — product views, cart events and purchases. That turned influencer spend from guesswork into something the platform can report on.',
      },
      {
        title: 'Ads Manager & Attribution',
        metric: 'attribution ~15% more accurate',
        body: 'Attribution is the job of deciding which ad or channel gets credit for a sale. Get it wrong and a brand pours budget into the wrong campaign. I worked on the ads management surface and the multi-model attribution behind it, including validating UTM and campaign parameters so a click can be traced back to the campaign that produced it. Credit was assigned correctly around 15% more often as a result.',
      },
      {
        title: 'Order Integration & Identity Resolution',
        metric: '~30% more orders matched',
        body: 'When an order arrives from a store\'s webhook it carries no memory of the browsing that led to it, so the sale cannot be credited to anything. I built the identity resolution that stitches those signals together — combining client-side and server-side events to reconstruct one visitor journey and connect the order to the session and click behind it. About 30% more orders ended up correctly matched.',
      },
      {
        title: 'Analytics Dashboards',
        metric: 'one place to see spend vs revenue',
        body: 'Order data and attribution data lived apart, so answering "did this campaign make money?" meant joining them by hand. I built Superset dashboards that bring both together, which made return-on-ad-spend visible in one place and cut the time it takes to chase down a production problem.',
        tech: ['Apache Superset'],
      },
    ],
  },
  {
    company: 'Atlas Consolidate Pte Ltd',
    role: 'Software Engineer Intern',
    period: 'Jan 2024 — Jun 2024',
    location: 'Hyderabad, India',
    domain: 'Personal finance application focused on saving.',
    work: [
      {
        title: 'Direct Debit',
        metric: 'feature lead',
        body: 'Led development of the Direct Debit feature, from the technical approach through backend implementation — my first experience owning a payments-adjacent feature in a financial product.',
        tech: ['Java'],
      },
      {
        title: 'Backend APIs & Test Coverage',
        metric: 'test coverage up ~25%',
        body: 'Built backend APIs and new backend features, and widened API test coverage by roughly 25% — which mattered in a savings product, because the bugs it caught were the kind that quietly corrupt user balances rather than crash loudly.',
      },
    ],
  },
];

// Production debugging, told as symptom -> cause -> fix -> lesson.
export const caseStudy = {
  title: 'Tracing false job failures back to the event loop',
  context: 'Real-time event pipeline · user-journey processing',
  steps: [
    {
      label: 'Symptom',
      icon: 'bug',
      body: 'Under normal traffic, user-journey processing was fine. At much higher event volume, jobs that had actually completed were being marked as failed.',
    },
    {
      label: 'Investigation',
      icon: 'search',
      body: 'I worked through the worker logs and correlated the rise in processing time with lock-related errors. The pattern pointed at the runtime rather than the business logic.',
    },
    {
      label: 'Root cause',
      icon: 'cpu',
      body: 'One synchronous step in the processing path was CPU-heavy. At volume it blocked the Node.js event loop long enough that BullMQ could not renew job locks in time — so jobs that had genuinely succeeded were reported as failures.',
    },
    {
      label: 'Fix',
      icon: 'wrench',
      body: 'I restructured that step so it no longer blocks the event loop, improved worker and retry logging, and added higher-volume stress testing along with explicit failure-path tests.',
    },
    {
      label: 'Takeaway',
      icon: 'bulb',
      body: 'Functional correctness is not enough. A system can pass every normal test and still fail badly under realistic production load — the interaction between runtime behaviour and queue semantics only shows up at volume.',
    },
  ],
};

export const engineering = [
  {
    title: 'Scalable backend systems',
    icon: 'scale',
    body: 'Production systems processing around 40M events/day — queue-based workers, batching and caching, and the throughput and reliability trade-offs that come with that volume.',
  },
  {
    title: 'Event-driven architecture',
    icon: 'events',
    body: 'Queues, workers, asynchronous processing, retries and failure handling with BullMQ and Redis — including reusing one pipeline architecture for a second product surface.',
  },
  {
    title: 'Data-intensive applications',
    icon: 'data',
    body: 'Large event streams across ClickHouse, PostgreSQL, MySQL and MongoDB, feeding attribution, reporting and analytics dashboards.',
  },
  {
    title: 'Real-time systems',
    icon: 'realtime',
    body: 'Real-time event processing in production, and Socket.io-based messaging in the products I have built myself.',
  },
  {
    title: 'Integrations & identity resolution',
    icon: 'link',
    body: 'Third-party APIs and webhooks, and stitching client-side and server-side signals into one coherent user journey.',
  },
  {
    title: 'AI-assisted development',
    icon: 'ai',
    body: 'AI tools are part of my normal workflow — implementation, debugging, unfamiliar code, research, test generation, refactoring and documentation. I stay responsible for the result: I review generated code critically, test it, and make sure I understand why it works.',
  },
];

export const howIWork = [
  'Understand the actual problem before writing code.',
  'Think about architecture and data flow first, then build the simplest thing that scales appropriately.',
  'Test while building, and pay attention to edge cases and failure paths.',
  'Debug from logs and evidence rather than guesses.',
  'Watch production behaviour and improve the implementation when real usage exposes weaknesses.',
];

// repo/demo are intentionally null until real URLs exist. Fill them in and
// the buttons appear automatically.
export const projects = [
  {
    name: 'Social-Vista',
    slug: 'social-vista',
    mockLine: 'Real-time messaging over Socket.io',
    type: 'Social Networking Platform',
    period: 'May 2022 — Sep 2022',
    problem:
      'I wanted to build a complete social product rather than a demo — real accounts, real-time messaging, and the client-side state management a multi-feature frontend actually needs.',
    built:
      'A full-stack social network with authentication, profile customization, post creation and sharing, a messaging system over Socket.io, notifications, and user search and discovery. Client state is handled with Context API plus custom reducers and actions.',
    features: [
      'User authentication',
      'Profile customization',
      'Posts & sharing',
      'Real-time messaging',
      'Notifications',
      'User search & discovery',
    ],
    tech: ['Node.js', 'Express', 'React.js', 'MongoDB', 'Socket.io', 'Context API'],
    repo: null,
    demo: null,
  },
  {
    name: 'Roam-Casa',
    slug: 'roam-casa',
    mockLine: 'Search and filters over live listings',
    type: 'Property Rental Platform',
    period: 'Jun 2023 — Aug 2023',
    problem:
      'A rental marketplace lives or dies on discovery, so the interesting problem was search and filtering that stays fast and legible as the filter set grows.',
    built:
      'A property rental platform where owners list spaces and visitors discover and book accommodations — dynamic listings, advanced search and filters, secure authentication, and a fully responsive interface. Built with Next.js and TypeScript, using Prisma for data access and Tailwind for styling.',
    features: [
      'Dynamic property listings',
      'Advanced search',
      'Filters',
      'Secure authentication',
      'Responsive design',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    repo: null,
    demo: null,
  },
];

export const achievements = [
  { rank: 'Global Rank 26', event: 'February Cook-Off 2023', org: 'CodeChef' },
  { rank: 'All India Rank 55', event: 'International School Championship, 2020', org: 'Technothlon · IIT Guwahati' },
  { rank: 'Rank 4', event: 'Summer Mirror Challenge, 2022', org: 'ACM · NIT Surat' },
];

export const dsa = {
  total: '700+',
  breakdown: [
    { platform: 'GeeksforGeeks', count: '500+' },
    { platform: 'LeetCode', count: '100+' },
    { platform: 'CodeChef', count: '100+' },
  ],
};

export const skills = [
  { group: 'Languages', items: ['C/C++', 'JavaScript', 'TypeScript', 'SQL'] },
  {
    group: 'Frontend',
    items: ['React.js', 'Next.js', 'React Native', 'Redux', 'React Router', 'Socket.io', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS'],
  },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'ClickHouse'] },
  { group: 'Messaging', items: ['Redis', 'Kafka', 'BullMQ'] },
  { group: 'Developer Tools', items: ['Git', 'GitHub', 'Docker', 'Postman', 'npm', 'VS Code', 'IntelliJ IDEA'] },
];

export const nav = [
  { id: 'services', label: 'What I do' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Projects' },
  // { id: 'engineering', label: 'Engineering' },
  { id: 'skills', label: 'Skills' },
  { id: 'faqs', label: 'FAQs' },
];

// What I actually do, in three buckets. Illustrations are drawn in CSS/SVG.
export const capabilities = [
  {
    key: 'backend',
    title: 'Backend & APIs',
    body: 'Node.js and Express services with REST APIs, backed by PostgreSQL, MySQL or MongoDB. The part that has to stay correct while everything else changes.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    key: 'pipeline',
    title: 'Real-time data pipelines',
    body: 'Queues, workers, batching, caching and retries — moving high volumes of events without dropping them, and recovering sensibly when something fails.',
    tech: ['BullMQ', 'Redis', 'ClickHouse', 'Kafka'],
  },
  {
    key: 'product',
    title: 'Full-stack product work',
    body: 'React and Next.js front-ends in TypeScript on top of those services, so a feature ships end to end rather than stopping at the API boundary.',
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
];

export const faqs = [
  {
    q: 'What kind of work do you take on?',
    a: 'Full-stack work with a backend centre of gravity — roughly 60% backend, 40% frontend. In practice that means Node.js and TypeScript services, REST APIs, queues and data-heavy features, plus the React or Next.js front-end that sits on top.',
  },
  {
    q: 'What are you strongest at?',
    a: 'Backend systems that have to deal with volume: queue-based workers, batching, caching, retry and failure handling, and the databases behind them. The pipeline I own at Medront processes around 40 million events a day, and most of what I know about production behaviour came from keeping it stable.',
  },
  {
    q: 'How do you approach a problem you have not seen before?',
    a: 'Understand the actual problem before writing code, then think about architecture and data flow, then build the simplest thing that scales appropriately. I test while building rather than at the end, pay attention to failure paths, and debug from logs and evidence instead of guesses.',
  },
  {
    q: 'Do you work on frontend as well?',
    a: 'Yes — React, Next.js, TypeScript, SCSS and Tailwind. Roam-Casa was a Next.js and TypeScript build with Prisma behind it, and Social-Vista was a full React front-end over a Node and Socket.io backend.',
  },
  {
    q: 'How do you use AI tools in your workflow?',
    a: 'For implementation help, debugging, understanding unfamiliar code, research, generating test cases, refactoring and documentation. It moves me faster, but I stay responsible for the result: I review generated code critically, test it, and make sure I understand why it works before it ships.',
  },
  {
    q: 'Are you open to new opportunities?',
    a: 'Yes — I am open to conversations about full-stack, backend and Node.js roles. Email is the fastest way to reach me.',
  },
];
