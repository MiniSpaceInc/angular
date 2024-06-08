import {inject, Injectable} from '@angular/core';
import {EventService} from "./event.service";
import {Observable} from "rxjs";
import {EventSearchDetails} from "../../model/EventSearchDetails";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";
import {Event} from "../../model/Event";
import {HttpClient} from "@angular/common/http";
import {ReactionType} from "../../model/Reactions";
import {ReactionsDto} from "../../model/dto/ReactionsDto";
import {PageableDto} from "../../model/dto/PageableDto";
import {EventInvitation} from "../../model/EventInvitation";

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

  setReaction(eventId: number, reaction: ReactionType | null): Observable<any> {
    return this.http.put(`/api/events/${eventId}/reactions${reaction ? '?reaction=' + reaction : ''}`, null);
  }

  getReactions(eventId: number): Observable<ReactionsDto> {
    return this.http.get<ReactionsDto>(`/api/events/${eventId}/reactions`);
  }

  signUpForEvent(eventId: number): Observable<any> {
    return this.http.post(`/api/events/${eventId}/participants`, null);
  }

  cancelEventRegistration(eventId: number): Observable<any> {
    return this.http.delete(`/api/events/${eventId}/participants`);
  }

  getEventInvitationsPage(pageable: PageableDto): Observable<ObjectPageDto<EventInvitation>> {
    return this.http.post<ObjectPageDto<EventInvitation>>('/api/friends/invitations/search', pageable);
  }

  acceptEventInvitation(invitationId: number): Observable<any> {
    return this.http.post(`/api/friends/invitations/${invitationId}`, null);
  }

  declineEventInvitation(invitationId: number): Observable<any> {
    return this.http.delete(`/api/friends/invitations/${invitationId}`);
  }

  postEventImage(eventId: number, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(`/api/events/${eventId}/image`, formData);
  }

  getEventImage(eventId: number): Observable<Blob> {
    return this.http.get(`/api/events/${eventId}/image`, {responseType: 'blob'});
  }

  inviteFriend(eventId: number, userId: number): Observable<any> {
    return this.http.post('/api/friends/invitations', {
      eventId: eventId,
      toUserId: userId
    });
  }
}
