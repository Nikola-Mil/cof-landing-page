import { Component, inject, signal } from '@angular/core';
import { AGENDA } from '../../data/agenda.data';
import { findSpeaker } from '../../data/speakers.data';
import { SpeakerSelectionService } from '../../services/speaker-selection.service';

@Component({
  selector: 'app-agenda',
  standalone: true,
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss',
})
export class AgendaComponent {
  private readonly speakerSelection = inject(SpeakerSelectionService);

  readonly days = AGENDA;
  readonly activeDay = signal(0);

  setDay(index: number): void {
    this.activeDay.set(index);
  }

  speakerName(id: string): string {
    return findSpeaker(id)?.name ?? id;
  }

  openSpeaker(id: string): void {
    this.speakerSelection.open(id);
  }

  iconFor(type: string): string {
    switch (type) {
      case 'keynote': return 'campaign';
      case 'panel': return 'groups';
      case 'break': return 'local_cafe';
      case 'social': return 'restaurant';
      default: return 'event_note';
    }
  }
}
