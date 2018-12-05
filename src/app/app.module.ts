import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReadProductsComponent } from './read-products/read-products.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { ServiceBackService } from './service-back.service';
import { CreateProductComponent } from './create-product/create-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from './category.service';
import { ReadOneProductComponent } from './read-one-product/read-one-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadProductsComponent,
    CreateProductComponent,
    ReadOneProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService,ServiceBackService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
