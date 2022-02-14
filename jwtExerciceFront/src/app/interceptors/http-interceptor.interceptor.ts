import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {window} from 'rxjs/operators';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("intercepting")
    let token = sessionStorage.getItem('token');
    console.log(`token: ${token}`);
    request = request.clone({
      setHeaders:{
        Authorisation: `Bearer ${token}`
      }
    });

    return next.handle(request);
  }
}
