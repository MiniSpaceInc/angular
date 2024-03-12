import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {mockEvents} from "./mockEvents";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getEvents() {
    return of(mockEvents);
  }
}
