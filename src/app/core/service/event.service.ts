import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {mockEvents} from "./mockEvents";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getEvents(page: number, itemsPerPage: number) {
    return of(mockEvents.slice(page * itemsPerPage, (page + 1) * itemsPerPage));
  }

  countEvents() {
    return of(mockEvents.length);
  }
}
