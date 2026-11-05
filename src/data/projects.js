export const projects = [
  {
    id: '01',
    title: 'MahaST',
    subtitle: 'Maharashtra State Bus Service Platform',
    category: 'Public Transit Web Platform',
    description:
      'A digital public transport platform concept designed to improve the Maharashtra government bus passenger experience. Features include live route tracking, digital ticketing, smart bus passes, grievance filing, and bilingual assistance.',
    problem:
      'Commuters across Maharashtra frequently struggle with unreliable offline schedules, manual ticketing queues, and a lack of real-time transit information for state buses.',
    solution:
      'MahaST provides an accessible web application offering map-based bus tracking, quick pass issuance, direct grievance submission, and bilingual (English/Marathi) guidance.',
    features: [
      'Interactive Leaflet routing map with stop markers',
      'Digital ticketing and dynamic concession bus pass generation',
      'Citizen grievance registration and status tracking portal',
      'Bilingual interface catering to Maharashtra regional commuters',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Leaflet', 'Express'],
    status: 'Development / Prototype',
    statusType: 'in-progress',
    github: 'https://github.com/parshyaa214/mahast',
    size: 'large',
  },
  {
    id: '02',
    title: 'Career Guide',
    subtitle: 'AI-Powered Career Guidance Platform',
    category: 'Educational Recommendation Platform',
    description:
      'A web platform designed to help students discover suitable career pathways based on academic performance, cognitive interests, and personal industry preferences.',
    problem:
      'High-school and early college students often lack personalized, data-backed guidance tailored to their actual test scores and evolving ambitions.',
    solution:
      'Built an interactive assessment portal using deterministic and heuristic scoring that maps user interest parameters to viable engineering, medical, and creative career paths.',
    features: [
      'Multi-parameter student aptitude and interest questionnaire',
      'Automated scoring algorithm recommending tailored career tracks',
      'Local storage persistence for historical result comparisons',
      'Comprehensive branch guides with curriculum and college outlook',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage API'],
    status: 'Frontend Completed',
    statusType: 'complete',
    github: 'https://github.com/parshyaa214/careerguide.com',
    size: 'medium',
  },
  {
    id: '03',
    title: 'LokSevva',
    subtitle: 'Government Survey & Public Welfare Portal',
    category: 'Civic Engagement & Governance',
    description:
      'A citizen-focused public service portal connecting government administration, private civic stakeholders, and communities through surveys, scheme discovery, and feedback loops.',
    problem:
      'Welfare initiatives frequently suffer low adoption due to fragmented information channels and limited direct public feedback mechanisms.',
    solution:
      'A centralized civic portal aggregating government scheme listings with structured survey modules that give citizens a direct voice in community welfare.',
    features: [
      'Categorized registry of central and state welfare initiatives',
      'Citizen survey and opinion submission module',
      'Streamlined verification checklist for scheme eligibility',
      'Responsive design ensuring accessibility on mobile devices',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    status: 'Frontend Completed',
    statusType: 'complete',
    github: null,
    size: 'medium',
  },
  {
    id: '04',
    title: 'SpotLight',
    subtitle: 'Local Product Discovery Platform',
    category: 'Hyperlocal Commerce & Maps',
    description:
      'A location-based product discovery platform concept that helps users locate nearby brick-and-mortar stores, confirm stock availability, compare prices, and get walking directions.',
    problem:
      'Shoppers spend unnecessary time visiting physical stores without knowing in advance whether specialized products or replacement components are in stock.',
    solution:
      'SpotLight connects local merchants with nearby consumers through a map-centric product catalog and geo-radius search.',
    features: [
      'Geo-located search mapping neighborhood retail stores',
      'Real-time price and inventory status comparison per merchant',
      'Turn-by-turn map routing via Maps API integration',
      'Merchant dashboard architecture for product stock updates',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Maps API'],
    status: 'Planning / Development',
    statusType: 'planning',
    github: 'https://github.com/parshyaa214/spotlight',
    size: 'medium',
  },
  {
    id: '05',
    title: 'ApnaDJ',
    subtitle: 'DJ Booking & Equipment Marketplace',
    category: 'Event Booking Marketplace',
    description:
      'A specialized marketplace concept where sound system and DJ owners can showcase their setups, audio packages, and lighting gear while event organizers browse and book online.',
    problem:
      'Event planners rely on informal word-of-mouth with opaque pricing and zero equipment transparency when booking DJs.',
    solution:
      'Created a digital catalog platform where artists showcase verified equipment specs, previous gig footage, and modular hourly booking packages.',
    features: [
      'Comprehensive gear listings (wattage, speakers, mixers, lights)',
      'Tiered pricing packages for weddings, college fests, and parties',
      'Direct customer enquiry and date reservation forms',
      'Mobile-first responsive media galleries',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    status: 'Frontend Completed (Backend Planned)',
    statusType: 'partial',
    github: null,
    size: 'small',
  },
  {
    id: '06',
    title: 'ApnaNotes',
    subtitle: 'Academic Notes Sharing Platform',
    category: 'Collaborative Education Repository',
    description:
      'A peer-to-peer student repository intended to make university notes, syllabus handouts, and previous exam question solutions seamlessly accessible.',
    problem:
      'Study resources are scattered across random WhatsApp groups and ephemeral links, causing students to miss key course materials before exams.',
    solution:
      'A cleanly indexed digital archive allowing students to sort lecture notes by semester, branch, and subject code.',
    features: [
      'Branch and semester-wise organized notes directory',
      'Preview modal and one-click PDF downloading',
      'Community upload submission framework',
      'Lightweight, fast-loading responsive reading interface',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    status: 'In Development',
    statusType: 'in-progress',
    github: 'https://github.com/parshyaa214/apnenotes.com',
    size: 'small',
  },
  {
    id: '07',
    title: 'IoT & Hardware Experiments',
    subtitle: 'Embedded Sensor Systems with Arduino',
    category: 'Embedded Systems & Microcontrollers',
    description:
      'Hands-on embedded engineering prototypes using Arduino Uno, SPI RFID transceivers, and digital environmental sensors for real-time automation.',
    problem:
      'Physical attendance tracking and environmental auditing are error-prone and labor-intensive when performed manually.',
    solution:
      'Programmed standalone Arduino microcontrollers to automatically log student UID tags via RFID and continuously stream humidity/temperature readings.',
    features: [
      'RFID RC522 attendance scanner with UID matching and buzzer feedback',
      'DHT environmental monitor displaying live temperature and humidity metrics',
      'C++ hardware driver programming with Serial output diagnostics',
      'Breadboard circuit prototyping with regulated 5V/3.3V power routing',
    ],
    tech: ['Arduino Uno', 'RFID RC522', 'DHT Sensors', 'Embedded C++'],
    status: 'Prototype Experiments',
    statusType: 'complete',
    github: null,
    size: 'medium',
    subProjects: [
      { name: 'RFID-Based Attendance System', tags: ['Arduino Uno', 'RFID RC522', 'UID Identification'] },
      { name: 'Temperature & Humidity Monitor', tags: ['Arduino Uno', 'DHT Sensor', 'Environmental Telemetry'] },
    ],
  },
];
