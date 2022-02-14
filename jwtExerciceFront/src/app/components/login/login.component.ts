import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Login} from '../../models/login';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginEvent = new EventEmitter();

  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {
  }

  logIn(login:Login){
    this._loginService.logIn(login).then(token=>{
      console.log("result of fetch is");
      console.log(token);
      this.loginEvent.emit(token);
    });
  }

}
