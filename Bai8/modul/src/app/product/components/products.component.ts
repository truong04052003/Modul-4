import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products',
  templateUrl: './../templates/products.component.html'
})
export class ProductsComponent {
  products : Product[] =[];
  constructor(private _ProductService:ProductService){

  }
  ngOnInit(): void{
    // let items = this._ProductService.all();
    // this.products = items;
    // console.log(this.products);
    this._ProductService.all().subscribe(products => {this.products = products});
  }
}
