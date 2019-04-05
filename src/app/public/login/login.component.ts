import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginserviceService } from './login/loginservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forms;
  getData;
  constructor(private newService: LoginserviceService, private router: Router) { }
  ngOnInit() {
    // here i clear our localstorage
    localStorage.removeItem('data');
    this.forms = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.email
      ])),
      password: new FormControl('' , [this.textValidatior,  Validators.required]),
    });
  }
  // i use custom validation for password
  textValidatior(control) {
    if (control.value.length < 3) {
      return {' password': true};
    }
  }
  onSubmit = function(user) {
    this.newService.getData(this.forms.value).subscribe(response => {
      this. getData = response ;
      // here i setour all data which come from server to localstorage
      localStorage.setItem('data', JSON.stringify(response));
      console.log(response);
      if ((Object.keys(response).length) === 0) {
        console.log('invalid user');
      } else {

        console.log('valid user');
        this.router.navigate(['profile']);
      }
   });

};
}
