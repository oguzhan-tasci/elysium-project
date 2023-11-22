import { Component } from '@angular/core';

@Component({
  selector: 'bc-seller-benefits',
  templateUrl: './seller-benefits.component.html',
  styleUrls: ['./seller-benefits.component.css'],
})
export class SellerBenefitsComponent {
  benefits = [];

  ngOnInit() {
    this.benefits = [
      {
        id: 1,
        title: 'Make Money',
        image: '../../../../../assets/become-seller/make-money.svg',
        subtitle: 'Your income will increase every day and make you happy.',
      },
      {
        id: 2,
        title: 'Improve Network',
        image: '../../../../../assets/become-seller/network.svg',
        subtitle: 'You will have customers all over the world.',
      },
      {
        id: 3,
        title: 'No Ads',
        image: '../../../../../assets/become-seller/package.svg',
        subtitle:
          "You don't need pay for advertisement, you have platform here",
      },
      {
        id: 4,
        title: 'From A to izzard',
        image: '../../../../../assets/become-seller/trending-up.svg',
        subtitle: 'You are in control from booking to day efficiently.',
      },
      {
        id: 5,
        title: 'Save Money',
        image: '../../../../../assets/become-seller/save-money.svg',
        subtitle: 'You can manage everything from a single platform.',
      },
      {
        id: 6,
        title: 'Have More Fun',
        image: '../../../../../assets/become-seller/fun.svg',
        subtitle: 'You can reach many people by doing what you love.',
      },
    ];
  }
}
