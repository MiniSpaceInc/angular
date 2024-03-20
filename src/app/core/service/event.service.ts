import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {mockEvents} from "./mockEvents";
import {EventSearchDetails} from "../model/EventSearchDetails";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getEvents(eventSearchDetails: EventSearchDetails) {
    return of(this.filterMockEvents(eventSearchDetails).slice(eventSearchDetails.page * eventSearchDetails.itemsPerPage, eventSearchDetails.page * eventSearchDetails.itemsPerPage + eventSearchDetails.itemsPerPage));
  }

  countEvents(eventSearchDetails: EventSearchDetails) {
    return of(this.filterMockEvents(eventSearchDetails).length);
  }

  filterMockEvents(eventSearchDetails: EventSearchDetails) {
    return mockEvents
      .filter(event => event.name.toLowerCase().includes(eventSearchDetails.name.toLowerCase()))
      .filter(event => event.organizer.toLowerCase().includes(eventSearchDetails.organizer.toLowerCase()))
      .filter(event => (eventSearchDetails.dateFrom || eventSearchDetails.dateFrom === '') ? true : event.date >= eventSearchDetails.dateFrom)
      .filter(event => (eventSearchDetails.dateTo || eventSearchDetails.dateTo === '') ? true : event.date <= eventSearchDetails.dateTo)
  }
}
