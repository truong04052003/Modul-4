import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsAddComponent } from './tutorial-router/products-add/products-add.component';
import { ProductsDeleteComponent } from './tutorial-router/products-delete/products-delete.component';
import { ProductsEditComponent } from './tutorial-router/products-edit/products-edit.component';
import { ProductsComponent } from './tutorial-router/products/products.component';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'products/add', component: ProductsAddComponent },
  { path: 'products/:id/edit', component: ProductsEditComponent },
  { path: 'products/:id/delete', component: ProductsDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
