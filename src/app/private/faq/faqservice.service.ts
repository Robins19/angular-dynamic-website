import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqserviceService {

  constructor(private http: HttpClient) { }
     faqData() {
      return this.http.get('http://localhost:3000/faq');
       }
}
