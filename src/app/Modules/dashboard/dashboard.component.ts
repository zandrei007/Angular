import { Component, OnInit } from '@angular/core';
import { UserManager } from '../../services/UserManager';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoaded: boolean = false;
  constructor(private _userManager: UserManager) { 
    this.isLoaded = false;
  }

  ngOnInit() {
     this.isLoaded = true;
     console.log(this._userManager.IsLoggedIn);
  }

}
