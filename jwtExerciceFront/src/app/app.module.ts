import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BooksComponent } from './components/books/books.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {BookService} from './services/book.service';
import {HttpInterceptorInterceptor} from './interceptors/http-interceptor.interceptor';

@NgModule({
  declarations: [AppComponent, LoginComponent, LoginFormComponent, BooksComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [BookService,{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
