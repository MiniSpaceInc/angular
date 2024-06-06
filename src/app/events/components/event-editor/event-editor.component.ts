import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
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
import {DropdownModule} from "primeng/dropdown";
import {OrganizingUnit} from "../../../core/model/OrganizingUnit";
import {OrganizingUnitRestService} from "../../../core/service/organizing-unit/organizing-unit-rest.service";
import {EVENT_SERVICE} from "../../../core/tokens";
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
    DropdownModule,
  ],
  templateUrl: './event-editor.component.html',
  styleUrl: './event-editor.component.scss'
})
export class EventEditorComponent implements OnInit {
  @Output() eventSaved = new EventEmitter<void>();

  eventFactory = inject(EventFactory);
  eventForm = this.createForm();

  eventService: EventService = inject(EVENT_SERVICE);
  organizingUnitService = inject(OrganizingUnitRestService);

  usersOrganizingUnits: OrganizingUnit[] = [];

  ngOnInit() {
    this.organizingUnitService.getUsersOrganizingUnits(null).subscribe(
      organizingUnits => this.usersOrganizingUnits = organizingUnits
    )
  }

  createForm(): FormGroup {
    return inject(FormBuilder).group(this.eventFactory.createEmptyEvent());
  }

  saveEvent(): void {
    this.eventService.addEvent(this.eventForm.value).subscribe(() => {
      this.eventSaved.emit();
    });
  }
}
