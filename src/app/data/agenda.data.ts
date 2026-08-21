import { AgendaDay } from '../models/agenda.model';

// Source: "Montenegro in the EU Conference -- Draft Agenda" (as of June 11, 2026),
// supplied by Center for Finance.
export const AGENDA: AgendaDay[] = [
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
        time: '09:30 – 10:00',
        title: 'Opening Keynote: The Next Europe — Enlargement, Institutions, and Convergence',
        description: [
          'A moderated keynote conversation, rather than a traditional speech, setting the broader strategic context for enlargement, convergence, and Montenegro\'s European future.',
        ],
        type: 'keynote',
        speakerIds: ['marek-dabrowski'],
      },
      {
        time: '10:00 – 11:45',
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
        time: '11:45 – 12:05',
        title: 'Coffee Break',
        type: 'break',
      },
      {
        time: '12:05 – 13:15',
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
        time: '13:15 – 14:15',
        title: 'Networking Lunch',
        description: [
          'Thematic tables on macroeconomic management, regional connectivity, finance and investment climate, tourism, environment & sustainability, rule of law and judiciary reform, energy transition, and AI & digitalization.',
        ],
        type: 'break',
      },
      {
        time: '14:15 – 15:30',
        title: 'Panel II — Igniting Productivity Growth and Economic Transformation',
        description: [
          'Can Montenegro avoid the middle-income trap and achieve high-income status? A moderated discussion on productivity, FDI, innovation and EU convergence in the Western Balkans, with short presentations on the evidence and its implications for Montenegro.',
        ],
        type: 'panel',
        speakerIds: ['johannes-fedderke', 'alexander-plekhanov', 'zsoka-koczan', 'pavle-petrovic', 'zeljko-bogetic'],
      },
      {
        time: '15:30 – 16:15',
        title: 'Institutions and Development: Lessons for EU and Montenegro\'s Accession',
        description: ['Presentation by James Robinson, University of Chicago, 2024 Nobel Laureate in Economics (by videoconference).'],
        type: 'keynote',
        speakerIds: ['james-robinson'],
      },
      {
        time: '16:15 – 16:45',
        title: 'Closing Remarks — Issues and Policy Directions',
        description: [
          'Instead of formal closing remarks: brief, high-level reflections on three key lessons and a vision of Montenegro\'s transformation beyond accession — its long-term economic vision, governance and institutions, and Europe after accession.',
        ],
        type: 'session',
      },
    ],
  },
];
