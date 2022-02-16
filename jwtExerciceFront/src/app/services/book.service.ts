import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subscribable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http:HttpClient) { }

  //getBooks():Observable<Array<any>>{
  getBooks(){
    //let headers = new HttpHeaders({'content-type': 'application/json', 'Access-Control-Allow-Origin':'*'});
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this._http.get('http://localhost:63939/api/books', {'headers':headers});
    /*return fetch('http://localhost:63939/api/books',
      {
        method:'GET',
        headers:{'content-type':'application/json', 'Access-Control-Allow-Origin':'*'}
      })
      .then(response=>{
        if (response.ok){
          return response.json();
        }
        else {
          throw new Error(`response not ok! ${response.status}, ${response.statusText}`);
        }
      });
      /*
     */

  }
}
