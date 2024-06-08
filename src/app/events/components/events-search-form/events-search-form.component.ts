import {ChangeDetectorRef, Component, EventEmitter, inject, OnInit, Output, ViewChild} from '@angular/core';
import {EventSearchDetails} from "../../../core/model/EventSearchDetails";
import {EventSearchDetailsFactory} from "../../../core/model/factory/EventSearchDetailsFactory";
import {Calendar, CalendarModule} from "primeng/calendar";
import {PaginatorModule} from "primeng/paginator";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs";
import {CheckboxModule} from "primeng/checkbox";

@Component({
  selector: 'app-events-search-form',
  standalone: true,
  imports: [
    CalendarModule,
    PaginatorModule,
    ReactiveFormsModule,
    CheckboxModule
  ],
  templateUrl: './events-search-form.component.html',
  styleUrl: './events-search-form.component.scss'
})
export class EventsSearchFormComponent implements OnInit {
  @Output() valueChanged = new EventEmitter<EventSearchDetails>();

  @ViewChild("dateFromCalendar") dateFromCalendar!: Calendar;

  private cdr = inject(ChangeDetectorRef);
  eventSearchDetailsFactory = inject(EventSearchDetailsFactory);
  eventSearchDetails = this.eventSearchDetailsFactory.createEmptyEventSearchDetails(0);

  searchForm = this.createForm();
  date = new Date();

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

    this.searchForm.get('searchInSubunits')?.valueChanges.subscribe(
      value => {
        this.eventSearchDetails.searchInSubunits = value ? value : false;
        this.valueChanged.emit(this.eventSearchDetails);
      }
    )
  }

  ngAfterViewInit() {
    const date = new Date();
    this.dateFromCalendar.value = date;
    this.dateFromCalendar.updateInputfield();
    this.cdr.detectChanges();
    this.eventSearchDetails.dateFrom = date.toISOString();
  }

  createForm() {
    return inject(FormBuilder).group({
      name: [''],
      organizer: [''],
      dateFrom: [''],
      dateTo: [''],
      searchInSubunits: false
    });
  }
}
