import { Component } from '@angular/core';
import { Product } from "./../../product/product";
import { ProductService } from "./../../product/product.service";
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './../templates/product-edit.component.html',
})
export class ProductEditComponent {
  formProfile!: FormGroup;
  product!: Product;
  id: any;
  constructor(
    private _ProductService: ProductService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {

  }
  ngOnInit() {
    //lay id tu url xuong
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      
      // // goi model
      this._ProductService.find(id).subscribe(product => {
        console.log(product);
        this.product = product
        // dua vao form
        this.formProfile = new FormGroup({
          name: new FormControl(this.product.name, [
            Validators.required,
            Validators.minLength(3)
          ]),
          price: new FormControl(this.product.price, [
            Validators.required,
            Validators.minLength(3)
          ])
        });
      })
      // this.product = this._ProductService.find(id);

      
    })
  }
  onSubmitForm() {
    console.log(this.formProfile?.value);
    let formData = this.formProfile?.value;
    let product: Product = {
      name: formData.name,
      price: formData.price,
      description: formData.description
    }

    // Goi service
    this._ProductService.update(this.id, product);

    //Chuyen huong ve list
    this._Router.navigate(['/products']);

    // console.log(product);

  }
}
