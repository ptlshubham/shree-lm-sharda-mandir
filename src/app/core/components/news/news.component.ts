import { Component } from '@angular/core';
import { HomeService } from '../../services/home.services';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
    sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;

  public newsData: any = [];
  currentPage: number = 1;
  itemsPerPage: number = 8;

  constructor(
    private homeService: HomeService
  ) { }
  ngOnInit(): void {
    this.getNewsDetails();
  }
  getNewsDetails() {
    this.homeService.getNewsOnlyForCESURL(localStorage.getItem('InstituteId')).subscribe((res: any = []) => {
      this.newsData = res.slice(0);
    })
  }
  get totalPages(): number {
    return Math.ceil(this.newsData.length / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage - 1, this.newsData.length - 1);
  }

  get paginatedNewsData(): any[] {
    return this.newsData.slice(this.startIndex, this.endIndex + 1);
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
