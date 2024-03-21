import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { debounceTime, distinct, distinctUntilChanged } from 'rxjs';
import { EventFactory } from '../../../core/model/factory/EventFactory';
import { Event } from '../../../core/model/Event';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-event-editor-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CalendarModule,
    InputTextareaModule,
    InputTextModule,
    CardModule,

  ],
  templateUrl: './event-editor-form.component.html',
  styleUrl: './event-editor-form.component.scss'
})
export class EventEditorFormComponent {
  @Output() valueChanged = new EventEmitter<Event>();

  eventFactory = inject(EventFactory);
  event = this.eventFactory.createEmptyEvent();

  eventForm = this.createForm();

  ngOnInit() {

    this.eventForm.get('name')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      this.event.name = value ? value : '';
      this.valueChanged.emit(this.event);
    })

    this.eventForm.get('date')?.valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe(value => {
      this.event.date = value ? value : '';
      this.valueChanged.emit(this.event);
    })

    this.eventForm.get('description')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      this.event.name = value ? value : '';
      this.valueChanged.emit(this.event);
    })

  }
  
  createForm() {
    return inject(FormBuilder).group({
      name: [''],
      date: [''],
      description: [''],
    });
  }
  

}
