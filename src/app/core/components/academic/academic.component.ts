import { Component } from '@angular/core';
interface work {
  image: string,
  name: string,
  designation: string,
};

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrl: './academic.component.css'
})
export class AcademicComponent {
    sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;
  worksData: work[] = [
    {
      image: "assets/images/work/1.jpg",
      name: "Iphone mockup",
      designation: "Branding"
    },
    {
      image: "assets/images/work/2.jpg",
      name: "Mockup Collection",
      designation: "Mockup"
    },
    {
      image: "assets/images/work/3.jpg",
      name: "Abstract images",
      designation: "Abstract"
    },
    {
      image: "assets/images/work/4.jpg",
      name: "Yellow bg with Books",
      designation: "Books"
    },
  ];
  constructor() { }

  ngOnInit(): void {

  }
}
