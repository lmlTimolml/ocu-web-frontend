/* ARTIKLER */

const DUMMY_ARTICLES = [
  {
    id: 'a1',
    title: 'Gi CRM en klem',
    description: 'CRM - Donec sagittis ultricies porta. Cras ac elit eget ex ullamcorper sollicitudin id eu odio. Pellentesque eget ornare tortor, ac consequat est. Aenean dolor est, pretium et porttitor quis',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci nisl, volutpat sed urna a, pretium blandit lectus. Maecenas feugiat fringilla sagittis. Ut nec tortor in purus pharetra pharetra id vitae mauris. Aenean pulvinar ac sapien ac lacinia. Aenean pulvinar varius venenatis. Suspendisse dignissim vel quam nec sollicitudin. Duis tellus ipsum, eleifend non nisl eu, tincidunt porta arcu. Praesent a sem lectus. Aenean eleifend tincidunt est congue rhoncus. Ut libero diam, sodales id nunc at, finibus tempus nisi. Cras mattis dui non elit interdum, interdum tincidunt erat ornare. Nulla imperdiet ligula vitae mollis viverra. Etiam felis enim, consectetur id odio eu, facilisis suscipit ex. Nullam eu ornare mauris. Ut at mi vel nunc dapibus placerat eget eu nunc. Mauris non lacinia ante. Morbi posuere sed lorem nec consectetur. Phasellus ac euismod lectus, nec aliquam dui. Maecenas sed nibh suscipit, molestie arcu eu, volutpat tortor. Aenean sagittis lorem at dolor porttitor, in tincidunt diam ullamcorper. Maecenas rhoncus nibh mauris, non luctus nisl congue sit amet. Quisque laoreet sem et elit laoreet dapibus. Suspendisse potenti. Curabitur convallis posuere porttitor. Donec sagittis ultricies porta. Cras ac elit eget ex ullamcorper sollicitudin id eu odio. Pellentesque eget ornare tortor, ac consequat est. Aenean dolor est, pretium et porttitor quis, bibendum non nunc. In metus odio, consequat ut euismod volutpat, semper nec nibh. Phasellus at erat id odio pharetra elementum. Mauris pretium turpis congue, pulvinar turpis quis, viverra urna. Suspendisse et congue tellus, eleifend sagittis leo. Quisque tempor efficitur justo, vitae lobortis est tempus at. Nulla feugiat augue eget sapien tristique, ut commodo tellus tristique. Vivamus interdum lacinia libero quis condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vitae mauris lorem. Duis efficitur at orci molestie suscipit. Pellentesque sollicitudin felis at justo convallis efficitur. Vestibulum dictum ornare consectetur. Proin auctor, nunc in vulputate fermentum, nunc mi facilisis nisi, non euismod libero justo eu lacus. Sed congue urna arcu, eu luctus metus hendrerit et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'loyalty-coffee-logo-transparent.svg',
    isFeatured: true,
    link: 'Les mer',
  },
  {
    id: 'a2',
    title: 'Automasjon Schmautomasjon',
    description: 'We know: Networking is no fun if you are an introvert person. That\'s why we came up with this event - it\'ll be so much easier. Promised! ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci nisl, volutpat sed urna a, pretium blandit lectus. Maecenas feugiat fringilla sagittis. Ut nec tortor in purus pharetra pharetra id vitae mauris. Aenean pulvinar ac sapien ac lacinia. Aenean pulvinar varius venenatis. Suspendisse dignissim vel quam nec sollicitudin. Duis tellus ipsum, eleifend non nisl eu, tincidunt porta arcu. Praesent a sem lectus. Aenean eleifend tincidunt est congue rhoncus. Ut libero diam, sodales id nunc at, finibus tempus nisi. Cras mattis dui non elit interdum, interdum tincidunt erat ornare. Nulla imperdiet ligula vitae mollis viverra. Etiam felis enim, consectetur id odio eu, facilisis suscipit ex. Nullam eu ornare mauris. Ut at mi vel nunc dapibus placerat eget eu nunc. Mauris non lacinia ante. Morbi posuere sed lorem nec consectetur. Phasellus ac euismod lectus, nec aliquam dui. Maecenas sed nibh suscipit, molestie arcu eu, volutpat tortor. Aenean sagittis lorem at dolor porttitor, in tincidunt diam ullamcorper. Maecenas rhoncus nibh mauris, non luctus nisl congue sit amet. Quisque laoreet sem et elit laoreet dapibus. Suspendisse potenti. Curabitur convallis posuere porttitor. Donec sagittis ultricies porta. Cras ac elit eget ex ullamcorper sollicitudin id eu odio. Pellentesque eget ornare tortor, ac consequat est. Aenean dolor est, pretium et porttitor quis, bibendum non nunc. In metus odio, consequat ut euismod volutpat, semper nec nibh. Phasellus at erat id odio pharetra elementum. Mauris pretium turpis congue, pulvinar turpis quis, viverra urna. Suspendisse et congue tellus, eleifend sagittis leo. Quisque tempor efficitur justo, vitae lobortis est tempus at. Nulla feugiat augue eget sapien tristique, ut commodo tellus tristique. Vivamus interdum lacinia libero quis condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vitae mauris lorem. Duis efficitur at orci molestie suscipit. Pellentesque sollicitudin felis at justo convallis efficitur. Vestibulum dictum ornare consectetur. Proin auctor, nunc in vulputate fermentum, nunc mi facilisis nisi, non euismod libero justo eu lacus. Sed congue urna arcu, eu luctus metus hendrerit et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/introvert-event.jpg',
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
    isFeatured: true,
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
      isFeatured: false,
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

  /* IMAGES */

const CLIENT_LOGOS = [
  {
    id: 1,
    alt: "company logo",
    image: `/images/logos/aneo.png`
  },
  {
    id: 2,
    alt: "company logo",
    image: `/images/logos/azets.svg`
  },
  {
    id: 3,
    alt: "company logo",
    image: `/images/logos/bertel-o-steen.png`
  },
  {
    id: 4,
    alt: "company logo",
    image: `/images/logos/bjorklund.png`
  },
  {
    id: 5,
    alt: "company logo",
    image: `/images/logos/boots.png`
  },
  {
    id: 6,
    alt: "company logo",
    image: `/images/logos/brilleland.svg`
  },
  {
    id: 7,
    alt: "company logo",
    image: `/images/logos/cappelen-damm.png`
  },
  {
    id: 8,
    alt: "company logo",
    image: `/images/logos/christiania-belysning.svg`
  },
  {
    id: 9,
    alt: "company logo",
    image: `/images/logos/coop.png`
  },
  {
    id: 10,
    alt: "company logo",
    image: `/images/logos/dnb.webp`
  },
  {
    id: 11,
    alt: "company logo",
    image: `/images/logos/dominos.png`
  },
  {
    id: 12,
    alt: "company logo",
    image: `/images/logos/elektroimportoren.png`
  },
  {
    id: 13,
    alt: "company logo",
    image: `/images/logos/elkjop.webp`
  },
  {
    id: 14,
    alt: "company logo",
    image: `/images/logos/enklere-liv.svg`
  },
  {
    id: 15,
    alt: "company logo",
    image: `/images/logos/fell-tech.png`
  },
  {
    id: 16,
    alt: "company logo",
    image: `/images/logos/ferner-jacobsen.png`
  },
  {
    id: 17,
    alt: "company logo",
    image: `/images/logos/gullfunn.png`
  },
  {
    id: 18,
    alt: "company logo",
    image: `/images/logos/hageland.webp`
  },
  {
    id: 19,
    alt: "company logo",
    image: `/images/logos/interoptik.png`
  },
  {
    id: 20,
    alt: "company logo",
    image: `/images/logos/istad-kraft.svg`
  },
  {
    id: 21,
    alt: "company logo",
    image: `/images/logos/lo.png`
  },
  {
    id: 22,
    alt: "company logo",
    image: `/images/logos/meca.svg`
  },
  {
    id: 23,
    alt: "company logo",
    image: `/images/logos/moller-bil.svg`
  },
  {
    id: 24,
    alt: "company logo",
    image: `/images/logos/monter.png`
  },
  {
    id: 25,
    alt: "company logo",
    image: `/images/logos/naf.svg`
  },
  {
    id: 26,
    alt: "company logo",
    image: `/images/logos/nille.webp`
  },
  {
    id: 27,
    alt: "company logo",
    image: `/images/logos/nte.svg`
  },
  {
    id: 28,
    alt: "company logo",
    image: `/images/logos/ohmia.png`
  },
  {
    id: 29,
    alt: "company logo",
    image: `/images/logos/outland.svg`
  },
  {
    id: 30,
    alt: "company logo",
    image: `/images/logos/rsa.jpeg`
  },
  {
    id: 31,
    alt: "company logo",
    image: `/images/logos/skeidar.png`
  },
  {
    id: 32,
    alt: "company logo",
    image: `/images/logos/sprell.png`
  },
  {
    id: 33,
    alt: "company logo",
    image: `/images/logos/tussa.png`
  },
  {
    id: 34,
    alt: "company logo",
    image: `/images/logos/xlbygg.svg`
  },
];

export function clientLogos() {
  return CLIENT_LOGOS;
}