import { Component, OnInit } from '@angular/core';
import {FaqserviceService} from './faqservice.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqData ;
  cflag: boolean;
  constructor(private newService: FaqserviceService) { }

  ngOnInit() {
    this.cflag = true;
    this.newService.faqData().subscribe(response => {
      this.faqData = response ;
   });
  }

}
