import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PrivateRoutingModule } from './private-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileserviceService } from './profile/profileservice.service';
import { ProfileComponent } from './profile/profile.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { FaqComponent } from './faq/faq.component';
import { FormsModule } from '@angular/forms';
import {PrivateCheckGuard} from '../private/privateauthguard';
import { UpcomingComponent } from './mybooking/upcoming/upcoming.component';
import { PastComponent } from './mybooking/past/past.component';

@NgModule({
  declarations: [NavbarComponent, ProfileComponent, MybookingComponent, FaqComponent, UpcomingComponent, PastComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  // In provider i have inject service which we used  in this module
  providers: [ProfileserviceService, PrivateCheckGuard]
})
export class PrivateModule { }
