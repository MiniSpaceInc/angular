import {Component, EventEmitter, inject, Output, ViewChild} from '@angular/core';
import {EventsListComponent} from "../events-list/events-list.component";
import {PaginationComponent} from "../../../core/components/pagination/pagination.component";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {EventSearchDetailsFactory} from "../../../core/model/factory/EventSearchDetailsFactory";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {EventsSearchFormComponent} from "../events-search-form/events-search-form.component";
import {EventService} from "../../../core/service/event/event.service";
import {EventRestService} from "../../../core/service/event/event-rest.service";
import { EventMockService } from '../../../core/service/event/event-mock.service';

@Component({
  selector: 'app-events-search',
  standalone: true,
  imports: [
    EventsListComponent,
    PaginationComponent,
    AsyncPipe,
    ReactiveFormsModule,
    CalendarModule,
    FormsModule,
    JsonPipe,
    EventsSearchFormComponent
  ],
  templateUrl: './events-search.component.html',
  styleUrl: './events-search.component.scss'
})
export class EventsSearchComponent {
  @Output() eventSelected = new EventEmitter<Event>();

  eventService: EventService = inject(EventMockService);
  eventSearchDetailsFactory = inject(EventSearchDetailsFactory);

  eventsPerPage = 4;

  @ViewChild('searchForm') searchForm!: EventsSearchFormComponent;
  @ViewChild('eventsList') eventsList!: EventsListComponent;
  @ViewChild('pagination') pagination!: PaginationComponent;

  firstSearch = this.eventService.getEventsPage(
    this.eventSearchDetailsFactory.createEmptyEventSearchDetails(this.eventsPerPage)
  );

  search() {
    this.searchForm.eventSearchDetails.pageable.size = this.eventsPerPage;
    this.searchForm.eventSearchDetails.pageable.page = this.pagination.currentPage;

    this.eventService.getEventsPage(this.searchForm.eventSearchDetails).subscribe(
      page => {
        this.eventsList.events = page.content;
        this.pagination.pageCount = page.totalPages;
      }
    );
  }
}
