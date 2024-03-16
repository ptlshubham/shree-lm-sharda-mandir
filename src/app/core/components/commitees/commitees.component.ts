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

  public commiData: any = [];
  multiImage: any = [];
  mainData: any = [];
  currentCollapsedIndex: number = 0;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getCommeteeDataById();
  }
  getCommeteeDataById() {
    this.homeService.getCommeteeDetails(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.commiData = res;
      debugger
      for (let i = 0; i < this.commiData.length; i++) {
        debugger
        if (this.commiData[i].id) {
          this.homeService.getCommiteeMultiImageById(this.commiData[i].id).subscribe((res: any) => {
            this.multiImage = res;
            debugger
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
                cols: false,
                index: i + 1
              });
            this.multiImage.push(
              {
                image: this.commiData[i].commImage
              }
            )
          });
        }
      }

    })
  }
  // getCommeteeDataById() {
  //   this.homeService.getCommeteeDetails(localStorage.getItem('InstituteId')).subscribe(async (res: any) => {
  //     this.commiData = res;
  //     debugger
  //     for (let i = 0; i < this.commiData.length; i++) {
  //       debugger
  //       if (this.commiData[i].id) {
  //         await this.homeService.getCommiteeMultiImageById(this.commiData[i].id).toPromise().then((res: any) => {
  //           this.multiImage = res;
  //           this.mainData.push(
  //             {
  //               id: this.commiData[i].id,
  //               institute_id: this.commiData[i].institute_id,
  //               commTitle: this.commiData[i].commTitle,
  //               commDetails: this.commiData[i].commDetails,
  //               commImage: this.commiData[i].commImage,
  //               createddate: this.commiData[i].createddate,
  //               updateddate: this.commiData[i].updateddate,
  //               multiImage: this.multiImage,
  //               cols : false,
  //               index: i + 1
  //             });
  //           this.multiImage.push(
  //             {
  //               image: this.commiData[i].commImage
  //             }
  //           )
  //         });
  //       }
  //     }

  //   })
  // }
  toggleCollapse(index: number) {
    if (this.currentCollapsedIndex === index) {
      this.currentCollapsedIndex = -1; // Collapse if already expanded
    } else {
      this.currentCollapsedIndex = index; // Expand if collapsed or another one is clicked
    }
  }

}
