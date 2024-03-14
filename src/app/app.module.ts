import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountUpModule } from 'ngx-countup';
import { NgxMasonryModule } from 'ngx-masonry';

import { SimplebarAngularModule } from 'simplebar-angular';


import { SharedModule } from "./shared/shared.module";

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EmailAlertComponent } from './email/email-alert/email-alert.component';
import { EmailConfirmationComponent } from './email/email-confirmation/email-confirmation.component';
import { EmailInvoiceComponent } from './email/email-invoice/email-invoice.component';
import { EmailPasswordResetComponent } from './email/email-password-reset/email-password-reset.component';
import { IndexComponent } from './core/components/index/index.component';
import { FeatherModule } from 'angular-feather';
// Apex chart
import { NgApexchartsModule } from 'ng-apexcharts';
import { allIcons } from 'angular-feather/icons';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SwitcherComponent } from './shared/switcher/switcher.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { AboutUsComponent } from './core/components/about-us/about-us.component';
import { ManagementComponent } from './core/components/management/management.component';
import { AcademicComponent } from './core/components/academic/academic.component';
import { ContactUsComponent } from './core/components/contact-us/contact-us.component';
import { BlogsComponent } from './core/components/blogs/blogs.component';
import { PrivacyPolicyComponent } from './core/components/privacy-policy/privacy-policy.component';
import { NewsComponent } from './core/components/news/news.component';
import { FacilitiesComponent } from './core/components/facilities/facilities.component';
import { GalleryComponent } from './core/components/gallery/gallery.component';
import { AlumniComponent } from './core/components/alumni/alumni.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogDetailsComponent } from './core/components/blog-details/blog-details.component';
import { TermsOfConditionComponent } from './core/components/terms-of-condition/terms-of-condition.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmailAlertComponent,
    EmailConfirmationComponent,
    EmailInvoiceComponent,
    EmailPasswordResetComponent,
    MasterPageComponent,
    IndexComponent,
    AboutUsComponent,
    SwitcherComponent,
    ManagementComponent,
    AcademicComponent,
    ContactUsComponent,
    BlogsComponent,
    PrivacyPolicyComponent,
    NewsComponent,
    FacilitiesComponent,
    GalleryComponent,
    AlumniComponent,
    BlogDetailsComponent,
    TermsOfConditionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    CarouselModule,
    FeatherModule.pick(allIcons),
    ScrollToModule.forRoot(),
    RouterModule.forRoot([], {}),
    YouTubePlayerModule,
    NgbDropdownModule,
    CKEditorModule,
    NgbModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    NgApexchartsModule,
    NgxTypedJsModule,
    FlatpickrModule.forRoot(),
    CountUpModule,
    NgxMasonryModule,
    LightboxModule,
    SharedModule,
    SimplebarAngularModule
  ],
  exports: [
    FeatherModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
