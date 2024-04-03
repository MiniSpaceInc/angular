import {EventSearchDetails} from "../../model/EventSearchDetails";
import { EventFactory } from '../../model/factory/EventFactory';
import { inject, Injectable } from '@angular/core';
import {EventService} from "./event.service";
import {mockEvents} from "./mockEvents";
import {Event} from "../../model/Event";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventMockService implements EventService {
  eventFactory = inject(EventFactory);

  getEvent(uuid: string): Event {
    var event = mockEvents.find(event => event.uuid === uuid);
    return event ? event : this.eventFactory.createEmptyEvent();
  }

  getEventsPage(eventSearchDetails: EventSearchDetails) {
    const events = this.filterMockEvents(eventSearchDetails)
      .slice(eventSearchDetails.pageable.page * eventSearchDetails.pageable.size, (eventSearchDetails.pageable.page + 1) * eventSearchDetails.pageable.size);

    return of({
      content: events,
      totalElements: mockEvents.length,
      totalPages: Math.ceil(mockEvents.length / eventSearchDetails.pageable.size),
      size: events.length,
      number: eventSearchDetails.pageable.page,
      numberOfElements: mockEvents.length,
      first: eventSearchDetails.pageable.page === 0,
      last: eventSearchDetails.pageable.page === Math.ceil(mockEvents.length / eventSearchDetails.pageable.size) - 1,
      empty: mockEvents.length === 0
    });
  }

  addEvent(event: Event) {
    mockEvents.push(event);
    return of(1);
  }

  filterMockEvents(eventSearchDetails: EventSearchDetails) {
    return mockEvents
      .filter(event => event.name.toLowerCase().includes(eventSearchDetails.name.toLowerCase()))
      .filter(event => event.organizer.toLowerCase().includes(eventSearchDetails.organizer.toLowerCase()))
      .filter(event => (eventSearchDetails.dateFrom || eventSearchDetails.dateFrom === '') ? true : event.date >= eventSearchDetails.dateFrom)
      .filter(event => (eventSearchDetails.dateTo || eventSearchDetails.dateTo === '') ? true : event.date <= eventSearchDetails.dateTo)
  }
}
