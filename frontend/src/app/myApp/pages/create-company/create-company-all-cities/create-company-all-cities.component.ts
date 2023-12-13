import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';

@Component({
  selector: 'app-create-company-all-cities',
  templateUrl: './create-company-all-cities.component.html',
  styleUrls: ['./create-company-all-cities.component.css'],
})
export class CreateCompanyAllCitiesComponent {
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  selectedCities!: any;

  ngOnInit() {
    this.activeCities(this.selectedCities);
  }
  activeCities(event: any) {
    let activeCities = [];
    if (event === undefined) {
      throw Error("It's required");
    } else {
      for (let i = 0; i < event.length; i++) {
        activeCities.push(event[i].name);
        window.localStorage.setItem(
          'activeCities',
          JSON.stringify(activeCities)
        );
      }
    }
  }
}
