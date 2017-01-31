import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { C1Component } from '../c1/c1.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  providers: [],
  declarations: [HomeComponent, C1Component],
  exports: []
})
export class HomeModule { }
