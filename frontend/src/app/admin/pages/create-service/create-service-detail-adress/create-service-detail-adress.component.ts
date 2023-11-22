import { Component } from '@angular/core';

@Component({
  selector: 'create-service-detail-adress',
  templateUrl: './create-service-detail-adress.component.html',
  styleUrls: ['./create-service-detail-adress.component.css'],
})
export class CreateServiceDetailAdressComponent {
  placeholders = [];

  ngOnInit() {
    this.placeholders = [
      {
        id: 1,
        placeholderValue: 'Town/District',
      },
      {
        id: 2,
        placeholderValue: 'Street/Avenue',
      },
      {
        id: 3,
        placeholderValue: 'Housing/Floor/Building etc (optional)',
      },
      {
        id: 4,
        placeholderValue: 'Post code (optional)',
      },
      {
        id: 5,
        placeholderValue: 'City',
      },
    ];
  }
}
