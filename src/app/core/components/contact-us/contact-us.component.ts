import { Component } from '@angular/core';
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
  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }
  mapView(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true })
  }
}
