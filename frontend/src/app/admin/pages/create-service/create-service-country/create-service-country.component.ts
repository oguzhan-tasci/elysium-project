import { Component } from '@angular/core';

@Component({
  selector: 'create-service-country',
  templateUrl: './create-service-country.component.html',
  styleUrls: ['./create-service-country.component.css'],
})
export class CreateServiceCountryComponent {
  selectedCountry: string;

  countries = [
    {
      name: 'Australia',
      countryImage: 'https://flagsapi.com/AU/flat/64.png',
    },
    { name: 'Turkey', countryImage: 'https://flagsapi.com/TR/flat/64.png' },
    { name: 'Brazil', countryImage: 'https://flagsapi.com/BR/flat/64.png' },
    { name: 'China', countryImage: 'https://flagsapi.com/CN/flat/64.png' },
    { name: 'Egypt', countryImage: 'https://flagsapi.com/EG/flat/64.png' },
    { name: 'France', countryImage: 'https://flagsapi.com/FR/flat/64.png' },
    { name: 'Germany', countryImage: 'https://flagsapi.com/DE/flat/64.png' },
    { name: 'India', countryImage: 'https://flagsapi.com/IN/flat/64.png' },
    { name: 'Japan', countryImage: 'https://flagsapi.com/JP/flat/64.png' },
    { name: 'Spain', countryImage: 'https://flagsapi.com/ES/flat/64.png' },
    {
      name: 'United States',
      countryImage: 'https://flagsapi.com/BE/flat/64.png',
    },
  ];

  ngOnInit() {
    this.saveCountry(this.selectedCountry);
  }

  saveCountry(event: any) {
    if (event == undefined) {
      throw Error("It's required");
    } else {
      console.log(event.name);
      window.localStorage.setItem('service-country', event.name);
    }
  }
}
