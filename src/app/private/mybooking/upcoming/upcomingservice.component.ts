import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpcomingserviceService {

  constructor(private http: HttpClient) { }
  upcomingData() {
    return this.http.get('http://localhost:3000/Upcoming');
     }
     postData() {
      return this.http.get('http://localhost:3000/past');
       }
}
