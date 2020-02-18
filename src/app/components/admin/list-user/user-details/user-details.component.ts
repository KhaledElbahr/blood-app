import { User } from './../../../../shared/user.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input() user: User;


  onLog() {
    console.log(this.user);
  }

}
