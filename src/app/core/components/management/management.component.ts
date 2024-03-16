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
      name: "Shree Bharatkumar Rajendraprasad Dave",
      designation: "President"
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Shree Vinubhai Chimanlal Patel",
      designation: "Vice President"
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Shree Jayeshbhai Chimanlal Patel",
      designation: "Trustee"
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Shree Samirbhai Sureshchandra Shah",
      designation: "Trustee"
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Shree Hashmukhbhai Mafatlal Shah",
      designation: "Trustee"
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Shree Birendrabhai Balabhadrabhai Shah",
      designation: "Trustee"
    }
  ];
  constructor() { }

  ngOnInit(): void {
    
  }
}
