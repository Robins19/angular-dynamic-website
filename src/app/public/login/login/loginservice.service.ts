import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }
  // here i use get method  to get our data from  db.json
  getData(par) {
    return this.http.get('http://localhost:3000/UserDetails', {
      params: par
    } );
     }
}
