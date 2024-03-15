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
  selectedDepartment: any = '';

  constructor(
    private staffService: StaffService,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getStaffDetails();
    this.getDepartmentDetails();
    this.selectedDepartment = 'Department';
  }
  getStaffDetails() {
    this.filterData = [];
    this.staffService.getAllStaffDetailsData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.staffDataTable = res;
      if (this.selectedDepartment == 'all') {
        this.filterData = res;
        debugger
      }

    })
  }
  getDepartmentDetails() {
    this.departmentData = [];
    this.homeService.getDepartmentDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.departmentData = res;
    })
  }
  selectAll(val: any) {
    this.selectedDepartment = val;
    this.getStaffDetails();
  }
}
