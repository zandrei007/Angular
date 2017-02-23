import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginModule } from './Modules/login/login.module';
import { DashboardModule } from './Modules/dashboard/dashboard.module';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { UserManager } from './services/UserManager';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    LoginModule,
    DashboardModule,


    
  ],
  providers: [
        UserManager
        // ,
        // // providers used to create fake backend
        // fakeBackendProvider,
        // MockBackend,
        // BaseRequestOptions
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
