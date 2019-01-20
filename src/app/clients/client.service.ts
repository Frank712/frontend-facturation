import { Injectable } from '@angular/core';
import {Client} from './client';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor( private http: HttpClient ) { }
  private urlEndPoint = 'http://localhost:8080/api';

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>( this.urlEndPoint + '/clients' );
  }
}
