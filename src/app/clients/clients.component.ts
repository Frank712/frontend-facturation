import { Component, OnInit } from '@angular/core';
import {Client} from './client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [
    { id: 1, name: 'Mark', lastName: 'Twain', email: 'twain@email.com', createdAt: '12-03-2010' },
    { id: 2, name: 'Phelps', lastName: 'Mock', email: 'mock@email.com', createdAt: '03-10-2011' },
    { id: 3, name: 'Michel', lastName: 'Williams', email: 'williams@email.com', createdAt: '10-04-2013' },
    { id: 4, name: 'Bill', lastName: 'Gates', email: 'gates@email.com', createdAt: '13-05-2010' },
    { id: 5, name: 'Marcus', lastName: 'Matt', email: 'matt@email.com', createdAt: '25-12-2015' },
    { id: 6, name: 'Frank', lastName: 'Stark', email: 'stark@email.com', createdAt: '07-11-2015' },
    { id: 7, name: 'Lotto', lastName: 'Lee', email: 'lee@email.com', createdAt: '03-01-2009' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
