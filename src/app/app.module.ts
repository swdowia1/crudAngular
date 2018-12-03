import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReadProductsComponent } from './read-products/read-products.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ReadProductsComponent
  ],
  imports: [
    BrowserModule,
  HttpModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
