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
import { EventService } from "../../../core/service/event/event.service";
import { EventRestService } from "../../../core/service/event/event-rest.service";

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
  eventService: EventService = inject(EventRestService);

  createForm(): FormGroup {
    return inject(FormBuilder).group(this.eventFactory.createEmptyEvent());
  }

  saveEvent(): void {
    this.eventService.addEvent(this.eventForm.value).subscribe(response => {
      console.log(response);
      this.eventSaved.emit();
    });
  }
}
