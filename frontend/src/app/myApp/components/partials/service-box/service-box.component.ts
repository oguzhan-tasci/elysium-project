import { Component, Input } from '@angular/core';

@Component({
  selector: 'partial-service-box',
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.css'],
})
export class ServiceBoxComponent {
  @Input() serviceId: number;
  @Input() sectionTitle: string;
  @Input() image: string;
  @Input() country: string;
  @Input() city: string;
  @Input() stars: string;
  @Input() title: string;
  @Input() explanation: string;
  @Input() price?: string;
  @Input() countryFlag: string;
  @Input() companyLogo: string;
  @Input() companyName: string;
  flagCode: string;

  constructor() {
    console.log(this.countryFlag);
    
  }
}
