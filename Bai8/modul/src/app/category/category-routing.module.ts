import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './components/category-add.component';
import { CategoryDeleteComponent } from './components/category-delete.component';
import { CategoryEditComponent } from './components/category-edit.component';
import { CategoriesComponent } from './components/category.component';


const routes: Routes = [
    { path: '', component: CategoriesComponent },
    { path: 'add', component: CategoryAddComponent},
    { path: ':id/edit', component: CategoryEditComponent },
    { path: ':id/delete', component: CategoryDeleteComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule { }