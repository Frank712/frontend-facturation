import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styles: []
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() paginator: any;
  pages: number[];
  _from: number;
  _to: number;
  constructor() { }

  ngOnInit() {
    this.initPaginator();
  }

  ngOnChanges( changes: SimpleChanges) {
    const paginatorCurrent = changes['paginator'];
    if ( paginatorCurrent.previousValue ) {
      this.initPaginator();
    }
  }

  private initPaginator(): void {
    if ( this.paginator.totalPages > 5 ) {
      this._from = Math.min( Math.max(1, this.paginator.number - 4), this.paginator.totalPages - 5 );
      this._to = Math.max( Math.min( this.paginator.totalPages, this.paginator.number + 4 ), 6 );
      this.pages = new Array( this._to - this._from + 1 ).fill(0).map( (value, index) => index + this._from);
    } else {
      this.pages = new Array( this.paginator.totalPages ).fill(0).map( (value, index) => index + 1);
    }
  }

}
