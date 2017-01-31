import { Injectable } from '@angular/core';
@Injectable()
export class StorageProvider{
    public saveCredentials(cred){
            localStorage.setItem('user', cred);
    }

    public removeCredentials(){
        localStorage.removeItem('user');
    }

     logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('token_type');
        localStorage.removeItem('userName');
 
        // this._router.navigate(['Login']);
    }
}