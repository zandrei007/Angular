import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [
		'./navbar.component.css'
		]
})

export class NavbarComponent implements OnInit {

	constructor() { }

	ngOnInit() { 
		$("#side-menu").metisMenu();
	}
}