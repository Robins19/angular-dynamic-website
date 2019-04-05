import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent} from './registration/registration.component';
import { LoginComponent} from './login/login.component';
import {CheckGuard} from '../authguard';

// here i used all routing for private module
const routes: Routes = [
  {path: 'registration', component: RegistrationComponent, canActivate : [CheckGuard] },
  {path: 'login', component: LoginComponent, canActivate : [CheckGuard] },
  {path: '', redirectTo: '/registration', pathMatch: 'full', canActivate : [CheckGuard]},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 export class PublicroutingModule { }
