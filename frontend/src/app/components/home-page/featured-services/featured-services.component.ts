import { Component } from '@angular/core';
import { ServiceBox } from 'src/app/models/ServiceBox';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'hp-featured-services',
  templateUrl: './featured-services.component.html',
  styleUrls: ['./featured-services.component.css'],
})
export class FeaturedServicesComponent {
  services: ServiceBox[] = [];

  constructor(private businessService: ServicesService) {
    this.services = this.businessService.getAll(4);
  }
}
