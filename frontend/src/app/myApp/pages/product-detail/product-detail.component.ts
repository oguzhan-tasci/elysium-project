import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthService } from 'src/app/myApp/services/allServices/health/health.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private healthService: HealthService
  ) {}

  uniqueService: any;
  pageUrl = parseInt(this.route.snapshot.paramMap.get('id'));
  getUniqueService() {
    this.uniqueService = this.healthService.getUniqueService(
      this.uniqueService
    );
    console.log(this.uniqueService);

    this.healthService.getUniqueService(this.pageUrl).subscribe((data) => {
      this.uniqueService = data;
    });
  }

  ngOnInit() {
    this.getUniqueService();
  }
}
