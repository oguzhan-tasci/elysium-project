import { Component } from '@angular/core';

@Component({
  selector: 'create-service-introduction',
  templateUrl: './create-service-introduction.component.html',
  styleUrls: ['./create-service-introduction.component.css'],
})
export class CreateServiceIntroductionComponent {
  articles = [];

  ngOnInit() {
    this.articles = [
      {
        id: 1,
        title: 'Tell us about your location',
        subtitle:
          "Provide basic information like your service's location, price, etc.",
        image:
          '../../../../../assets/admin/create-service/product-explainer.svg',
      },
      {
        id: 2,
        title: 'Make it stand out',
        subtitle:
          'Be sure to include plenty of photos, make the title interesting, and make your description understandable.',
        image: '../../../../../assets//admin/create-service/my-location.svg',
      },
      {
        id: 3,
        title: 'Finish and publish',
        subtitle:
          "Set a starting price for your service and you're ready to go!",
        image: '../../../../../assets/admin/create-service/completed.svg',
      },
    ];
  }
}
