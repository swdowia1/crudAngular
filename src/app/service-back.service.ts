import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';


import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MayHaveId } from './may-have-id';
@Injectable()
export class ServiceBackService {

  _url = 'http://localhost:3000/';

  constructor(private _HttpClient: HttpClient) { }

  get<T>(method: string): Observable<T[]> {
    return this._HttpClient
      .get<T[]>(this._url + method)
      .pipe((response) => {
        return response;
      });
  }
  getOne<T>(method: string): Observable<T> {
    return this._HttpClient
      .get<T>(this._url + method)
      .pipe((response) => {
        return response;
      });
  }
  post<T>(method: string, arg: T): Observable<T> {
    return this._HttpClient.post<T>(this._url + method, arg);
  }

  put<T extends MayHaveId>(method: string, arg: T): Observable<T> {
    return this._HttpClient.put<T>(this._url + method + "/" + arg.id, arg);
  }

}
