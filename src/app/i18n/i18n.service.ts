import { Injectable, computed, signal } from '@angular/core';
import { Language } from './language';
import { UI_TEXT, UiText } from './ui-text.data';
import { CONFERENCE_INFO, ConferenceInfo } from '../data/conference-info.data';
import { AGENDA } from '../data/agenda.data';
import { SPEAKERS } from '../data/speakers.data';
import { COMMITTEE } from '../data/committee.data';
import { AgendaDay } from '../models/agenda.model';
import { Speaker } from '../models/speaker.model';
import { CommitteeMember } from '../models/committee.model';

const STORAGE_KEY = 'mne-eu-lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly currentLang = signal<Language>(this.getStoredLang());

  readonly lang = this.currentLang.asReadonly();

  readonly availableLanguages: { code: Language; label: string; flagCode: string }[] = [
    { code: 'en', label: 'English', flagCode: 'gb' },
    { code: 'me', label: 'Crnogorski', flagCode: 'me' },
  ];

  readonly ui = computed<UiText>(() => UI_TEXT[this.currentLang()]);
  readonly info = computed<ConferenceInfo>(() => CONFERENCE_INFO[this.currentLang()]);
  readonly agendaDays = computed<AgendaDay[]>(() => AGENDA[this.currentLang()]);
  readonly speakers = computed<Speaker[]>(() => SPEAKERS[this.currentLang()]);
  readonly committee = computed<CommitteeMember[]>(() => COMMITTEE[this.currentLang()]);

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }

  private getStoredLang(): Language {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'me') {
        return stored;
      }
    }
    return 'en';
  }
}
