import {Component, inject, Input, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {AsyncPipe} from "@angular/common";
import {PostRestService} from "../../../core/service/post/post-rest.service";
import {Post} from "../../../core/model/Post";

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
export class PostsListComponent implements OnInit {
  @Input() eventId!: number;

  postService = inject(PostRestService);
  posts: Post[] = [];

  ngOnInit() {
    this.postService.getPostsForEvent(this.eventId).subscribe(
      posts => this.posts = posts
    );
  }
}
