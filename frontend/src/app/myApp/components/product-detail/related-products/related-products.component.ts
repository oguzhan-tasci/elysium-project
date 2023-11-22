import { Component } from '@angular/core';
import { ServiceBox } from 'src/app/myApp/models/ServiceBox';
import { HealthService } from 'src/app/myApp/services/allServices/health/health.service';

@Component({
  selector: 'pd-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css'],
})
export class RelatedProductsComponent {
  products;

  constructor(private healthService: HealthService) {}

  ngOnInit() {
    this.products = this.healthService.getAllServices();
  }
}
