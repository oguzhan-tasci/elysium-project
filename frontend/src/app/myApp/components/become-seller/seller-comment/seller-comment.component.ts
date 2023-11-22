import { Component } from '@angular/core';

@Component({
  selector: 'bc-seller-comment',
  templateUrl: './seller-comment.component.html',
  styleUrls: ['./seller-comment.component.css'],
})
export class SellerCommentComponent {
  seller;

  ngOnInit() {
    this.seller = {
      id: 1,
      quoteImage: '../../../../../assets/become-seller/quotes.svg',
      quote:
        'I tried many ways to grow my business and they all cost me money. Since I moved to Elysium, there have been customers from all over the world. This situation make me happy and automatically it effect my life.',
      avatarUrl:
        'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      personName: 'Brian Chesky',
      personCompany: 'Co-Founder Of Airbnb',
    };
  }
}
