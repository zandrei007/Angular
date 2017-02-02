import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserManager } from '../../services/UserManager';

@Injectable()
export class DashboardRouteGuard implements CanActivate {

  constructor(private router: Router, private _userManager : UserManager) {}

  canActivate() {
    // Put the object into storage
    console.log(localStorage.getItem('currentUser'));
    if(!localStorage.getItem('currentUser')){
      this.router.navigate(['']); 
      return false;
    }

    this._userManager.IsLoggedIn = true;
    return true;//localStorage.getItem('user').token != '';
  }
}