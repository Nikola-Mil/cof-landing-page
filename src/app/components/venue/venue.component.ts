import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-venue',
  standalone: true,
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.scss',
})
export class VenueComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly i18n = inject(I18nService);
  readonly directionsUrl = 'https://www.google.com/maps/search/?api=1&query=Hilton+Podgorica+Crna+Gora';
  // Trusting our own fixed, hardcoded map query — not user-supplied input.
  readonly mapEmbedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.i18n.info().mapEmbedUrl,
  );
}
