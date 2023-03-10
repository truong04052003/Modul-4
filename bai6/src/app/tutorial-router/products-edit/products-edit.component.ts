import { Component } from '@angular/core';
import { Product } from "./../../product";
import { ProductService } from "./../../product.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent {
  productForm!: FormGroup;
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

      // goi model
      this.product = this._ProductService.find(id);

      // dua vao form
      this.productForm = new FormGroup({
        name: new FormControl(this.product.name, [
          Validators.required,
          Validators.minLength(3)
        ]),
        price: new FormControl(this.product.price, [
          Validators.required,
          Validators.minLength(3)
        ]),
      });
    })
  }
  onSubmitForm() {
    console.log(this.productForm?.value);
    let formData = this.productForm?.value;
    let product: Product = {
      name: formData.name,
      price: formData.price
    }

    // Goi service
    this._ProductService.update(this.id, product);

    //Chuyen huong ve list
    this._Router.navigate(['/products']);

    // console.log(product);

  }

}
