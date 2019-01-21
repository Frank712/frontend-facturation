import { Component, OnInit } from '@angular/core';
import {Client} from './client';
import {ClientService} from './client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor( private _clientService: ClientService ) { }

  ngOnInit() {
    this._clientService.getClients()
      .subscribe( result => this.clients = result);
  }

  delete(client: Client): void {
    const swalWithBootstrapButtons = Swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire( {
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    } ).then((result) => {
      if (result.value) {
        this._clientService.deleteClient(client.id).subscribe( resp => {
          this.clients = this.clients.filter( c => {
            return c !== client;
          });
          swalWithBootstrapButtons.fire(
            'Deleted!',
            `The client '${client.name}' has been deleted`,
            'success'
          );
        });
      }
    });

  }
}
