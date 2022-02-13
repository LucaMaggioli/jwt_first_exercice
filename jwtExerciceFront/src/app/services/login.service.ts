import { Injectable } from '@angular/core';
import {Login} from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logIn(login:Login){
    console.log("in loginService");
  }
}
