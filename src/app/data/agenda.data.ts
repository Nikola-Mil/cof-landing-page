import { AgendaDay } from '../models/agenda.model';
import { Language } from '../i18n/language';

// Source: "Draft Agenda_10-26.docx" (October 2026 revision), supplied by
// Center for Finance.
export const AGENDA: Record<Language, AgendaDay[]> = {
  en: [
    {
      label: 'Day 1',
      date: 'Friday, 16 October 2026 — Working Day',
      note: 'Evening of 16 October and morning of 17 October: end of conference, departure from Podgorica.',
      sessions: [
        {
          time: '08:30 – 09:00',
          title: 'Registration',
          type: 'session',
        },
        {
          time: '09:00 – 09:20',
          title: 'Opening of the Conference: Welcome and Opening Remarks',
          description: [
            'Prof. dr Ivana Katnić, Director, Center for Finance (5 min)',
            'Dr Nina Drakić, President, Chamber of Commerce of Montenegro (5 min)',
            'Maida Gorčević, Minister of European Affairs, Government of Montenegro (10 min)',
          ],
          type: 'session',
          speakerIds: ['ivana-katnic', 'nina-drakic', 'maida-gorcevic'],
        },
        {
          time: '09:20 – 10:00',
          title: 'Keynote: The Next Europe — Enlargement, Institutions, and Convergence',
          description: [
            'Jakov Milatović, President of Montenegro (10 min)',
            'Enrico Letta, former Prime Minister of Italy; President of the Jacques Delors Institute — video address (10 min)',
            'Ivan Miklos, former Deputy Prime Minister and Minister of Finance, Slovak Republic; Co-Founder, MESA10 (10 min)',
            'Marek Dabrowski, Bruegel; Co-Founder, CASE (10 min)',
          ],
          type: 'keynote',
          speakerIds: ['jakov-milatovic', 'enrico-letta', 'ivan-miklos', 'marek-dabrowski'],
        },
        {
          time: '10:00 – 10:15',
          title: 'Coffee Break',
          type: 'break',
        },
        {
          time: '10:15 – 11:45',
          title: 'Panel I — What Actually Worked? What Did Not Work? Why? Lessons from the New EU Member States',
          groups: [
            {
              title: 'Group 1 (30 min)',
              moderator: 'Moderated by Davor Kunc, Head of EIB Representation to Montenegro',
              members: [
                'Slovenia — Mojmir Mrak, Professor and Jean Monnet Chair, University of Ljubljana',
                'Croatia — Roko Tolić, former Deputy Mayor of Dubrovnik and former Director of Dubrovnik Airport, CEO of Airports of Montenegro',
                'Slovakia — Jan Marusinec, MESA10, former Advisor at the Slovak Ministry of Finance',
              ],
            },
            {
              title: 'Group 2 (30 min)',
              moderator: 'Moderated by Tamaš Kamaraši (Hungary), CEO, CKB Bank',
              members: [
                'Romania — Laurian Lungu, Consilium Policy Advisors Group (CPAG)',
                'Bulgaria — Lubomir Mitov, Independent Financial Consultant; former Chief CEE Economist, UniCredit, World Bank',
              ],
            },
            {
              title: 'Group 3 (30 min)',
              moderator: 'Moderated by Inna Šteinbuka (Latvia), Professor, University of Latvia; Chair, Fiscal Discipline Council of Latvia',
              members: [
                'Poland — Marcin Piątkowski, Professor of Economics, Kozminski University; Lead Economist for South Asia, World Bank; former Advisor to Poland\'s Deputy Premier and Minister of Finance',
                'Estonia — Madis Müller, former Governor, Bank of Estonia (Eesti Pank)',
              ],
            },
          ],
          type: 'panel',
          speakerIds: [
            'davor-kunc', 'mojmir-mrak', 'roko-tolic', 'jan-marusinec',
            'tamas-kamarasi', 'laurian-lungu', 'lubomir-mitov',
            'inna-steinbuka', 'marcin-piatkowski', 'madis-muller',
          ],
        },
        {
          time: '12:00 – 13:00',
          title: 'Panel II — Perspectives from CEOs of Leading EU Companies in Montenegro',
          description: [
            'Vasilis Panagopoulos, CEO, Jugopetrol',
            'Branko Mitrović, CEO, One; President of the Board of Directors, Montenegrin Foreign Investors Council (MFIC)',
            'Aleksa Lukić, CEO, Erste Bank',
            'Martin Leberle, CEO, NLB Bank',
            'Moderated by Ana Drašković, Vice President and Regional General Manager for Southern and Eastern Europe, Visa',
          ],
          type: 'panel',
          speakerIds: ['vasilis-panagopoulos', 'branko-mitrovic', 'aleksa-lukic', 'martin-leberle', 'ana-draskovic'],
        },
        {
          time: '13:00 – 14:30',
          title: 'Networking Lunch',
          type: 'break',
        },
        {
          time: '14:30 – 15:15',
          title: 'Panel III — Igniting Productivity Growth and Economic Transformation',
          description: [
            'Can Montenegro avoid the middle-income trap and achieve high-income status? A moderated discussion on productivity, FDI, innovation and EU convergence.',
            'Johannes W. Fedderke, Professor, Pennsylvania State University — Productivity and growth: what is the international evidence?',
            'Zsoka Koczan, Lead Economist, EBRD — Evidence on recent FDI',
            'Moderated by Željko Bogetić, Academic Director of the Conference.',
          ],
          type: 'panel',
          speakerIds: ['johannes-fedderke', 'zsoka-koczan', 'zeljko-bogetic'],
        },
        {
          time: '15:30 – 16:00',
          title: 'Panel IV — Institutions and Development: Lessons for EU and Montenegro\'s Accession',
          description: [
            'James Robinson, University of Chicago, 2024 Nobel Laureate in Economics (by videoconference).',
            'Moderated by Željko Bogetić, Academic Director of the Conference.',
          ],
          type: 'keynote',
          speakerIds: ['james-robinson', 'zeljko-bogetic'],
        },
        {
          time: '16:00 – 16:15',
          title: 'Closing Remarks — Issues and Policy Directions',
          description: [
            'Dr Igor Lukšić, former Prime Minister and Minister of Finance of Montenegro, Center for Finance',
          ],
          type: 'session',
          speakerIds: ['igor-luksic'],
        },
      ],
    },
  ],
  me: [
    {
      label: 'Dan 1',
      date: 'Petak, 16. oktobar 2026. — Radni dan',
      note: 'Veče 16. oktobra i jutro 17. oktobra: kraj konferencije, odlazak iz Podgorice.',
      sessions: [
        {
          time: '08:30 – 09:00',
          title: 'Registracija',
          type: 'session',
        },
        {
          time: '09:00 – 09:20',
          title: 'Otvaranje konferencije: pozdravna i uvodna riječ',
          description: [
            'Prof. dr Ivana Katnić, direktorica, Centar za finansije (5 min)',
            'Dr Nina Drakić, predsjednica, Privredna komora Crne Gore (5 min)',
            'Maida Gorčević, ministarka evropskih poslova, Vlada Crne Gore (10 min)',
          ],
          type: 'session',
          speakerIds: ['ivana-katnic', 'nina-drakic', 'maida-gorcevic'],
        },
        {
          time: '09:20 – 10:00',
          title: 'Uvodno izlaganje: Naredna Evropa — proširenje, institucije i konvergencija',
          description: [
            'Jakov Milatović, predsjednik Crne Gore (10 min)',
            'Enrico Letta, bivši premijer Italije; predsjednik Instituta Jacques Delors — video obraćanje (10 min)',
            'Ivan Miklos, bivši potpredsjednik Vlade i ministar finansija Slovačke Republike; suosnivač MESA10 (10 min)',
            'Marek Dabrowski, Bruegel; suosnivač CASE (10 min)',
          ],
          type: 'keynote',
          speakerIds: ['jakov-milatovic', 'enrico-letta', 'ivan-miklos', 'marek-dabrowski'],
        },
        {
          time: '10:00 – 10:15',
          title: 'Pauza za kafu',
          type: 'break',
        },
        {
          time: '10:15 – 11:45',
          title: 'Panel I — Šta je zaista funkcionisalo? Šta nije funkcionisalo? Zašto? Iskustva novih država članica EU',
          groups: [
            {
              title: 'Grupa 1 (30 min)',
              moderator: 'Moderira Davor Kunc, šef predstavništva EIB-a u Crnoj Gori',
              members: [
                'Slovenija — Mojmir Mrak, profesor i nosilac Jean Monnet katedre, Univerzitet u Ljubljani',
                'Hrvatska — Roko Tolić, bivši zamjenik gradonačelnika Dubrovnika i bivši direktor Zračne luke Dubrovnik, izvršni direktor Aerodroma Crne Gore',
                'Slovačka — Jan Marusinec, MESA10, bivši savjetnik u Ministarstvu finansija Slovačke',
              ],
            },
            {
              title: 'Grupa 2 (30 min)',
              moderator: 'Moderira Tamaš Kamaraši (Mađarska), izvršni direktor, CKB banka',
              members: [
                'Rumunija — Laurian Lungu, Consilium Policy Advisors Group (CPAG)',
                'Bugarska — Lubomir Mitov, nezavisni finansijski konsultant; bivši glavni ekonomista za CIE, UniCredit, Svjetska banka',
              ],
            },
            {
              title: 'Grupa 3 (30 min)',
              moderator: 'Moderira Inna Šteinbuka (Letonija), profesorka, Univerzitet Letonije; predsjednica Savjeta za fiskalnu disciplinu Letonije',
              members: [
                'Poljska — Marcin Piątkowski, profesor ekonomije, Univerzitet Kozminski; vodeći ekonomista za Južnu Aziju, Svjetska banka; bivši savjetnik potpredsjednika Vlade i ministra finansija Poljske',
                'Estonija — Madis Müller, bivši guverner Banke Estonije (Eesti Pank)',
              ],
            },
          ],
          type: 'panel',
          speakerIds: [
            'davor-kunc', 'mojmir-mrak', 'roko-tolic', 'jan-marusinec',
            'tamas-kamarasi', 'laurian-lungu', 'lubomir-mitov',
            'inna-steinbuka', 'marcin-piatkowski', 'madis-muller',
          ],
        },
        {
          time: '12:00 – 13:00',
          title: 'Panel II — Perspektive izvršnih direktora vodećih EU kompanija u Crnoj Gori',
          description: [
            'Vasilis Panagopoulos, izvršni direktor, Jugopetrol',
            'Branko Mitrović, izvršni direktor, One; predsjednik Upravnog odbora Savjeta stranih investitora u Crnoj Gori (MFIC)',
            'Aleksa Lukić, izvršni direktor, Erste banka',
            'Martin Leberle, izvršni direktor, NLB banka',
            'Moderira Ana Drašković, potpredsjednica i regionalna generalna direktorka za Južnu i Istočnu Evropu, Visa',
          ],
          type: 'panel',
          speakerIds: ['vasilis-panagopoulos', 'branko-mitrovic', 'aleksa-lukic', 'martin-leberle', 'ana-draskovic'],
        },
        {
          time: '13:00 – 14:30',
          title: 'Ručak uz umrežavanje',
          type: 'break',
        },
        {
          time: '14:30 – 15:15',
          title: 'Panel III — Podsticanje rasta produktivnosti i ekonomske transformacije',
          description: [
            'Može li Crna Gora izbjeći zamku srednjeg dohotka i dostići status visokog dohotka? Moderirana diskusija o produktivnosti, stranim direktnim investicijama, inovacijama i konvergenciji sa EU.',
            'Johannes W. Fedderke, profesor, Državni univerzitet Pensilvanije — Produktivnost i rast: šta pokazuju međunarodni dokazi?',
            'Zsoka Koczan, vodeća ekonomistkinja, EBRD — Dokazi o nedavnim stranim direktnim investicijama',
            'Moderira Željko Bogetić, akademski direktor konferencije.',
          ],
          type: 'panel',
          speakerIds: ['johannes-fedderke', 'zsoka-koczan', 'zeljko-bogetic'],
        },
        {
          time: '15:30 – 16:00',
          title: 'Panel IV — Institucije i razvoj: pouke za pristupanje EU i Crne Gore',
          description: [
            'James Robinson, Univerzitet u Čikagu, dobitnik Nobelove nagrade za ekonomiju 2024. godine (putem videokonferencije).',
            'Moderira Željko Bogetić, akademski direktor konferencije.',
          ],
          type: 'keynote',
          speakerIds: ['james-robinson', 'zeljko-bogetic'],
        },
        {
          time: '16:00 – 16:15',
          title: 'Završna riječ — izazovi i pravci politika',
          description: [
            'Dr Igor Lukšić, bivši predsjednik Vlade i ministar finansija Crne Gore, Centar za finansije',
          ],
          type: 'session',
          speakerIds: ['igor-luksic'],
        },
      ],
    },
  ],
};
