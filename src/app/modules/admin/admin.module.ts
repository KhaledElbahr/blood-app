import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UpdateAdminInfoComponent } from './update-admin-info/update-admin-info.component';
import { UserComponent } from './user-list/user/user.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    UserListComponent,
    NewUserComponent,
    UpdateAdminInfoComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class AdminModule { }
