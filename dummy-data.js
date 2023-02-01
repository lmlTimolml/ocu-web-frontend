/* ARTIKLER */

const DUMMY_ARTICLES = [
  {
    id: 'a1',
    title: 'Gi CRM en klem',
    description: 'CRM - Donec sagittis ultricies porta. Cras ac elit eget ex ullamcorper sollicitudin id eu odio. Pellentesque eget ornare tortor, ac consequat est. Aenean dolor est, pretium et porttitor quis',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci nisl, volutpat sed urna a, pretium blandit lectus. Maecenas feugiat fringilla sagittis. Ut nec tortor in purus pharetra pharetra id vitae mauris. Aenean pulvinar ac sapien ac lacinia. Aenean pulvinar varius venenatis. Suspendisse dignissim vel quam nec sollicitudin. Duis tellus ipsum, eleifend non nisl eu, tincidunt porta arcu. Praesent a sem lectus. Aenean eleifend tincidunt est congue rhoncus. Ut libero diam, sodales id nunc at, finibus tempus nisi. Cras mattis dui non elit interdum, interdum tincidunt erat ornare. Nulla imperdiet ligula vitae mollis viverra. Etiam felis enim, consectetur id odio eu, facilisis suscipit ex. Nullam eu ornare mauris. Ut at mi vel nunc dapibus placerat eget eu nunc. Mauris non lacinia ante. Morbi posuere sed lorem nec consectetur. Phasellus ac euismod lectus, nec aliquam dui. Maecenas sed nibh suscipit, molestie arcu eu, volutpat tortor. Aenean sagittis lorem at dolor porttitor, in tincidunt diam ullamcorper. Maecenas rhoncus nibh mauris, non luctus nisl congue sit amet. Quisque laoreet sem et elit laoreet dapibus. Suspendisse potenti. Curabitur convallis posuere porttitor. Donec sagittis ultricies porta. Cras ac elit eget ex ullamcorper sollicitudin id eu odio. Pellentesque eget ornare tortor, ac consequat est. Aenean dolor est, pretium et porttitor quis, bibendum non nunc. In metus odio, consequat ut euismod volutpat, semper nec nibh. Phasellus at erat id odio pharetra elementum. Mauris pretium turpis congue, pulvinar turpis quis, viverra urna. Suspendisse et congue tellus, eleifend sagittis leo. Quisque tempor efficitur justo, vitae lobortis est tempus at. Nulla feugiat augue eget sapien tristique, ut commodo tellus tristique. Vivamus interdum lacinia libero quis condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vitae mauris lorem. Duis efficitur at orci molestie suscipit. Pellentesque sollicitudin felis at justo convallis efficitur. Vestibulum dictum ornare consectetur. Proin auctor, nunc in vulputate fermentum, nunc mi facilisis nisi, non euismod libero justo eu lacus. Sed congue urna arcu, eu luctus metus hendrerit et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'loyalty-coffee-logo-transparent.svg',
    alt: 'imagetitle',
    isFeatured: true,
    link: 'Les mer',
  },
  {
    id: 'a2',
    title: 'Automasjon Schmautomasjon',
    description: 'We know: Networking is no fun if you are an introvert person. That\'s why we came up with this event - it\'ll be so much easier. Promised! ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci nisl, volutpat sed urna a, pretium blandit lectus. Maecenas feugiat fringilla sagittis. Ut nec tortor in purus pharetra pharetra id vitae mauris. Aenean pulvinar ac sapien ac lacinia. Aenean pulvinar varius venenatis. Suspendisse dignissim vel quam nec sollicitudin. Duis tellus ipsum, eleifend non nisl eu, tincidunt porta arcu. Praesent a sem lectus. Aenean eleifend tincidunt est congue rhoncus. Ut libero diam, sodales id nunc at, finibus tempus nisi. Cras mattis dui non elit interdum, interdum tincidunt erat ornare. Nulla imperdiet ligula vitae mollis viverra. Etiam felis enim, consectetur id odio eu, facilisis suscipit ex. Nullam eu ornare mauris. Ut at mi vel nunc dapibus placerat eget eu nunc. Mauris non lacinia ante. Morbi posuere sed lorem nec consectetur. Phasellus ac euismod lectus, nec aliquam dui. Maecenas sed nibh suscipit, molestie arcu eu, volutpat tortor. Aenean sagittis lorem at dolor porttitor, in tincidunt diam ullamcorper. Maecenas rhoncus nibh mauris, non luctus nisl congue sit amet. Quisque laoreet sem et elit laoreet dapibus. Suspendisse potenti. Curabitur convallis posuere porttitor. Donec sagittis ultricies porta. Cras ac elit eget ex ullamcorper sollicitudin id eu odio. Pellentesque eget ornare tortor, ac consequat est. Aenean dolor est, pretium et porttitor quis, bibendum non nunc. In metus odio, consequat ut euismod volutpat, semper nec nibh. Phasellus at erat id odio pharetra elementum. Mauris pretium turpis congue, pulvinar turpis quis, viverra urna. Suspendisse et congue tellus, eleifend sagittis leo. Quisque tempor efficitur justo, vitae lobortis est tempus at. Nulla feugiat augue eget sapien tristique, ut commodo tellus tristique. Vivamus interdum lacinia libero quis condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vitae mauris lorem. Duis efficitur at orci molestie suscipit. Pellentesque sollicitudin felis at justo convallis efficitur. Vestibulum dictum ornare consectetur. Proin auctor, nunc in vulputate fermentum, nunc mi facilisis nisi, non euismod libero justo eu lacus. Sed congue urna arcu, eu luctus metus hendrerit et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/introvert-event.jpg',
    alt: 'imagetitle',
    isFeatured: false,
    link: 'Les mer',
  },
  {
    id: 'a3',
    title: 'Loyalitet!? Bonus mener du?',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci nisl, volutpat sed urna a, pretium blandit lectus. Maecenas feugiat fringilla sagittis. Ut nec tortor in purus pharetra pharetra id vitae mauris. Aenean pulvinar ac sapien ac lacinia. Aenean pulvinar varius venenatis. Suspendisse dignissim vel quam nec sollicitudin. Duis tellus ipsum, eleifend non nisl eu, tincidunt porta arcu. Praesent a sem lectus. Aenean eleifend tincidunt est congue rhoncus. Ut libero diam, sodales id nunc at, finibus tempus nisi. Cras mattis dui non elit interdum, interdum tincidunt erat ornare. Nulla imperdiet ligula vitae mollis viverra. Etiam felis enim, consectetur id odio eu, facilisis suscipit ex. Nullam eu ornare mauris. Ut at mi vel nunc dapibus placerat eget eu nunc. Mauris non lacinia ante. Morbi posuere sed lorem nec consectetur. Phasellus ac euismod lectus, nec aliquam dui. Maecenas sed nibh suscipit, molestie arcu eu, volutpat tortor. Aenean sagittis lorem at dolor porttitor, in tincidunt diam ullamcorper. Maecenas rhoncus nibh mauris, non luctus nisl congue sit amet. Quisque laoreet sem et elit laoreet dapibus. Suspendisse potenti. Curabitur convallis posuere porttitor. Donec sagittis ultricies porta. Cras ac elit eget ex ullamcorper sollicitudin id eu odio. Pellentesque eget ornare tortor, ac consequat est. Aenean dolor est, pretium et porttitor quis, bibendum non nunc. In metus odio, consequat ut euismod volutpat, semper nec nibh. Phasellus at erat id odio pharetra elementum. Mauris pretium turpis congue, pulvinar turpis quis, viverra urna. Suspendisse et congue tellus, eleifend sagittis leo. Quisque tempor efficitur justo, vitae lobortis est tempus at. Nulla feugiat augue eget sapien tristique, ut commodo tellus tristique. Vivamus interdum lacinia libero quis condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vitae mauris lorem. Duis efficitur at orci molestie suscipit. Pellentesque sollicitudin felis at justo convallis efficitur. Vestibulum dictum ornare consectetur. Proin auctor, nunc in vulputate fermentum, nunc mi facilisis nisi, non euismod libero justo eu lacus. Sed congue urna arcu, eu luctus metus hendrerit et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/blikjent.jpg',
    alt: 'imagetitle',
    isFeatured: false,
    link: 'Les mer',
  }, 
];


