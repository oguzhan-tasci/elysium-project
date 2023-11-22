import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { KeyFilterModule } from 'primeng/keyfilter';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { MessagesModule } from 'primeng/messages';
import { Avatar, AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';
import { TimelineModule } from 'primeng/timeline';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { BannerComponent } from './components/home-page/banner/banner.component';
import { FamousCitiesComponent } from './components/home-page/famous-cities/famous-cities.component';
import { FeaturedServicesComponent } from './components/home-page/featured-services/featured-services.component';
import { InformationForUsersComponent } from './components/home-page/information-for-users/information-for-users.component';
import { RealStoriesComponent } from './components/home-page/real-stories/real-stories.component';
import { SearchInputComponent } from './components/home-page/search-input/search-input.component';
import { BreadcrumbsComponent } from './components/partials/breadcrumbs/breadcrumbs.component';
import { CheckboxComponent } from './components/partials/checkbox/checkbox.component';
import { ServiceBoxComponent } from './components/partials/service-box/service-box.component';
import { CalendarComponent } from './components/product-detail/calendar/calendar.component';
import { CommentSummaryComponent } from './components/product-detail/comment-summary/comment-summary.component';
import { CommentsComponent } from './components/product-detail/comments/comments.component';
import { CompanyInformationComponent } from './components/product-detail/company-information/company-information.component';
import { ExplanationOfServiceComponent } from './components/product-detail/explanation-of-service/explanation-of-service.component';
import { MapComponent } from './components/product-detail/map/map.component';
import { NearHotelsComponent } from './components/product-detail/near-hotels/near-hotels.component';
import { RelatedProductsComponent } from './components/product-detail/related-products/related-products.component';
import { ChipsModule } from 'primeng/chips';
import { YouNeedToKnowComponent } from './components/product-detail/you-need-to-know/you-need-to-know.component';
import { SectionTeammatesComponent } from './components/product-detail/section-teammates/section-teammates.component';
import { UpperLeftSideComponent } from './components/product-detail/upper-left-side/upper-left-side.component';
import { ResultsForComponent } from './components/products/results-for/results-for.component';
import { ServicesFilterComponent } from './components/products/services-filter/services-filter.component';
import { ListOfServicesComponent } from './components/products/list-of-services/list-of-services.component';
import { ChipComponent } from './components/partials/chip/chip.component';
import { InputMaskModule } from 'primeng/inputmask';
import { InputMaskComponent } from './components/partials/input-mask/input-mask.component';
import { BadgeModule } from 'primeng/badge';
import { MessageComponent } from './components/partials/message/message.component';
import { MyAccordionComponent } from './components/partials/my-accordion/my-accordion.component';
import { DropdownModule } from 'primeng/dropdown';
import { CommentComponent } from './components/partials/comment/comment.component';
import { CompanyPageComponent } from './pages/company-page/company-page.component';
import { BecomeSellerComponent } from './pages/become-seller/become-seller.component';
import { CompanySummaryComponent } from './components/companies/company-summary/company-summary.component';
import { CompanyAboutComponent } from './components/companies/company-about/company-about.component';
import { CompanyServicesComponent } from './components/companies/company-services/company-services.component';
import { CompanyHappyCustomersComponent } from './components/companies/company-happy-customers/company-happy-customers.component';
import { CompanyCommentsComponent } from './components/companies/company-comments/company-comments.component';
import { CompanyApprovedComponent } from './components/companies/company-approved/company-approved.component';
import { SellerBannerComponent } from './components/become-seller/seller-banner/seller-banner.component';
import { SellerBenefitsComponent } from './components/become-seller/seller-benefits/seller-benefits.component';
import { SellerStepsComponent } from './components/become-seller/seller-steps/seller-steps.component';
import { SellerCommentComponent } from './components/become-seller/seller-comment/seller-comment.component';
import { SellerTextTransitionComponent } from './components/become-seller/seller-text-transition/seller-text-transition.component';
import { SellerQaComponent } from './components/become-seller/seller-qa/seller-qa.component';
import { SellerGetStartedComponent } from './components/become-seller/seller-get-started/seller-get-started.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordModule } from 'primeng/password';
import { MainComponent } from './pages/main/main.component';
import { CreateCompanyIntroductionComponent } from './pages/create-company/create-company-introduction/create-company-introduction.component';
import { CreateCompanyCompanyFieldComponent } from './pages/create-company/create-company-company-field/create-company-company-field.component';
import { CreateCompanyAllCitiesComponent } from './pages/create-company/create-company-all-cities/create-company-all-cities.component';
import { CreateCompanyTitleComponent } from './pages/create-company/create-company-title/create-company-title.component';
import { CreateCompanyDetailsComponent } from './pages/create-company/create-company-details/create-company-details.component';
import { CreateCompanyLogoComponent } from './pages/create-company/create-company-logo/create-company-logo.component';
import { CreateCompanyVerificationsComponent } from './pages/create-company/create-company-verifications/create-company-verifications.component';
import { CreateCompanyDoneComponent } from './pages/create-company/create-company-done/create-company-done.component';
import { CreateCompanyRegistrationComponent } from './pages/create-company/create-company-registration/create-company-registration.component';
import { CreateCompanyCountryComponent } from './pages/create-company/create-company-country/create-company-country.component';
import { CreateCompanyNavbarComponent } from './pages/create-company/common/create-company-navbar/create-company-navbar.component';
import { CreateCompanyFooterComponent } from './pages/create-company/common/create-company-footer/create-company-footer.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { AdditionalServiceComponent } from './components/product-detail/additional-service/additional-service.component';
import { LoginNavbarComponent } from './components/common/login-navbar/login-navbar.component';
import { AccountSettingsMainComponent } from './pages/account-settings/account-settings-main/account-settings-main.component';
import { AccountSettingsHomepageComponent } from './pages/account-settings/account-settings-homepage/account-settings-homepage.component';
import { AccountSettingsFavoritesComponent } from './pages/account-settings/account-settings-favorites/account-settings-favorites.component';
import { AccountSettingsMessagesComponent } from './pages/account-settings/account-settings-messages/account-settings-messages.component';
import { AccountSettingsPersonalInfoComponent } from './pages/account-settings/account-settings-personal-info/account-settings-personal-info.component';
import { AccountSettingsAppointmentsComponent } from './pages/account-settings/account-settings-appointments/account-settings-appointments.component';
import { AccountSettingsSecurityComponent } from './pages/account-settings/account-settings-security/account-settings-security.component';
import { AccountSettingsPreferencesComponent } from './pages/account-settings/account-settings-preferences/account-settings-preferences.component';
import { PersonalInfoBreadcrumbsComponent } from './components/account/account-personal-information/personal-info-breadcrumbs/personal-info-breadcrumbs.component';
import { PersonalInfoInputsComponent } from './components/account/account-personal-information/personal-info-inputs/personal-info-inputs.component';
import { PersonalInfoKnowledgesComponent } from './components/account/account-personal-information/personal-info-knowledges/personal-info-knowledges.component';
import { AppointmentsBreadcrumbsComponent } from './components/account/account-appointments/appointments-breadcrumbs/appointments-breadcrumbs.component';
import { AppointmentsTableComponent } from './components/account/account-appointments/appointments-table/appointments-table.component';
import { FavoritesBreadcrumbsComponent } from './components/account/account-favorites/favorites-breadcrumbs/favorites-breadcrumbs.component';
import { FavoritesListOfServicesComponent } from './components/account/account-favorites/favorites-list-of-services/favorites-list-of-services.component';
import { FavoritesMapComponent } from './components/account/account-favorites/favorites-map/favorites-map.component';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    HomePageComponent,
    ProductDetailComponent,
    ProductsPageComponent,
    FooterComponent,
    NavbarComponent,
    BannerComponent,
    FamousCitiesComponent,
    FeaturedServicesComponent,
    InformationForUsersComponent,
    RealStoriesComponent,
    SearchInputComponent,
    BreadcrumbsComponent,
    CheckboxComponent,
    ServiceBoxComponent,
    CalendarComponent,
    ResultsForComponent,
    ListOfServicesComponent,
    ServicesFilterComponent,
    CommentSummaryComponent,
    CommentsComponent,
    CompanyInformationComponent,
    ExplanationOfServiceComponent,
    MapComponent,
    NearHotelsComponent,
    RelatedProductsComponent,
    UpperLeftSideComponent,
    YouNeedToKnowComponent,
    ChipComponent,
    InputMaskComponent,
    MessageComponent,
    MyAccordionComponent,
    CommentComponent,
    CompanyPageComponent,
    CompanySummaryComponent,
    CompanyAboutComponent,
    CompanyServicesComponent,
    CompanyCommentsComponent,
    CompanyApprovedComponent,
    BecomeSellerComponent,
    SellerBannerComponent,
    SellerBenefitsComponent,
    SellerStepsComponent,
    SellerCommentComponent,
    SellerTextTransitionComponent,
    SellerQaComponent,
    SellerGetStartedComponent,
    SignupComponent,
    LoginComponent,
    MainComponent,
    CreateCompanyIntroductionComponent,
    CreateCompanyCompanyFieldComponent,
    CreateCompanyAllCitiesComponent,
    CreateCompanyTitleComponent,
    CreateCompanyDetailsComponent,
    CreateCompanyLogoComponent,
    CreateCompanyVerificationsComponent,
    CreateCompanyDoneComponent,
    CreateCompanyRegistrationComponent,
    CreateCompanyCountryComponent,
    CreateCompanyNavbarComponent,
    CreateCompanyFooterComponent,
    CompanyHappyCustomersComponent,
    AdditionalServiceComponent,
    LoginNavbarComponent,
    AccountSettingsMainComponent,
    AccountSettingsHomepageComponent,
    AccountSettingsFavoritesComponent,
    AccountSettingsMessagesComponent,
    AccountSettingsPersonalInfoComponent,
    AccountSettingsAppointmentsComponent,
    AccountSettingsSecurityComponent,
    AccountSettingsPreferencesComponent,
    PersonalInfoBreadcrumbsComponent,
    PersonalInfoInputsComponent,
    PersonalInfoKnowledgesComponent,
    AppointmentsBreadcrumbsComponent,
    AppointmentsTableComponent,
    FavoritesBreadcrumbsComponent,
    FavoritesListOfServicesComponent,
    FavoritesMapComponent,
    SectionTeammatesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    ButtonModule,
    RatingModule,
    BrowserAnimationsModule,
    ChipsModule,
    CardModule,
    AccordionModule,
    InputMaskModule,
    DividerModule,
    ConfirmDialogModule,
    BreadcrumbModule,
    CascadeSelectModule,
    DialogModule,
    KeyFilterModule,
    CalendarModule,
    CheckboxModule,
    MessagesModule,
    GalleriaModule,
    FileUploadModule,
    AvatarModule,
    AvatarGroupModule,
    CarouselModule,
    TimelineModule,
    TabViewModule,
    TableModule,
    BadgeModule,
    InputTextModule,
    ProgressBarModule,
    PasswordModule,
    HttpClientModule,
    CommonModule,
    SidebarModule,
    MultiSelectModule,
    MenubarModule,
    MenuModule,
    TagModule,
  ],
  exports: [NavbarComponent, MainComponent],
})
export class MyAppModule {}
