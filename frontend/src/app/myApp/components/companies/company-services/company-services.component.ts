import { Component } from '@angular/core';

@Component({
  selector: 'c-company-services',
  templateUrl: './company-services.component.html',
  styleUrls: ['./company-services.component.css'],
})
export class CompanyServicesComponent {
  companyService = [];

  ngOnInit() {
    this.companyService = [
      {
        id: 1,
        images: [
          'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
        ],
        country: 'United States',
        city: 'San Francisco',
        aboutService:
          'Our service is available in order to provide best for you',
        threeSteps: [
          'First step will be here',
          'Second step will be here',
          'Third step will be here',
        ],
        youNeedToKnow: [
          'First needed will be here',
          'Second needed will be here',
          'Third needed will be here',
          'Fourth needed will be here',
        ],
        stars: 4,
        title: 'We transplant your hair in a professional way',
        price: 16000,
        companiesId: 1,
      },
      {
        id: 2,
        stars: 5,
        title: 'We quickly overcome the problems of your eyes',
        price: 12000,
        images: [
          'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80',
        ],
        country: 'United States',
        city: 'San Francisco',
        aboutService:
          'Our service is available in order to provide best for you',
        threeSteps: [
          'First step will be here',
          'Second step will be here',
          'Third step will be here',
        ],
        youNeedToKnow: [
          'First needed will be here',
          'Second needed will be here',
          'Third needed will be here',
          'Fourth needed will be here',
        ],
        companiesId: 2,
      },
      {
        id: 3,
        stars: 5,
        title: 'We do your rhinoplasty without any problems',
        price: 24000,
        images: [
          'https://images.unsplash.com/photo-1605725961202-18c2678ea41e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        ],
        country: 'United States',
        city: 'San Francisco',
        aboutService:
          'Our service is available in order to provide best for you',
        threeSteps: [
          'First step will be here',
          'Second step will be here',
          'Third step will be here',
        ],
        youNeedToKnow: [
          'First needed will be here',
          'Second needed will be here',
          'Third needed will be here',
          'Fourth needed will be here',
        ],
        companiesId: 1,
      },
      {
        id: 4,
        stars: 5,
        title: 'We do your rhinoplasty without any problems',
        price: 24000,
        images: [
          'https://images.unsplash.com/photo-1578991624414-276ef23a534f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1927&q=80',
        ],
        country: 'United States',
        city: 'San Francisco',
        aboutService:
          'Our service is available in order to provide best for you',
        threeSteps: [
          'First step will be here',
          'Second step will be here',
          'Third step will be here',
        ],
        youNeedToKnow: [
          'First needed will be here',
          'Second needed will be here',
          'Third needed will be here',
          'Fourth needed will be here',
        ],
        companiesId: 1,
      },
    ];
  }
}
