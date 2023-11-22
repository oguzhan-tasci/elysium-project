import { Component } from '@angular/core';

@Component({
  selector: 'c-company-happy-customers',
  templateUrl: './company-happy-customers.component.html',
  styleUrls: ['./company-happy-customers.component.css'],
})
export class CompanyHappyCustomersComponent {
  displayCustom: boolean | undefined;
  activeIndex: number = 0;
  images: any;

  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }

  ngOnInit() {
    this.images = [
      {
        itemImageSrc:
          'https://images.unsplash.com/photo-1631217871099-88310a909a32?auto=format&fit=crop&q=80&w=1963&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc:
          'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        itemImageSrc:
          'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1791&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
      {
        itemImageSrc:
          'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Description for Image 4',
        title: 'Title 4',
      },
      {
        itemImageSrc:
          'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Description for Image 5',
        title: 'Title 5',
      },
      {
        itemImageSrc:
          'https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&q=80&w=2024&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Description for Image 6',
        title: 'Title 6',
      },
      {
        itemImageSrc:
          'https://plus.unsplash.com/premium_photo-1661281316103-9aef5ad47c50?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Description for Image 7',
        title: 'Title 7',
      },
      {
        itemImageSrc:
          'https://images.unsplash.com/photo-1631217872822-1c2546d6b864?auto=format&fit=crop&q=80&w=1791&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Description for Image 8',
        title: 'Title 8',
      },
      {
        itemImageSrc:
          'https://images.unsplash.com/photo-1631217868902-fa06818573b4?auto=format&fit=crop&q=80&w=1791&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Description for Image 9',
        title: 'Title 9',
      },
      {
        itemImageSrc:
          'https://plus.unsplash.com/premium_photo-1664299452240-12f8f1a70b81?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Description for Image 10',
        title: 'Title 10',
      },
      {
        itemImageSrc:
          'https://images.unsplash.com/photo-1631217873436-b0fa88e71f0a?auto=format&fit=crop&q=80&w=2025&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Description for Image 11',
        title: 'Title 11',
      },
      {
        itemImageSrc:
          'https://plus.unsplash.com/premium_photo-1661775601929-8c775187bea6?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Description for Image 12',
        title: 'Title 12',
      },
    ];
  }
}
