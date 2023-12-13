import { Component, Input } from '@angular/core';
import { HealthService } from 'src/app/myApp/services/allServices/products/health.service';

@Component({
  selector: 'p-services',
  templateUrl: './list-of-services.component.html',
  styleUrls: ['./list-of-services.component.css'],
})
export class ListOfServicesComponent {
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
