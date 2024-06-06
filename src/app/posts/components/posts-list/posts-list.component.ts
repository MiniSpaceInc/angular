import {Component, inject, Input, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {AsyncPipe} from "@angular/common";
import {Post} from "../../../core/model/Post";
import {ReactionsComponent} from "../../../core/components/reactions/reactions.component";
import {ORGANIZING_UNITS_SERVICE, POST_SERVICE} from "../../../core/tokens";
import {DialogModule} from "primeng/dialog";
import {PostFormComponent} from "../post-form/post-form.component";
import {Event} from "../../../core/model/Event";

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [
    CardModule,
    AsyncPipe,
    ReactionsComponent,
    DialogModule,
    PostFormComponent
  ],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent implements OnInit {
  @Input() event!: Event;

  postService = inject(POST_SERVICE);
  organizingUnitsService = inject(ORGANIZING_UNITS_SERVICE);
  posts: Post[] = [];
  addNewPostDialogVisible: boolean = false;
  isUserOrganizer: boolean = false;

  ngOnInit() {
    this.refreshPosts();
    this.organizingUnitsService.getUsersOrganizingUnits(null).subscribe(
      units =>
        this.isUserOrganizer = units.find(u => u.id === this.event.organizingUnit.id) !== undefined
    )
  }

  refreshPosts() {
    this.postService.getPostsForEvent(this.event.id).subscribe(
      posts => this.posts = posts
    );
  }
}
