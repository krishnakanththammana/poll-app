import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.scss']
})
export class PollingComponent implements OnInit {

  pollService;

  constructor(_ps: PollService) {
    this.pollService = _ps;
   }

  ngOnInit() {
    this.pollService.getPoll(1234)
      .subscribe((data) => console.log(data));
  }

}
