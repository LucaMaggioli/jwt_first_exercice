import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token: string) {
    window.sessionStorage.setItem('token', token);
  }

  public getToken():string{
    return sessionStorage.getItem('token');
  }
}
