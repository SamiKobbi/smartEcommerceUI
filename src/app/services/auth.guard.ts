import {CanActivate} from "@angular/router";
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {
  }

  canActivate() {
    if(this.authService.isAuthenticated()) {
      console.log('authentification successful');
      return true;
    } else {
      console.log('authentification not successful');
      this.authService.login();
    }
  }
}
