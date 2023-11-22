import { Component } from '@angular/core';

@Component({
  selector: 'p-services-filter',
  templateUrl: './services-filter.component.html',
  styleUrls: ['./services-filter.component.css'],
})
export class ServicesFilterComponent {
  countries: any[] | undefined;
  CitiesVisible: boolean = false;
  TypeVisible: boolean = false;
  LanguagesVisible: boolean = false;
  BudgetVisible: boolean = false;
  DetailVisible: boolean = false;
  selectedCities: string[] = [];
  allCities: any[] = [];
  types: any[] = [];
  languages: any[] = [];

  ngOnInit() {}
  ngAfterViewInit() {
    this.allCities = [
      {
        value: 'Istanbul',
        inputIdFor: 'ist',
        name: 'Turkey',
      },
      {
        value: 'Ankara',
        inputIdFor: 'ank',
        name: 'Turkey',
      },
      {
        value: 'New York',
        inputIdFor: 'ny',
        name: 'USA',
      },
      {
        value: 'California',
        inputIdFor: 'cf',
        name: 'USA',
      },
      {
        value: 'Berlin',
        inputIdFor: 'bl',
        name: 'Germany',
      },
      {
        value: 'Bremen',
        inputIdFor: 'bl',
        name: 'Germany',
      },
      {
        value: 'Florance',
        inputIdFor: 'it',
        name: 'Italy',
      },
    ];
    this.types = [
      {
        value: 'Hair Transplant - FUT Technology',
        inputIdFor: 'fut',
        name: 'hlth',
      },
      {
        value: 'Hair Transplant - FUE Technology',
        inputIdFor: 'fue',
        name: 'hlth',
      },
      {
        value: 'Hair Transplant - Manuel Punch',
        inputIdFor: 'manuel',
        name: 'hlth',
      },
      { value: 'Hair Transplant -DHI', inputIdFor: 'dhi', name: 'hlth' },
      {
        value: 'Hair Transplant -Robotic',
        inputIdFor: 'robotic',
        name: 'hlth',
      },
      {
        value: 'Hair Transplant -Hyberbatic',
        inputIdFor: 'health',
        name: 'hyber',
      },
    ];
    this.languages = [
      { value: 'English', inputIdFor: 'english', name: 'en' },
      { value: 'Turkish', inputIdFor: 'turkish', name: 'tr' },
      { value: 'German', inputIdFor: 'german', name: 'de' },
      { value: 'French', inputIdFor: 'france', name: 'fr' },
      { value: 'Chinese', inputIdFor: 'chinese', name: 'cn' },
      { value: 'Japanese', inputIdFor: 'japanese', name: 'jpn' },
      { value: 'Spanish', inputIdFor: 'spanish', name: 'spn' },
    ];
  }
  showDialog(event) {
    // console.log(event.target.classList);
    if (event.target.classList.contains('cities')) this.CitiesVisible = true;
    if (event.target.classList.contains('types')) this.TypeVisible = true;
    if (event.target.classList.contains('languages'))
      this.LanguagesVisible = true;
    if (event.target.classList.contains('budget')) this.BudgetVisible = true;
    if (event.target.classList.contains('detail')) this.DetailVisible = true;
  }
}
