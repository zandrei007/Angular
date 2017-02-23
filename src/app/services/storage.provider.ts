import { Injectable } from '@angular/core';
import { UserManager } from './UserManager';
import { Router } from '@angular/router';
@Injectable()
export class StorageProvider{
    constructor(private _userManager: UserManager, private router: Router){
        
    }
    public saveCredentials(cred){
            localStorage.setItem('currentUser', cred);
    }

    public removeCredentials(){
        localStorage.removeItem('currentUser');
        this._userManager.IsLoggedIn = false;

        setTimeout(()=>{
			 this.router.navigate(['login']); 
			}, 700);
    }

     logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('token_type');
        localStorage.removeItem('userName');
 
        // this._router.navigate(['Login']);
    }
}