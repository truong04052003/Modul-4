import { Component } from '@angular/core';
import { Category } from './../../category/category';
import { CategoryService } from './../../category/category.service';


@Component({
  selector: 'app-categories',
  templateUrl: './../templates/category.component.html',
})
export class CategoriesComponent {
  categories : Category[] =[];
  constructor(private _CategoryService:CategoryService){

  }
  ngOnInit(): void{
    let items = this._CategoryService.all();
    this.categories = items;
    console.log(this.categories);
  }
}
