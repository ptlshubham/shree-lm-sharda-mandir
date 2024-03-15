import { Component } from '@angular/core';
import { HomeService } from '../../services/home.services';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrl: './scholarship.component.css'
})
export class ScholarshipComponent {
  sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;
  moreData: any = [];
  scholarship: any = [];
  pa: number = 1;
  currentCollapsedIndex: number = 0;

  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getScholarshipData();
  }
  getScholarshipData() {
    this.homeService.getScholarshipData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.moreData = res;

      this.scholarship = [];
      this.moreData.forEach((element: any) => {
        if (element.purpose == 'scholarship') {
          this.scholarship.push(element);
        }
      });
      for (let i = 0; i < this.scholarship.length; i++) {
        this.scholarship[i].cols = false;
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
    return Math.ceil(this.scholarship.length / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage - 1, this.scholarship.length - 1);
  }

  get paginatedMainData(): any[] {
    return this.scholarship.slice(this.startIndex, this.endIndex + 1);
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
