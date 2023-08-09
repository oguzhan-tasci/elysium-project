import { Component, OnInit } from '@angular/core';
import { ServiceBox } from 'src/app/models/ServiceBox';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'p-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  services: ServiceBox[] = [];
  constructor(private servicesService: ServicesService) {}

  ngOnInit(): void {
    this.services = this.servicesService.getAll(8);
    console.log(this.services);
  }
}
