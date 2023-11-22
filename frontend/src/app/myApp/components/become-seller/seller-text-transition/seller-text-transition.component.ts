import { Component } from '@angular/core';

@Component({
  selector: 'bc-seller-text-transition',
  templateUrl: './seller-text-transition.component.html',
  styleUrls: ['./seller-text-transition.component.css'],
})
export class SellerTextTransitionComponent {
  texts = [];
  icons = [];

  ngOnInit() {
    this.texts = [
      {
        id: 1,
        styleText: 'text-white opacity-60 font-bold text-3xl',
        text: 'No Installing.',
      },
      {
        id: 2,
        styleText: 'text-white opacity-70 font-bold text-3xl',
        text: 'No Expenses.',
      },
      {
        id: 3,
        styleText: 'text-white opacity-80 font-bold text-3xl',
        text: 'No Ads.',
      },
      {
        id: 4,
        styleText: 'text-white opacity-90 font-bold text-3xl',
        text: 'No Work.',
      },
      {
        id: 5,
        styleText: 'text-white opacity-100 font-bold text-3xl',
        text: 'No Boring.',
      },
    ];
    this.icons = [
      {
        id: 1,
        iconSrc: '../../../../../assets/materials/material-11.png',
        iconClass: 'rotate-180 m-8 px-8 absolute top-0 right-0',
        name: 'icon-1',
      },
      {
        id: 1,
        iconSrc: '../../../../../assets/materials/material-11.png',
        iconClass: 'm-8 px-8 absolute top-0 left-0',
        name: 'icon-2',
      },
    ];
  }
}
