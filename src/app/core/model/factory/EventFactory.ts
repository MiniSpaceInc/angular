import { Injectable } from '@angular/core';
import { Event } from '../Event';

@Injectable({
  providedIn: 'root'
})
export class EventFactory {
  createEmptyEvent(): Event {
    return {
        id: 0,
        uuid: '',
        name: '',
        organizer: '',
        date: '',
        description: '',
    };
  }
}
