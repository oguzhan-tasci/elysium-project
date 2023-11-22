import { Component } from '@angular/core';

@Component({
  selector: 'bc-seller-steps',
  templateUrl: './seller-steps.component.html',
  styleUrls: ['./seller-steps.component.css'],
})
export class SellerStepsComponent {
  steps = [];

  ngOnInit() {
    this.steps = [
      {
        id: 1,
        title: 'Sign up for a seconds',
        image: ' ../../../../../../../assets/become-seller/sign-up.svg',
        subtitle:
          'Register on our platform.This process takes a few minutes and the process is complete.',
      },
      {
        id: 2,
        title: 'Introduce your company/organization',
        image: ' ../../../../../../../assets/become-seller/stand-out.svg',
        subtitle:
          'Inform customers about your company or organization. You can talk about the knowledgeable people in your team and the work you have done before.',
      },
      {
        id: 3,
        title: 'List the services you offer',
        image: ' ../../../../../../../assets/become-seller/services.svg',
        subtitle:
          'List the services you provide in your company or organization, provide detailed information and answer customers questions.',
      },
      {
        id: 4,
        title: "That's it!",
        image: ' ../../../../../../../assets/become-seller/online-party.svg',
        subtitle:
          "From now on it's simple! Keep in touch with your customer who made an appointment and fascinate them with the services you provide!",
      },
    ];
  }
}
