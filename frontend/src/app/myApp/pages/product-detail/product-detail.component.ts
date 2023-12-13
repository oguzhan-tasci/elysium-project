import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthService } from 'src/app/myApp/services/allServices/products/health.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  title: string;
  country: string;
  city: string;
  stars: number;
  images: string[];
  about: string;
  additionalServices: string[];
  price: number;
  discountPrice: number;
  companyName: string;
  companyCountry: string;
  companyCity: string;
  companyLogo: string;
  companyStars: number;
  companyCountryFlag: string;

  constructor(
    private route: ActivatedRoute,
    private healthService: HealthService
  ) {}

  pageIndex = Number(this.route.snapshot.paramMap.get('id'));
  getUnique() {
    this.healthService.getUniqueService(this.pageIndex).subscribe((data) => {
      this.title = data.title;
      this.city = data.city;
      this.country = data.country;
      this.stars = data.stars;
      this.images = data.images;
      this.about = data.aboutService;
      this.additionalServices = data.additionalServices;
      this.price = data.price;
      this.discountPrice = data.discountPrice;
      this.companyName = data.companies.name;
      this.companyCity = data.companies.city;
      this.companyCity = data.companies.city;
      this.companyCountry = data.companies.country;
      this.companyStars = data.companies.stars;
      this.companyCountryFlag = data.companies.countryFlag;
      this.companyLogo = data.companies.image;
    });
  }
  ngAfterViewInit() {
    this.getUnique();
  }
}
