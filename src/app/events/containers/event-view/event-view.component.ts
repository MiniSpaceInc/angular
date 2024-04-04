import { EventService } from '../../../core/service/event/event.service';
import { EventMockService } from '../../../core/service/event/event-mock.service';
import { PostMockService } from '../../../core/service/post/post-mock.service';
import { EventFactory } from '../../../core/model/factory/EventFactory';
import { ToggleButtonModule } from 'primeng/togglebutton';
import {Component, inject, Input, OnInit} from '@angular/core';
import { Event } from '../../../core/model/Event';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../core/model/Post';
import { CardModule } from 'primeng/card';
import { NgFor } from '@angular/common';
import {mergeMap} from "rxjs";

@Component({
  selector: 'app-event-view',
  standalone: true,
  imports: [
    CardModule,
    ToggleButtonModule,
    NgFor,
  ],
  templateUrl: './event-view.component.html',
  styleUrl: './event-view.component.scss'
})
export class EventViewComponent implements OnInit {
  posts: Post[] = inject(PostMockService).getPosts();
  eventService: EventService = inject(EventMockService);
  event: Event = inject(EventFactory).createEmptyEvent();
  route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.route.params.pipe(
      mergeMap(params => this.eventService.getEventByUuid(params['uuid']))
    ).subscribe(
      event => this.event = event
    )
  }
}
