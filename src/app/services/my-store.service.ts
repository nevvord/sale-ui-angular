import { CreateStore } from './interfaces/CreateStore';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyStoreService {

  private _CreateStoreURL: any = "http://localhost:3001/store/registration"
  private _CheckStoreURL: any = "http://localhost:3001/store/check"
  constructor( private _http: HttpClient, private _router: Router ) { }

  createStore(data):Observable<CreateStore> {
    return this._http.post<CreateStore>(this._CreateStoreURL, data)
  }
  checkStore() {
    return this._http.get(this._CheckStoreURL)
  }
}
