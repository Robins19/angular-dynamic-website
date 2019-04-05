import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {

  constructor(private http: HttpClient) { }
  // here i used  post method to post our details of form in server
  public postData(userObj) {
return this.http.post('http://localhost:3000/UserDetails', userObj);
   }
  }
