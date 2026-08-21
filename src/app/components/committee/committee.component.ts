import { Component } from '@angular/core';
import { COMMITTEE } from '../../data/committee.data';

@Component({
  selector: 'app-committee',
  standalone: true,
  templateUrl: './committee.component.html',
  styleUrl: './committee.component.scss',
})
export class CommitteeComponent {
  readonly members = COMMITTEE;

  initials(name: string): string {
    // Strip one or more leading academic titles (handles "Prof. Dr Name" as well as "Dr Name").
    const cleaned = name.replace(/^(?:(?:Dr|Prof\.?|Mr|Ms)\.?\s+)+/gi, '');
    const words = cleaned.split(' ').filter((w) => /^[A-ZČĆŽŠĐ]/.test(w));
    return words.slice(0, 2).map((w) => w[0]).join('') || name[0];
  }
}