export function getFeaturedArticles() {
  return DUMMY_ARTICLES.filter((article) => article.isFeatured);
}

export function getAllArticles() {
  return DUMMY_ARTICLES;
}

/* export function getFilteredArticles(tagFilter) {
  const { tag } = tagFilter;

  let filteredArticles = DUMMY_ARTICLES.filter((article) => {
    const articleTag = ;
    return articleTag;
  });

  return filteredArticles;
} */

export function getArticleById(id) {
  return DUMMY_ARTICLES.find((article) => article.id === id);
}

/* EVENTER */

const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Event-Programming for everyone',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      time: '09.00–10.00',
      image: 'images/playknapp-hubspot.jpg',
      alt: 'imagetitle',
      isFeatured: false,
      link: 'Les mer',
    },
    {
      id: 'e2',
      title: 'Event-Networking for introverts',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      time: '09.00–10.00',
      image: 'images/blikjent.jpg',
      alt: 'imagetitle',
      isFeatured: false,
      link: 'Les mer',
    },
    {
      id: 'e3',
      title: 'Event-Networking for extroverts',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      time: '09.00–10.00',
      image: 'images/ledige-stillinger.jpg',
      alt: 'imagetitle',
      isFeatured: true,
      link: 'Les mer',
    },
  ];


  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }

