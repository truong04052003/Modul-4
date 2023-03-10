import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    {
      name: 'Iphone',
   
    },
    {
      name: 'Samsung',
   
    }
  ];

  constructor() { }
  all() {
    return this.categories;
  }
  find(id: any) {
    return this.categories[id];
  }
  store(data: Category) {
    this.categories.push(data);
  }
  update(id: any, data: Category) {
    this.categories[id] = data;
  }
  destroy(id: any) {
    this.categories.splice(id, 1);
  }
}
