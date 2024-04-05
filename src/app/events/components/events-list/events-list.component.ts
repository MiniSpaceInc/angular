import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Event } from "../../../core/model/Event";
import { AsyncPipe, NgFor } from "@angular/common";
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { Router } from '@angular/router';
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
  @Output() eventSelected = new EventEmitter<Event>();
  router: Router = inject(Router);

  onEventClick(event: Event) {
    this.router.navigate(['/events', event.uuid]);
  }

}
