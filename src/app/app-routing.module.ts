import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './core/components/index/index.component';
import { EmailAlertComponent } from './email/email-alert/email-alert.component';
import { EmailConfirmationComponent } from './email/email-confirmation/email-confirmation.component';
import { EmailInvoiceComponent } from './email/email-invoice/email-invoice.component';
import { EmailPasswordResetComponent } from './email/email-password-reset/email-password-reset.component';
import { SwitcherComponent } from './shared/switcher/switcher.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { AboutUsComponent } from './core/components/about-us/about-us.component';
import { ManagementComponent } from './core/components/management/management.component';
import { AcademicComponent } from './core/components/academic/academic.component';
import { ContactUsComponent } from './core/components/contact-us/contact-us.component';
import { BlogsComponent } from './core/components/blogs/blogs.component';
import { PrivacyPolicyComponent } from './core/components/privacy-policy/privacy-policy.component';
import { NewsComponent } from './core/components/news/news.component';
import { FacilitiesComponent } from './core/components/facilities/facilities.component';
import { AlumniComponent } from './core/components/alumni/alumni.component';
import { GalleryComponent } from './core/components/gallery/gallery.component';
import { BlogDetailsComponent } from './core/components/blog-details/blog-details.component';
import { TermsOfConditionComponent } from './core/components/terms-of-condition/terms-of-condition.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'index', component: IndexComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'management', component: ManagementComponent },
      { path: 'academic', component: AcademicComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'blog', component: BlogsComponent },
      { path: 'blog-details/:id', component: BlogDetailsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'facilities', component: FacilitiesComponent },
      { path: 'alumni', component: AlumniComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'terms', component: TermsOfConditionComponent },

      
    ]
  },
  { path: 'email-alert', component: EmailAlertComponent },
  { path: '#', component: SwitcherComponent },
  { path: 'email-confirmation', component: EmailConfirmationComponent },
  { path: 'email-invoice', component: EmailInvoiceComponent },
  { path: 'email-password-reset', component: EmailPasswordResetComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top",
  scrollOffset: [0, 0],
  // Enable scrolling to anchors
  anchorScrolling: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
