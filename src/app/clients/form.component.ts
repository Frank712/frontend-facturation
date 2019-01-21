import { Component, OnInit } from '@angular/core';
import {Client} from './client';
import {ClientService} from './client.service';
import {Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private client: Client = new Client();
  private title: string = 'Create a client';
  constructor( private _serviceClient: ClientService,
               private router: Router,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.loadClient();
  }

  public create() {
    console.log('Clicked!');
    this._serviceClient.createClient( this.client ).subscribe(
      response => {
        this.router.navigate(['/clients']);
        Swal.fire({
          position: 'center',
          type: 'success',
          title: `Client ${response.name} created!`,
          showConfirmButton: false,
          timer: 1300
        });
      }
    );
  }

  public loadClient(): void {
    this.activatedRoute.params.subscribe( params => {
      const id = params['id'];
      if ( id ) {
        this._serviceClient.getClient( id ).subscribe( client => {
          this.client = client;
        });
      }
    });
  }

  update(): void {
    this._serviceClient.updateClient( this.client ).subscribe(
      response => {
        this.router.navigate(['/clients']);
        Swal.fire(
          'Updated!',
          `Client ${response.name} has been updated!`,
          'success'
        );
      }
    );
  }

}
