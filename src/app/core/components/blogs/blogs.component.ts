import { Component } from '@angular/core';
import { HomeService } from '../../services/home.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
    sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;
  blogsData: any = []
  currentPage: number = 1;
  itemsPerPage: number = 12;

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBlogDetails();
  }
  getBlogDetails() {
    this.homeService.getBlogsById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.blogsData = res;
    })
  }
  get totalPages(): number {
    return Math.ceil(this.blogsData.length / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage - 1, this.blogsData.length - 1);
  }

  get paginatedBlogsData(): any[] {
    return this.blogsData.slice(this.startIndex, this.endIndex + 1);
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
  continueBlog(id: any) {
    this.router.navigate(['/blog-details', id]);
  }
}
