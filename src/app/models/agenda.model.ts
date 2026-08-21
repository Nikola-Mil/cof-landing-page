export type SessionType = 'keynote' | 'panel' | 'break' | 'social' | 'session';

export interface AgendaSession {
  time: string;
  title: string;
  description?: string[];
  type: SessionType;
  speakerIds?: string[];
  location?: string;
}

export interface AgendaDay {
  label: string;
  date: string;
  note?: string;
  sessions: AgendaSession[];
}
