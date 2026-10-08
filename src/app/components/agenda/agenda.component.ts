import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
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
  readonly i18n = inject(I18nService);

  readonly activeDay = signal(0);

  setDay(index: number): void {
    this.activeDay.set(index);
  }

  speakerName(id: string): string {
    return findSpeaker(id, this.i18n.lang())?.name ?? id;
  }

  hasBio(id: string): boolean {
    return !!findSpeaker(id, this.i18n.lang())?.bio.length;
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
