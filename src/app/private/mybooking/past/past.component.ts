import { Component, OnInit } from '@angular/core';
import { PastserviceService} from './pastservice.service';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {
  pastData;
  constructor(private newService: PastserviceService) { }

  ngOnInit() {
    this.newService.pastData().subscribe(response => {
      this.pastData = response ;
   });
  }

}
