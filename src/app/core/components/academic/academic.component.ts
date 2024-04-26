import { Component } from '@angular/core';
import { HomeService } from '../../services/home.services';
interface work {
  image: string,
  name: string,
  category: string,
  type: string
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
      category: "Pre-School",
      type: 'Pre-School'
    },
    {
      image: "assets/images/academic/primary.jpg",
      name: "Shree Ambalal Chotalal Sharda Mandir",
      category: "Primary School",
      type: 'Primary'
    },
    {
      image: "assets/images/academic/secondary.jpg",
      name: "Shree Laxmichand Mithalal Sharda Mandir",
      category: "Secondary & Higher Secondary School",
      type: 'Secondary'
    },
    {
      image: "assets/images/academic/science.jpg",
      name: "Mrs. Shantaben Dheerajlal Bhogilal Shah",
      category: "Higher Secondary (Science Stream)",
      type: 'Higher-Secondary'
    },
  ];
  englishMediumData: work[] = [
    {
      image: "assets/images/academic/pre.jpg",
      name: "Shree Sharda English Medium Primary School",
      category: "Primary School",
      type: 'English'
    }
  ]

  acUrl = 'www.ac.shreeshardakelavanimandal.ac.in';
  lmUrl = 'www.lm.shreeshardakelavanimandal.ac.in';
  preUrl = 'www.pre.shreeshardakelavanimandal.ac.in';
  higherUrl = 'www.higher.shreeshardakelavanimandal.ac.in';
  englishUrl = 'www.english.shreeshardakelavanimandal.ac.in';
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {

  }
  openInstituteById(id: any) {
    localStorage.clear();
    if (id == 'Pre-School') {
      this.getInstituteDetails(this.preUrl);
      localStorage.setItem('Type', 'Pre-School');
    }
    else if (id == 'Primary') {
      this.getInstituteDetails(this.acUrl);
      localStorage.setItem('Type', 'AC');
    }
    else if (id == 'Secondary') {
      debugger
      this.getInstituteDetails(this.lmUrl);
      localStorage.setItem('Type', 'LM');
    }
    else if (id == 'Higher-Secondary') {
      debugger
      this.getInstituteDetails(this.higherUrl);
      localStorage.setItem('Type', 'Higher');
    }
    else if (id == 'English') {
      debugger
      this.getInstituteDetails(this.englishUrl);
      localStorage.setItem('Type', 'English');
    }
  }
  getInstituteDetails(id: any) {
    this.homeService.getInstituteDetailsById(id).subscribe((res: any) => {
      localStorage.setItem('InstituteId', res[0].id);
      localStorage.setItem('InstituteName', res[0].name);
      localStorage.setItem('InstituteURL', res[0].url);
      location.reload();
    })
  }
}
