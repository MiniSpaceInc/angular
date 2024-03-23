import {EventSearchDetails} from "../../model/EventSearchDetails";
import {Event} from "../../model/Event";
import {Observable} from "rxjs";

export interface EventService {
    getEvents(eventSearchDetails: EventSearchDetails): Observable<Event[]>;
    countEvents(eventSearchDetails: EventSearchDetails): Observable<number>;
    addEvent(event: Event): Observable<number>;
}
