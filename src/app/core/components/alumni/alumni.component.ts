import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.services';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrl: './alumni.component.css'
})
export class AlumniComponent {
  sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;
  years: number[] = [];
  validationForm!: FormGroup;
  isUpdate: boolean = false;
  resigtrationmodel: any = [];
  instituteList: any = [];
  alumniModel: any = {};
  submitted = false;

  constructor(
    public formBuilder: UntypedFormBuilder,
    private homeService: HomeService,

  ) {
    this.getAllInstituteDetails();
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1963; year--) {
      this.years.push(year);
    }
  }

  ngOnInit(): void {
    this.validationForm = this.formBuilder.group({
      institute: ['', [Validators.required]],
      alumni: ['', [Validators.required]],
      course: ['', [Validators.required]],
      year: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      call: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    });

  }

  get f() { return this.validationForm.controls; }

  getAllInstituteDetails() {
    this.homeService.getAllInstituteData().subscribe((res: any) => {
      this.instituteList = res;
    })
  }
  saveAlumniData() {
    this.submitted = true;
    if (this.validationForm.invalid) {
      return;
    }
    this.homeService.saveAlumniDetail(this.alumniModel).subscribe((res: any) => {
      if (res == 'success') {
        // this.toastrMessage.success('Alumni data added Successfully.', 'Success', { timeOut: 3000, });
        this.submitted = false;
        this.alumniModel = {};
        this.validationForm.markAsUntouched();
      }

    })
  }
}
