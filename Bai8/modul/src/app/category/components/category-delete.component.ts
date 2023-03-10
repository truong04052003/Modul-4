import { Component } from '@angular/core';
import { Category } from './../../category/category';
import { CategoryService } from './../../category/category.service';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categories-delete',
  templateUrl: './../templates/category-delete.component.html',
})
export class CategoryDeleteComponent {
  category!: Category;
  id: any = 0;
  formProfile!: FormGroup
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _CategoryService: CategoryService,
    private _Router: Router
  ) { }
  ngOnInit() {
    // goi phuong thuc all
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;

      // goi model
      this.category = this._CategoryService.find(id);

    });
  }
  handleDelete(id: any) {
    this._CategoryService.destroy(this.id);
    //Chuyen huong ve list
    this._Router.navigate(['/categories']);
  }
}
