import {EventSearchDetails} from "../../model/EventSearchDetails";
import {Event} from "../../model/Event";
import {Observable} from "rxjs";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";

export interface EventService {
    getEventsPage(eventSearchDetails: EventSearchDetails): Observable<ObjectPageDto<Event>>;
    addEvent(event: Event): Observable<any>;
}
