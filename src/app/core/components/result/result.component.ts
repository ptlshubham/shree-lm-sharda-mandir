import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;

  mainData: any = [];

}
