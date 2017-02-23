import { Routes } from '@angular/router';
import { LoginRoutes } from './Modules/login/login.routes';
import { LoginComponent } from './Modules/login/login.component';
import { DashboardRoutes } from './Modules/dashboard/dashboard.routes';


export const routes: Routes = [
    ...DashboardRoutes,
    ...LoginRoutes,
    { path: '**', component: LoginComponent }
];
