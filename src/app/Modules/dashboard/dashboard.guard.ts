import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class DashboardRouteGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    // Put the object into storage
    if(!localStorage.getItem('user')){
      this.router.navigate(['']); 
      return false;
    }

    return true;//localStorage.getItem('user').token != '';
  }
}