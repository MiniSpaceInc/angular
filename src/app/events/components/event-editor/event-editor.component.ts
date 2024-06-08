import {Component, ElementRef, EventEmitter, inject, OnInit, Output, ViewChild} from '@angular/core';
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
  @ViewChild("richText") richTextDiv!: ElementRef;

  eventFactory = inject(EventFactory);
  eventForm = this.createForm();

  eventService: EventService = inject(EVENT_SERVICE);
  organizingUnitService = inject(OrganizingUnitRestService);

  usersOrganizingUnits: OrganizingUnit[] = [];

  file: File | null = null;

  ngOnInit() {
    this.organizingUnitService.getUsersOrganizingUnits(null).subscribe(
      organizingUnits => this.usersOrganizingUnits = organizingUnits
    )
  }

  createForm(): FormGroup {
    return inject(FormBuilder).group(this.eventFactory.createEmptyEvent());
  }

  onSelect(event: any): void {
    this.file = event.files[0];
  }

  onClear(): void {
    this.file = null;
  }

  saveEvent(): void {
    this.eventForm.controls['description'].setValue(this.richTextDiv.nativeElement.innerHTML);
    this.eventService.addEvent(this.eventForm.value).subscribe((createdEvent: any) => {

      if(this.file == null) {
        this.eventSaved.emit();
        return;
      }

      this.eventService.postEventImage(createdEvent.id, this.file).subscribe(() => this.eventSaved.emit());
    });
  }
}
