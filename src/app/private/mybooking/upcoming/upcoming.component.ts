import { Component, OnInit } from '@angular/core';
import { MybookingserviceService } from '../mybookingservice.service';
import { UpcomingserviceService} from './upcomingservice.component';


@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  upcomingData ;
  constructor(private newService: UpcomingserviceService) { }

  ngOnInit() {
    this.newService.upcomingData().subscribe(response => {
      this. upcomingData = response ;
   });
  }

}
