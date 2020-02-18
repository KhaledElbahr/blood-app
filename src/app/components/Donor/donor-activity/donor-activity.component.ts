import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-donor-activity',
  templateUrl: './donor-activity.component.html',
  styleUrls: ['./donor-activity.component.css']
})
export class DonorActivityComponent {

  statuses = [
    'Accepted',
    'Voluntary',
    'Regular',
    'Rejected',
    'Directed',
    'First Time'
  ];

  countries = [
    'Alex',
    'Cairo',
    'Kafr el-sheikh'
  ];

  donorActivityForm = this.fb.group({
    id: ['', Validators.required],
    dateOfDonation: ['', Validators.required],
    status: ['', Validators.required],
    type: ['', Validators.required],
    temperature: ['', Validators.required],
    weight: ['', Validators.required],
    height: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.donorActivityForm.value);
    this.donorActivityForm.reset();
  }
}
