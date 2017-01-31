import { Headers,RequestOptions, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpService{
    constructor(private http: Http){

    }
   public GetAsync(url, body) {
        // let body = "username=" + username + "&password=" + password + "&grant_type=password";
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.AuthenticateRequest(headers);
        let options = new RequestOptions({ headers: headers });    
    
         this.http.get(url, options).subscribe(
            response => {
                return response.json();
            },
            error => {
                // alert(error.text());
                // console.log(error.text());
                return error;
            }
        );
    } 
    public Get(url, body) {
        // let body = "username=" + username + "&password=" + password + "&grant_type=password";
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.AuthenticateRequest(headers);
        let options = new RequestOptions({ headers: headers });    
    
        return this.http.get(url, options);

        // .subscribe(
        //     response => {
        //         console.log(response.json());
        //         return response.json();
        //         // localStorage.setItem('access_token', response.json().access_token);
        //         // localStorage.setItem('expires_in', response.json().expires_in);
        //         // localStorage.setItem('token_type', response.json().token_type);
        //         // localStorage.setItem('userName', response.json().userName);
        //         // this._router.navigate(['Dashboard']);
        //     },
        //     error => {
        //         // alert(error.text());
        //         console.log(error.text());
        //     }
        // );
    } 

    public Post(url, body) {
        // let body = "username=" + username + "&password=" + password + "&grant_type=password";
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.AuthenticateRequest(headers);

        let options = new RequestOptions({ headers: headers });        
        this.http.post(url, body, options).subscribe(
            response => {
                localStorage.setItem('access_token', response.json().access_token);
                localStorage.setItem('expires_in', response.json().expires_in);
                localStorage.setItem('token_type', response.json().token_type);
                localStorage.setItem('userName', response.json().userName);
                // this._router.navigate(['Dashboard']);
            },
            error => {
                // alert(error.text());
                console.log(error.text());
            }
        );
    } 

    private AuthenticateRequest(headers: Headers){
            // headers.append('Authorization', 'Basic ' +  btoa('username:password')); 
             headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*'); 
    }
}