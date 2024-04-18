import { EventService } from '../../../core/service/event/event.service';
import { ToggleButtonModule } from 'primeng/togglebutton';
import {Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import {AsyncPipe, NgFor} from '@angular/common';
import {mergeMap} from "rxjs";
import {EventDetailsComponent} from "../../components/event-details/event-details.component";
import {PostsListComponent} from "../../../posts/components/posts-list/posts-list.component";
import {EventRestService} from "../../../core/service/event/event-rest.service";
import {EventMockService} from "../../../core/service/event/event-mock.service";

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
  eventService: EventService = inject(EventMockService);
  route: ActivatedRoute = inject(ActivatedRoute);

  getEvent = this.route.params.pipe(
    mergeMap(params => this.eventService.getEventByUuid(params['uuid']))
  );
}
