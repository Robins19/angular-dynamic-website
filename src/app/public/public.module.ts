import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {PublicroutingModule} from './publicrouting.module';



import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RegistrationserviceService } from './registration/registrationservice.service';
import {PrivateModule} from '../private/private.module';
import {CheckGuard} from '../authguard';
import { from } from 'rxjs';

@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicroutingModule,
    PrivateModule
  ],
  exports: [
    RegistrationComponent
  ],
  providers: [RegistrationserviceService, CheckGuard]
})
export class PublicModule { }
