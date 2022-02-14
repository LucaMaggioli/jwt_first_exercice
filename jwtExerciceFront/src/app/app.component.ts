import { Component } from '@angular/core';
import {TokenService} from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jwtExerciceFront';

  constructor(private _tokenService:TokenService) {
  }

  setToken(token: string) {
    this._tokenService.setToken(token);
  }
}
