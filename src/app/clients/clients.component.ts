import { Component, OnInit } from '@angular/core';
import {Client} from './client';
import {ClientService} from './client.service';
import Swal from 'sweetalert2';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];
  paginator: any;

  constructor( private _clientService: ClientService,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe( (params: any) => {
      const page: number = +params.get('page') || 0;
      this._clientService.getClients( page ).subscribe((response: any) => {
        this.clients = response.content as Client[];
        this.paginator = response;
      });
    });
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
