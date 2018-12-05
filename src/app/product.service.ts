import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Guid } from "guid-typescript";


import { map } from 'rxjs/operators';
import { Product } from './product';
import { ServiceBackService } from './service-back.service';

@Injectable()

// Service for products data.
export class ProductService {

  createProduct(product): Observable<Product> {

    product.id = Guid.create().toString();
    console.log(product);
    return this._ServiceBackService.post<Product>("product", product);
  }

  // We need Http to talk to a remote server.
  constructor(private _ServiceBackService: ServiceBackService) { }

  // Get list of products from remote server.
  readProducts(): Observable<Product[]> {
    return this._ServiceBackService.get<Product>("product");
  }
  readOneProduct(product_id: string): Observable<Product> {
    return this._ServiceBackService.getOne<Product>("product/" + product_id);
  }

}