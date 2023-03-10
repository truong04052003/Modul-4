import { Injectable } from '@angular/core';
import { Product } from './product';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];
  api_url:string = '';

  constructor( private http:HttpClient) { this.api_url = environment.api_url }
  all():Observable<Product[]>{
    return this.http.get<Product[]>(this.api_url);
  }
  find(id:any):Observable<Product>{
    return this.http.get<Product>(this.api_url+'/'+id);
  }
  save(product:Product){
    return this.http.post<Product>(this.api_url , product);
  }
  update(id:any,product:Product){
    return this.http.put<Product>(this.api_url + '/' + id, product);
  }
  destroy(id:any){
    return this.http.delete<Product>(this.api_url + '/' + id);
  }
}
 