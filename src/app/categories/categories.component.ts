import { Component, OnInit } from '@angular/core';
import { CategoryserviceService } from '../services/categorie-services/categoryservice.service';
import { PostsService } from '../services/posts/posts.service';

import { Categories } from '../models/categories';
import { Posts } from '../models/posts';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Categories[];
  errorMessage: String;

  constructor(private categoryserviceService: CategoryserviceService, private postsService: PostsService) { }

  ngOnInit(): void {
  
    this.categoryserviceService.getCategories().then((res) => {
      console.log('************Printing the category data**************')
      console.log(res.data)
      this.categories = res.data;
    }).catch((err) => {
      this.errorMessage = err
    });

    this.postsService.getPosts().then((res) => {
      console.log('************Printing the posts data**************')
      console.log(res.data)
    }).catch((err) => {
      this.errorMessage = err
    });


    

  }

  

}
