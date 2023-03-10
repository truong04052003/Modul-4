import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      name: 'Iphone',
      price: 23000
    },
    {
      name: 'Samsung',
      price: 24000
    }
  ];

  constructor() { }
  all() {
    return this.products;
  }
  find(id: any) {
    return this.products[id];
  }
  store(data: Product) {
    this.products.push(data);
  }
  update(id: any, data: Product) {
    this.products[id] = data;
  }
  destroy(id: any) {
    this.products.splice(id, 1);
  }
}
