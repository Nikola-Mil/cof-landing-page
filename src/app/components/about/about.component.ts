import { Component } from '@angular/core';

interface FormatItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly stats = [
    { value: '2', label: 'Days of dialogue' },
    { value: '19', label: 'International speakers' },
    { value: '9', label: 'EU member state experiences' },
    { value: '1', label: 'Nobel laureate' },
  ];

  readonly formats: FormatItem[] = [
    {
      icon: 'record_voice_over',
      title: 'Keynote Interviews',
      description: 'Moderated conversations with senior policymakers in place of traditional speeches.',
    },
    {
      icon: 'chat',
      title: 'Fireside Conversations',
      description: 'Candid, informal exchanges on the reforms behind EU accession success stories.',
    },
    {
      icon: 'groups',
      title: 'Strategic Panels',
      description: 'Country-case discussions with leading economists, policymakers and practitioners.',
    },
    {
      icon: 'bolt',
      title: 'Rapid-Fire Reform Stories',
      description: 'TED-style presentations on one transformative reform per country, 10–12 minutes each.',
    },
    {
      icon: 'forum',
      title: 'Policy Debate & Audience Interaction',
      description: 'Open, forward-looking discussion connecting lessons learned to Montenegro\'s path ahead.',
    },
  ];
}
