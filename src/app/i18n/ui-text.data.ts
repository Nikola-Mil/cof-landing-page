import { Language } from './language';

export interface StatItem {
  value: string;
  label: string;
}

export interface FormatItem {
  icon: string;
  title: string;
  description: string;
}

export interface UiText {
  common: {
    mainNavigation: string;
    footerNavigation: string;
    centerForFinanceAria: string;
    toggleMenu: string;
    closeSpeakerBio: string;
    language: string;
    patronsAria: string;
    patronMontenegro: string;
    patronChamber: string;
  };
  nav: {
    about: string;
    agenda: string;
    speakers: string;
    committee: string;
    venue: string;
    register: string;
  };
  hero: {
    lead: string;
    registerNow: string;
    viewAgenda: string;
    hostedBy: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    contextText: string;
    stats: StatItem[];
    formats: FormatItem[];
  };
  agenda: {
    eyebrow: string;
    title: string;
    lead: string;
    disclaimer: string;
  };
  speakers: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  committee: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  venue: {
    eyebrow: string;
    title: string;
    lead: string;
    getDirections: string;
    mapTitle: string;
    dinnerTitle: string;
    dinnerText: string;
  };
  register: {
    eyebrow: string;
    title: string;
    leadPrefix: string;
    registerNow: string;
  };
  footer: {
    conferenceHeading: string;
    attendHeading: string;
    attendText: string;
    registerNow: string;
    copyrightHolder: string;
  };
}

