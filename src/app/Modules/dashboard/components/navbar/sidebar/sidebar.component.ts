import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
	selector: 'sidebar-comp',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

	constructor() { }

	ngOnInit() { 
		$("#side-menu").metisMenu();
	}

	MenuClicked(event){
		$(".active").removeClass("active");
		$(event.target.offsetParent).addClass("active");
		
	}
}