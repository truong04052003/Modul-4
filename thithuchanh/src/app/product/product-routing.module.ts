import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add.component';
import { ProductDeleteComponent } from './components/product-delete.component';
import { ProductEditComponent } from './components/product-edit.component';
import { ProductsComponent } from './components/products.component';
import { ProductShowComponent } from './../product/components/product-show.component';


const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: ':id/show', component: ProductShowComponent },
    { path: 'add', component: ProductAddComponent},
    { path: ':id/edit', component: ProductEditComponent },
    { path: ':id/delete', component: ProductDeleteComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }