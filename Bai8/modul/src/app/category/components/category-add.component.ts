import { Component } from '@angular/core';
import { Category } from './../../category/category';
import { CategoryService } from './../../category/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-categories-add',
  templateUrl: './../templates/category-add.component.html',
})
export class CategoryAddComponent {
  category!: Category;
  formProfile!: FormGroup;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private CategoryService: CategoryService,
    private _Router: Router
  ) {

  }
  ngOnInit() {
    this.formProfile = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),

    })
  }
  handleSubmit(value: any) {

    let category: Category = {
      name: value.name
    
    }


    // Goi service
    this.CategoryService.store(category);

    //Chuyen huong ve list
    this._Router.navigate(['/categories']);

  }
}
