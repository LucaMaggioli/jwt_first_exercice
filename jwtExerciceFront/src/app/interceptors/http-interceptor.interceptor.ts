import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {window} from 'rxjs/operators';
import {TokenService} from '../services/token.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private _tokenService:TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("intercepting")

    let token = this._tokenService.getToken();
    let authorisation = `Bearer ${token}`;

    request = request.clone({
      setHeaders:{
        Authorization: authorisation
      }
    });

    return next.handle(request);
  }
}
