import { Component } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent {
  // Set Topbar Option
    sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;
  memberData = [
    {
      profile: "assets/images/client/01.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Ronny Jofra",
      designation: "C.E.O"
    },
    {
      profile: "assets/images/client/04.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Micheal Carlo",
      designation: "Director"
    },
    {
      profile: "assets/images/client/02.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Aliana Rosy",
      designation: "Manager"
    },
    {
      profile: "assets/images/client/03.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Sofia Razaq",
      designation: "Developer"
    },
    {
      profile: "assets/images/client/04.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Calvin Carlo",
      designation: "C.E.O"
    },
    {
      profile: "assets/images/client/05.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Juhi Chawla",
      designation: "Director"
    },
    {
      profile: "assets/images/client/07.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Arlo Walker",
      designation: "Manager"
    },
    {
      profile: "assets/images/client/08.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Randeep Huda",
      designation: "Developer"
    }
  ];
  constructor() { }

  ngOnInit(): void {
    
  }
}
