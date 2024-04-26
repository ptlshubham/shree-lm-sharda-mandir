import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HomeService } from './core/services/home.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shree Sharda Kelavani Mandal';
  shardaUrl = 'www.shreeshardakelavanimandal.ac.in';

  // staticURL: any = 'www.sanppgi.ac.in';

  constructor(
    private router: Router,
    private homeService: HomeService
  ) {
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
  ngOnInit(): void {
    if (localStorage.getItem('InstituteName') == null || localStorage.getItem('InstituteName') == undefined) {
      debugger
      localStorage.setItem('Type', 'Main');
      this.getInstituteDetails(this.shardaUrl);
    }
  }
  getInstituteDetails(id: any) {
    this.homeService.getInstituteDetailsById(id).subscribe((res: any) => {
      localStorage.setItem('InstituteId', res[0].id);
      localStorage.setItem('InstituteName', res[0].name);
      localStorage.setItem('InstituteURL', res[0].url);
      location.reload();
    })
  }
}
