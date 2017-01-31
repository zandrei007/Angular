import { Component, OnInit } from '@angular/core';
declare var $:JQueryStatic;
@Component({
	selector: 'sidebar-comp',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

	constructor() { }

	ngOnInit() { 
		// $(";i")
	}

	MenuClicked(event){
		$(".active").removeClass("active");
		$(event.target.offsetParent).addClass("active");
		
	}
}