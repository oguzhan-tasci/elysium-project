import { Component } from '@angular/core';

@Component({
  selector: 'personal-info-knowledges',
  templateUrl: './personal-info-knowledges.component.html',
  styleUrls: ['./personal-info-knowledges.component.css'],
})
export class PersonalInfoKnowledgesComponent {
  securityAbout = [];

  ngOnInit() {
    this.securityAbout = [
      {
        id: 1,
        title: "Why isn't my information shown here?",
        subtitle: 'We hide some account information to protect your identity.',
        iconClass : "text-3xl text-blue-700 my-1 pi pi-shield",
        divider: true,
      },
      {
        id: 2,
        title: 'What information can be edited?',
        subtitle:
          'Contact information and personal information can be edited. If this information was used to verify your identity, you will need to verify your identity again the next time you book or to continue hosting.',
        iconClass : "text-3xl text-blue-700 my-1 pi pi-lock",
        divider: true,
      },
      {
        id: 3,
        title: 'What information is shared with others?',
        iconClass : "text-3xl text-blue-700 my-1 pi pi-thumbs-up",
        subtitle:
          'Elysium only discloses contact information for owners and guests once a reservation has been confirmed.',
        divider: false,
      },
    ];
  }
}
