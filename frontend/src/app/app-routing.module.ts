import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './myApp/pages/home-page/home-page.component';
import { ProductsPageComponent } from './myApp/pages/products-page/products-page.component';
import { ProductDetailComponent } from './myApp/pages/product-detail/product-detail.component';
import { CompanyPageComponent } from './myApp/pages/company-page/company-page.component';
import { BecomeSellerComponent } from './myApp/pages/become-seller/become-seller.component';
import { PageTodayComponent } from './admin/pages/page-today/page-today.component';
import { SignupComponent } from './myApp/components/signup/signup.component';
import { LoginComponent } from './myApp/components/login/login.component';
import { PageInboxComponent } from './admin/pages/page-inbox/page-inbox.component';
import { PageServicesComponent } from './admin/pages/page-services/page-services.component';
import { PageReservationComponent } from './admin/pages/page-reservation/page-reservation.component';
import { PageCalendarComponent } from './admin/pages/page-calendar/page-calendar.component';
import { MainComponent } from './myApp/pages/main/main.component';
import { AdminMainComponent } from './admin/pages/admin-main/admin-main.component';
import { CreateCompanyRegistrationComponent } from './myApp/pages/create-company/create-company-registration/create-company-registration.component';
import { CreateCompanyIntroductionComponent } from './myApp/pages/create-company/create-company-introduction/create-company-introduction.component';
import { CreateCompanyCompanyFieldComponent } from './myApp/pages/create-company/create-company-company-field/create-company-company-field.component';
import { CreateCompanyCountryComponent } from './myApp/pages/create-company/create-company-country/create-company-country.component';
import { CreateCompanyAllCitiesComponent } from './myApp/pages/create-company/create-company-all-cities/create-company-all-cities.component';
import { CreateCompanyTitleComponent } from './myApp/pages/create-company/create-company-title/create-company-title.component';
import { CreateCompanyDetailsComponent } from './myApp/pages/create-company/create-company-details/create-company-details.component';
import { CreateCompanyLogoComponent } from './myApp/pages/create-company/create-company-logo/create-company-logo.component';
import { CreateCompanyVerificationsComponent } from './myApp/pages/create-company/create-company-verifications/create-company-verifications.component';
import { CreateCompanyDoneComponent } from './myApp/pages/create-company/create-company-done/create-company-done.component';
import { CreateServiceRegistrationComponent } from './admin/pages/create-service/create-service-registration/create-service-registration.component';
import { CreateServiceCountryComponent } from './admin/pages/create-service/create-service-country/create-service-country.component';
import { CreateServiceDescriptionComponent } from './admin/pages/create-service/create-service-description/create-service-description.component';
import { CreateServiceDetailAdressComponent } from './admin/pages/create-service/create-service-detail-adress/create-service-detail-adress.component';
import { CreateServiceDoneComponent } from './admin/pages/create-service/create-service-done/create-service-done.component';
import { CreateServiceImagesComponent } from './admin/pages/create-service/create-service-images/create-service-images.component';
import { CreateServiceIntroductionComponent } from './admin/pages/create-service/create-service-introduction/create-service-introduction.component';
import { CreateServiceLanguagesComponent } from './admin/pages/create-service/create-service-languages/create-service-languages.component';
import { CreateServiceLocationMapComponent } from './admin/pages/create-service/create-service-location-map/create-service-location-map.component';
import { CreateServicePricingComponent } from './admin/pages/create-service/create-service-pricing/create-service-pricing.component';
import { CreateServiceRulesComponent } from './admin/pages/create-service/create-service-rules/create-service-rules.component';
import { CreateServiceTeammatesComponent } from './admin/pages/create-service/create-service-teammates/create-service-teammates.component';
import { CreateServiceTitleComponent } from './admin/pages/create-service/create-service-title/create-service-title.component';
import { AccountSettingsMainComponent } from './myApp/pages/account-settings/account-settings-main/account-settings-main.component';
import { AccountSettingsHomepageComponent } from './myApp/pages/account-settings/account-settings-homepage/account-settings-homepage.component';
import { AccountSettingsPersonalInfoComponent } from './myApp/pages/account-settings/account-settings-personal-info/account-settings-personal-info.component';
import { AccountSettingsMessagesComponent } from './myApp/pages/account-settings/account-settings-messages/account-settings-messages.component';
import { AccountSettingsFavoritesComponent } from './myApp/pages/account-settings/account-settings-favorites/account-settings-favorites.component';
import { AccountSettingsAppointmentsComponent } from './myApp/pages/account-settings/account-settings-appointments/account-settings-appointments.component';
import { AccountSettingsSecurityComponent } from './myApp/pages/account-settings/account-settings-security/account-settings-security.component';
import { AccountSettingsPreferencesComponent } from './myApp/pages/account-settings/account-settings-preferences/account-settings-preferences.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      { path: 'companies', component: CompanyPageComponent },
      { path: 'become-seller', component: BecomeSellerComponent },
      { path: 'products', component: ProductsPageComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ],
  },

  {
    path: 'hosting',
    component: AdminMainComponent,
    children: [
      { path: '', component: PageTodayComponent, pathMatch: 'full' },
      { path: 'inbox', component: PageInboxComponent },
      { path: 'services', component: PageServicesComponent },
      { path: 'reservations', component: PageReservationComponent },
      { path: 'calendar', component: PageCalendarComponent },
    ],
  },

  {
    path: 'registration',
    component: CreateCompanyRegistrationComponent,
    children: [
      {
        path: '',
        component: CreateCompanyIntroductionComponent,
        pathMatch: 'full',
      },
      { path: 'company-fields', component: CreateCompanyCompanyFieldComponent },
      { path: 'country', component: CreateCompanyCountryComponent },
      { path: 'active-cities', component: CreateCompanyAllCitiesComponent },
      { path: 'title', component: CreateCompanyTitleComponent },
      { path: 'description', component: CreateCompanyDetailsComponent },
      { path: 'logo', component: CreateCompanyLogoComponent },
      { path: 'verifications', component: CreateCompanyVerificationsComponent },
      { path: 'done', component: CreateCompanyDoneComponent },
    ],
  },

  {
    path: 'account-settings',
    component: AccountSettingsMainComponent,
    children: [
      {
        path: '',
        component: AccountSettingsHomepageComponent,
        pathMatch: 'full',
      },
      {
        path: 'personal-info',
        component: AccountSettingsPersonalInfoComponent,
      },
      {
        path: 'messages',
        component: AccountSettingsMessagesComponent,
      },
      {
        path: 'favorites',
        component: AccountSettingsFavoritesComponent,
      },
      {
        path: 'appointments',
        component: AccountSettingsAppointmentsComponent,
      },
      {
        path: 'security',
        component: AccountSettingsSecurityComponent,
      },
      {
        path: 'preferences',
        component: AccountSettingsPreferencesComponent,
      },
    ],
  },
  {
    path: 'hosting/create-service',
    component: CreateServiceRegistrationComponent,
    children: [
      {
        path: '',
        component: CreateServiceIntroductionComponent,
        pathMatch: 'full',
      },
      { path: 'country', component: CreateServiceCountryComponent },
      { path: 'description', component: CreateServiceDescriptionComponent },
      { path: 'address', component: CreateServiceDetailAdressComponent },
      { path: 'done', component: CreateServiceDoneComponent },
      { path: 'images', component: CreateServiceImagesComponent },
      { path: 'languages', component: CreateServiceLanguagesComponent },
      { path: 'teammates', component: CreateServiceTeammatesComponent },
      { path: 'location-map', component: CreateServiceLocationMapComponent },
      { path: 'pricing', component: CreateServicePricingComponent },
      { path: 'rules', component: CreateServiceRulesComponent },
      { path: 'team', component: CreateServiceTeammatesComponent },
      { path: 'title', component: CreateServiceTitleComponent },
    ],
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
