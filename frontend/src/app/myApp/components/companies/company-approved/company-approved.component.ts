import { Component } from '@angular/core';

@Component({
  selector: 'c-company-approved',
  templateUrl: './company-approved.component.html',
  styleUrls: ['./company-approved.component.css'],
})
export class CompanyApprovedComponent {
  approved = [];

  ngOnInit() {
    this.approved = [
      {
        id: 1,
        value: 'Kimlik/Vergi numarasi',
      },
      {
        id: 2,
        value: 'E-posta',
      },
      {
        id: 3,
        value: 'Telefon numarasi',
      },
      {
        id: 4,
        value: 'Konum',
      },
    ];
  }
}
