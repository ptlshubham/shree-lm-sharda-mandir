import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  // Set Topbar Option
    sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;
  
  num: number = 0;
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 1,
    decimalPlaces: 0,
  };

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }
}
