import { Component } from '@angular/core';

@Component({
  selector: 'login-navbar',
  templateUrl: './login-navbar.component.html',
  styleUrls: ['./login-navbar.component.css'],
})
export class LoginNavbarComponent {
  visible: boolean = false;
  languagesAndRegions = [];
  currency = [];

  showDialog() {
    this.visible = true;
  }
  ngOnInit() {
    this.languagesAndRegions = [
      {
        id: 1,
        region: 'Turkey',
        language: 'Turkish',
      },
      {
        id: 2,
        region: 'Azerbaijan',
        language: 'Azerbaijan language ',
      },
      {
        id: 3,
        region: 'Germany',
        language: 'German',
      },
      {
        id: 4,
        region: 'Spain',
        language: 'Spanish',
      },
      {
        id: 5,
        region: 'Portugal',
        language: 'Portuguese',
      },
      {
        id: 6,
        region: 'France',
        language: 'French',
      },
      {
        id: 7,
        region: 'Malta',
        language: 'Malti',
      },
      {
        id: 8,
        region: 'Romania',
        language: 'Romanian',
      },
      {
        id: 9,
        region: 'Serbian',
        language: 'Serbian',
      },
      {
        id: 10,
        region: 'Italia',
        language: 'Italian',
      },
      {
        id: 11,
        region: 'China',
        language: 'Mandalian',
      },
      {
        id: 12,
        region: 'Japan',
        language: 'Japanese',
      },
    ];

    this.currency = [
      {
        id: 1,
        currencyName: 'Turkish Lira',
        currencyCode: 'TRY',
        currencySign: '₺',
      },
      {
        id: 2,
        currencyName: 'American Dollar',
        currencyCode: 'DLR',
        currencySign: '$',
      },
      {
        id: 3,
        currencyName: 'Euro',
        currencyCode: 'EU',
        currencySign: '€',
      },
      {
        id: 4,
        currencyName: 'Avustralia Dollar',
        currencyCode: 'DLR',
        currencySign: '$',
      },
      {
        id: 5,
        currencyName: 'Dirhem of BAE',
        currencyCode: 'AED',
        currencySign: 'د.إ',
      },
      {
        id: 6,
        currencyName: 'Dirhem of Endonesia',
        currencyCode: 'MAD',
        currencySign: '',
      },
      {
        id: 7,
        currencyName: 'Won Of South Korea',
        currencyCode: 'KRW',
        currencySign: 'W',
      },
      {
        id: 8,
        currencyName: 'Real of Brezilia',
        currencyCode: 'BRL',
        currencySign: 'R$',
      },
      {
        id: 9,
        currencyName: 'Yuan Of China',
        currencyCode: 'CNY',
        currencySign: 'Y',
      },
      {
        id: 10,
        currencyName: 'Frang Of Sweden',
        currencyCode: 'CHF',
        currencySign: '',
      },
      {
        id: 11,
        currencyName: 'Sterlin of England',
        currencyCode: 'GBP',
        currencySign: ' £',
      },
      {
        id: 12,
        currencyName: 'Canada Dollar',
        currencyCode: 'CAD',
        currencySign: '$',
      },
    ];
  }
}
