import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
@Injectable()
export class PrivateCheckGuard implements CanActivate {
  constructor(private router: Router) {}
  // i have used CanActivate, because this guard function is called when user tries to navigate into the route
  canActivate(): boolean {
    if (localStorage.getItem('data') == null) {
      this.router.navigate(['login']);
      return false;
    } else {
       return true;
     }
  }
}
