import { Component } from '@angular/core';

@Component({
  selector: 'app-create-company-company-field',
  templateUrl: './create-company-company-field.component.html',
  styleUrls: ['./create-company-company-field.component.css'],
})
export class CreateCompanyCompanyFieldComponent {
  healthFields = [];
  placeFields = [];

  ngOnInit() {
    this.healthFields = [
      {
        id: 1,
        icon: '../../../../../assets/create-company/fields/doctor.svg',
        title: 'Clinic',
      },
      {
        id: 1,
        icon: '../../../../../assets/create-company/fields/hospital.svg',
        title: 'Hospital',
      },
      {
        id: 1,
        icon: '../../../../../assets/create-company/fields/paw.svg',
        title: 'Veterinary',
      },
    ];
    this.placeFields = [
      {
        id: 1,
        icon: '../../../../../assets/create-company/fields/house-chimney.svg',
        title: 'House',
      },
      {
        id: 2,
        icon: '../../../../../assets/create-company/fields/apartment.svg',
        title: 'Apartment',
      },
      {
        id: 3,
        icon: '../../../../../assets/create-company/fields/bed-alt.svg',
        title: 'Room',
      },
      {
        id: 4,
        icon: '../../../../../assets/create-company/fields/cabin.svg',
        title: 'Cabin',
      },
      {
        id: 5,
        icon: '../../../../../assets/create-company/fields/rv.svg',
        title: 'Van',
      },
    ];
  }
}
