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
    var user = JSON.parse(localStorage.getItem('currentUser'));
    this._userManager.IsLoggedIn = true;
    this._userManager.UserName = user.username;
    return true;//localStorage.getItem('user').token != '';
  }
}