export type SessionType = 'keynote' | 'panel' | 'break' | 'social' | 'session';

export interface AgendaGroup {
  title: string;
  moderator: string;
  members: string[];
}

export interface AgendaSession {
  time: string;
  title: string;
  description?: string[];
  groups?: AgendaGroup[];
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
