import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CONFERENCE_INFO } from '../../data/conference-info.data';

@Component({
  selector: 'app-venue',
  standalone: true,
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.scss',
})
export class VenueComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly info = CONFERENCE_INFO;
  readonly directionsUrl = 'https://www.google.com/maps/search/?api=1&query=Hilton+Podgorica+Crna+Gora';
  // Trusting our own fixed, hardcoded map query — not user-supplied input.
  readonly mapEmbedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    CONFERENCE_INFO.mapEmbedUrl,
  );
}
