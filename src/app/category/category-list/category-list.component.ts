import { Component, OnInit } from '@angular/core';
import { CategoryApiService } from '../services/category-api.service';
import { ICategory } from '../category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: ICategory[] = [];
  errorMessage: string;
  constructor(private categoryApiService: CategoryApiService) { 
  
  }

  ngOnInit() {
    this.categoryApiService.getCategory().subscribe(
      categories => {
        this.categories = categories;
      },
      error => this.errorMessage = <any>error
    );
  }

}
