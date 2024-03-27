import {Component, inject, ViewChild} from '@angular/core';
import {EventsListComponent} from "../events-list/events-list.component";
import {PaginationComponent} from "../../../core/components/pagination/pagination.component";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {EventSearchDetailsFactory} from "../../../core/model/factory/EventSearchDetailsFactory";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {EventsSearchFormComponent} from "../events-search-form/events-search-form.component";
import {EventService} from "../../../core/service/event/event.service";
import {EventRestService} from "../../../core/service/event/event-rest.service";

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
  eventService: EventService = inject(EventRestService);
  eventSearchDetailsFactory = inject(EventSearchDetailsFactory);

  eventsPerPage = 4;

  @ViewChild('searchForm') searchForm!: EventsSearchFormComponent;
  @ViewChild('eventsList') eventsList!: EventsListComponent;
  @ViewChild('pagination') pagination!: PaginationComponent;

  firstSearch = this.eventService.getEventsPage(
    this.eventSearchDetailsFactory.createEmptyEventSearchDetails(this.eventsPerPage)
  );

  search() {
    this.searchForm.eventSearchDetails.itemsPerPage = this.eventsPerPage;
    this.searchForm.eventSearchDetails.page = this.pagination.currentPage;

    this.eventService.getEventsPage(this.searchForm.eventSearchDetails).subscribe(
      page => {
        this.eventsList.events = page.content;
        this.pagination.pageCount = page.totalPages;
      }
    );
  }
}
