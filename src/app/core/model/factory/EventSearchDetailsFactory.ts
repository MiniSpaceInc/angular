import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventSearchDetailsFactory {
  createEmptyEventSearchDetails(itemsPerPage: number) {
    return {
      name: '',
      organizer: '',
      dateFrom: '',
      dateTo: '',
      page: 0,
      itemsPerPage: itemsPerPage,
      sortBy: ''
    };
  }
}
