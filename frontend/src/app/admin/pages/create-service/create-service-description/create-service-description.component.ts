import { Component } from '@angular/core';

@Component({
  selector: 'create-service-description',
  templateUrl: './create-service-description.component.html',
  styleUrls: ['./create-service-description.component.css'],
})
export class CreateServiceDescriptionComponent {
  description: string;

  ngOnInit() {
    this.saveDescription(this.description);
  }

  saveDescription(event: any) {
    if (event == undefined) {
      throw Error("It's required");
    } else {
      console.log(event);
      window.localStorage.setItem('service-description', event);
    }
  }
}
