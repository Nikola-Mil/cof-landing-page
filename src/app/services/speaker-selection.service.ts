import { Injectable, signal } from '@angular/core';

// Shared across the agenda and speakers sections so clicking a speaker's name
// anywhere on the page opens their bio card in one place.
@Injectable({ providedIn: 'root' })
export class SpeakerSelectionService {
  readonly activeSpeakerId = signal<string | null>(null);

  open(id: string): void {
    this.activeSpeakerId.set(id);
    document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' });
  }

  close(): void {
    this.activeSpeakerId.set(null);
  }
}
