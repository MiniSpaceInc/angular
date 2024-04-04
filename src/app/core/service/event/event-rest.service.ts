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
  http = inject(HttpClient);

  getEventByUuid(uuid: string): Observable<Event> {
    return this.http.get<Event>('/api/events/' + uuid);
  }

  addEvent(event: Event): Observable<any> {
    return this.http.post('/api/events', event);
  }

  getEventsPage(eventSearchDetails: EventSearchDetails): Observable<ObjectPageDto<Event>> {
    return this.http.post<ObjectPageDto<Event>>('/api/events/search', eventSearchDetails);
  }
}
