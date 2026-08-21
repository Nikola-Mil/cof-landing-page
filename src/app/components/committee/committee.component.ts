import { Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-committee',
  standalone: true,
  templateUrl: './committee.component.html',
  styleUrl: './committee.component.scss',
})
export class CommitteeComponent {
  readonly i18n = inject(I18nService);

  initials(name: string): string {
    // Strip one or more leading academic titles (handles "Prof. Dr Name" as well as "Dr Name").
    const cleaned = name.replace(/^(?:(?:Dr|Prof\.?|Mr|Ms)\.?\s+)+/gi, '');
    const words = cleaned.split(' ').filter((w) => /^[A-ZČĆŽŠĐ]/.test(w));
    return words.slice(0, 2).map((w) => w[0]).join('') || name[0];
  }
}
