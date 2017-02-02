import { Injectable } from '@angular/core';
@Injectable()
export class UserManager{
    public IsLoggedIn: boolean = false;
    public UserName: string = "";
}