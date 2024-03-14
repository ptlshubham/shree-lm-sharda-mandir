import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from '../../services/home.services';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

/**
 * Index Component
 */
export class IndexComponent implements OnInit {

  // Set Topbar Option
    sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;

  /**
   * Partners slider
   */
  customOptions: OwlOptions = {
    // loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    // autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  };
  num: number = 0;

  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 2,
  };

  public newsData: any = [];
  imagesData: any = [];
  sliderImages: any = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getNewsDetails();
    this.getImagesDataById();
  }
  getNewsDetails() {
    this.homeService.getNewsOnlyForCESURL(localStorage.getItem('InstituteId')).subscribe((res: any = []) => {
      this.newsData = res.slice(0,3);
    })
  }
  getImagesDataById() {
    this.sliderImages = [];
    this.homeService.getBannersImagesById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.imagesData = res;
      this.imagesData.forEach((element: any) => {
        if (element.purpose == 'slider') {
          this.sliderImages.push(element);
        }
      });
    })
  }

}
