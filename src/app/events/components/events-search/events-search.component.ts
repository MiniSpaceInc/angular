import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {EventsListComponent} from "../events-list/events-list.component";
import {PaginationComponent} from "../../../core/components/pagination/pagination.component";
import {EventService} from "../../../core/service/event.service";
import {AsyncPipe} from "@angular/common";
import {EventSearchDetails} from "../../../core/model/EventSearchDetails";
import {EventSearchDetailsFactory} from "../../../core/model/factory/EventSearchDetailsFactory";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs";

@Component({
  selector: 'app-events-search',
  standalone: true,
  imports: [
    EventsListComponent,
    PaginationComponent,
    AsyncPipe,
    ReactiveFormsModule
  ],
  templateUrl: './events-search.component.html',
  styleUrl: './events-search.component.scss'
})
export class EventsSearchComponent implements OnInit{
  protected readonly Math = Math;

  eventService = inject(EventService);
  eventSearchDetailsFactory = inject(EventSearchDetailsFactory).createEventSearchDetails;
  formBuilder = inject(FormBuilder);

  eventsPerPage = 4;
  eventSearchDetails = this.eventSearchDetailsFactory(this.eventsPerPage);

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
      console.log(value);
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
      name: this.formBuilder.control('')
    });
  }

  calculatePageCount(count: number) {
    return Math.ceil(count / this.eventsPerPage);
  }
}
