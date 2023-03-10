import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from "./../../product/product";
import { ProductService } from "./../../product/product.service";
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-product-show',
  templateUrl: './../templates/product-show.component.html',
})
export class ProductShowComponent {
  product!: Product;
  id: any = 0;
  formProfile!: FormGroup
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _Router: Router
  ) { }
  ngOnInit() {
    // goi phuong thuc all
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this._ProductService.find(id).subscribe(product => {
        this.product = product;
      });
    });
  }
}
