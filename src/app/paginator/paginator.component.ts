import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styles: []
})
export class PaginatorComponent implements OnInit {
  @Input() paginator: any;
  pages: number[];
  constructor() { }

  ngOnInit() {
    this.pages = new Array( this.paginator.totalPages ).fill(0).map( (value, index) => index + 1);
  }

}
