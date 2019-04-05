import { Component, OnInit } from '@angular/core';
import { MybookingserviceService } from './mybookingservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {
  upcomingData;
  pastData;
  constructor(private newService: MybookingserviceService, private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/mybooking/upcoming']);
    this.newService.upcomingData().subscribe(response => {
      this. upcomingData = response ;
   });
 }
  }


