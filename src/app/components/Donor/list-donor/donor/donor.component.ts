import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent {
  @Input() donor;

  onSelected() {
    console.log(this.donor);
  }
}
