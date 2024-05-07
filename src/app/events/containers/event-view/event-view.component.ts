import { ToggleButtonModule } from 'primeng/togglebutton';
import {Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import {AsyncPipe, NgFor} from '@angular/common';
import {mergeMap} from "rxjs";
import {EventDetailsComponent} from "../../components/event-details/event-details.component";
import {PostsListComponent} from "../../../posts/components/posts-list/posts-list.component";
import {EVENT_SERVICE} from "../../../core/tokens";

@Component({
  selector: 'app-event-view',
  standalone: true,
  imports: [
    CardModule,
    ToggleButtonModule,
    NgFor,
    EventDetailsComponent,
    PostsListComponent,
    AsyncPipe,
  ],
  templateUrl: './event-view.component.html',
  styleUrl: './event-view.component.scss'
})
export class EventViewComponent {
  eventService = inject(EVENT_SERVICE);
  route = inject(ActivatedRoute);

  getEvent = this.route.params.pipe(
    mergeMap(params => this.eventService.getEventByUuid(params['uuid']))
  );
}
