import {Component, inject, ViewChild} from '@angular/core';
import {EventsListComponent} from "../events-list/events-list.component";
import {PaginationComponent} from "../../../core/components/pagination/pagination.component";
import {EventService} from "../../../core/service/event.service";
import {AsyncPipe} from "@angular/common";
import {EventSearchDetails} from "../../../core/model/EventSearchDetails";

@Component({
  selector: 'app-events-search',
  standalone: true,
  imports: [
    EventsListComponent,
    PaginationComponent,
    AsyncPipe
  ],
  templateUrl: './events-search.component.html',
  styleUrl: './events-search.component.scss'
})
export class EventsSearchComponent {
  protected readonly Math = Math;

  eventService = inject(EventService);
  eventsPerPage = 4;
  eventSearchDetails: EventSearchDetails = {
    name: '',
    organizer: '',
    date: '',
    page: 0,
    itemsOnPage: this.eventsPerPage,
    sortBy: ''
  };

  countEvents = this.eventService.countEvents(this.eventSearchDetails);
  searchEvents = this.eventService.getEvents(this.eventSearchDetails);

  @ViewChild('eventsList') eventsList!: EventsListComponent;

  search() {
    this.eventService.getEvents(this.eventSearchDetails).subscribe(data => this.eventsList.events = data);
  }
}
