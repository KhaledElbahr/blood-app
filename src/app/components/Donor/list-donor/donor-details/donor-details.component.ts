import { Component, Input } from '@angular/core';
import { Donor } from './../../../../shared/donor.model';

@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrls: ['./donor-details.component.css']
})
export class DonorDetailsComponent {

  @Input() donor: Donor;


  onLog() {
    console.log(this.donor);
  }

}
