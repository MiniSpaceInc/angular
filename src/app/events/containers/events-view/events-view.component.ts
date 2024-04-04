import {Component} from '@angular/core';
import {EventsListComponent} from "../../components/events-list/events-list.component";
import {EventEditorComponent} from "../../components/event-editor/event-editor.component";
import {AsyncPipe} from "@angular/common";
import {EventsSearchComponent} from "../../components/events-search/events-search.component";
import {EventViewComponent} from '../event-view/event-view.component';

@Component({
  selector: 'app-events-view',
  standalone: true,
  imports: [
    EventsListComponent,
    EventEditorComponent,
    AsyncPipe,
    EventsSearchComponent,
    EventViewComponent,
  ],
  templateUrl: './events-view.component.html',
  styleUrl: './events-view.component.scss'
})
export class EventsViewComponent {
  mode: 'list' | 'edit' = 'list';

  selectedEvent: any;
}
