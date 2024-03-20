import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {EventSearchDetails} from "../../../core/model/EventSearchDetails";
import {EventSearchDetailsFactory} from "../../../core/model/factory/EventSearchDetailsFactory";
import {CalendarModule} from "primeng/calendar";
import {PaginatorModule} from "primeng/paginator";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs";

@Component({
  selector: 'app-events-search-form',
  standalone: true,
  imports: [
    CalendarModule,
    PaginatorModule,
    ReactiveFormsModule
  ],
  templateUrl: './events-search-form.component.html',
  styleUrl: './events-search-form.component.scss'
})
export class EventsSearchFormComponent implements OnInit {
  @Output() valueChanged = new EventEmitter<EventSearchDetails>();

  eventSearchDetailsFactory = inject(EventSearchDetailsFactory);
  eventSearchDetails = this.eventSearchDetailsFactory.createEmptyEventSearchDetails(0);

  searchForm = this.createForm();

  ngOnInit() {
    this.searchForm.get('name')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      this.eventSearchDetails.name = value ? value : '';
      this.valueChanged.emit(this.eventSearchDetails);
    });

    this.searchForm.get('organizer')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      this.eventSearchDetails.organizer = value ? value : '';
      this.valueChanged.emit(this.eventSearchDetails);
    })

    this.searchForm.get('dateFrom')?.valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe(value => {
      this.eventSearchDetails.dateFrom = value ? value : '';
      this.valueChanged.emit(this.eventSearchDetails);
    });

    this.searchForm.get('dateTo')?.valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe(value => {
      this.eventSearchDetails.dateTo = value ? value : '';
      this.valueChanged.emit(this.eventSearchDetails);
    });
  }

  createForm() {
    return inject(FormBuilder).group({
      name: [''],
      organizer: [''],
      dateFrom: [''],
      dateTo: ['']
    });
  }
}
