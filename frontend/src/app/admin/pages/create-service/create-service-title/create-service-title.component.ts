import { Component } from '@angular/core';

@Component({
  selector: 'create-service-title',
  templateUrl: './create-service-title.component.html',
  styleUrls: ['./create-service-title.component.css'],
})
export class CreateServiceTitleComponent {
  title: string = '';

  ngOnInit() {}

  saveTitle(event: any) {
    if (event === undefined) {
      throw Error("It's required");
    } else {
      window.localStorage.setItem('service-title', event);
    }
  }
}
