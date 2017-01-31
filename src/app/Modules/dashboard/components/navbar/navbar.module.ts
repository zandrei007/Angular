import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavComponent } from './topnav/topnav.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [NavbarComponent, SidebarComponent, TopnavComponent],
    exports: [NavbarComponent]
})

export class NavbarModule { }