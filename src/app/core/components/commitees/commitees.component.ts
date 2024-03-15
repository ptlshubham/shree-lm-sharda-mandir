import { Component } from '@angular/core';
import { HomeService } from '../../services/home.services';

@Component({
  selector: 'app-commitees',
  templateUrl: './commitees.component.html',
  styleUrl: './commitees.component.css'
})
export class CommiteesComponent {
  sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;
 
  commiData: any = [];
  multiImage: any = [];
  mainData: any = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getCommeteeDataById();
  }
  getCommeteeDataById() {
    this.homeService.getCommeteeDetails(localStorage.getItem('InstituteId')).subscribe(async (res: any) => {
      this.commiData = res;
      debugger
      for(let i=0;i<this.commiData.length;i++){
        if (this.commiData[i].id) {
          await this.homeService.getCommiteeMultiImageById(this.commiData[i].id).toPromise().then((res: any) => {
              this.multiImage = res;
              this.mainData.push(
                {
                  id: this.commiData[i].id,
                  institute_id: this.commiData[i].institute_id,
                  commTitle: this.commiData[i].commTitle,
                  commDetails: this.commiData[i].commDetails,
                  commImage: this.commiData[i].commImage,
                  createddate: this.commiData[i].createddate,
                  updateddate: this.commiData[i].updateddate,
                  multiImage: this.multiImage,
                  index:i+1
                });
              this.multiImage.push(
                {
                  image: this.commiData[i].commImage
                }
              )
          });
        }
      }
      for (let i = 0; i < this.commiData.length; i++) {
        this.commiData[i].cols = false;
      }
       
    })
  }
}
