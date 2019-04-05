import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { ProfileserviceService } from './profileservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // forms is used to pass inside the form
  forms;
  postData;
  // data is initial object by giving somevalue
  data = {
    firstName: 'robynyumjins',
    lastName: 'singh',
    fullName: 'popins',
    email: 'robinssingh155@gmail.com',
    phonenumber: 9530849179,
    address: 'delhi',
    MedicalHistory: 'NA',
    password: '11510047',
    confirmpassword: '11510047'
  };

  constructor(private newService: ProfileserviceService, private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    // here we used getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.


    this.forms = new FormGroup({
      firstName: new FormControl(JSON.parse(localStorage.getItem('data'))[0].firstName, Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      lastName: new FormControl(JSON.parse(localStorage.getItem('data'))[0].lastName , this.textValidatior),
      fullName: new FormControl(JSON.parse(localStorage.getItem('data'))[0].firstName
      + ' ' + JSON.parse(localStorage.getItem('data'))[0].lastName , this.textValidatior),
      email: new FormControl(JSON.parse(localStorage.getItem('data'))[0].email),
      phonenumber: new FormControl(JSON.parse(localStorage.getItem('data'))[0]. phonenumber),
      address: new FormControl(JSON.parse(localStorage.getItem('data'))[0].address),
      MedicalHistory: new FormControl(JSON.parse(localStorage.getItem('data'))[0].  MedicalHistory),
      password: new FormControl(JSON.parse(localStorage.getItem('data'))[0].  password),
      confirmpassword: new FormControl(JSON.parse(localStorage.getItem('data'))[0]. confirmpassword ),
    });
  }
  // here we used custom validation for last name
  textValidatior(control) {
    if (control.value.length < 3) {
      return {' lastName': true};
    }
  }
  onSubmit = function(user) {
    if (this.forms.valid) {
      console.log('jb');
      const string1 = this.forms.get('fullName').value;
      console.log(string1);
      const string2 = string1.split('');
      console.log(string2);
      this.data.firstName = string2[0];
      this.data.lastName = string2[1];
      this.data.fullName = this.data.firstName + this.data.lastName;
      this.forms.get('fullName').value = this.data.fullName;
      this.data.email = this.forms.get('email').value;
      this.data.phonenumber = this.forms.get('phonenumber').value;
      this.data. address = this.forms.get('address').value;
      this.data.  MedicalHistory = this.forms.get('MedicalHistory').value;
    }
    console.log(user);
    console.log(JSON.parse(localStorage.getItem('data'))[0].id);
    this.newService. putData(JSON.parse(localStorage.getItem('data'))[0].id, this.forms.value).subscribe(response => {
      console.log('putdata is success', response);
    });
   };

}
