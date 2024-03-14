import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { HomeService } from '../../services/home.services';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
    sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;

  private _album = [];
  imagesData: any = [];
  galleryImg: any[] = []; // Your gallery images array

  currentPage: number = 1;
  itemsPerPage: number = 12;

  constructor(
    private _lightbox: Lightbox,
    private homeService: HomeService
  ) {
  }

  ngOnInit(): void {
    this.getImagesDataById();
  }
  getImagesDataById() {
    this.galleryImg = [];
    this.homeService.getBannersImagesById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.imagesData = res;
      this.imagesData.forEach((element: any) => {
        if (element.purpose == 'image') {
          this.galleryImg.push(element);
        }
      });
      this.galleryImg.forEach((element: any) => {
        const src = 'http://localhost:9200' + element.image;
        const album = {
          src: src,
        };
        this._album.push(album);
      });
    })
  }
  get totalPages(): number {
    return Math.ceil(this.galleryImg.length / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage - 1, this.galleryImg.length - 1);
  }

  get paginatedGalleryImg(): any[] {
    return this.galleryImg.slice(this.startIndex, this.endIndex + 1);
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
  open(index: number): void {
    this._lightbox.open(this._album, index);
  }
  close(): void {
    this._lightbox.close();
  }
}
