import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  coursesList: string[] = ['JavaScript', 'C#', 'PHP', 'Angular', 'Reactive'];
  enable: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
