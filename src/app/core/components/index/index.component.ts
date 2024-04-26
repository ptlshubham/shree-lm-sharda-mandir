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
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
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
        items: 4
      },
      940: {
        items: 4
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

  acUrl = 'www.ac.shreeshardakelavanimandal.ac.in';
  lmUrl = 'www.lm.shreeshardakelavanimandal.ac.in';
  preUrl = 'www.pre.shreeshardakelavanimandal.ac.in';
  higherUrl = 'www.higher.shreeshardakelavanimandal.ac.in';
  englishUrl = 'www.english.shreeshardakedavanimandal.ac.in';

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getNewsDetails();
    this.getImagesDataById();
  }
  getNewsDetails() {
    this.homeService.getNewsOnlyForCESURL(localStorage.getItem('InstituteId')).subscribe((res: any = []) => {
      this.newsData = res.slice(0, 3);
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
      debugger
      localStorage.setItem('InstituteId', res[0].id);
      localStorage.setItem('InstituteName', res[0].name);
      localStorage.setItem('InstituteURL', res[0].url);
      location.reload();
    })
  }

}
