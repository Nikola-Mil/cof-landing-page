import { CommitteeMember } from '../models/committee.model';
import { Language } from '../i18n/language';

// Source: Organizing Committee list from the conference draft agenda document.
export const COMMITTEE: Record<Language, CommitteeMember[]> = {
  en: [
    {
      name: 'Dr Željko Bogetić',
      role: 'Academic Director and Chair of the Organizing Committee; Fellow, Johns Hopkins University Institute for Applied Economics, Global Health, and the Study of Business Enterprise, Baltimore, U.S.',
    },
    {
      name: 'Dr Nina Drakić',
      role: 'President, Chamber of Commerce of Montenegro',
      photo: 'assets/images/committee/nina-drakic.jpg',
    },
    {
      name: 'Prof. Dr Mojmir Mrak',
      role: 'Academic Co-Director; University of Ljubljana, Slovenia',
    },
    {
      name: 'Prof. Dr Igor Lukšić',
      role: 'Academic Co-Director; Center for Finance, Montenegro',
    },
    {
      name: 'Prof. Dr Milorad Katnić',
      role: 'Academic Co-Director; Center for Finance, Montenegro',
    },
    {
      name: 'Prof. Dr Ivana Katnić',
      role: 'Executive Director, Center for Finance',
    },
    {
      name: 'Slađana Pavlović, M.Sc.',
      role: 'Executive Director, Center for Finance Academy',
    },
    {
      name: 'Ilija Mugoša, M.Sc.',
      role: 'Director of Research, Center for Finance',
    },
    {
      name: 'Esad Zaimović',
      role: 'Center for Finance, Montenegro',
    },
    {
      name: 'Nina Perunović, M.Sc.',
      role: 'Center for Finance, Montenegro',
    },
  ],
  me: [
    {
      name: 'Dr Željko Bogetić',
      role: 'Akademski direktor i predsjednik Organizacionog odbora; stipendista, Institut za primijenjenu ekonomiju, globalno zdravlje i proučavanje poslovnih poduhvata Univerziteta Johns Hopkins, Baltimor, SAD.',
    },
    {
      name: 'Dr Nina Drakić',
      role: 'Predsjednica Privredne komore Crne Gore',
    },
    {
      name: 'Prof. dr Mojmir Mrak',
      role: 'Akademski ko-direktor; Univerzitet u Ljubljani, Slovenija',
    },
    {
      name: 'Prof. dr Igor Lukšić',
      role: 'Akademski ko-direktor; Centar za finansije, Crna Gora',
    },
    {
      name: 'Prof. dr Milorad Katnić',
      role: 'Akademski ko-direktor; Centar za finansije, Crna Gora',
    },
    {
      name: 'Prof. dr Ivana Katnić',
      role: 'Izvršna direktorka Centra za finansije',
    },
    {
      name: 'Slađana Pavlović, MSc',
      role: 'Izvršna direktorka Akademije Centra za finansije',
    },
    {
      name: 'Ilija Mugoša, MSc',
      role: 'Direktor istraživanja, Centar za finansije',
    },
    {
      name: 'Esad Zaimović',
      role: 'Centar za finansije, Crna Gora',
    },
    {
      name: 'Nina Perunović, MSc',
      role: 'Centar za finansije, Crna Gora',
    },
  ],
};
