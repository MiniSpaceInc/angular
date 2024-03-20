import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {EventsListComponent} from "../events-list/events-list.component";
import {PaginationComponent} from "../../../core/components/pagination/pagination.component";
import {EventService} from "../../../core/service/event.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {EventSearchDetailsFactory} from "../../../core/model/factory/EventSearchDetailsFactory";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs";
import {CalendarModule} from "primeng/calendar";

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
    JsonPipe
  ],
  templateUrl: './events-search.component.html',
  styleUrl: './events-search.component.scss'
})
export class EventsSearchComponent implements OnInit{
  eventService = inject(EventService);
  eventSearchDetailsFactory = inject(EventSearchDetailsFactory);
  formBuilder = inject(FormBuilder);

  eventsPerPage = 4;
  eventSearchDetails = this.eventSearchDetailsFactory.createEmptyEventSearchDetails(this.eventsPerPage);

  searchForm = this.createForm();

  countEvents = this.eventService.countEvents(this.eventSearchDetails);
  searchEvents = this.eventService.getEvents(this.eventSearchDetails);

  @ViewChild('eventsList') eventsList!: EventsListComponent;
  @ViewChild('pagination') pagination!: PaginationComponent;

  ngOnInit() {
    this.searchForm.get('name')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      this.eventSearchDetails.name = value ? value : '';
      this.search();
    });

    this.searchForm.get('organizer')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      this.eventSearchDetails.organizer = value ? value : '';
      this.search();
    })

    this.searchForm.get('dateFrom')?.valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe(value => {
      this.eventSearchDetails.dateFrom = value ? value : '';
      this.search();
    });

    this.searchForm.get('dateTo')?.valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe(value => {
      this.eventSearchDetails.dateTo = value ? value : '';
      this.search();
    });
  }

  search() {
    this.eventService.countEvents(this.eventSearchDetails)
      .subscribe(data => this.pagination.pageCount = this.calculatePageCount(data));

    this.eventService.getEvents(this.eventSearchDetails)
      .subscribe(data => this.eventsList.events = data);
  }

  createForm() {
    return this.formBuilder.group({
      name: this.formBuilder.control(this.eventSearchDetails.name),
      organizer: this.formBuilder.control(''),
      dateFrom: this.formBuilder.control(this.eventSearchDetails.dateFrom),
      dateTo: this.formBuilder.control(this.eventSearchDetails.dateTo)
    });
  }

  calculatePageCount(count: number) {
    return Math.ceil(count / this.eventsPerPage);
  }
}
