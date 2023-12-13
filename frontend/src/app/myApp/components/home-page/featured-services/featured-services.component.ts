import { Component } from '@angular/core';
import { ServiceBox } from 'src/app/myApp/models/ServiceBox';
import { HealthService } from 'src/app/myApp/services/allServices/products/health.service';
import { FeaturedService } from 'src/app/myApp/services/allServices/homepage/featured.service';

@Component({
  selector: 'hp-featured-services',
  templateUrl: './featured-services.component.html',
  styleUrls: ['./featured-services.component.css'],
})
export class FeaturedServicesComponent {
  services: any;

  constructor(private featuredServices: FeaturedService) {}

  getServices() {
    this.featuredServices.getFeaturedServices().subscribe((data) => {
      this.services = data;
    });
  }

  ngOnInit() {
    this.getServices();
  }
}
