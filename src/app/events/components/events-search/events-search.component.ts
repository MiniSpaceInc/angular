import {Component, inject} from '@angular/core';
import {EventsListComponent} from "../events-list/events-list.component";
import {Event} from "../../../core/model/Event";
import {PaginationComponent} from "../../../core/components/pagination/pagination.component";
import {EventService} from "../../../core/service/event.service";
import {AsyncPipe} from "@angular/common";

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
  events: Event[] = [];
  eventService = inject(EventService);
  eventsPerPage = 2;
  countEvents = this.eventService.countEvents();
  searchEvents = this.eventService.getEvents(0, this.eventsPerPage);
}
