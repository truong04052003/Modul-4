import { Component } from '@angular/core';
import { Category } from './../../category/category';
import { CategoryService } from './../../category/category.service';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './../templates/category-edit.component.html',
})
export class CategoryEditComponent {
  formProfile!: FormGroup;
  category!: Category;
  id: any;
  constructor(
    private _CategoryService: CategoryService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {

  }
  ngOnInit() {
    //lay id tu url xuong
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;

      // goi model
      this.category = this._CategoryService.find(id);

      // dua vao form
      this.formProfile = new FormGroup({
        name: new FormControl(this.category.name, [
          Validators.required,
          Validators.minLength(3)
        ]),
      });
    })
  }
  onSubmitForm() {
    console.log(this.formProfile?.value);
    let formData = this.formProfile?.value;
    let category: Category = {
      name: formData.name,
    }

    // Goi service
    this._CategoryService.update(this.id, category);

    //Chuyen huong ve list
    this._Router.navigate(['/categories']);

    // console.log(product);

  }
}
