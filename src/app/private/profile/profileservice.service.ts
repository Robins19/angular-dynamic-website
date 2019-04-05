import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private http: HttpClient) { }
  // here i get our data from db.json server
  public getData(userObj) {
    return this.http.get('http://localhost:3000/UserDetails/', {
      params: userObj
    });
       }
      //  here i put our data in db.json server by clicking in updating button using patch method
       public putData(id, data) {
        return this.http.patch('http://localhost:3000/UserDetails/' + id, data);
           }
}
