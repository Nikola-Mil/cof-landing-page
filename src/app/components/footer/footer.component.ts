import { Component } from '@angular/core';
import { CONFERENCE_INFO } from '../../data/conference-info.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly info = CONFERENCE_INFO;
  readonly currentYear = new Date().getFullYear();

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
