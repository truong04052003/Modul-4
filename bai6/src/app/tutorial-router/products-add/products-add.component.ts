import { Component } from '@angular/core';
import { Product } from "./../../product";
import { ProductService } from "./../../product.service";
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent {
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
    // console.log(value);

    let product: Product = {
      name: value.name,
      price: value.price,
    }
    

      // Goi service
      this._ProductService.store(product);

      //Chuyen huong ve list
      this._Router.navigate(['/products']);
    
  }
}

