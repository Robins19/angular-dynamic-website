import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationserviceService } from './registrationservice.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { passwordValidator } from './registrationpassword';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  forms;
  postData;
  constructor(private newService: RegistrationserviceService, private router: Router) { }
  ngOnInit() {
    this.forms = new FormGroup({
      firstName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      lastName: new FormControl('' , [this.textValidatior, Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phonenumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      MedicalHistory: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmpassword: new FormControl('', [Validators.required]),
    }, {validators: passwordValidator});


  }
  textValidatior(control) {
    if (control.value.length < 3) {
      return {' lastName': true};
    }
  }
  onSubmit = function(user) {
    console.log(user);
    this.newService.postData(this.forms.value).subscribe(data => {
      this. postData = data ;
      console.log(data);
      this.router.navigate(['/login']);
   });
   };

}
