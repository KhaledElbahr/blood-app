import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-blood-product',
  templateUrl: './blood-product.component.html',
  styleUrls: ['./blood-product.component.css']
})
export class BloodProductComponent {

  bloodGroups = [
    'A+',
    'B+',
    'O'
  ];


  bloodProductForm = this.fb.group({
    id: ['', Validators.required],
    productName: ['', Validators.required],
    storageLoc: ['', Validators.required],
    volume: ['', Validators.required],
    bloodGroup: ['', Validators.required],
    dateOfCreation: ['', Validators.required],
    dateOfExp: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.bloodProductForm.value);
    this.bloodProductForm.reset();
  }

}
