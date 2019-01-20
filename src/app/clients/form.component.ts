import { Component, OnInit } from '@angular/core';
import {Client} from './client';
import {ClientService} from './client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private client: Client = new Client();
  private title: string = 'Create a client';
  constructor( private _serviceClient: ClientService,
               private router: Router) { }

  ngOnInit() {
  }

  public create() {
    console.log('Clicked!');
    this._serviceClient.createClient( this.client ).subscribe(
      response => this.router.navigate(['/clients'])
    );
  }
}
