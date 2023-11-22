import { Component } from '@angular/core';
import { HealthService } from 'src/app/myApp/services/allServices/health/health.service';

@Component({
  selector: 'create-service-done',
  templateUrl: './create-service-done.component.html',
  styleUrls: ['./create-service-done.component.css'],
})
export class CreateServiceDoneComponent {
  constructor(private healthService: HealthService) {}
  service: any;

  ngOnInit() {
    this.service = this.healthService.getUniqueService(1);
  }

}
