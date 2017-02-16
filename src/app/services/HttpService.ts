import { Headers,RequestOptions, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UserManager } from './UserManager';

@Injectable()
export class HttpService{
    constructor(private http: Http, private _userManager: UserManager){

    }
   public GetAsync(url, body) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.AuthenticateRequest(headers);
        let options = new RequestOptions({ headers: headers });    
    
         this.http.get(url, options).subscribe(
            response => {
                return response.json();
            },
            error => {
                return error;
            }
        );
    } 
    public Get(url, body): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        console.log("This=> " + this._userManager.Token);
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
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.AuthenticateRequest(headers);

        let options = new RequestOptions({ headers: headers });        
        this.http.post(url, body, options).subscribe(
            response => {
                localStorage.setItem('access_token', response.json().access_token);
                localStorage.setItem('expires_in', response.json().expires_in);
                localStorage.setItem('token_type', response.json().token_type);
                localStorage.setItem('userName', response.json().userName);
            },
            error => {
                console.log(error.text());
            }
        );
    } 

    private AuthenticateRequest(headers: Headers){
        headers.append('Authorization', 'Bearer ' +  this._userManager.Token); 
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*'); 
    }
}