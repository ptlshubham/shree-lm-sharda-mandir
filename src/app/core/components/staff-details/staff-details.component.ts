import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.services';
import { StaffService } from '../../services/staff.services';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrl: './staff-details.component.css'
})
export class StaffDetailsComponent implements OnInit {
  sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;
  staffDataTable: any = [];
  departmentData: any = [];
  filterData: any = [];

  
  currentPage: number = 1;
  itemsPerPage: number = 12;

  constructor(
    private staffService: StaffService,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getStaffDetails();
    this.getDepartmentDetails();
  }
  getStaffDetails() {
    this.staffService.getAllStaffDetailsData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.staffDataTable = res;
      this.filterData = res;
    })
  }
  getDepartmentDetails() {
    this.departmentData = [];
    this.homeService.getDepartmentDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.departmentData = res;
    })
  }
  onChange(value: string) {
    this.filterData = [];
    if (value === 'all') {
      this.filterData = this.staffDataTable;
    } else {
      const selectedOption = this.departmentData.find(item => item.department === value);
      if (selectedOption) {
        this.staffDataTable.forEach((element: any) => {
          if (selectedOption.id == element.department) {
            this.filterData.push(element);
          }
        });
      }
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filterData.length / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage - 1, this.filterData.length - 1);
  }

  get paginatedMainData(): any[] {
    return this.filterData.slice(this.startIndex, this.endIndex + 1);
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
