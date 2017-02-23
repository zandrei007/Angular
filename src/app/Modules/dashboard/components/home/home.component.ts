import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/HttpService';
import { Http, Response } from '@angular/http';

declare var Morris : any;
declare var $:JQueryStatic;
@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [HttpService]
})


export class HomeComponent implements OnInit {
	MorrisIds: any[];

	private userAgent = [
			{value: 1, label: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"},
			 {value: 2, label: "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1"},
			// {value: 3, label: "Mozilla/5.0 (Windows; U; Windows NT 5.0; zh-TW; rv:1.8.0.1) Gecko/20060111 Firefox/0.10"},
			// {value: 4, label: "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.19) Gecko/20081202 Firefox (Debian-2.0.0.19-0etch1)"},
		];
	constructor(private _httpService: HttpService, private http: Http) { 
		
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
		this.MorrisIds = [];
	 }
	 addRandomChart(){
		 this._httpService.Get('/api/getcharts','')
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().items;
                if (token) {
					return JSON.parse(response.json().items);
                } else {
                    return false;
                }
            }).subscribe(items => {
					for(var i = 0 ; i < items.length; i++){
						this.MorrisIds.push(items[i]);
							setTimeout(function(data){
								new Morris.Donut({
											element: "Morris"+data.Title,
											data: data.data,
											resize: true,
											formatter: function (x) { return x + "%"}
										}).on('click', function(i, row){
											console.log(i, row);
								})
							}, 50, items[i]);
					}
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