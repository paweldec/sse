import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time/time.service';
import { Observable } from 'rxjs';
import { TimeModel } from '../time/time.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  time$: Observable<TimeModel>;

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.time$ = this.timeService.getTime();
  }


}
