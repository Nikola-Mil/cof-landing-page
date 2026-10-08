import { Language } from '../i18n/language';

// Central place for facts repeated across sections (hero, navbar, footer, venue, register CTA).
export interface ConferenceInfo {
  title: string;
  tagline: string;
  kicker: string;
  dateRange: string;
  dateLong: string;
  venue: string;
  venueCountry: string;
  city: string;
  patronage: string;
  hosts: string;
  registerUrl: string;
  mainSiteUrl: string;
  mapEmbedUrl: string;
}

export const CONFERENCE_INFO: Record<Language, ConferenceInfo> = {
  en: {
    title: 'Montenegro in the EU',
    tagline: 'Lessons, Issues, and Policy Directions',
    kicker: 'International Conference',
    dateRange: '16 October 2026',
    dateLong: 'Friday, 16 October 2026',
    venue: 'Hilton Podgorica',
    venueCountry: 'Hilton Podgorica, Montenegro',
    city: 'Podgorica, Montenegro',
    patronage: 'Under the patronage of the President of Montenegro',
    hosts: 'Center for Finance, Montenegro and the Chamber of Commerce of Montenegro',
    registerUrl: 'https://forms.gle/pdVzHu64bUWMhnVf6',
    mainSiteUrl: 'https://centerforfinance.me/',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Hilton%20Podgorica%2C%20Montenegro&output=embed',
  },
  me: {
    title: 'Crna Gora u EU',
    tagline: 'Pouke, izazovi i pravci politika',
    kicker: 'Međunarodna konferencija',
    dateRange: '16. oktobar 2026.',
    dateLong: 'petak, 16. oktobar 2026.',
    venue: 'Hilton Podgorica',
    venueCountry: 'Hilton Podgorica, Crna Gora',
    city: 'Podgorica, Crna Gora',
    patronage: 'Pod pokroviteljstvom predsjednika Crne Gore',
    hosts: 'Centar za finansije, Crna Gora i Privredna komora Crne Gore',
    registerUrl: 'https://forms.gle/pdVzHu64bUWMhnVf6',
    mainSiteUrl: 'https://centerforfinance.me/',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Hilton%20Podgorica%2C%20Montenegro&output=embed',
  },
} as const;
