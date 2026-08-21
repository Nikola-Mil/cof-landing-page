import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { CommitteeComponent } from './components/committee/committee.component';
import { VenueComponent } from './components/venue/venue.component';
import { RegisterCtaComponent } from './components/register-cta/register-cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    AgendaComponent,
    SpeakersComponent,
    CommitteeComponent,
    VenueComponent,
    RegisterCtaComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
