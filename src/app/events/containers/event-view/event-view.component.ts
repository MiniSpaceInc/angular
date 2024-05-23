import { ToggleButtonModule } from 'primeng/togglebutton';
import {Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import {AsyncPipe, NgFor} from '@angular/common';
import {mergeMap} from "rxjs";
import {EventDetailsComponent} from "../../components/event-details/event-details.component";
import {PostsListComponent} from "../../../posts/components/posts-list/posts-list.component";
import {EventRestService} from "../../../core/service/event/event-rest.service";
import { EventMockService } from '../../../core/service/event/event-mock.service';
import { CommentsComponent } from '../../../comments/comments.component';
import { CommentService } from '../../../core/service/comment/comment.service';
import { CommentMockService } from '../../../core/service/comment/comment-mock.service';
import {EVENT_SERVICE} from "../../../core/tokens";

@Component({
  selector: 'app-event-view',
  standalone: true,
  imports: [
    CardModule,
    ToggleButtonModule,
    NgFor,
    EventDetailsComponent,
    CommentsComponent,
    PostsListComponent,
    AsyncPipe,
  ],
  templateUrl: './event-view.component.html',
  styleUrl: './event-view.component.scss'
})
export class EventViewComponent {
  eventService: EventService = inject(EVENT_SERVICE);
  commentService: CommentService = inject(CommentMockService);
  route: ActivatedRoute = inject(ActivatedRoute);

  getEvent = this.route.params.pipe(
    mergeMap(params => this.eventService.getEventByUuid(params['uuid']))
  );

  getComments = this.route.params.pipe(
    mergeMap(params => this.commentService.getCommentsByEventUuid(params['uuid']))
  );

}
