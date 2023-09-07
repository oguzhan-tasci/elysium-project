import { Component } from '@angular/core';
import { ServiceBox } from 'src/app/models/ServiceBox';
import { HealthService } from 'src/app/services/services/health/health.service';

@Component({
  selector: 'pd-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css'],
})
export class RelatedProductsComponent {
  products: ServiceBox[] = [];

  constructor(private healthService: HealthService) {}

  ngOnInit() {
    this.products = this.healthService.getAllServices(8);
  }
}
