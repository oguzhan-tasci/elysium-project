import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  socialIcons = [];
  firstRow = [];
  secondRow = [];
  thirdRow = [];

  ngOnInit() {
    this.socialIcons = [
      {
        id: 1,
        iconClass: 'text-blue-700 mr-2 text-lg pi pi-instagram',
      },
      {
        id: 2,
        iconClass: 'text-blue-700 mr-2 text-lg pi pi-youtube',
      },
      {
        id: 3,
        iconClass: 'text-blue-700 mr-2 text-lg pi pi-facebook',
      },
      {
        id: 4,
        iconClass: 'text-blue-700 mr-2 text-lg pi pi-twitter',
      },
    ];
    this.firstRow = [
      {
        id: 1,
        value: 'About us',
      },
      {
        id: 2,
        value: 'Features',
      },
      {
        id: 3,
        value: 'Menu',
      },
    ];
    this.secondRow = [
      {
        id: 1,
        value: 'Why Elysium?',
      },
      {
        id: 2,
        value: 'Partner with us',
      },
      {
        id: 3,
        value: 'FAQ',
      },
    ];
    this.thirdRow = [
      {
        id: 1,
        value: 'Account',
      },
      {
        id: 2,
        value: 'Support Center',
      },
      {
        id: 3,
        value: 'Feedback',
      },
      {
        id: 4,
        value: 'Contact us',
      },
      {
        id: 5,
        value: 'Accessibility',
      },
    ];
  }
}
