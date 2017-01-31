import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardRouteGuard } from './dashboard.guard';
import { NavbarModule } from './components/navbar/navbar.module';
import { C1Component } from './components/c1/c1.component';
import { DragulaModule } from 'ng2-dragula';
@NgModule({
  imports: [
    CommonModule, RouterModule, NavbarModule, DragulaModule
  ],
  providers: [DashboardRouteGuard],
  declarations: [DashboardComponent, HomeComponent, C1Component],
  exports: [DashboardComponent, HomeComponent]
})
export class DashboardModule { }
