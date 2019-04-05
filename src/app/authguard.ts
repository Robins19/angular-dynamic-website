import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
@Injectable()
export class CheckGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (localStorage.getItem('data') != null) {
      this.router.navigate(['profile']);
      return false;
    } else {
       return true;
     }
  }
}
