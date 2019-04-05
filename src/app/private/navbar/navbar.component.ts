import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { MybookingserviceService } from '../mybooking/mybookingservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  dropdownName: string;
  header: string;
  count1;
  count2;
  count: any;
  upcomingData;
  pastData;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private router: Router, private newService: MybookingserviceService) {
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() );
  }

  ngOnInit() {
    // i have used name to display fullname on dropdownbox
    this.dropdownName = JSON.parse(localStorage.getItem('data'))[0].fullName;
    // i have used to display number of booking
    this.newService.upcomingData().subscribe(response => {
      this. upcomingData = response ;
      this.count1 = this.upcomingData.length;

      // tslint:disable-next-line:no-shadowed-variable
      this.newService.pastData().subscribe(response => {
    this.pastData = response ;
    this.count2 = this.upcomingData.length;
    this.count = this.count1 + this.count2;
 });
});

  }
  // i have used this to change our header dynamic
  handleRouteChange = () => {
    if (this.router.url.includes('profile')) {
      this.header = 'PROFILE';
    }
    if (this.router.url.includes('mybooking')) {
    this.header = 'MYBOOKINGS';
    }
    if (this.router.url.includes('faq')) {
    this.header = 'FAQs';
    }
    }
  // here we used logout method to remove our data from local storage nd we route to loginpage
  Logout() {

    this.router.navigate(['/login']);
    localStorage.removeItem('data');
  }

}
