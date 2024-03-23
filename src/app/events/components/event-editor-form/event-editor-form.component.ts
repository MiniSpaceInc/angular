import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { EventFactory } from '../../../core/model/factory/EventFactory';
import { Event } from '../../../core/model/Event';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-event-editor-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CalendarModule,
    InputTextareaModule,
    InputTextModule,
    CardModule,
    FileUploadModule,
    ImageModule,
    ButtonModule,
  ],
  templateUrl: './event-editor-form.component.html',
  styleUrl: './event-editor-form.component.scss'
})

export class EventEditorFormComponent {

  eventFactory = inject(EventFactory);
  eventForm = this.createForm();
  
  createForm(): FormGroup {
    var emptyEvent = this.eventFactory.createEmptyEvent();
    return inject(FormBuilder).group(emptyEvent);
  }
  
  saveEvent(): void {
    var event = this.eventForm.value as Event;

    // TODO: invoke an outside service to save the event
    console.log(event);
    
  }
}

