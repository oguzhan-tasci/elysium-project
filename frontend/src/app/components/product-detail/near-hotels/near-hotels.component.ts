import { Component } from '@angular/core';
import { Otel } from 'src/app/models/Otel';
import { OtelInfoService } from 'src/app/services/otel/otel-info.service';

@Component({
  selector: 'pd-near-hotels',
  templateUrl: './near-hotels.component.html',
  styleUrls: ['./near-hotels.component.css'],
})
export class NearHotelsComponent {
  otels: Otel[] = [];
  constructor(private otelService: OtelInfoService) {}

  ngOnInit() {
    this.otels = this.otelService.getAllOtels(8);
    console.log(this.otels);
  }
  ngAfterViewInit() {}
}
