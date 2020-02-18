import { Component } from '@angular/core';
import { Donor } from './../../../shared/donor.model';

@Component({
  selector: 'app-list-donor',
  templateUrl: './list-donor.component.html',
  styleUrls: ['./list-donor.component.css']
})
export class ListDonorComponent {

  donors: Donor[] = [
    {
      id: 1,
      civilId: 2980123131500042,
      name: 'khaled',
      country: 'Alex',
      phone: +1281484515,
      sex: 'male',
      bloodGroup: 'A+',
      email: 'khaledelbahr@gmail.com',
    },
    {
      id: 2,
      civilId: 2980123131500042,
      name: 'mohamed',
      country: 'Kafr el-sheikh',
      phone: +1281484515,
      sex: 'male',
      bloodGroup: 'B+',
      email: 'mohamed@gmail.com',
    },
    {
      id: 3,
      civilId: 2980123131500042,
      name: 'Ali',
      country: 'Alex',
      phone: +1281484515,
      sex: 'male',
      bloodGroup: 'A+',
      email: 'Ali@gmail.com',
    },
    {
      id: 4,
      civilId: 2980123131500042,
      name: 'Sara',
      country: 'Alex',
      phone: +1281484515,
      sex: 'female',
      bloodGroup: 'O',
      email: 'Sara@gmail.com',
    },
  ];

  selectedDonor: Donor;

  getDetails(donor) {
    this.selectedDonor = donor;
    console.log(this.selectedDonor);
  }
}
