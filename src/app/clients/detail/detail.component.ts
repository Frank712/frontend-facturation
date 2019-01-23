import {Component, OnInit} from '@angular/core';
import {Client} from '../client';
import {ClientService} from '../client.service';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
import {HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: []
})
export class DetailComponent implements OnInit {
  client: Client;
  title = 'Client detail';
  private selectedPhoto: File;
  progress: number = 0;

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
    this.progress = 0;
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
      this._clientService.uploadImage(this.selectedPhoto, this.client.id).subscribe( event => {
        //this.client = client;
        if ( event.type === HttpEventType.UploadProgress) {
          console.log(HttpEventType.UploadProgress);
          this.progress = Math.round(100 * event.loaded / event.total) ;
        } else if ( event.type ===  HttpEventType.Response ) {
          console.log(HttpEventType.Response);
          const resp: any = event.body;
          this.client = resp.client as Client;
          Swal.fire(
            'Upload Image',
            resp.message,
            'success'
          );
        }
      });
    }

  }

}
