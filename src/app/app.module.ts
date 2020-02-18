import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NewDonorComponent } from './components/Donor/new-donor/new-donor.component';
import { ListDonorComponent } from './components/Donor/list-donor/list-donor.component';
import { BloodProductComponent } from './components/Donor/blood-product/blood-product.component';
import { ListBloodProductComponent } from './components/Donor/list-blood-product/list-blood-product.component';
import { DonorHomeComponent } from './components/Donor/donor-home/donor-home.component';
import { DonorComponent } from './components/Donor/list-donor/donor/donor.component';
import { DonorDetailsComponent } from './components/Donor/list-donor/donor-details/donor-details.component';
import { DonorActivityComponent } from './components/Donor/donor-activity/donor-activity.component';
import { ListDonorActivityComponent } from './components/Donor/list-donor-activity/list-donor-activity.component';
import { AdminModule } from './modules/admin/admin.module';
import { BloodBankModule } from './modules/blood-bank/blood-bank.module';
import { DoctorModule } from './modules/doctor/doctor.module';
import { HospitalModule } from './modules/hospital/hospital.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewDonorComponent,
    ListDonorComponent,
    BloodProductComponent,
    ListBloodProductComponent,
    DonorHomeComponent,
    DonorComponent,
    DonorDetailsComponent,
    DonorActivityComponent,
    ListDonorActivityComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AdminModule,
    BloodBankModule,
    DoctorModule,
    HospitalModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
