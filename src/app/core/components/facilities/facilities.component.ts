import { Component } from '@angular/core';
import { HomeService } from '../../services/home.services';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.css'
})
export class FacilitiesComponent {
    sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;

  infraData: any = [];
  multiImage: any = [];
  mainData: any = [];
  currentCollapsedIndex: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 8;
  constructor(
    private homeService: HomeService
  ) {
  }

  ngOnInit(): void {
    this.getInfraDataById();
  }
  getInfraMultiImages(id: any) {
    this.homeService.getInfraMultiImageById(id).subscribe((res: any) => {
      this.multiImage = res;
    })
  }
  getInfraDataById() {
    this.homeService.getInfraDetails(localStorage.getItem('InstituteId')).subscribe(async (res: any) => {
      this.infraData = res;
      for (let i = 0; i < this.infraData.length; i++) {
        if (this.infraData[i].id) {
          await this.homeService.getInfraMultiImageById(this.infraData[i].id).toPromise().then((res: any) => {
            this.multiImage = res;
            this.mainData.push(
              {
                id: this.infraData[i].id,
                institute_id: this.infraData[i].institute_id,
                infraTitle: this.infraData[i].infraTitle,
                infraDetails: this.infraData[i].infraDetails,
                infraImage: this.infraData[i].infraImage,
                createddate: this.infraData[i].createddate,
                updateddate: this.infraData[i].updateddate,
                multiImage: this.multiImage,
                cols: false
              });
            this.multiImage.push(
              {
                image: this.infraData[i].infraImage
              }
            );
          })
        }
      }
    })
  }
  toggleCollapse(index: number) {
    if (this.currentCollapsedIndex === index) {
      this.currentCollapsedIndex = -1; // Collapse if already expanded
    } else {
      this.currentCollapsedIndex = index; // Expand if collapsed or another one is clicked
    }
  }
  get totalPages(): number {
    return Math.ceil(this.mainData.length / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage - 1, this.mainData.length - 1);
  }

  get paginatedMainData(): any[] {
    return this.mainData.slice(this.startIndex, this.endIndex + 1);
  }

  get pages(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  changePage(page: number) {
    this.currentPage = page;
  }
}