/* TJENESTER */

  const DUMMY_SERVICES = [
    {
      id: 's1',
      title: 'Rådgivning & strategi',
      bulletpoints: [
        'Lojalitetskonsepter',
        'CRM/CXM',
        'GDPR og samtykke'
      ],
      link: 'Les mer',
    },
    {
      id: 's2',
      title: 'Teknologi & kundedata',
      bulletpoints: [
        'Valg av MarTechløsninger',
        'Implementering og drift',
        'Oculos Intégration Platform (OIP)'
      ],
      link: 'Les mer',
    },
    {
      id: 's3',
      title: 'Operative tjenester',
      bulletpoints: [
        'Konseptutvikling',
        'Marketing operations',
        'Produksjon og kreativ service'
      ],
      link: 'Les mer',
    },
    {
      id: 's4',
      title: 'Analyse & innsikt',
      bulletpoints: [
        'Kartlegging av kundene',
        'Effekttester',
        'BI rapportering'
      ],
      link: 'Les mer',
    },
  ];

  export function getAllServices() {
    return DUMMY_SERVICES;
  }
  
  /* STILLINGER */

  export const jobs = [
    {
      id: 1,
      title: "Sr. Python dev",
      company: "Computing101",
      location: "Somewhere",
      langauge: "Norwegian"
    },
    {
      id: 2,
      title: "Sr. Snake dev",
      company: "Computing102",
      location: "Somewhere else",
      langauge: "Swedish"
    },
    {
      id: 3,
      title: "Jr. Worms dev",
      company: "Computing201",
      location: "Somewhere completely remote",
      langauge: "Unknown"
    },
  ]

  /* EMPLOYEES */

const EMPLOYEES = [
  {
    id: '1',
    name: 'Toralf En Null',
    title: 'CEO BRO',
    image: '/images/employees/toralftonull.jpg',
    alt: 'employee name',
    isLeader: true,
    email: 'Send en e-post',
    link: 'mailto:timowestre@gmail.com',
  },
  {
    id: '2',
    name: 'Toralf To Null',
    title: 'CEO BRO',
    image: '/images/employees/toralftonull.jpg',
    alt: 'employee name',
    isLeader: true,
    email: 'Send en e-post',
    link: 'mailto:timowestre@gmail.com',
  },
  {
    id: '3',
    name: 'Toralf Tre Null',
    title: 'CEO BRO',
    image: '/images/employees/toralftonull.jpg',
    alt: 'employee name',
    isLeader: true,
    email: 'Send en e-post',
    link: 'mailto:timowestre@gmail.com',
  },
  {
    id: '4',
    name: 'Toralf Fire Null',
    title: 'CEO BRO',
    image: '/images/employees/toralftonull.jpg',
    alt: 'employee name',
    isLeader: true,
    email: 'Send en e-post',
    link: 'mailto:timowestre@gmail.com',
  },
  {
    id: '5',
    name: 'Toralf Fem Null',
    title: 'CEO BRO',
    image: '/images/employees/toralftonull.jpg',
    alt: 'employee name',
    isLeader: true,
    email: 'Send en e-post',
    link: 'mailto:timowestre@gmail.com',
  },
  {
    id: '6',
    name: 'Toralf Bare Tull',
    title: 'CEO BRO',
    image: '/images/employees/toralftonull.jpg',
    alt: 'employee name',
    isLeader: false,
    email: 'Send en e-post',
    link: 'mailto:timowestre@gmail.com',
  },
]
export function employees() {
  return EMPLOYEES;
}

/* LOGOS */

