import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit { 
  blogsData: any = []
  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBlogDetails();
  }
  getBlogDetails() {
    this.homeService.getBlogsById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.blogsData = res.slice(0,3);
      debugger
    })
  }
  continueBlog(id: any) {
    this.router.navigate(['/blog-details', id]);
  }
}
