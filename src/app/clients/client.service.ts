import { Injectable } from '@angular/core';
import {Client} from './client';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor( private http: HttpClient ) { }
  private urlEndPoint = 'http://localhost:8080/api/clients';
  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>( this.urlEndPoint );
  }

  createClient( client: Client ): Observable<Client> {
    return this.http.post<Client>(this.urlEndPoint, client, {headers: this.httpHeader});
  }
}
