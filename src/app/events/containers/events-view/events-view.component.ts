import { Component } from '@angular/core';
import {EventsListComponent} from "../../components/events-list/events-list.component";
import {EventEditorComponent} from "../event-editor/event-editor.component";

@Component({
  selector: 'app-events-view',
  standalone: true,
  imports: [
    EventsListComponent,
    EventEditorComponent
  ],
  templateUrl: './events-view.component.html',
  styleUrl: './events-view.component.scss'
})
export class EventsViewComponent {
  mode: 'list' | 'edit' = 'list';
}
