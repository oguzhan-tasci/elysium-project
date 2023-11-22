import { Component } from '@angular/core';

@Component({
  selector: 'personal-info-inputs',
  templateUrl: './personal-info-inputs.component.html',
  styleUrls: ['./personal-info-inputs.component.css'],
})
export class PersonalInfoInputsComponent {
  fields = [];

  ngOnInit() {
    this.fields = [
      {
        id: 1,
        inputTitle: 'Legal name',
        inputValue: 'John Doe',
      },

      {
        id: 2,
        inputTitle: 'E-mail',
        inputValue: 'john***@gmail.com',
      },

      {
        id: 3,
        inputTitle: 'Phone number',
        inputValue: '************',
      },

      {
        id: 4,
        inputTitle: 'Credential',
        inputValue: 'None',
      },

      {
        id: 5,
        inputTitle: 'Address',
        inputValue: 'Add your address',
      },
    ];
  }
}
