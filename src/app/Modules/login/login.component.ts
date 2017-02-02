import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageProvider } from '../../services/storage.provider';
import { LoginService } from './login.service';
import { AuthenticationService } from '../../_services/index';
import { UserManager } from '../../services/UserManager';

@Component({
  selector: 'app-login',
	providers: [LoginService, StorageProvider, AuthenticationService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	isLoaded: boolean = false;
  isLoggedIn: boolean = false;
	wrongPassword: boolean = false;
	image: string = '';
	// http://upload.wikimedia.org/wikipedia/commons/d/dd/Muybridge_race_horse_animated.gif

	// https://media.giphy.com/media/vQbHcxe3AFVv2/giphy.gif
	private IMAGE_LIST = [
		"http://bestanimations.com/Nature/beautiful-wood-bridge-on-water-nature-lake-view-animated-gif.gif", 
		"http://bestanimations.com/Nature/amazing-ocean-waves-breaking-nature-animated-gif.gif", 
		"http://bestanimations.com/Nature/clouds-flowing-over-lake-mountains-nature-animated-gif.gif", 
		"http://bestanimations.com/Nature/clouds-floating-over-himalaya-mountains-animated-gif.gif", 
		"http://bestanimations.com/Nature/deer-crossing-swamp-water-forest-beautiful-nature-animated-gif.gif", 
		"http://bestanimations.com/Nature/flowing-waterfall-cliff-green-nature-animated-gif.gif"]
	 _loginService: LoginService;
	ngOnInit(){
		var nbr = Math.floor(Math.random() * (0 - this.IMAGE_LIST.length)) + this.IMAGE_LIST.length;
		this.image = this.IMAGE_LIST[nbr];
		this.isLoaded = true;
	}

  constructor(
		private router: Router, 
		loginService: LoginService,
		private _userManager: UserManager,
		private _authenticationService: AuthenticationService){
		this._loginService = loginService;
  }
	// constructor(private router: Router, loginService: LoginService){ //, 
	// 	  this._loginService = loginService;
	// }
	
	onSubmit(event, usr: string, pass: string){
		event.preventDefault();
		this.wrongPassword = false;
		this._authenticationService.login(usr, pass).subscribe(result => {
                if (result === true) {
                    // login successful
										this.isLoggedIn = true;
                    setTimeout(()=>{
											this.router.navigate(['dashboard']); 
										}, 700);
                } else {
										this.wrongPassword = true;
                }
								this._userManager.IsLoggedIn = result;
            });
		// this.isLoggedIn = this._loginService.submitLogin(usr, pass);


		
		
	}

	changeBg(){
		this.wrongPassword = false;
			var nbr = Math.floor(Math.random() * (0 - this.IMAGE_LIST.length)) + this.IMAGE_LIST.length;
		this.image = this.IMAGE_LIST[nbr];
	}
         
}
