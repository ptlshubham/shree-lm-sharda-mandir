import { Component } from '@angular/core';
interface work {
  image: string,
  name: string,
  category: string,
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
  gujaratiMediumData: work[] = [
    {
      image: "assets/images/academic/pre.jpg",
      name: "Shree Manhar Shishu Vihar",
      category: "Pre-School"
    },
    {
      image: "assets/images/academic/primary.jpg",
      name: "Shree Ambalal Chotalal Sharda Mandir",
      category: "Primary School"
    },
    {
      image: "assets/images/academic/secondary.jpg",
      name: "Shree Laxmichand Mithalal Sharda Mandir",
      category: "Secondary & Higher Secondary School"
    },
    {
      image: "assets/images/academic/science.jpg",
      name: "Mrs. Shantaben Dheerajlal Bhogilal Shah",
      category: "Higher Secondary (Science Stream)"
    },
  ];
  englishMediumData:work[]=[
    {
      image: "assets/images/academic/pre.jpg",
      name: "Shree Sharda English Medium School",
      category: "Primary School"
    }
  ]
  constructor() { }

  ngOnInit(): void {

  }
}
