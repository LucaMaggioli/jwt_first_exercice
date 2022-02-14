import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token: string) {
    let tokenParsed = JSON.stringify(token);
    window.sessionStorage.setItem('token', tokenParsed);
  }
}
