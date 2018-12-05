import { Injectable } from '@angular/core';
import { ServiceBackService } from './service-back.service';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable()
export class CategoryService {

  _url='http://localhost:3000/';

  // We need Http to talk to a remote server.
  constructor(private _BackService:ServiceBackService){ }

  // Get list of products from remote server.
  readProducts(): Observable<Category[]>{
      return this._BackService.get<Category>("category")
  }
}
