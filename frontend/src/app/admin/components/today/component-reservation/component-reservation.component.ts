import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-component-reservation',
  templateUrl: './component-reservation.component.html',
  styleUrls: ['./component-reservation.component.css'],
})
export class ComponentReservationComponent {
  chips = [];

  ngOnInit() {
    this.chips = [
      {
        id: 1,
        label: 'Cikis yapan (0)',
        iconClass: 'pi pi-arrow-right',
      },
      {
        id: 2,
        label: 'Süreci devam eden (0)',
        iconClass: 'pi pi-spinner',
      },
      {
        id: 3,
        label: 'Yaklasan (0)',
        iconClass: 'pi pi-info-circle',
      },
      {
        id: 4,
        label: 'Degerlendirme bekleyen (0)',
        iconClass: 'pi pi-comment',
      },
    ];
  }
}
