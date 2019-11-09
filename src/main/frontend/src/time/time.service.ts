import { Injectable, NgZone } from '@angular/core';
import { SseService } from '../sse/sse.service';
import { Observable } from 'rxjs';
import { TimeModel } from './time.model';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private zone: NgZone, private sseService: SseService) {}

  getTime(): Observable<TimeModel> {
    return Observable.create(observer => {
      const eventSource = this.sseService.getEventSource("/sse/time");
      eventSource.onmessage = event => this.zone.run(() => observer.next(JSON.parse(event.data)));
      eventSource.onerror = error => this.zone.run(() => observer.error(error));
    });
  }

}
