import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HomeService } from './core/services/home.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landrick-angular';
  staticURL: any = 'www.shreeshardakedavanimandal.ac.in';
  // staticURL: any = 'www.sanppgi.ac.in';

  constructor(
    private router: Router,
    private homeService: HomeService
  ) {
    this.getInstituteDetails();

    /**
     * Unicons icon refreshed on route change.
     */
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        // window['Unicons']();
      }

      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
  getInstituteDetails() {
    this.homeService.getInstituteDetailsById(this.staticURL).subscribe((res: any) => {
      localStorage.setItem('InstituteId', res[0].id);
      localStorage.setItem('InstituteName', res[0].name);
      localStorage.setItem('InstituteURL', res[0].url);
    })
  }
}
