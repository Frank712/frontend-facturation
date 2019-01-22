import { Injectable } from '@angular/core';
import {Client} from './client';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor( private http: HttpClient,
               private router: Router) { }
  private urlEndPoint = 'http://localhost:8080/api/clients';
  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>( this.urlEndPoint );
  }

  createClient( client: Client ): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, client, {headers: this.httpHeader}).pipe(
      catchError( e => {
        console.log(e.error.message);
        Swal.fire(
          e.error.message,
          e.error.error,
          'error'
        );
        return throwError( e );
      })
    );
  }

  getClient( id ): Observable<Client> {
    return this.http.get<Client>( `${this.urlEndPoint}/${id}`).pipe(
      catchError( e => {
        this.router.navigate(['/clients']);
        console.log(e.error.message);
        Swal.fire(
          'Error!',
          e.error.message,
          'error'
        );
        return throwError(e);
      })
    );
  }

  updateClient( client: Client ): Observable<any> {
    return this.http.put<any>( `${this.urlEndPoint}/${client.id}`, client, {headers: this.httpHeader} ).pipe(
      catchError( e => {
        console.log(e.error.message);
        Swal.fire(
          e.error.message,
          e.error.error,
          'error'
        );
        return throwError(e);
      })
    );
  }

  deleteClient( id: number ): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/${id.toString()}`, {headers: this.httpHeader}).pipe(
      catchError( e => {
        console.log(e.error.message);
        Swal.fire(
          e.error.message,
          e.error.error,
          'error'
        );
        return throwError(e);
      })
    );
  }
}
