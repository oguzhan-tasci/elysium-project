import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { BannerComponent } from './components/home-page/banner/banner.component';
import { FeaturedServicesComponent } from './components/home-page/featured-services/featured-services.component';
import { InformationForUsersComponent } from './components/home-page/information-for-users/information-for-users.component';
import { FamousCitiesComponent } from './components/home-page/famous-cities/famous-cities.component';
import { RealStoriesComponent } from './components/home-page/real-stories/real-stories.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { PaginationComponent } from './components/common/pagination/pagination.component';
import { ResultsForComponent } from './components/products/results-for/results-for.component';
import { ServicesComponent } from './components/products/list-of-services/services.component';
import { ServicesFilterComponent } from './components/products/services-filter/services-filter.component';
import { CalendarComponent } from './components/product-detail/calendar/calendar.component';
import { CommentSummaryComponent } from './components/product-detail/comment-summary/comment-summary.component';
import { CommentsComponent } from './components/product-detail/comments/comments.component';
import { CompanyInformationComponent } from './components/product-detail/company-information/company-information.component';
import { ExplanationOfServiceComponent } from './components/product-detail/explanation-of-service/explanation-of-service.component';
import { MapComponent } from './components/product-detail/map/map.component';
import { NearHotelsComponent } from './components/product-detail/near-hotels/near-hotels.component';
import { ProcessComponent } from './components/product-detail/process/process.component';
import { RelatedProductsComponent } from './components/product-detail/related-products/related-products.component';
import { UpperLeftSideComponent } from './components/product-detail/upper-left-side/upper-left-side.component';
import { YouNeedToKnowComponent } from './components/product-detail/you-need-to-know/you-need-to-know.component';
import { SearchInputComponent } from './components/home-page/search-input/search-input.component';
import { ButtonModule } from 'primeng/button';
import { ServiceBoxComponent } from './components/partials/service-box/service-box.component';
import { RatingModule } from 'primeng/rating';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbsComponent } from './components/partials/breadcrumbs/breadcrumbs.component';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { CheckboxComponent } from './components/partials/checkbox/checkbox.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { Avatar, AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { TimelineModule } from 'primeng/timeline';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductDetailComponent,
    ProductsPageComponent,
    BannerComponent,
    FeaturedServicesComponent,
    InformationForUsersComponent,
    FamousCitiesComponent,
    RealStoriesComponent,
    FooterComponent,
    NavbarComponent,
    PaginationComponent,
    ResultsForComponent,
    ServicesComponent,
    ServicesFilterComponent,
    CalendarComponent,
    CommentSummaryComponent,
    CommentsComponent,
    CompanyInformationComponent,
    ExplanationOfServiceComponent,
    MapComponent,
    NearHotelsComponent,
    ProcessComponent,
    RelatedProductsComponent,
    UpperLeftSideComponent,
    YouNeedToKnowComponent,
    SearchInputComponent,
    ServiceBoxComponent,
    BreadcrumbsComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    RatingModule,
    BrowserAnimationsModule,
    CardModule,
    DividerModule,
    ConfirmDialogModule,
    BreadcrumbModule,
    CascadeSelectModule,
    DialogModule,
    KeyFilterModule,
    CalendarModule,
    CheckboxModule,
    GalleriaModule,
    FileUploadModule,
    AvatarModule,
    AvatarGroupModule,
    CarouselModule,
    TimelineModule,
    ToastModule,
    TabViewModule,
    TableModule,
    ProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
