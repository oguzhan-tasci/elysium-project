import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CompanyService } from 'src/app/myApp/services/companies/company.service';

@Component({
  selector: 'c-company-services',
  templateUrl: './company-services.component.html',
  styleUrls: ['./company-services.component.css'],
})
export class CompanyServicesComponent {
  aboutCompany:any;
 constructor(private companySerice : CompanyService){}

 getDetails() {
  this.companySerice.getCompanyDetails().subscribe((data)=> {
    this.aboutCompany = data;
    console.log(this.aboutCompany);
    
  })
 }

  ngOnInit() {
    this.getDetails();
  }
}
