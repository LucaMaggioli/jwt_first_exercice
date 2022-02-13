import { Component, OnInit } from '@angular/core';
import {Login} from '../../models/login';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {
  }

  logIn(login:Login){
    console.log(login);
    this._loginService.logIn(login);
  }

}
