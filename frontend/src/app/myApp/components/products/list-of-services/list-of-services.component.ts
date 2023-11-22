import { Component, Input } from '@angular/core';
import { HealthService } from 'src/app/myApp/services/allServices/health/health.service';
import { sample_services } from '../../../../../data';

@Component({
  selector: 'p-services',
  templateUrl: './list-of-services.component.html',
  styleUrls: ['./list-of-services.component.css'],
})
export class ListOfServicesComponent {
  services: any;
  constructor(private healthService: HealthService) {}

  getServices() {
    this.services = sample_services;
    // this.healthService.getAllServices().subscribe((data) => {
    //   this.services = data;
    // });
  }
  ngOnInit() {
    this.getServices();
  }
}
