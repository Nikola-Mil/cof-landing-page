import { Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-register-cta',
  standalone: true,
  templateUrl: './register-cta.component.html',
  styleUrl: './register-cta.component.scss',
})
export class RegisterCtaComponent {
  readonly i18n = inject(I18nService);
}
