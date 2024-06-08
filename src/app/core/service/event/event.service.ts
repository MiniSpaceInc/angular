import {EventSearchDetails} from "../../model/EventSearchDetails";
import {Event} from "../../model/Event";
import {Observable} from "rxjs";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";
import {ReactionType} from "../../model/Reactions";
import {ReactionsDto} from "../../model/dto/ReactionsDto";
import {PageableDto} from "../../model/dto/PageableDto";
import {EventInvitation} from "../../model/EventInvitation";

export interface EventService {
  getEventsPage(eventSearchDetails: EventSearchDetails): Observable<ObjectPageDto<Event>>;
  addEvent(event: Event): Observable<any>;
  getEventByUuid(uuid: string): Observable<Event>;
  setReaction(eventId: number, reaction: ReactionType | null): Observable<any>;
  getReactions(eventId: number): Observable<ReactionsDto>;
  signUpForEvent(eventId: number): Observable<any>;
  cancelEventRegistration(eventId: number): Observable<any>;
  getEventInvitationsPage(pageable: PageableDto): Observable<ObjectPageDto<EventInvitation>>;
  acceptEventInvitation(invitationId: number): Observable<any>;
  declineEventInvitation(invitationId: number): Observable<any>;
  inviteFriend(eventId:number, userId: number): Observable<any>;
  postEventImage(eventId: number, photo: File): Observable<string>;
}
