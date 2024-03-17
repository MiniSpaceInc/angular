import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {mockEvents} from "./mockEvents";
import {EventSearchDetails} from "../model/EventSearchDetails";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getEvents(eventSearchDetails: EventSearchDetails) {
    return of(this.filterMockEvents(eventSearchDetails).slice(eventSearchDetails.page * eventSearchDetails.itemsOnPage, eventSearchDetails.page * eventSearchDetails.itemsOnPage + eventSearchDetails.itemsOnPage));
  }

  countEvents(eventSearchDetails: EventSearchDetails) {
    return of(this.filterMockEvents(eventSearchDetails).length);
  }

  filterMockEvents(eventSearchDetails: EventSearchDetails) {
    return mockEvents.filter(event => event.name.toLowerCase().includes(eventSearchDetails.name.toLowerCase()));
  }
}
