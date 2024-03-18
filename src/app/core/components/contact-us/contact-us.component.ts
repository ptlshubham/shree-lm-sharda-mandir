import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    )
     { }

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
    // else {
    //   this.contactService.addContact(this.contactModel).then(() => {
    //     this.toastr.success('Thank you for reaching us.', 'Success!');
    //     this.validationForm.markAsUntouched();
    //     this.contactModel = {};
    //   })
    //     .catch((error) => this.toastr.error('Please try again.', 'Error!'));

    // }
  }

  mapView(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true })
  }
}
