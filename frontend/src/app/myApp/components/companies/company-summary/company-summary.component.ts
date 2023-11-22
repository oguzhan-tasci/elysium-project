import { Component } from '@angular/core';

@Component({
  selector: 'c-company-summary',
  templateUrl: './company-summary.component.html',
  styleUrls: ['./company-summary.component.css'],
})
export class CompanySummaryComponent {
  companyInformation = [];

  ngOnInit() {
    this.companyInformation = [
      {
        id: 1,
        key: 'Country',
        value: 'Turkey',
        iconClass: 'pi pi-globe  text-gray-900',
      },
      {
        id: 2,
        key: 'Scoring',
        value: '4,84',
        iconClass: 'pi pi-star ',
      },
      {
        id: 3,
        key: 'Assessment',
        value: '257',
        iconClass: 'pi pi-comment ',
      },
    ];
  }
}
