import { Component, inject, Input } from '@angular/core';
import { EventFactory } from '../../../core/model/factory/EventFactory';
import { Event } from '../../../core/model/Event';

@Component({
  selector: 'app-event-view',
  standalone: true,
  imports: [],
  templateUrl: './event-view.component.html',
  styleUrl: './event-view.component.scss'
})
export class EventViewComponent {
  @Input() event: Event = inject(EventFactory).createEmptyEvent();
}
