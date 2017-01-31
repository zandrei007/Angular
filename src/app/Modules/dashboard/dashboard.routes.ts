import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeRoutes } from './components/home/home.routes';
import { DashboardRouteGuard } from './dashboard.guard';
import { C1Routes } from './components/c1/c1.routes';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
			 children: [
		 	...HomeRoutes,
			 ...C1Routes
		 	],
    	component: DashboardComponent,
	
		 canActivate: [DashboardRouteGuard]
		
  	}
];
