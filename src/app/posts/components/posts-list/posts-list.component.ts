import {Component, inject, Input, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {AsyncPipe} from "@angular/common";
import {Post} from "../../../core/model/Post";
import {PostMockService} from "../../../core/service/post/post-mock.service";
import {ReactionsComponent} from "../../../core/components/reactions/reactions.component";

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [
    CardModule,
    AsyncPipe,
    ReactionsComponent
  ],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent implements OnInit {
  @Input() eventId!: number;

  postService = inject(PostMockService);
  posts: Post[] = [];

  ngOnInit() {
    this.postService.getPostsForEvent(this.eventId).subscribe(
      posts => this.posts = posts
    );
  }
}
