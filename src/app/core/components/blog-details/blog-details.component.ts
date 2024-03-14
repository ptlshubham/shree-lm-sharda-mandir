import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.services';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {
    sliderTopbar = false;
  Menuoption = 'center';
  Settingicon = true;
  
  blogId: any;
  blogsData: any = [];
  bDetails: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.blogId = params['id'];
      this.getBlogDetails();
    });
  }

  ngOnInit(): void {

  }
  getBlogDetails() {
    this.homeService.getBlogsById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.blogsData = res;
      this.bDetails = {};
      this.blogsData.forEach((element: any) => {
        if (element.id == this.blogId) {
          this.bDetails = element;
        }
      });
    })
  }
}
