import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/HttpService';

declare var Morris : any;
declare var $:JQueryStatic;
@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [HttpService]
})


export class HomeComponent implements OnInit {

	private userAgent = [
			{value: 1, label: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"},
			 {value: 2, label: "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1"},
			// {value: 3, label: "Mozilla/5.0 (Windows; U; Windows NT 5.0; zh-TW; rv:1.8.0.1) Gecko/20060111 Firefox/0.10"},
			// {value: 4, label: "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.19) Gecko/20081202 Firefox (Debian-2.0.0.19-0etch1)"},
		];
	constructor(private httpService: HttpService) { 
		
	}

	ngOnInit() {
	
		 var link: string = "http://www.useragentstring.com/?uas=";
		for(var i = 0 ; i < this.userAgent.length ; i++){
			console.log("accessing: " + link + this.userAgent[i].label);
			// var result = this.httpService.Get(link + this.userAgent[i].label + "&getJSON=all", "").subscribe(
			// 	response => {
			// 		this.StoreResponse(i-1,response.json());
			// 	},
			// 	error => {
			// 		console.log(error.text());
			// 	}
        	// );
		}


		new Morris.Donut({
			element: 'screenchart',
			data: [
				{value: 30, label: 'foo'},
				{value: 15, label: 'bar'},
				{value: 10, label: 'baz'},
				{value: 12, label: 'A really really long label'}
			],
			resize: true,
			formatter: function (x) { return x + "%"}
			}).on('click', function(i, row){
			console.log(i, row);
			});

		new Morris.Donut({
			element: 'oschart',
			data: [
				{value: 11, label: 'foo'},
				{value: 15, label: 'bar'},
				{value: 10, label: 'baz'},
				{value: 12, label: 'A really really long label'}
			],
			resize: true,
			formatter: function (x) { return x + "users"}
			}).on('click', function(i, row){
			console.log(i, row);
			});
	 }

	 private StoreResponse(i: number, object){
			type MyArrayType = Array<{value: number, label: string}>;
			type responseAgent = {os_name: string};
			console.log(i);
			this.userAgent[i].label= object.os_name;
			
			if(i==this.userAgent.length -1)
			new Morris.Donut({
				element: 'myfirstchart',
				data: this.userAgent,
				resize: true,
				formatter: function (x) { return x + "%"}
				}).on('click', function(i, row){
				console.log(i, row);
			});
	 }
}