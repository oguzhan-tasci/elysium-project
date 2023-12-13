import { Component } from '@angular/core';

@Component({
  selector: 'create-service-languages',
  templateUrl: './create-service-languages.component.html',
  styleUrls: ['./create-service-languages.component.css'],
})
export class CreateServiceLanguagesComponent {
  languages!: any;

  selectedLanguages!: any;

  constructor() {
    this.languages = [
      { name: 'English', code: 'EN' },
      { name: 'Turkish', code: 'TR' },
      { name: 'Arabic', code: 'ARB' },
      { name: 'Spanish', code: 'SP' },
      { name: 'French', code: 'FR' },
    ];
  }

  ngOnInit() {
    this.saveLanguages(this.selectedLanguages);
  }

  saveLanguages(event: any) {
    let temporaryLanguages = [];
    if (event == undefined) {
      throw Error("It's required");
    } else {
      for (let i = 0; i < event.length; i++) {
        temporaryLanguages.push(event[i].name);
      }
      window.localStorage.setItem(
        'service-languages',
        JSON.stringify(temporaryLanguages)
      );
    }
  }
}
