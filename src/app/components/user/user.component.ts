import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component( {
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  //styles: [`
  //  h2 {
  //  color: blue
  // }
  //`]
})

export class UserComponent implements OnInit {
  // Properties
  user: User;

  // Methods
  constructor() {}

  // instead of using the constructor, initialize in ngOnInit
  ngOnInit() {
    this.user = {
      firstName: 'Karin',
      lastName: 'Nakano',
      age: 20,
      address: {
        street: '500 College Avenue',
        city: 'Swarthmore',
        state: 'PA'
      }
    }
  }
}


/*
export class UserComponent {
  // Properties 
  firstName: string;
  lastName: string;
  age: number;
  address;
  
  // types we can use
  foo: any; // can be any type
  hasKids: boolean;
  numberArray: number[]; // array of numbers
  stringArray: string[];
  mixedArray: any[]; // array with mixed types 
  myTuple: [string, number, boolean];
  unusable: void;
  u: undefined;
  n: null;
  

  // Methods
  // constructor runs when the component is initialized
  constructor() { 
    console.log('Hello User...');
    this.sayHello();
    console.log(this.age);
    //this.hasBirthday();
    console.log(this.age);

    // assign values to type variables
    this.firstName = 'Karin';
    this.lastName = 'Nakano';
    this.age = 20;

    this.address = {
      street: '500 College Avenue',
      city: 'Swarthmore',
      state: 'PA',
    }
    
    this.foo = 3;
    this.hasKids = false;
    this.numberArray = [1, 2, 3];
    this.stringArray = ['Hello', 'World'];
    this.mixedArray = [1, true, undefined, 'hi'];
    this.myTuple = ['hello', 2, false]; 
    this.unusable = undefined;
    this.u = undefined;
    this.n = null;
    

    console.log(this.addNumbers(2, 3));
  }

  sayHello() {
    // string formatting
    console.log(`Hello ${this.firstName}`); 
  }

  hasBirthday() {
    this.age += 1;
  }
  
  showAge() {
    return this.age;
  }

  // assign the type of return value as number
  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
}
*/