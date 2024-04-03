import {inject, Injectable} from '@angular/core';
import {EventService} from "./event.service";
import {Observable} from "rxjs";
import {EventSearchDetails} from "../../model/EventSearchDetails";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";
import {Event} from "../../model/Event";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventRestService implements EventService {
  getEvent(uuid: string): Event {
    throw new Error('Method not implemented.');
  }
  http = inject(HttpClient);

  addEvent(event: Event): Observable<any> {
    return this.http.post('/api/events/add', event);
  }

  getEventsPage(eventSearchDetails: EventSearchDetails): Observable<ObjectPageDto<Event>> {
    return this.http.post<ObjectPageDto<Event>>('/api/events', eventSearchDetails);
  }
}
