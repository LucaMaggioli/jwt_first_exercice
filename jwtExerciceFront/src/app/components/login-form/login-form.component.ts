import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor() {}

  @Output() formSubmition = new EventEmitter<Login>();
  //this doesnt work.. template forms angular
  //loginModel = new Login('username', 'password');
  username = new FormControl('');
  password = new FormControl('');
  myLoginForm = new FormGroup({
    username: this.username,
    password: this.password,
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log('submitting form');
    console.log(this.username.value);
    console.log(this.password.value);
    let login = new Login(this.username.value, this.password.value);
    this.formSubmition.emit(login);
  }
}
