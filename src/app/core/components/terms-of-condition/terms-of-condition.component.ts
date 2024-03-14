import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-of-condition',
  templateUrl: './terms-of-condition.component.html',
  styleUrl: './terms-of-condition.component.css'
})
export class TermsOfConditionComponent {
 // Set Topbar Option
  sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;
 constructor() { }

 ngOnInit(): void {
 }
}
