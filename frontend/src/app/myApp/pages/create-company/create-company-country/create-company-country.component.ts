import { Component } from '@angular/core';

@Component({
  selector: 'app-create-company-country',
  templateUrl: './create-company-country.component.html',
  styleUrls: ['./create-company-country.component.css'],
})
export class CreateCompanyCountryComponent {
  countries: any[] | undefined;

  selectedCountry: string | undefined;

  ngOnInit() {
    this.countries = [
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
  }
}
