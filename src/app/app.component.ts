import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular';
  year = new Date().getFullYear();
  course = 'Angular 7 and Spring 5';
}
