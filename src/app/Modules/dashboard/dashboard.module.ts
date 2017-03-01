import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardRouteGuard } from './dashboard.guard';
import { NavbarModule } from './components/navbar/navbar.module';
import { C1Component } from './components/c1/c1.component';
import { DragulaModule } from 'ng2-dragula';
import { SidebarComponent } from './components/navbar/sidebar/sidebar.component';
import { TopnavComponent } from './components/navbar/topnav/topnav.component';
@NgModule({
  imports: [
    CommonModule, RouterModule, NavbarModule, DragulaModule
  ],
  providers: [DashboardRouteGuard],
  declarations: [DashboardComponent,HomeComponent,C1Component , SidebarComponent, TopnavComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
