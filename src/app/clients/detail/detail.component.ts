import { Component, OnInit } from '@angular/core';
import {Client} from '../client';
import {ClientService} from '../client.service';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: []
})
export class DetailComponent implements OnInit {
  client: Client;
  title = 'Client detail';
  private selectedPhoto: File;

  constructor( private _clientService: ClientService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( params => {
      const id: number = +params.get('id');
      if ( id ) {
        this._clientService.getClient(id).subscribe( client => {
          console.log(client);
          this.client = client;
        });
      }
    });
  }

  selectPhoto( event ) {
    this.selectedPhoto = event.target.files[0];
    console.log(this.selectedPhoto);
    if ( this.selectedPhoto.type.indexOf('image') < 0 ) {
      Swal.fire(
        'Invalid file',
        `The file isn't a image`,
        'error'
      );
      this.selectedPhoto = null;
    }
  }

  upload () {

    if ( !this.selectedPhoto ) {
      Swal.fire(
        'Image not selected!',
        `The image hasn't been selected`,
        'error'
      );
    } else {
      this._clientService.uploadImage(this.selectedPhoto, this.client.id).subscribe( client => {
        this.client = client;
        Swal.fire(
          'Upload Image',
          `The image ${this.client.photo} has been updated successfully`,
          'success'
        );
      });
    }

  }

}
