import {EventSearchDetails} from "../../model/EventSearchDetails";
import { EventFactory } from '../../model/factory/EventFactory';
import { inject, Injectable } from '@angular/core';
import {EventService} from "./event.service";
import {mockEvents} from "./mockEvents";
import {Event} from "../../model/Event";
import {Observable, of} from "rxjs";
import {ReactionType} from "../../model/Reactions";
import {ReactionsDto} from "../../model/dto/ReactionsDto";
import {PageableDto} from "../../model/dto/PageableDto";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";
import {EventInvitation} from "../../model/EventInvitation";

@Injectable({
  providedIn: 'root'
})
export class EventMockService implements EventService {
  eventFactory = inject(EventFactory);

  getEventByUuid(uuid: string): Observable<Event> {
    const event = mockEvents.find(event => event.uuid === uuid);
    return of(event ? event : this.eventFactory.createEmptyEvent());
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


  setReaction(eventId: number, reaction: ReactionType | null): Observable<any> {
    throw new Error("Not implemented yet!");
  }

  getReactions(eventId: number): Observable<ReactionsDto> {
    throw new Error("Not implemented yet!");
  }

  signUpForEvent(eventId: number): Observable<any> {
    throw new Error("Not implemented yet");
  }

  cancelEventRegistration(eventId: number): Observable<any> {
    throw new Error("Not implemented yet");
  }

  postEventImage(eventId: number, photo: File): Observable<string> {
    throw new Error("Method not implemented.");
  }

  getEventImage(eventId: number): Observable<Blob> {
    throw new Error("Method not implemented.");
  }

  filterMockEvents(eventSearchDetails: EventSearchDetails) {
    return mockEvents
      .filter(event => event.name.toLowerCase().includes(eventSearchDetails.name.toLowerCase()))
      .filter(event => event.organizingUnit.name.toLowerCase().includes(eventSearchDetails.organizer.toLowerCase()))
      .filter(event => (eventSearchDetails.dateFrom || eventSearchDetails.dateFrom === '') ? true : event.date >= eventSearchDetails.dateFrom)
      .filter(event => (eventSearchDetails.dateTo || eventSearchDetails.dateTo === '') ? true : event.date <= eventSearchDetails.dateTo)
  }

  getEventInvitationsPage(pageable: PageableDto): Observable<ObjectPageDto<EventInvitation>> {
    throw new Error("Not implemented yet");
  }

  acceptEventInvitation(invitationId: number): Observable<any> {
    throw new Error("Not implemented yet!");
  }

  declineEventInvitation(invitationId: number): Observable<any> {
    throw new Error("Not implemented yet!");
  }

  inviteFriend(eventId: number, userId: number): Observable<any> {
    throw new Error("Not implemented yet!");
  }

  deleteEvent(eventId: number): Observable<any> {
    throw new Error("Not implemented yet!");
  }
}
