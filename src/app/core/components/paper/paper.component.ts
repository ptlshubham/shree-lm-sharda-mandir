import { Component } from '@angular/core';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrl: './paper.component.css'
})
export class PaperComponent {
  sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;

  mainData: any = [];

}