export const UI_TEXT: Record<Language, UiText> = {
  en: {
    common: {
      mainNavigation: 'Main navigation',
      footerNavigation: 'Footer navigation',
      centerForFinanceAria: 'Center for Finance',
      toggleMenu: 'Toggle navigation menu',
      closeSpeakerBio: 'Close speaker bio',
      language: 'Language',
      patronsAria: 'Held under the patronage of the President of Montenegro, in partnership with the Chamber of Commerce of Montenegro and Center for Finance',
      patronMontenegro: 'Under the patronage of the President of Montenegro',
      patronChamber: 'Chamber of Commerce of Montenegro',
    },
    nav: {
      about: 'About',
      agenda: 'Agenda',
      speakers: 'Speakers',
      committee: 'Committee',
      venue: 'Venue',
      register: 'Register',
    },
    hero: {
      lead: 'Nine countries. A Nobel laureate. Two days of conversation about what EU accession actually means.',
      registerNow: 'Register Now',
      viewAgenda: 'View Agenda',
      hostedBy: 'Hosted by',
    },
    about: {
      eyebrow: 'The Concept',
      title: 'A Policy Forum Built on Lessons, Not Just Speeches',
      lead: 'A high-level, expert international policy forum on lessons from the new EU member states\' experience with accession and post-accession development — for Montenegro\'s final stage of EU accession and its long-term economic and institutional transformation. Policy lessons will also be relevant for other candidate states.',
      contextText: 'The conference takes place at a particularly important moment, as Montenegro marks 20 years of its renewed independence while advancing towards the concluding phase of its European integration and the anticipated EU accession in 2028.',
      stats: [
        { value: '2', label: 'Days of dialogue' },
        { value: '19', label: 'International speakers' },
        { value: '9', label: 'EU member state experiences' },
        { value: '1', label: 'Nobel laureate' },
      ],
      formats: [
        {
          icon: 'record_voice_over',
          title: 'Keynote Interviews',
          description: 'Moderated conversations with senior policymakers in place of traditional speeches.',
        },
        {
          icon: 'chat',
          title: 'Fireside Conversations',
          description: 'Candid, informal exchanges on the reforms behind EU accession success stories.',
        },
        {
          icon: 'groups',
          title: 'Strategic Panels',
          description: 'Country-case discussions with leading economists, policymakers and practitioners.',
        },
        {
          icon: 'bolt',
          title: 'Rapid-Fire Reform Stories',
          description: 'TED-style presentations on one transformative reform per country, 10–12 minutes each.',
        },
        {
          icon: 'forum',
          title: 'Policy Debate & Audience Interaction',
          description: 'Open, forward-looking discussion connecting lessons learned to Montenegro\'s path ahead.',
        },
      ],
    },
    agenda: {
      eyebrow: 'Programme',
      title: 'Two Days in Podgorica',
      lead: 'A draft agenda combining keynote interviews, country panels, rapid-fire reform stories and open policy debate.',
      disclaimer: 'Draft agenda as of 11 June 2026 — programme and speakers subject to change.',
    },
    speakers: {
      eyebrow: 'Speakers',
      title: 'Voices from Nine EU Accession Stories',
      lead: 'Economists, former ministers and policy leaders who helped shape — or closely studied — EU accession across Central, Eastern and South-Eastern Europe. Tap a card to read the full bio.',
    },
    committee: {
      eyebrow: 'Organizing Committee',
      title: 'Convened by Center for Finance & the Chamber of Commerce',
      lead: 'The academic and institutional leadership behind the conference, under the patronage of the President of Montenegro.',
    },
    venue: {
      eyebrow: 'Venue',
      title: 'Where to Find Us',
      lead: 'The conference takes place in Podgorica, the capital of Montenegro.',
      getDirections: 'Get Directions',
      mapTitle: 'Map showing Hilton Podgorica',
      dinnerTitle: 'Welcome Dinner — Villa Gorica',
      dinnerText: 'Hosted by the President of Montenegro on the evening of 15 October, featuring keynote remarks ahead of the working day.',
    },
    register: {
      eyebrow: 'Registration',
      title: 'Reserve Your Seat in Podgorica',
      leadPrefix: 'Registration is required to attend. Join economists, policymakers and reformers for two days of conversation on Montenegro\'s European future —',
      registerNow: 'Register Now',
    },
    footer: {
      conferenceHeading: 'Conference',
      attendHeading: 'Attend',
      attendText: 'Registration is required to attend the conference in Podgorica.',
      registerNow: 'Register Now',
      copyrightHolder: 'Center for Finance, Montenegro',
    },
  },
  me: {
    common: {
      mainNavigation: 'Glavna navigacija',
      footerNavigation: 'Navigacija u podnožju',
      centerForFinanceAria: 'Centar za finansije',
      toggleMenu: 'Otvori/zatvori navigacioni meni',
      closeSpeakerBio: 'Zatvori biografiju govornika',
      language: 'Jezik',
      patronsAria: 'Pod pokroviteljstvom Predsjednika Crne Gore, u partnerstvu sa Privrednom komorom Crne Gore i Centrom za finansije',
      patronMontenegro: 'Pod pokroviteljstvom Predsjednika Crne Gore',
      patronChamber: 'Privredna komora Crne Gore',
    },
    nav: {
      about: 'O konferenciji',
      agenda: 'Program',
      speakers: 'Govornici',
      committee: 'Odbor',
      venue: 'Lokacija',
      register: 'Registracija',
    },
    hero: {
      lead: 'Devet zemalja. Jedan nobelovac. Dva dana razgovora o tome šta pristupanje EU zaista znači.',
      registerNow: 'Registrujte se sada',
      viewAgenda: 'Pogledajte program',
      hostedBy: 'Domaćini',
    },
    about: {
      eyebrow: 'Koncept',
      title: 'Forum o politikama zasnovan na iskustvima, a ne samo na govorima',
      lead: 'Ekspertski međunarodni forum visokog nivoa o poukama iz iskustva novih država članica EU sa pristupanjem i razvojem nakon pristupanja — namijenjen završnoj fazi pristupanja Crne Gore Evropskoj uniji i njenoj dugoročnoj ekonomskoj i institucionalnoj transformaciji. Pouke iz ovih politika biće relevantne i za druge države kandidate.',
      contextText: 'Konferencija se održava u posebno važnom trenutku, kada Crna Gora obilježava 20 godina obnovljene nezavisnosti, istovremeno napredujući ka završnoj fazi evropskih integracija i očekivanom pristupanju EU 2028. godine.',
      stats: [
        { value: '2', label: 'Dana dijaloga' },
        { value: '19', label: 'Međunarodnih govornika' },
        { value: '9', label: 'Iskustava država članica EU' },
        { value: '1', label: 'Nobelovac' },
      ],
      formats: [
        {
          icon: 'record_voice_over',
          title: 'Uvodni intervjui',
          description: 'Moderirani razgovori sa visokim kreatorima politika umjesto tradicionalnih govora.',
        },
        {
          icon: 'chat',
          title: 'Razgovori uz kamin',
          description: 'Iskreni, neformalni razgovori o reformama koje stoje iza uspješnih priča o pristupanju EU.',
        },
        {
          icon: 'groups',
          title: 'Strateški paneli',
          description: 'Diskusije o iskustvima pojedinačnih zemalja sa vodećim ekonomistima, kreatorima politika i praktičarima.',
        },
        {
          icon: 'bolt',
          title: 'Brze priče o reformama',
          description: 'Prezentacije u TED stilu o po jednoj transformativnoj reformi za svaku zemlju, u trajanju od 10 do 12 minuta.',
        },
        {
          icon: 'forum',
          title: 'Debata o politikama i interakcija sa publikom',
          description: 'Otvorena diskusija okrenuta budućnosti koja povezuje naučene lekcije sa daljim putem Crne Gore.',
        },
      ],
    },
    agenda: {
      eyebrow: 'Program',
      title: 'Dva dana u Podgorici',
      lead: 'Nacrt agende koji kombinuje uvodne intervjue, panele po zemljama, brze priče o reformama i otvorenu debatu o politikama.',
      disclaimer: 'Nacrt agende od 11. juna 2026. godine — program i govornici su podložni izmjenama.',
    },
    speakers: {
      eyebrow: 'Govornici',
      title: 'Glasovi iz devet priča o pristupanju EU',
      lead: 'Ekonomisti, bivši ministri i kreatori politika koji su oblikovali — ili detaljno proučavali — pristupanje EU širom centralne, istočne i jugoistočne Evrope. Kliknite na karticu da pročitate cijelu biografiju.',
    },
    committee: {
      eyebrow: 'Organizacioni odbor',
      title: 'Organizuju Centar za finansije i Privredna komora',
      lead: 'Akademsko i institucionalno rukovodstvo konferencije, pod pokroviteljstvom predsjednika Crne Gore.',
    },
    venue: {
      eyebrow: 'Lokacija',
      title: 'Gdje nas naći',
      lead: 'Konferencija se održava u Podgorici, glavnom gradu Crne Gore.',
      getDirections: 'Uputstva za dolazak',
      mapTitle: 'Mapa sa prikazom hotela Hilton Podgorica',
      dinnerTitle: 'Svečana večera — Vila Gorica',
      dinnerText: 'Domaćin je predsjednik Crne Gore, uveče 15. oktobra, sa uvodnim obraćanjima uoči radnog dana konferencije.',
    },
    register: {
      eyebrow: 'Registracija',
      title: 'Rezervišite svoje mjesto u Podgorici',
      leadPrefix: 'Registracija je obavezna za učešće. Pridružite se ekonomistima, kreatorima politika i reformatorima za dva dana razgovora o evropskoj budućnosti Crne Gore —',
      registerNow: 'Registrujte se sada',
    },
    footer: {
      conferenceHeading: 'Konferencija',
      attendHeading: 'Učešće',
      attendText: 'Registracija je obavezna za učešće na konferenciji u Podgorici.',
      registerNow: 'Registrujte se sada',
      copyrightHolder: 'Centar za finansije, Crna Gora',
    },
  },
};
