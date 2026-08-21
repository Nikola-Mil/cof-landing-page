import { Component } from '@angular/core';
import { CONFERENCE_INFO } from '../../data/conference-info.data';

@Component({
  selector: 'app-register-cta',
  standalone: true,
  templateUrl: './register-cta.component.html',
  styleUrl: './register-cta.component.scss',
})
export class RegisterCtaComponent {
  readonly info = CONFERENCE_INFO;
}
