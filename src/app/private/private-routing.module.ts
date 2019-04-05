import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent} from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { FaqComponent } from './faq/faq.component';
import {PrivateCheckGuard} from '../private/privateauthguard';
import { UpcomingComponent } from './mybooking/upcoming/upcoming.component';
import { PastComponent } from './mybooking/past/past.component';
// here i have used all private module routing  path
const routes: Routes = [
  {path: 'navbar', component: NavbarComponent, canActivate : [PrivateCheckGuard]},
  {path: 'profile', component: ProfileComponent, canActivate : [PrivateCheckGuard]},
  // here i give router path for child of mybooking i.e related with upcoming and past data
  {path: 'mybooking', component: MybookingComponent, canActivate : [PrivateCheckGuard], children: [
    {
      path: 'upcoming', component: UpcomingComponent
    },
    {
      path: 'past', component: PastComponent },
    ]},
  {path: 'faq', component: FaqComponent, canActivate : [PrivateCheckGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
