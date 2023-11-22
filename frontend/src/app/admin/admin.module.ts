import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentHeroComponent } from './components/today/component-hero/component-hero.component';
import { ComponentReservationComponent } from './components/today/component-reservation/component-reservation.component';
import { ComponentCalendarComponent } from './components/today/component-calendar/component-calendar.component';
import { ComponentByCountriesComponent } from './components/today/component-by-countries/component-by-countries.component';
import { PageTodayComponent } from './pages/page-today/page-today.component';
import { PageInboxComponent } from './pages/page-inbox/page-inbox.component';
import { PageCalendarComponent } from './pages/page-calendar/page-calendar.component';
import { PageServicesComponent } from './pages/page-services/page-services.component';
import { DropdownModule } from 'primeng/dropdown';
import { PageReservationComponent } from './pages/page-reservation/page-reservation.component';
import { PageAnalyzesComponent } from './pages/page-analyzes/page-analyzes.component';
import { DashboardBoxComponent } from './components/partials/dashboard-box/dashboard-box.component';
import { ComponentTipsComponent } from './components/today/component-tips/component-tips.component';
import { ChipModule } from 'primeng/chip';
import { CalendarModule } from 'primeng/calendar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { AdminFooterComponent } from './components/common/admin-footer/admin-footer.component';
import { AdminNavbarComponent } from './components/common/admin-navbar/admin-navbar.component';
import { ComponentAllMessagesComponent } from './components/inbox/component-all-messages/component-all-messages.component';
import { ComponentRecentChatComponent } from './components/inbox/component-recent-chat/component-recent-chat.component';
import { ComponentAboutPersonComponent } from './components/inbox/component-about-person/component-about-person.component';
import { ComponentChatComponent } from './components/inbox/component-chat/component-chat.component';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { ComponentTopSideComponent } from './components/services/component-top-side/component-top-side.component';
import { ComponentListOfServicesComponent } from './components/services/component-list-of-services/component-list-of-services.component';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { ComponentAllReservationsComponent } from './components/reservation/component-all-reservations/component-all-reservations.component';
import { ComponentReservationTopSideComponent } from './components/reservation/component-reservation-top-side/component-reservation-top-side.component';
import { ComponentCalendarTopComponent } from './components/calendar/component-calendar-top/component-calendar-top.component';
import { ComponentCalendarAllWeekComponent } from './components/calendar/component-calendar-all-week/component-calendar-all-week.component';
import { NotificationsComponent } from './components/partials/notifications/notifications.component';
import { AdminMainComponent } from './pages/admin-main/admin-main.component';
import { CreateServiceIntroductionComponent } from './pages/create-service/create-service-introduction/create-service-introduction.component';
import { CreateServiceLanguagesComponent } from './pages/create-service/create-service-languages/create-service-languages.component';
import { CreateServiceCountryComponent } from './pages/create-service/create-service-country/create-service-country.component';
import { CreateServiceDetailAdressComponent } from './pages/create-service/create-service-detail-adress/create-service-detail-adress.component';
import { CreateServiceLocationMapComponent } from './pages/create-service/create-service-location-map/create-service-location-map.component';
import { CreateServiceImagesComponent } from './pages/create-service/create-service-images/create-service-images.component';
import { CreateServiceTitleComponent } from './pages/create-service/create-service-title/create-service-title.component';
import { CreateServiceDescriptionComponent } from './pages/create-service/create-service-description/create-service-description.component';
import { CreateServicePricingComponent } from './pages/create-service/create-service-pricing/create-service-pricing.component';
import { CreateServiceTeammatesComponent } from './pages/create-service/create-service-teammates/create-service-teammates.component';
import { CreateServiceDoneComponent } from './pages/create-service/create-service-done/create-service-done.component';
import { CreateServiceRulesComponent } from './pages/create-service/create-service-rules/create-service-rules.component';
import { CreateServiceFooterComponent } from './pages/create-service/common/create-service-footer/create-service-footer.component';
import { CreateServiceNavbarComponent } from './pages/create-service/common/create-service-navbar/create-service-navbar.component';
import { CreateServiceRegistrationComponent } from './pages/create-service/create-service-registration/create-service-registration.component';
import { SidebarModule } from 'primeng/sidebar';
import { ProgressBarModule } from 'primeng/progressbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileUploadModule } from 'primeng/fileupload';
import { ChipsModule } from 'primeng/chips';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    ComponentHeroComponent,
    ComponentReservationComponent,
    ComponentCalendarComponent,
    ComponentByCountriesComponent,
    PageTodayComponent,
    PageInboxComponent,
    PageCalendarComponent,
    PageServicesComponent,
    PageReservationComponent,
    PageAnalyzesComponent,
    DashboardBoxComponent,
    ComponentTipsComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    ComponentAllMessagesComponent,
    ComponentRecentChatComponent,
    ComponentAboutPersonComponent,
    ComponentChatComponent,
    ComponentTopSideComponent,
    ComponentListOfServicesComponent,
    ComponentReservationTopSideComponent,
    ComponentAllReservationsComponent,
    ComponentCalendarTopComponent,
    ComponentCalendarAllWeekComponent,
    NotificationsComponent,
    AdminMainComponent,
    CreateServiceIntroductionComponent,
    CreateServiceLanguagesComponent,
    CreateServiceCountryComponent,
    CreateServiceDetailAdressComponent,
    CreateServiceLocationMapComponent,
    CreateServiceImagesComponent,
    CreateServiceTitleComponent,
    CreateServiceDescriptionComponent,
    CreateServicePricingComponent,
    CreateServiceTeammatesComponent,
    CreateServiceDoneComponent,
    CreateServiceRulesComponent,
    CreateServiceFooterComponent,
    CreateServiceNavbarComponent,
    CreateServiceRegistrationComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    AvatarModule,
    CalendarModule,
    DialogModule,
    BadgeModule,
    EditorModule,
    InputTextModule,
    TableModule,
    ChipModule,
    TagModule,
    TabViewModule,
    CardModule,
    RatingModule,
    SidebarModule,
    ProgressBarModule,
    MultiSelectModule,
    FileUploadModule,
    ChipsModule,
    InputNumberModule,
  ],
  exports: [AdminNavbarComponent, AdminFooterComponent],
})
export class AdminModule {}
