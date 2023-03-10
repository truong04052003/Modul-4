import { Component } from '@angular/core';
import { Product } from "./../../product";
import { ProductService } from "./../../product.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent {
  product!: Product;
  id: any = 0;
  productForm!: FormGroup;
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

      // goi model
      this.product = this._ProductService.find(id);

    });
  }
  handleDelete(id: any) {
    this._ProductService.destroy(this.id);
     //Chuyen huong ve list
     this._Router.navigate(['/products']);
  }
}
