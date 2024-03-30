import { Component, Input } from '@angular/core';
import { Event } from "../../../core/model/Event";
import { AsyncPipe, NgFor } from "@angular/common";
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import {
  PaginationComponent
} from "../../../core/components/pagination/pagination.component";

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    PaginationComponent,
    RippleModule,
    CardModule
  ],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.scss'
})
export class EventsListComponent {
  @Input() events: Event[] = [];

  onCardClick(event: Event) {
    console.log(event);
  }
  
}
