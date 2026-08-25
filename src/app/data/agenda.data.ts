import { AgendaDay } from '../models/agenda.model';
import { Language } from '../i18n/language';

// Source: "Montenegro in the EU Conference -- Draft Agenda" (as of June 11, 2026),
// supplied by Center for Finance. Timings and the opening keynote line-up updated
// per the "konferencija (1).pdf" agenda revision.
export const AGENDA: Record<Language, AgendaDay[]> = {
  en: [
    {
      label: 'Day 1',
      date: 'Thursday, 15 October 2026 — Arrival & Keynote Dinner',
      sessions: [
        {
          time: '16:00 – 18:00',
          title: 'Welcome & Registration',
          description: ['Participants are welcomed at the Hilton hotel by the Center for Finance staff.'],
          type: 'session',
        },
        {
          time: '19:00 – 20:30',
          title: 'Dinner hosted by the President of Montenegro',
          location: 'Villa Gorica',
          description: [
            'Keynote address by the President of Montenegro, Jakov Milatović.',
            'Keynote talk by Ivan Miklos, MESA10 and Center for Economic Strategy, former Deputy Prime Minister and Minister of Finance and Economy, Slovak Republic.',
          ],
          type: 'social',
          speakerIds: ['ivan-miklos'],
        },
      ],
    },
    {
      label: 'Day 2',
      date: 'Friday, 16 October 2026 — Working Day',
      note: 'Evening of 16 October and morning of 17 October: end of conference, departure from Podgorica.',
      sessions: [
        {
          time: '08:30 – 09:10',
          title: 'Registration',
          type: 'session',
        },
        {
          time: '09:10 – 09:30',
          title: 'Opening of the Conference: Welcome and Opening Remarks',
          description: [
            'Short introductory remarks by Center for Finance, the Chamber of Commerce of Montenegro, the Government of Montenegro, and a European Union representative (5 minutes each).',
          ],
          type: 'session',
        },
        {
          time: '09:30 – 10:15',
          title: 'Opening Keynote: The Next Europe — Enlargement, Institutions, and Convergence',
          description: [
            'A moderated keynote conversation, rather than a traditional speech, setting the broader strategic context for enlargement, convergence, and Montenegro\'s European future.',
          ],
          type: 'keynote',
          speakerIds: ['enrico-letta', 'marek-dabrowski'],
        },
        {
          time: '10:15 – 12:00',
          title: 'Panel I — What Actually Worked? What Did Not Work? Why? Lessons from the New EU Member States',
          description: [
            'Three successive country-group conversations on the results of accession, which reforms changed economic trajectories, and the single most important policy lesson for Montenegro and other candidate countries.',
            'Group 1 — Hungary, Romania, Bulgaria',
            'Group 2 — Poland, Latvia, Estonia',
            'Group 3 — Croatia, Slovenia, Slovakia',
          ],
          type: 'panel',
          speakerIds: [
            'daniel-prinz', 'daniel-daianu', 'lubomir-mitov',
            'marcin-piatkowski', 'maciej-drozd', 'inna-steinbuka', 'madis-muller',
            'marko-primorac', 'mojmir-mrak', 'rastislav-vrbensky', 'jan-marusinec', 'ivan-miklos',
          ],
        },
        {
          time: '12:00 – 12:20',
          title: 'Coffee Break',
          type: 'break',
        },
        {
          time: '12:20 – 13:30',
          title: 'Rapid Fire: Select Reform Stories — Three Countries, Three Key Reforms and Outcomes',
          description: [
            'A TED-style session of short, practical country presentations (10–12 minutes each) on one transformative reform per country.',
            'Estonia, Madis Müller — Digital State',
            'Latvia, Inna Šteinbuka — Policy Choices and Reform Outcomes',
            'Slovakia, Rastislav Vrbensky, Jan Marusinec, Ivan Miklos — Fiscal Reform and Auto-Industrial Expansion',
          ],
          type: 'session',
          speakerIds: ['madis-muller', 'inna-steinbuka', 'rastislav-vrbensky', 'jan-marusinec', 'ivan-miklos'],
        },
        {
          time: '13:30 – 14:30',
          title: 'Networking Lunch',
          description: [
            'Thematic tables on macroeconomic management, regional connectivity, finance and investment climate, tourism, environment & sustainability, rule of law and judiciary reform, energy transition, and AI & digitalization.',
          ],
          type: 'break',
        },
        {
          time: '14:30 – 15:45',
          title: 'Panel II — Igniting Productivity Growth and Economic Transformation',
          description: [
            'Can Montenegro avoid the middle-income trap and achieve high-income status? A moderated discussion on productivity, FDI, innovation and EU convergence in the Western Balkans, with short presentations on the evidence and its implications for Montenegro.',
            'Moderated by Željko Bogetić, Academic Director of the Conference.',
          ],
          type: 'panel',
          speakerIds: ['johannes-fedderke', 'alexander-plekhanov', 'zsoka-koczan', 'pavle-petrovic', 'zeljko-bogetic'],
        },
        {
          time: '15:45 – 16:30',
          title: 'Institutions and Development: Lessons for EU and Montenegro\'s Accession',
          description: ['Presentation by James Robinson, University of Chicago, 2024 Nobel Laureate in Economics (by videoconference).'],
          type: 'keynote',
          speakerIds: ['james-robinson'],
        },
        {
          time: '16:30 – 17:00',
          title: 'Closing Remarks — Issues and Policy Directions',
          description: [
            'Instead of formal closing remarks: brief, high-level reflections on three key lessons and a vision of Montenegro\'s transformation beyond accession — its long-term economic vision, governance and institutions, and Europe after accession.',
          ],
          type: 'session',
        },
      ],
    },
  ],
  me: [
    {
      label: 'Dan 1',
      date: 'Četvrtak, 15. oktobar 2026. — Dolazak i svečana večera',
      sessions: [
        {
          time: '16:00 – 18:00',
          title: 'Dobrodošlica i registracija',
          description: ['Učesnike u hotelu Hilton dočekuje osoblje Centra za finansije.'],
          type: 'session',
        },
        {
          time: '19:00 – 20:30',
          title: 'Večera u organizaciji predsjednika Crne Gore',
          location: 'Vila Gorica',
          description: [
            'Uvodno obraćanje predsjednika Crne Gore, Jakova Milatovića.',
            'Uvodno izlaganje Ivana Miklosa, MESA10 i Centar za ekonomsku strategiju, bivšeg potpredsjednika Vlade i ministra finansija i privrede Slovačke Republike.',
          ],
          type: 'social',
          speakerIds: ['ivan-miklos'],
        },
      ],
    },
    {
      label: 'Dan 2',
      date: 'Petak, 16. oktobar 2026. — Radni dan',
      note: 'Veče 16. oktobra i jutro 17. oktobra: kraj konferencije, odlazak iz Podgorice.',
      sessions: [
        {
          time: '08:30 – 09:10',
          title: 'Registracija',
          type: 'session',
        },
        {
          time: '09:10 – 09:30',
          title: 'Otvaranje konferencije: pozdravna i uvodna riječ',
          description: [
            'Kratka uvodna obraćanja predstavnika Centra za finansije, Privredne komore Crne Gore, Vlade Crne Gore i predstavnika Evropske unije (po 5 minuta).',
          ],
          type: 'session',
        },
        {
          time: '09:30 – 10:15',
          title: 'Uvodno izlaganje: Naredna Evropa — proširenje, institucije i konvergencija',
          description: [
            'Moderirani uvodni razgovor, umjesto tradicionalnog govora, koji postavlja širi strateški okvir za proširenje, konvergenciju i evropsku budućnost Crne Gore.',
          ],
          type: 'keynote',
          speakerIds: ['enrico-letta', 'marek-dabrowski'],
        },
        {
          time: '10:15 – 12:00',
          title: 'Panel I — Šta je zaista funkcionisalo? Šta nije funkcionisalo? Zašto? Iskustva novih država članica EU',
          description: [
            'Tri uzastopna razgovora sa grupama zemalja o rezultatima pristupanja, reformama koje su promijenile ekonomske tokove i jednoj najvažnijoj pouci za Crnu Goru i druge zemlje kandidate.',
            'Grupa 1 — Mađarska, Rumunija, Bugarska',
            'Grupa 2 — Poljska, Letonija, Estonija',
            'Grupa 3 — Hrvatska, Slovenija, Slovačka',
          ],
          type: 'panel',
          speakerIds: [
            'daniel-prinz', 'daniel-daianu', 'lubomir-mitov',
            'marcin-piatkowski', 'maciej-drozd', 'inna-steinbuka', 'madis-muller',
            'marko-primorac', 'mojmir-mrak', 'rastislav-vrbensky', 'jan-marusinec', 'ivan-miklos',
          ],
        },
        {
          time: '12:00 – 12:20',
          title: 'Pauza za kafu',
          type: 'break',
        },
        {
          time: '12:20 – 13:30',
          title: 'Brze priče: odabrane reforme — tri zemlje, tri ključne reforme i njihovi rezultati',
          description: [
            'Sesija u TED stilu sa kratkim, praktičnim prezentacijama zemalja (po 10 do 12 minuta) o po jednoj transformativnoj reformi za svaku zemlju.',
            'Estonija, Madis Müller — Digitalna država',
            'Letonija, Inna Šteinbuka — Izbori politika i rezultati reformi',
            'Slovačka, Rastislav Vrbensky, Jan Marusinec, Ivan Miklos — Fiskalna reforma i širenje auto-industrije',
          ],
          type: 'session',
          speakerIds: ['madis-muller', 'inna-steinbuka', 'rastislav-vrbensky', 'jan-marusinec', 'ivan-miklos'],
        },
        {
          time: '13:30 – 14:30',
          title: 'Ručak uz umrežavanje',
          description: [
            'Tematski stolovi o makroekonomskom upravljanju, regionalnoj povezanosti, finansijama i investicionoj klimi, turizmu, životnoj sredini i održivosti, vladavini prava i reformi pravosuđa, energetskoj tranziciji i vještačkoj inteligenciji i digitalizaciji.',
          ],
          type: 'break',
        },
        {
          time: '14:30 – 15:45',
          title: 'Panel II — Podsticanje rasta produktivnosti i ekonomske transformacije',
          description: [
            'Može li Crna Gora izbjeći zamku srednjeg dohotka i dostići status visokog dohotka? Moderirana diskusija o produktivnosti, stranim direktnim investicijama, inovacijama i konvergenciji sa EU na Zapadnom Balkanu, sa kratkim prezentacijama dokaza i njihovih implikacija za Crnu Goru.',
            'Moderira Željko Bogetić, akademski direktor konferencije.',
          ],
          type: 'panel',
          speakerIds: ['johannes-fedderke', 'alexander-plekhanov', 'zsoka-koczan', 'pavle-petrovic', 'zeljko-bogetic'],
        },
        {
          time: '15:45 – 16:30',
          title: 'Institucije i razvoj: pouke za pristupanje EU i Crne Gore',
          description: ['Izlaganje Jamesa Robinsona, Univerzitet u Čikagu, dobitnika Nobelove nagrade za ekonomiju 2024. godine (putem videokonferencije).'],
          type: 'keynote',
          speakerIds: ['james-robinson'],
        },
        {
          time: '16:30 – 17:00',
          title: 'Završna riječ — izazovi i pravci politika',
          description: [
            'Umjesto formalne završne riječi: kratka razmatranja na visokom nivou o tri ključne pouke i viziji transformacije Crne Gore nakon pristupanja — njenoj dugoročnoj ekonomskoj viziji, upravljanju i institucijama, te Evropi nakon pristupanja.',
          ],
          type: 'session',
        },
      ],
    },
  ],
};
