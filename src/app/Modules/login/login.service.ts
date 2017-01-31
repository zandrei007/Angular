import { Injectable } from '@angular/core';
import { Headers,RequestOptions, Http } from '@angular/http';
 import { StorageProvider } from '../../services/storage.provider';

@Injectable()
export class LoginService{

    constructor(private _storageProvider: StorageProvider,private http: Http){
    }
    submitLogin(user: string, password: string){
        if(user == "asd@dd"){
            this._storageProvider.saveCredentials({ user: user, token: "randomToken"});
            // this.login(user, password);
            return true;
        }
        this._storageProvider.removeCredentials();
        return false;
    }
    
    login(username, password) {
        event.preventDefault();
         
        let url = "http://google.com";
        let body = "username=" + username + "&password=" + password + "&grant_type=password";
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });        
         
        // this.http.post(url, body, options).subscribe(
        //     response => {
        //         localStorage.setItem('access_token', response.json().access_token);
        //         localStorage.setItem('expires_in', response.json().expires_in);
        //         localStorage.setItem('token_type', response.json().token_type);
        //         localStorage.setItem('userName', response.json().userName);
        //         // this._router.navigate(['Dashboard']);
        //     },
        //     error => {
        //         // alert(error.text());
        //         console.log(error.text());
        //     }
        // );
    } 
}