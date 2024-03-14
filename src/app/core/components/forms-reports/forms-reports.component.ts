import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.services';
interface feature {
  icon: string;
  title: string;
};

@Component({
  selector: 'app-forms-reports',
  templateUrl: './forms-reports.component.html',
  styleUrl: './forms-reports.component.css'
})
export class FormsReportsComponent {
  sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;
  featuresdata: feature[] = [
    {
      icon: "monitor",
      title: "Fully Responsive"
    },
    {
      icon: "heart",
      title: "Browser Compatibility"
    },
    {
      icon: "eye",
      title: "Retina Ready"
    },
    {
      icon: "bold",
      title: "Based On Bootstrap 5"
    },
    {
      icon: "feather",
      title: "Feather Icons"
    },
    {
      icon: "code",
      title: "Built With SASS"
    },
    {
      icon: "user-check",
      title: "W3c Valid Code"
    },
    {
      icon: "git-merge",
      title: "Flaticon Icons"
    },
    {
      icon: "settings",
      title: "Easy to customize"
    }
  ];
  link: any = '';

  constructor(
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute

  ) {
    this.activatedRoute.params.subscribe(params => {
      this.link = params['id'];
      // this.getFormsDetails();
    });
  }
}
