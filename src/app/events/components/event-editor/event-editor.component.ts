import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { EventFactory } from '../../../core/model/factory/EventFactory';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import {EventMockService} from "../../../core/service/event/event-mock.service";
import {EventService} from "../../../core/service/event/event.service";

@Component({
  selector: 'app-event-editor',
  standalone: true,
  imports: [
    CalendarModule,
    ReactiveFormsModule,
    FileUploadModule,
    CardModule,
    ImageModule,
    InputTextModule,
    InputTextareaModule,
  ],
  templateUrl: './event-editor.component.html',
  styleUrl: './event-editor.component.scss'
})
export class EventEditorComponent {
  @Output() eventSaved = new EventEmitter<void>();

  eventFactory = inject(EventFactory);
  eventForm = this.createForm();
  eventService: EventService = inject(EventMockService);

  createForm(): FormGroup {
    return inject(FormBuilder).group(this.eventFactory.createEmptyEvent());
  }

  saveEvent(): void {
    this.eventService.addEvent(this.eventForm.value).subscribe(() => {
      console.log("Event saved!");
      this.eventSaved.emit();
    });
  }
}
