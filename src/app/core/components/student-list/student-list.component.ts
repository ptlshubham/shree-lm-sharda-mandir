import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;



  departmentData: any = [];
  filterData: any = [];

}
