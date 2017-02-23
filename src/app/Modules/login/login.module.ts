import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule, RouterModule, HttpModule
    
  ],
  declarations: [LoginComponent],
  exports:[LoginComponent]
})
export class LoginModule { }
