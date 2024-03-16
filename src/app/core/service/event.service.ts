import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {mockEvents} from "./mockEvents";
import {EventSearchDetails} from "../model/EventSearchDetails";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getEvents(eventSearchDetails: EventSearchDetails) {
    console.log(eventSearchDetails.page);
    return of(mockEvents.slice(eventSearchDetails.page * eventSearchDetails.itemsOnPage, eventSearchDetails.page * eventSearchDetails.itemsOnPage + eventSearchDetails.itemsOnPage));
  }

  countEvents(eventSearchDetails: EventSearchDetails) {
    return of(mockEvents.length);
  }
}
