import { Component } from '@angular/core';
import { ServiceBox } from 'src/app/myApp/models/ServiceBox';
import { HealthService } from 'src/app/myApp/services/allServices/health/health.service';

@Component({
  selector: 'hp-featured-services',
  templateUrl: './featured-services.component.html',
  styleUrls: ['./featured-services.component.css'],
})
export class FeaturedServicesComponent {
  services: any;

  constructor(private healthService: HealthService) {}

  getServices() {
    this.healthService.getAllServices().subscribe((data) => {
      this.services = data;
    });
  }

  ngOnInit() {
    this.getServices();
  }
}
