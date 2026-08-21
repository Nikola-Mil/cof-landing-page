import { Component, HostListener, inject, signal } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { Language } from '../../i18n/language';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly i18n = inject(I18nService);
  scrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  setLanguage(lang: Language): void {
    this.i18n.setLanguage(lang);
  }

  scrollTo(id: string): void {
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTop(): void {
    this.menuOpen.set(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
