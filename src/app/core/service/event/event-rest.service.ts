import {inject, Injectable} from '@angular/core';
import {EventService} from "./event.service";
import {Observable, of} from "rxjs";
import {EventSearchDetails} from "../../model/EventSearchDetails";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";
import {Event} from "../../model/Event";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventRestService implements EventService {
  http = inject(HttpClient);

  addEvent(event: Event): Observable<any> {
    return this.http.post('/api/event', event);
  }

  getEventsPage(eventSearchDetails: EventSearchDetails): Observable<ObjectPageDto<Event>> {
    return this.http.post<ObjectPageDto<Event>>('/api/events', eventSearchDetails);
  }
}
