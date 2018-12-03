import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';


import { map } from 'rxjs/operators';
import { Product } from './product';
 
@Injectable()
 
// Service for products data.
export class ProductService {
 
    // We need Http to talk to a remote server.
    constructor(private _http : Http){ }
 
    // Get list of products from remote server.
    readProducts(): Observable<Product[]>{
 
        return this._http
            .get("http://localhost/api/product/read.php")
            .pipe(map((res: Response) => res.json()));
    }
 
}