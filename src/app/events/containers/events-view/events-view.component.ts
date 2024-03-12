import { Component } from '@angular/core';
import {EventsListComponent} from "../../components/events-list/events-list.component";

@Component({
  selector: 'app-events-view',
  standalone: true,
  imports: [
    EventsListComponent
  ],
  templateUrl: './events-view.component.html',
  styleUrl: './events-view.component.scss'
})
export class EventsViewComponent {

}
