import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';

@Component({
  selector: 'app-create-company-all-cities',
  templateUrl: './create-company-all-cities.component.html',
  styleUrls: ['./create-company-all-cities.component.css'],
})
export class CreateCompanyAllCitiesComponent {
  cities!: any;
  selectedCities!: any;
  
  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
}
