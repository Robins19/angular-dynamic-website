import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MybookingserviceService {

  constructor(private http: HttpClient) { }
  upcomingData() {
    return this.http.get('http://localhost:3000/Upcoming');
     }
     pastData() {
      return this.http.get('http://localhost:3000/past');
       }
}
