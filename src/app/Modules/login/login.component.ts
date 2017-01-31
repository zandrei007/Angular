import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageProvider } from '../../services/storage.provider';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
	providers: [LoginService, StorageProvider],
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

  constructor(private router: Router, loginService: LoginService){
		this._loginService = loginService;
  }
	// constructor(private router: Router, loginService: LoginService){ //, 
	// 	  this._loginService = loginService;
	// }
	
	onSubmit(event, usr: string, pass: string){
		event.preventDefault();
		this.wrongPassword = false;
		this.isLoggedIn = this._loginService.submitLogin(usr, pass);

		this.wrongPassword = !this.isLoggedIn;

		setTimeout(()=>{
			 this.router.navigate(['dashboard']); 
			}, 600);
		
	}

	changeBg(){
		this.wrongPassword = false;
			var nbr = Math.floor(Math.random() * (0 - this.IMAGE_LIST.length)) + this.IMAGE_LIST.length;
		this.image = this.IMAGE_LIST[nbr];
	}
         
}
