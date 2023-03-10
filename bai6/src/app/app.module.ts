import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UTemplateDrivenComponent } from './u-template-driven/u-template-driven.component';
import { VDataDrivenComponent } from './v-data-driven/v-data-driven.component';
// import { RegisterComponent } from './register/register.component';
// import { TutorialRouterComponent } from './tutorial-router/tutorial-router.component';
import { ProductsComponent } from './tutorial-router/products/products.component';
import { ProductsAddComponent } from './tutorial-router/products-add/products-add.component';
import { ProductsEditComponent } from './tutorial-router/products-edit/products-edit.component';
import { ProductsDeleteComponent } from './tutorial-router/products-delete/products-delete.component';
@NgModule({
  declarations: [
    AppComponent,
    UTemplateDrivenComponent,
    VDataDrivenComponent,
    // RegisterComponent,
    // TutorialRouterComponent,
    ProductsComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    ProductsDeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
