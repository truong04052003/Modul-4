import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from "./../../product/product";
import { ProductService } from "./../../product/product.service";
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './../templates/product-delete.component.html',
})
export class ProductDeleteComponent {
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
  handleDelete(id: any) {
    this._ProductService.destroy(this.id).subscribe(() => {
      //chuyen huong ve list
      this._Router.navigate(['/products']);
    }, (e: any) => {
      console.log(e);
    });
    // this._ProductService.destroy(id);
    // this._Router.navigate(['/products']);
  }
}
