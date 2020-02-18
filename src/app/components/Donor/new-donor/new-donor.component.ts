import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-donor',
  templateUrl: './new-donor.component.html',
  styleUrls: ['./new-donor.component.css']
})
export class NewDonorComponent {
  bloodGroups = [
    'A+',
    'B+',
    'O'
  ];

  countries = [
    'Alex',
    'Cairo',
    'Kafr el-sheikh'
  ];

  donorForm = this.fb.group({
    civilId: ['', Validators.required],
    donorName: ['', Validators.required],
    sex: ['', Validators.required],
    bloodGroup: ['', Validators.required],
    country: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  get civilId() {
    return this.donorForm.get('civilId');
  }

  get donorName() {
    return this.donorForm.get('donorName');
  }


  onSubmit() {
    console.log(this.donorForm.value);
    this.donorForm.reset();
  }

}
