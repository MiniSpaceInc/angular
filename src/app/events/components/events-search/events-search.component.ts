import {Component, EventEmitter, inject, Output, ViewChild} from '@angular/core';
import {EventsListComponent} from "../events-list/events-list.component";
import {PaginationComponent} from "../../../core/components/pagination/pagination.component";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {EventSearchDetailsFactory} from "../../../core/model/factory/EventSearchDetailsFactory";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {EventsSearchFormComponent} from "../events-search-form/events-search-form.component";
import {EventService} from "../../../core/service/event/event.service";
import {EVENT_SERVICE} from "../../../core/tokens";

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

  eventService: EventService = inject(EVENT_SERVICE);
  eventSearchDetailsFactory = inject(EventSearchDetailsFactory);

  eventsPerPage = 4;

  @ViewChild('pagination') pagination!: PaginationComponent;
  @ViewChild('searchForm') searchForm!: EventsSearchFormComponent;
  @ViewChild('eventsList') eventsList!: EventsListComponent;

  firstSearch = this.eventService.getEventsPage(
    this.eventSearchDetailsFactory.createEmptyEventSearchDetails(this.eventsPerPage)
  );

  ngAfterViewInit() {
    this.search();
  }

  search() {
    this.searchForm.eventSearchDetails.pageable.size = this.eventsPerPage;
    this.searchForm.eventSearchDetails.pageable.page = this.pagination ? this.pagination.currentPage : 0;

    this.eventService.getEventsPage(this.searchForm.eventSearchDetails).subscribe(
      page => {
        this.eventsList.events = page.content;
        this.pagination.pageCount = page.totalPages;
      }
    );
  }
}
