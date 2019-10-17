import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'
 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:  User[]
  showExtended: boolean = true;
  loaded: boolean = false; //false by default

  constructor() { }

  // runs automatically once the object is initialized
  ngOnInit() {
    this.users = [
      {
        firstName: 'Karin',
        lastName: 'Nakano',
        age: 20,
        address: {
          street: '500 College Avenue',
          city: 'Swarthmore',
          state: 'PA'
        }
      },
      {
        firstName: 'Hiroko',
        lastName: 'Nakano',
        age: 52,
        address: {
          street: '33-26 Mitakedai',
          city: 'Yokohama',
          state: 'JAPAN'
        }
      },
      {
        firstName: 'Mirai',
        lastName: 'Nakano',
        age: 17,
        address: {
          street: '64 Harvard Avenue',
          city: 'Northfield',
          state: 'MN'
        }
      }
    ];
    this.loaded = true;
  
    this.addUser({
        firstName: 'Boku',
        lastName: 'Nakano',
        age: 53,
        address: {
          street: '64 Yale Avenue',
          city: 'Lincoln',
          state: 'NE'
        } 
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
