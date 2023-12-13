import { Component } from '@angular/core';

@Component({
  selector: 'app-create-company-title',
  templateUrl: './create-company-title.component.html',
  styleUrls: ['./create-company-title.component.css'],
})
export class CreateCompanyTitleComponent {
  title: string;

  saveTitle() {
    if (this.title === undefined) {
      throw Error("It's required");
    } else {
      window.localStorage.setItem('title', this.title);
    }
  }
}
