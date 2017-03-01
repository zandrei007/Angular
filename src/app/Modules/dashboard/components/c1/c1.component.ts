import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

declare var $:any;
@Component({
	selector: 'c1',
	templateUrl: './c1.component.html',
	styleUrls: ['./c1.component.css']
})

export class C1Component implements OnInit {
  
  private onDrag(args:any):void {
    let [e] = args;
    //this.removeClass(e, 'ex-moved');
  }

  private onDrop(args:any):void {
    let [e] = args;
    this.addClass(e, 'ex-moved');
  }

  private onOver(args:any):void {
    let [el] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args:any):void {
    let [el] = args;
    //this.removeClass(el, 'ex-over');
  }
  private addClass(el:any, name:string):void {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }
   private hasClass(el:any, name:string):any {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }
	 public constructor(private dragulaService:DragulaService) {
    dragulaService.drag.subscribe((value:any) => {
		console.log(`drag: ${value[0]}`); // value[0] will always be bag name
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value:any) => {
       console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value:any) => {
      console.log(`over: ${value[0]}`);
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value:any) => {
       console.log(`out: ${value[0]}`);
      this.onOut(value.slice(1));
    });
  }

	ngOnInit() {
      $(document).ready(function() {
          $('#example').DataTable( {
            "dom": '<f<t>lip>',
            "scrollY": "200px",
            "processing": true, 
            "serverSide": true,
            "ajax": "http://localhost:64188/api/login/search",
            "columnDefs": [ {
              "targets": 0,
              "orderable": false
            } ]
          } );
      } );

    var data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];
   $(".js-example-basic-multiple").select2();

 
    $(".js-example-data-array").select2({
      data: data,
      query: function(q){
        console.log(q.term);
      }
    });
   }
}