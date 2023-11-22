import { Component } from '@angular/core';

@Component({
  selector: 'pd-additional-service',
  templateUrl: './additional-service.component.html',
  styleUrls: ['./additional-service.component.css'],
})
export class AdditionalServiceComponent {
  amenities = [];

  ngOnInit() {
    this.amenities = [
      {
        id: 1,
        iconClass: 'pi pi-globe',
        nameValue: 'Extraordinary language knowledge',
      },
      {
        id: 1,
        iconClass: 'pi pi-mobile',
        nameValue: 'Free Water',
      },
      {
        id: 1,
        iconClass: 'pi pi-wifi',
        nameValue: 'Free Wifi',
      },
      {
        id: 1,
        iconClass: 'pi pi-tablet',
        nameValue: 'Free Coffe',
      },
      {
        id: 1,
        iconClass: 'pi pi-shield',
        nameValue: 'Wheelchair Accessible',
      },
      {
        id: 1,
        iconClass: 'pi pi-car',
        nameValue: 'Free Parking',
      },
      {
        id: 1,
        iconClass: 'pi pi-compass',
        nameValue: 'Free X-rays',
      },
    ];
  }
}
