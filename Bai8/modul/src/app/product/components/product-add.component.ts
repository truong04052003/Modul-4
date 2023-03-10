import { Component } from '@angular/core';
import { Product } from "./../../product/product";
import { ProductService } from "./../../product/product.service";
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './../templates/product-add.component.html',
})
export class ProductAddComponent {
  product!: Product;
  formProfile!: FormGroup;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _Router: Router
  ) {

  }
  ngOnInit() {
    this.formProfile = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        
      ]),
      'price': new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ])
     
    })
  }
  handleSubmit(value: any) {
    let productData:Product = {
      name: value.name,
      price: value.price,
    }
    this._ProductService.save( productData).subscribe(() => {
      //chuyen huong ve list
      this._Router.navigate(['/products']);
    }, (e: any) => {
      console.log(e);
    });
    // this._ProductService.save(productData);
    // this._Router.navigate(['/']);
}
}
