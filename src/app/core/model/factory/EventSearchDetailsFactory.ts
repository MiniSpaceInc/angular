import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventSearchDetailsFactory {
  createEventSearchDetails(itemsPerPage: number) {
    return {
      name: '',
      organizer: '',
      date: '',
      page: 0,
      itemsOnPage: itemsPerPage,
      sortBy: ''
    };
  }
}
