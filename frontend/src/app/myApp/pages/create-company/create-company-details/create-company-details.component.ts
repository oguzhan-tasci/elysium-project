import { Component } from '@angular/core';

@Component({
  selector: 'app-create-company-details',
  templateUrl: './create-company-details.component.html',
  styleUrls: ['./create-company-details.component.css'],
})
export class CreateCompanyDetailsComponent {
  description: string;

  saveDescription() {
    if (this.description === '') {
      throw Error("It's required");
    } else {
      window.localStorage.setItem('description', this.description);
    }
  }
}
