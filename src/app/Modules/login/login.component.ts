import { Component, OnInit } from '@angular/core';
// import { LoginService } from './login.service';
import { Router } from '@angular/router';
// import { StorageProvider } from '../../services/storage.provider';

@Component({
  selector: 'app-login',
	providers: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	isLoaded: boolean = false;
  isLoggedIn: boolean = false;
	wrongPassword: boolean = false;
	// _loginService: LoginService;
	ngOnInit(){
		this.isLoaded = true;
	}

  // constructor(private router: Router){

  // // }
	// constructor(private router: Router, loginService: LoginService){ //, 
	// 	  this._loginService = loginService;
	// }

	onSubmit(event, usr: string, pass: string){
		event.preventDefault();
		this.wrongPassword = false;

		// this.isLoggedIn = this._loginService.submitLogin(usr, pass);

		// this.wrongPassword = !this.isLoggedIn;

		// setTimeout(()=>{
		// 	 this.router.navigate(['dashboard']); 
		// 	}, 600);
		
	}

}
