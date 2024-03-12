import {Component, inject} from '@angular/core';
import {EventsListComponent} from "../../components/events-list/events-list.component";
import {EventEditorComponent} from "../../components/event-editor/event-editor.component";
import {EventService} from "../../../core/service/event.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-events-view',
  standalone: true,
  imports: [
    EventsListComponent,
    EventEditorComponent,
    AsyncPipe
  ],
  templateUrl: './events-view.component.html',
  styleUrl: './events-view.component.scss'
})
export class EventsViewComponent {
  mode: 'list' | 'edit' = 'list';

  eventService = inject(EventService);
  search = this.eventService.getEvents(); //TODO - modify to run on search parameters change
}
