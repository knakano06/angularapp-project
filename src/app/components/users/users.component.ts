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
  enableAdd: boolean = true;
  currentClasses: {}; // initialize as empty object
  currentStyles: {};

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
        },
        // ..com/height/width
        isActive: true, // this will set the bg-light background to the card
        registered: new Date('01/02/2019 08:30:00')
      },
      {
        firstName: 'Hiroko',
        lastName: 'Nakano',
        age: 52,
        address: {
          street: '33-26 Mitakedai',
          city: 'Yokohama',
          state: 'JAPAN'
        },
        isActive: false,
        registered: new Date('10/09/2017 18:20:00')
      },
      {
        firstName: 'Mirai',
        lastName: 'Nakano',
        age: 17,
        address: {
          street: '64 Harvard Avenue',
          city: 'Northfield',
          state: 'MN'
        },
        isActive: true, // this will set the bg-light background to the card
        registered: new Date('02/15/2019 5:40:00')
      }
    ];
    this.loaded = true;
  
    /* this.addUser({
        firstName: 'Boku',
        lastName: 'Nakano',
        age: 53,
        address: {
          street: '64 Yale Avenue',
          city: 'Lincoln',
          state: 'NE'
        } 
    }); */

    this.setCurrentClasses();
    this.setCurrentStyles();

  }

  addUser(user: User) {
    this.users.push(user);
  }

  // example for using ngClass
  // this class will be applied if enableAdd is true
  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,

      // additionally, if showExtended is true, it will refer to the 
      // users.component.css file and change all characters on the button
      // to uppercase letters
      'big-text': this.showExtended
    }
  }

  // example for using ngStyle
  setCurrentStyles() {
    this.currentStyles = {
      // if showExtended is set to true, we want 0 padding on the top
      // else, put 40 pixel of padding
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }
}
