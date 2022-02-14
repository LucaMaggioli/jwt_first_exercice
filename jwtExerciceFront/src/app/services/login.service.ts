import { Injectable } from '@angular/core';
import {Login} from '../models/login';
import {error} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logIn(login:Login){
    console.log("in loginService");
    console.log(login);
    let data = JSON.stringify({Username:login.username,Password:login.password});
    console.log("data pushed");
    console.log(data);
    return fetch(
      'http://localhost:63939/api/token',
      {
        method:'POST',
        mode: 'cors',
        headers: {'content-type': 'application/json', 'Access-Control-Allow-Origin':'*'},
        body:data
      }
    ).then(response=>{
        if (response.ok){
          console.log(response);
          return response.json();
        }
        else {
          throw new Error("something went wrong");
        }
      });
  }
}
