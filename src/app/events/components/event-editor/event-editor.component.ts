import { Component, inject, ViewChild } from '@angular/core';
import { EventEditorFormComponent } from '../event-editor-form/event-editor-form.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-editor',
  standalone: true,
  imports: [
    EventEditorFormComponent,
    CalendarModule,
    FormsModule,
  ],
  templateUrl: './event-editor.component.html',
  styleUrl: './event-editor.component.scss'
})
export class EventEditorComponent {

}
