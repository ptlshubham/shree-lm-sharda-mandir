import { Component, OnInit, Input } from '@angular/core';

interface client {
  image: string;
};

@Component({
  selector: 'app-clients-logo',
  templateUrl: './clients-logo.component.html',
  styleUrls: ['./clients-logo.component.css']
})
export class ClientsLogoComponent implements OnInit {

  @Input() brand_class: string | undefined;
  /**
   * Clients Logo
   */
   clients_logo: client[] = [
    {
      image: "assets/images/schools-logo/1.png"
    },
    {
      image: "assets/images/schools-logo/ac.png"
    },
    {
      image: "assets/images/schools-logo/lm.png"
    },
    {
      image: "assets/images/schools-logo/english.png"
    },
    // {
    //   image: "assets/images/schools-logo/main.png"
    // }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
