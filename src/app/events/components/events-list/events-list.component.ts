import {Component, Input} from '@angular/core';
import {Event} from "../../../core/model/Event";
import {AsyncPipe} from "@angular/common";
import {
  PaginationComponent
} from "../../../core/components/pagination/pagination.component";

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [
    AsyncPipe,
    PaginationComponent
  ],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.scss'
})
export class EventsListComponent {
  @Input() events: Event[] = [];
}
