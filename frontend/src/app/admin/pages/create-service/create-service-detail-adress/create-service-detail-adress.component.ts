import { Component } from '@angular/core';

@Component({
  selector: 'create-service-detail-adress',
  templateUrl: './create-service-detail-adress.component.html',
  styleUrls: ['./create-service-detail-adress.component.css'],
})
export class CreateServiceDetailAdressComponent {
  placeholders = [
    {
      id: 1,
      placeholderValue: 'City',
      ngModelValue: 'city',
    },
    {
      id: 2,
      placeholderValue: 'Town/District',
      ngModelValue: 'town',
    },
    {
      id: 3,
      placeholderValue: 'Street/Avenue',
      ngModelValue: 'street',
    },
    {
      id: 4,
      placeholderValue: 'Housing/Floor/Building etc (optional)',
      ngModelValue: 'building',
    },
    {
      id: 5,
      placeholderValue: 'Post code (optional)',
      ngModelValue: 'postCode',
    },
  ];

  city: string;
  town: string;
  street: string;
  building: string;
  postCode: string;
  
  ngOnInit() {}
}
