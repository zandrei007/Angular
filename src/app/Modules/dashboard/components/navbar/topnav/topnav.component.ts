import { Component, OnInit } from '@angular/core';
import { StorageProvider } from '../../../../../services/storage.provider';
import { Router } from '@angular/router';

@Component({
	selector: 'top-nav',
	providers: [StorageProvider],
	templateUrl: './topnav.component.html',
	styleUrls: ['./topnav.component.css']
})

export class TopnavComponent implements OnInit {

    constructor(private _storageProvider: StorageProvider, private router: Router){
    }
	ngOnInit() { }

	logout(){
		console.log("clicked");
		this._storageProvider.removeCredentials();
		// this.router.navigate['login'];
		setTimeout(()=>{
			 this.router.navigate(['login']); 
			}, 600);
	}
}