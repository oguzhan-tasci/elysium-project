import { Component } from '@angular/core';
import { ServiceBox } from 'src/app/models/ServiceBox';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'pd-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css'],
})
export class RelatedProductsComponent {
  products: ServiceBox[] = [];

  constructor(private serviceService: ServicesService) {}

  ngOnInit() {
    this.products = this.serviceService.getAll(8);
  }
}
