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
	wrongPassword: boolean = false;
	image: string = '';
	private BACKGROUND: GradientBckground;
	private GRADIENT = {LEFT: "", RIGHT:""};
	// http://upload.wikimedia.org/wikipedia/commons/d/dd/Muybridge_race_horse_animated.gif

	// https://media.giphy.com/media/vQbHcxe3AFVv2/giphy.gif
	private IMAGE_LIST = [
		"http://www.planwallpaper.com/static/images/518151-backgrounds_W3qVPu2.jpg"
		// "http://bestanimations.com/Nature/beautiful-wood-bridge-on-water-nature-lake-view-animated-gif.gif", 
		// "http://bestanimations.com/Nature/amazing-ocean-waves-breaking-nature-animated-gif.gif", 
		// "http://bestanimations.com/Nature/clouds-flowing-over-lake-mountains-nature-animated-gif.gif", 
		// "http://bestanimations.com/Nature/clouds-floating-over-himalaya-mountains-animated-gif.gif", 
		// "http://bestanimations.com/Nature/deer-crossing-swamp-water-forest-beautiful-nature-animated-gif.gif", 
		// "http://bestanimations.com/Nature/flowing-waterfall-cliff-green-nature-animated-gif.gif"
		]

		private GRADIENTS = [
			{left:"53346D", right:"000000"},
			{left:"3a6186", right:"89253e"},
			{left:"000428", right:"004e92"},
			{left:"141E30", right:"243B55"},
			{left:"3a7bd5", right:"3a6073"},
			{left:"1D4350", right:"A43931"},
			{left:"4B79A1", right:"283E51"},
			{left:"2980b9", right:"2c3e50"},
			{left:"1e3c72", right:"2a5298"},
			{left:"525252", right:"3d72b4"},
			{left:"360033", right:"0b8793"},
			{left:"485563", right:"29323c"},
			{left:"000000", right:"53346D"},
			{left:"232526", right:"414345"}
		]
	 _loginService: LoginService;
	ngOnInit(){
		var nbr = Math.floor(Math.random() * (0 - this.IMAGE_LIST.length)) + this.IMAGE_LIST.length;
		this.image = this.IMAGE_LIST[nbr];

		var gindex = Math.floor(Math.random() * (0 - this.GRADIENTS.length)) + this.GRADIENTS.length;
		var g = this.GRADIENTS[gindex];
		this.GRADIENT.LEFT = g.left;
		this.GRADIENT.RIGHT = g.right;

		this.isLoaded = true;


		this.BACKGROUND = new GradientBckground;
		this.BACKGROUND.rollBg();
		// this.timer = setInterval(() => {this.BACKGROUND.rollBg()}, 5000);
	}
private timer;
  constructor(
		private router: Router, 
		loginService: LoginService,
		private _userManager: UserManager,
		private _authenticationService: AuthenticationService){
		this._loginService = loginService;
  }
	
	onSubmit(event, usr: string, pass: string){
		event.preventDefault();
		this.wrongPassword = false;
		this._authenticationService.login(usr, pass).subscribe(result => {
				this._userManager.IsLoggedIn = result;

                if (result === true) {
                    // login successful
                    setTimeout(()=>{
						this.router.navigate(['dashboard']); 
					}, 700);
                } else {
					this.wrongPassword = true;
                }
            });
	}

	changeBg(){
		this.wrongPassword = false;
			var nbr = Math.floor(Math.random() * (0 - this.IMAGE_LIST.length)) + this.IMAGE_LIST.length;
		this.image = this.IMAGE_LIST[nbr];
		
	}
     
}

export class GradientBckground{
	//radial-gradient(at left top, rgb(153, 64, 4), rgb(140, 56, 243))
	public newGradient(){
		    var c1 = {
				r: Math.floor(Math.random()*255),
				g: Math.floor(Math.random()*255),
				b: Math.floor(Math.random()*255),
				rgb: ""
			};
			var c2 = {
				r: Math.floor(Math.random()*255),
				g: Math.floor(Math.random()*255),
				b: Math.floor(Math.random()*255),
				rgb: ""
			};
		c1.rgb = 'rgb('+c1.r+','+c1.g+','+c1.b+')';
		c2.rgb = 'rgb('+c2.r+','+c2.g+','+c2.b+')';
		return 'radial-gradient(at top left, '+c1.rgb+', '+c2.rgb+')';
	}

	rollBg() {
		$('.bg.hidden').css('background', this.newGradient());
		$('.bg').toggleClass('hidden');
	}
}