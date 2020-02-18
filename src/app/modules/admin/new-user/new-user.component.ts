import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  departments = [
    'Emergency',
    'Critical Care',
    'General Surgery'
  ];

  usertypes = [
    'Blood Bank Staff',
    'Hopitial Staff'
  ];

  userForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    sex: ['', Validators.required],
    usertype: ['', Validators.required],
    department: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
  });

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.userForm.value);
    this.userForm.reset();
  }

}
