import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventFactory {
  createEmptyEvent() {
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
