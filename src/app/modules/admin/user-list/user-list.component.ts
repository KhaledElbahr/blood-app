import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [
    {
      id: 1,
      firstName: 'khaled',
      lastName: 'mohamed',
      gender: 'male',
      type: 'blood bank staff',
      phone: +1281484515,
      email: 'khaledelbahr@gmail.com',
      password: '123456',
      userName: 'khaledMohamed207'
    },
    {
      id: 2,
      firstName: 'Ali',
      lastName: 'mohamed',
      gender: 'male',
      type: 'blood bank staff',
      phone: +1281484515,
      email: 'mohamed@gmail.com',
      password: '123456',
      userName: 'Alimohamed500',
    },
    {
      id: 3,
      firstName: 'Ahmed',
      lastName: 'ali',
      gender: 'male',
      type: 'blood bank staff',
      email: 'Ali@gmail.com',
      phone: +1281484515,
      password: '123456',
      userName: 'AhmedAli900',
    },
    {
      id: 4,
      firstName: 'Sara',
      lastName: 'ali',
      gender: 'female',
      type: 'blood bank staff',
      email: 'Sara@gmail.com',
      phone: +1281484515,
      password: '123456',
      userName: 'SaraAli300',
    }
  ];

  selectedUser: User;

  constructor() { }

  getDetails(user) {
    this.selectedUser = user;
    console.log(this.selectedUser);
  }
}
