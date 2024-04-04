import {Component, inject, Input} from '@angular/core';
import {PostMockService} from "../../../core/service/post/post-mock.service";
import {CardModule} from "primeng/card";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [
    CardModule,
    AsyncPipe
  ],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent {
  @Input() eventId!: number;

  postService = inject(PostMockService);

  getPosts = this.postService.getPostsForEvent(this.eventId);
}
