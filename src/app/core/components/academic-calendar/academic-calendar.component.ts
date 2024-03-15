import { Component } from '@angular/core';
import { HomeService } from '../../services/home.services';

@Component({
  selector: 'app-academic-calendar',
  templateUrl: './academic-calendar.component.html',
  styleUrl: './academic-calendar.component.css'
})
export class AcademicCalendarComponent {
  sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;
  moreData: any = [];
  academic: any = [];
  currentCollapsedIndex: number = 0;


  currentPage: number = 1;
  itemsPerPage: number = 10;


  constructor(
    private homeService: HomeService
  ) { }
  ngOnInit(): void {
    this.getacademicData();
  }
  getacademicData() {
    this.homeService.getScholarshipData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.moreData = res;

      this.academic = [];
      this.moreData.forEach((element: any) => {
        if (element.purpose == 'calendar') {
          this.academic.push(element);
        }
      });
      for (let i = 0; i < this.academic.length; i++) {
        this.academic[i].cols = false;
      }
      debugger
    })
  }
  toggleCollapse(index: number) {
    if (this.currentCollapsedIndex === index) {
      this.currentCollapsedIndex = -1; // Collapse if already expanded
    } else {
      this.currentCollapsedIndex = index; // Expand if collapsed or another one is clicked
    }
  }

  get totalPages(): number {
    return Math.ceil(this.academic.length / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage - 1, this.academic.length - 1);
  }

  get paginatedMainData(): any[] {
    return this.academic.slice(this.startIndex, this.endIndex + 1);
  }

  get pages(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  changePage(page: number) {
    this.currentPage = page;
  }

}
