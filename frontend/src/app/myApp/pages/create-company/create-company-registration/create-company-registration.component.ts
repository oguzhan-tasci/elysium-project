import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-company-registration',
  templateUrl: './create-company-registration.component.html',
  styleUrls: ['./create-company-registration.component.css'],
})
export class CreateCompanyRegistrationComponent {
  footerBarValue: number;
  footerPreviousRoute: string;
  footerForwardRoute: string;
  currentRoute: string;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.routerFunction();
  }

  routerFunction() {
    if (this.router.url === '/registration') {
      this.footerBarValue = 10;
      this.footerPreviousRoute = '/become-seller';
      this.footerForwardRoute = 'company-fields';
    }
    if (this.router.url === '/registration/company-fields') {
      this.footerBarValue = 30;
      this.footerPreviousRoute = '';
      this.footerForwardRoute = 'country';
    }
    if (this.router.url === '/registration/country') {
      this.footerBarValue = 40;
      this.footerPreviousRoute = 'company-fields';
      this.footerForwardRoute = 'active-cities';
    }
    if (this.router.url === '/registration/active-cities') {
      this.footerBarValue = 60;
      this.footerPreviousRoute = 'country';
      this.footerForwardRoute = 'title';
    }
    if (this.router.url === '/registration/title') {
      this.footerBarValue = 70;
      this.footerPreviousRoute = 'active-cities';
      this.footerForwardRoute = 'description';
    }
    if (this.router.url === '/registration/description') {
      this.footerBarValue = 80;
      this.footerPreviousRoute = 'title';
      this.footerForwardRoute = 'logo';
    }
    if (this.router.url === '/registration/logo') {
      this.footerBarValue = 90;
      this.footerPreviousRoute = 'description';
      this.footerForwardRoute = 'verifications';
    }
    if (this.router.url === '/registration/done') {
      this.footerBarValue = 100;
      this.footerPreviousRoute = 'logo';
      this.footerForwardRoute = '/hosting';
    }
  }
}
