import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeService } from '../../services/home.services';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
  encapsulation: ViewEncapsulation.None // Disable encapsulation

})
export class StudentListComponent implements OnInit {
  sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;
  studentList: any = [];

  currentCollapsedIndex: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  constructor(
    private homeService: HomeService,
  ) {

  }
  ngOnInit(): void {
    this.getStudentDetails();
  }
  getStudentDetails() {
    this.homeService.getStudentList(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.studentList = res;
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
    return Math.ceil(this.studentList.length / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage - 1, this.studentList.length - 1);
  }

  get paginatedMainData(): any[] {
    return this.studentList.slice(this.startIndex, this.endIndex + 1);
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
