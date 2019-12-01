import { NotifierService } from 'angular-notifier';
import { AuthService } from '@services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private readonly notifier: NotifierService
  constructor( private _authService: AuthService, private _router: Router, notifierService: NotifierService) {
    this.notifier = notifierService
  }
  canActivate(): any {
    if (this._authService.loggedIn())  return true
    this._router.navigate(['/signin'])
    this.notifier.show({
      type: "info",
      message: "Login to view."
    })
    return false
    
  }
}
