import { Component } from '@angular/core';

@Component({
  selector: 'create-service-languages',
  templateUrl: './create-service-languages.component.html',
  styleUrls: ['./create-service-languages.component.css'],
})
export class CreateServiceLanguagesComponent {
  languages!: any;

  selectedLanguage!: any;

  constructor() {
    this.languages = [
      { name: 'English', code: 'EN' },
      { name: 'Turkish', code: 'TR' },
      { name: 'Arabic', code: 'ARB' },
      { name: 'Spanish', code: 'SP' },
      { name: 'French', code: 'FR' },
    ];
  }
}
