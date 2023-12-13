import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pd-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.css'],
})
export class CompanyInformationComponent {
  @Input() companyName : string;
  @Input() companyCountry : string;
  @Input() companyCity : string;
  @Input() companyLogo : string;
  @Input() companyCountryFlag : string;
}
