import { Component, HostListener, computed, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { SpeakerSelectionService } from '../../services/speaker-selection.service';

@Component({
  selector: 'app-speakers',
  standalone: true,
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.scss',
})
export class SpeakersComponent {
  private readonly speakerSelection = inject(SpeakerSelectionService);
  readonly i18n = inject(I18nService);

  readonly selected = computed(() =>
    this.i18n.speakers().find((s) => s.id === this.speakerSelection.activeSpeakerId()),
  );

  open(id: string): void {
    this.speakerSelection.open(id);
  }

  close(): void {
    this.speakerSelection.close();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }
}
