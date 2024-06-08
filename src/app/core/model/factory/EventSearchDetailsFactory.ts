import {inject, Injectable} from '@angular/core';
import {PageableFactory} from "./PageableFactory";
import {EventSearchDetails} from "../EventSearchDetails";

@Injectable({
  providedIn: 'root'
})
export class EventSearchDetailsFactory {
  pageableFactory = inject(PageableFactory);

  createEmptyEventSearchDetails(itemsPerPage: number): EventSearchDetails {
    return {
      name: '',
      organizer: '',
      dateFrom: '',
      dateTo: '',
      pageable: this.pageableFactory.createPageableWithNoSorting(itemsPerPage),
      searchInSubunits: false
    };
  }
}
