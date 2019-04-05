import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PastserviceService {

  constructor(private http: HttpClient) { }
     pastData() {
      return this.http.get('http://localhost:3000/past');
       }
}
