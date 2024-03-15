import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.services';
@Component({
  selector: 'app-forms-reports',
  templateUrl: './forms-reports.component.html',
  styleUrl: './forms-reports.component.css'
})
export class FormsReportsComponent implements OnInit {
  sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;
  link: any = '';
  othersData: any = [];
  syllabusData: any = [];
  reportData: any = [];
  formsData: any = [];

  openSyllabus: boolean = false;
  openReport: boolean = false;
  openForms: boolean = false;

  constructor(
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute

  ) {
    this.activatedRoute.params.subscribe(params => {
      this.link = params['id'];
      debugger
      this.getFormsDetails();
    });
  }
  ngOnInit(): void {
  }
  getFormsDetails() {
    this.homeService.getothersDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.othersData = res;

      if (this.link == 'syllabus') {
        this.openSyllabus = true;
        this.openReport = false;
        this.openForms = false;
        this.syllabusData = [];
        this.othersData.forEach((element: any) => {
          if (element.purpose == 'syllabus') {
            this.syllabusData.push(element);
          }
        });
      }
      else if (this.link == 'reports') {
        this.openReport = true;
        this.openSyllabus = false;
        this.openForms = false;
        this.reportData = [];
        this.othersData.forEach((element: any) => {
          if (element.purpose == 'report') {
            this.reportData.push(element);
          }
        });
      }
      else if (this.link == 'forms') {
        this.openForms = true;
        this.openReport = false;
        this.openSyllabus = false;
        this.formsData = [];
        this.othersData.forEach((element: any) => {
          if (element.purpose == 'forms') {
            this.formsData.push(element);
          }
        });
      }
    })
  }
}
