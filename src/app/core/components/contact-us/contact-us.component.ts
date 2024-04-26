import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from '../../services/home.services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;
  submitted = false;

  validationForm!: FormGroup;
  contactModel: any = {};



  constructor(
    private modalService: NgbModal,
    public formBuilder: UntypedFormBuilder,
    private homeService: HomeService,
    private toastrMessage: ToastrService,

  ) { }

  ngOnInit(): void {
    this.validationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required,]],
      subject: ['', [Validators.required,]],
      comments: ['', [Validators.required,]],

    })
  }

  get f() { return this.validationForm.controls; }

  saveContactData() {
    this.submitted = true;
    if (this.validationForm.invalid) {
      return;
    }
    else {
      this.contactModel.institute_id = localStorage.getItem('InstituteId');
      this.homeService.saveContactUsDetails(this.contactModel).subscribe((res: any) => {
        if (res == 'success') {
          this.submitted = false;
          this.validationForm.markAsUntouched();
          this.contactModel = {};
          this.toastrMessage.success('Thank you for valuable feedback.', 'Success', { timeOut: 3000, });
        }
      })

    }
  }

  mapView(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true })
  }
}
