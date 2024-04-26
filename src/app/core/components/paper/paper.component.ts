import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.services';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrl: './paper.component.css'
})
export class PaperComponent implements OnInit {
  sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;

  mainData: any = [];
  questionPapers: any = [];
  papersList: any = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getPapersDetails()
  }

  getPapersDetails() {
    this.homeService.getQuestionData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.questionPapers = res;
    })
  }

}
