import { Component } from '@angular/core';
import { ServiceBox } from 'src/app/models/ServiceBox';
import { HealthService } from 'src/app/services/services/health/health.service';

@Component({
  selector: 'hp-featured-services',
  templateUrl: './featured-services.component.html',
  styleUrls: ['./featured-services.component.css'],
})
export class FeaturedServicesComponent {
  services: ServiceBox[] = [];

  constructor(private healthService: HealthService) {
    this.services = this.healthService.getAllServices(4);
  }
}