const CLIENT_LOGOS = [
  {
    id: 1,
    image: `/images/logos/aneo.png`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 2,
    image: `/images/logos/azets.svg`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 3,
    image: `/images/logos/bertel-o-steen.png`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 4,
    image: `/images/logos/bjorklund.png`,
    alt: "company logo",
    isFeatured: true,
  },
  {
    id: 5,
    image: `/images/logos/boots.png`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 6,
    image: `/images/logos/brilleland.svg`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 7,
    image: `/images/logos/cappelen-damm.png`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 8,
    image: `/images/logos/christiania-belysning.svg`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 9,
    image: `/images/logos/coop.png`,
    alt: "company logo",
    isFeatured: true,
  },
  {
    id: 10,
    image: `/images/logos/dnb.webp`,
    alt: "company logo",
    isFeatured: true,
  },
  {
    id: 11,
    image: `/images/logos/dominos.png`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 12,
    image: `/images/logos/elektroimportoren.png`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 13,
    image: `/images/logos/elkjop.webp`,
    alt: "company logo",
    isFeatured: true,
  },
  {
    id: 14,
    image: `/images/logos/enklere-liv.svg`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 15,
    image: `/images/logos/fell-tech.png`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 16,
    image: `/images/logos/ferner-jacobsen.png`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 17,
    image: `/images/logos/gullfunn.png`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 18,
    image: `/images/logos/hageland.webp`,
    alt: "company logo",
    isFeatured: true,
  },
  {
    id: 19,
    image: `/images/logos/interoptik.png`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 20,
    image: `/images/logos/istad-kraft.svg`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 21,
    image: `/images/logos/lo.png`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 22,
    image: `/images/logos/meca.svg`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 23,
    image: `/images/logos/moller-bil.svg`,
    alt: "company logo",
    isFeatured: true,
  },
  {
    id: 24,
    image: `/images/logos/monter.png`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 25,
    image: `/images/logos/naf.svg`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 26,
    image: `/images/logos/nille.webp`,
    alt: "company logo",
    isFeatured: true,
  },
  {
    id: 27,
    image: `/images/logos/nte.svg`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 28,
    image: `/images/logos/ohmia.png`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 29,
    image: `/images/logos/outland.svg`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 30,
    image: `/images/logos/rsa.jpeg`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 31,
    image: `/images/logos/skeidar.png`,
    alt: "company logo",
    isFeatured: true,
  },
  {
    id: 32,
    image: `/images/logos/sprell.png`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 33,
    image: `/images/logos/tussa.png`,
    alt: "company logo",
    isFeatured: false,
  },
  {
    id: 34,
    image: `/images/logos/xlbygg.svg`,
    alt: "company logo",
    isFeatured: false,
  },
];

export function clientLogos() {
  return CLIENT_LOGOS;
}

/* FEATURED CLIENTS */

const CLIENTS = [
  {
    id: 1,
    image: `/images/coding-event.jpg`,
    alt: "company name",
    title: "Kunde 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci nisl, volutpat sed urna a, pretium blandit lectus. Maecenas feugiat fringilla sagittis. Ut nec tortor in purus pharetra pharetra id vitae mauris. Aenean pulvinar ac sapien ac lacinia. Aenean pulvinar varius venenatis. Suspendisse dignissim vel quam nec sollicitudin.",
    isFeatured: true,
    link: "Les mer",
  },
  {
    id: 2,
    image: `/images/coding-event.jpg`,
    alt: "company name",
    title: "Kunde 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci nisl, volutpat sed urna a, pretium blandit lectus. Maecenas feugiat fringilla sagittis. Ut nec tortor in purus pharetra pharetra id vitae mauris. Aenean pulvinar ac sapien ac lacinia. Aenean pulvinar varius venenatis. Suspendisse dignissim vel quam nec sollicitudin.",
    isFeatured: true,
    link: "Les mer",
  },
  {
    id: 3,
    image: `/images/coding-event.jpg`,
    alt: "company name",
    title: "Kunde 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci nisl, volutpat sed urna a, pretium blandit lectus. Maecenas feugiat fringilla sagittis. Ut nec tortor in purus pharetra pharetra id vitae mauris. Aenean pulvinar ac sapien ac lacinia. Aenean pulvinar varius venenatis. Suspendisse dignissim vel quam nec sollicitudin.",
    isFeatured: true,
    link: "Les mer",
  },
  {
    id: 4,
    image: `/images/coding-event.jpg`,
    alt: "company name",
    title: "Kunde 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci nisl, volutpat sed urna a, pretium blandit lectus. Maecenas feugiat fringilla sagittis. Ut nec tortor in purus pharetra pharetra id vitae mauris. Aenean pulvinar ac sapien ac lacinia. Aenean pulvinar varius venenatis. Suspendisse dignissim vel quam nec sollicitudin.",
    isFeatured: false,
    link: "Les mer",
  },
  {
    id: 5,
    image: `/images/coding-event.jpg`,
    alt: "company name",
    title: "Kunde 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci nisl, volutpat sed urna a, pretium blandit lectus. Maecenas feugiat fringilla sagittis. Ut nec tortor in purus pharetra pharetra id vitae mauris. Aenean pulvinar ac sapien ac lacinia. Aenean pulvinar varius venenatis. Suspendisse dignissim vel quam nec sollicitudin.",
    isFeatured: true,
    link: "Les mer",
  },
  {
    id: 6,
    image: `/images/coding-event.jpg`,
    alt: "company name",
    title: "Kunde 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci nisl, volutpat sed urna a, pretium blandit lectus. Maecenas feugiat fringilla sagittis. Ut nec tortor in purus pharetra pharetra id vitae mauris. Aenean pulvinar ac sapien ac lacinia. Aenean pulvinar varius venenatis. Suspendisse dignissim vel quam nec sollicitudin.",
    isFeatured: false,
    link: "Les mer",
  },
];

export function clients() {
  return CLIENTS;
}