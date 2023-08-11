import { Component } from '@angular/core';
import { Otel } from 'src/app/models/Otel';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'pd-near-hotels',
  templateUrl: './near-hotels.component.html',
  styleUrls: ['./near-hotels.component.css'],
})
export class NearHotelsComponent {
  otels: Otel[] = [];
  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    this.otels = this.servicesService.getAllOtels(8);
    console.log(this.otels);
    
  }
  ngAfterViewInit() {}
}
