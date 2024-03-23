import {Component, inject, ViewChild} from '@angular/core';
import {EventsListComponent} from "../events-list/events-list.component";
import {PaginationComponent} from "../../../core/components/pagination/pagination.component";
import {EventMockService} from "../../../core/service/event/event-mock.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {EventSearchDetailsFactory} from "../../../core/model/factory/EventSearchDetailsFactory";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {EventsSearchFormComponent} from "../events-search-form/events-search-form.component";
import {EventService} from "../../../core/service/event/event.service";

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
  eventService: EventService = inject(EventMockService);
  eventSearchDetailsFactory = inject(EventSearchDetailsFactory);

  eventsPerPage = 4;

  countEvents = this.eventService.countEvents(
    this.eventSearchDetailsFactory.createEmptyEventSearchDetails(this.eventsPerPage)
  );

  searchEvents = this.eventService.getEvents(
    this.eventSearchDetailsFactory.createEmptyEventSearchDetails(this.eventsPerPage)
  );

  @ViewChild('searchForm') searchForm!: EventsSearchFormComponent;
  @ViewChild('eventsList') eventsList!: EventsListComponent;
  @ViewChild('pagination') pagination!: PaginationComponent;

  search() {
    this.searchForm.eventSearchDetails.itemsPerPage = this.eventsPerPage;
    this.searchForm.eventSearchDetails.page = this.pagination.currentPage;

    this.eventService.countEvents(this.searchForm.eventSearchDetails)
      .subscribe(data => this.pagination.pageCount = this.calculatePageCount(data));

    this.eventService.getEvents(this.searchForm.eventSearchDetails)
      .subscribe(data => this.eventsList.events = data);
  }

  calculatePageCount(count: number) {
    return Math.ceil(count / this.eventsPerPage);
  }
}
