import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
 // Set Topbar Option
  sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;
 constructor() { }

 ngOnInit(): void {
 }

}
