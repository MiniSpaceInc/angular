import {inject, Injectable} from '@angular/core';
import {PageableFactory} from "./PageableFactory";

@Injectable({
  providedIn: 'root'
})
export class EventSearchDetailsFactory {
  pageableFactory = inject(PageableFactory);

  createEmptyEventSearchDetails(itemsPerPage: number) {
    return {
      name: '',
      organizer: '',
      dateFrom: '',
      dateTo: '',
      pageable: this.pageableFactory.createPageableWithNoSorting(itemsPerPage)
    };
  }
}
