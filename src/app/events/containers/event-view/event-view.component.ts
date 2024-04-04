import { EventService } from '../../../core/service/event/event.service';
import { EventMockService } from '../../../core/service/event/event-mock.service';
import { PostMockService } from '../../../core/service/post/post-mock.service';
import { EventFactory } from '../../../core/model/factory/EventFactory';
import { ToggleButtonModule } from 'primeng/togglebutton';
import {Component, inject, OnInit} from '@angular/core';
import { Event } from '../../../core/model/Event';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../core/model/Post';
import { CardModule } from 'primeng/card';
import {AsyncPipe, NgFor} from '@angular/common';
import {mergeMap} from "rxjs";
import {EventDetailsComponent} from "../../components/event-details/event-details.component";
import {PostsListComponent} from "../../../posts/components/posts-list/posts-list.component";
import {EventRestService} from "../../../core/service/event/event-rest.service";

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
  eventService: EventService = inject(EventRestService);
  event: Event = inject(EventFactory).createEmptyEvent();
  route: ActivatedRoute = inject(ActivatedRoute);

  getEvent = this.route.params.pipe(
    mergeMap(params => this.eventService.getEventByUuid(params['uuid']))
  );
}
