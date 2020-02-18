import { User } from './../../../shared/user.model';
import { Component, Input } from '@angular/core';
import {  } from 'protractor';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  users: User[] = [
    {
      id: 1,
      name: 'khaled',
      sex: 'male',
      type: 'blood bank staff',
      department: 'Emergency',
      email: 'khaledelbahr@gmail.com',
      phone: +1281484515,
      password: 123456
    },
    {
      id: 2,
      name: 'mohamed',
      sex: 'male',
      type: 'blood bank staff',
      department: 'Emergency',
      email: 'mohamed@gmail.com',
      phone: +1281484515,
      password: 624953
    },
    {
      id: 3,
      name: 'Ali',
      sex: 'male',
      type: 'blood bank staff',
      department: 'Emergency',
      email: 'Ali@gmail.com',
      phone: +1281484515,
      password: 346985
    },
    {
      id: 4,
      name: 'Sara',
      sex: 'female',
      type: 'blood bank staff',
      department: 'Critical Care',
      email: 'Sara@gmail.com',
      phone: +1281484515,
      password: 649875
    }
  ];

  selectedUser: User;

  constructor() { }

  getDetails(user) {
    this.selectedUser = user;
    console.log(this.selectedUser);
  }

}
