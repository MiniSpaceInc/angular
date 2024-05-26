import {Component, inject, Input, OnInit, ViewChild} from '@angular/core';
import { Comment } from '../core/model/Comment';
import { NgFor } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../core/service/comment/comment.service';
import { CommentFactory } from '../core/model/factory/CommentFactory';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ListboxModule } from 'primeng/listbox';
import { OverlayPanel } from 'primeng/overlaypanel';
import {COMMENT_SERVICE} from "../core/tokens";
import {Post} from "../core/model/Post";
import {Event} from "../core/model/Event";
import {CommentSearchDetailsDto} from "../core/model/dto/CommentSearchDetailsDto";
import {PaginatorModule} from "primeng/paginator";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    FieldsetModule,
    AvatarModule,
    PanelModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    OverlayPanelModule,
    ListboxModule,
    PaginatorModule
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {
  private readonly INITIAL_ITEMS_PER_PAGE = 2;

  @Input() object!: Event | Post;
  @ViewChild('op') op!: OverlayPanel;

  comments: Comment[] = [];
  totalComments: number = 0;
  commentsPerPage: number = this.INITIAL_ITEMS_PER_PAGE;

  commentService: CommentService = inject(COMMENT_SERVICE);
  commentFactory: CommentFactory = inject(CommentFactory);
  selectedComment: Comment | null = null;
  content: string = '';
  commentSearchDetails: CommentSearchDetailsDto = this.commentFactory.createSearchDetails(this.INITIAL_ITEMS_PER_PAGE);

  ngOnInit() {
    if(this.isEvent(this.object)) {
      this.commentSearchDetails.eventId = this.object.id;
    } else {
      this.commentSearchDetails.postId = this.object.id;
    }

    this.searchComments();
  }

  onEnterPressed() {
    this.addComment();
  }

  addComment(): void {
    if (this.content == '') {
      return;
    }

    const createCommentDto = this.commentFactory.createEmptyCreateCommentDto();
    if(this.isEvent(this.object)) {
      createCommentDto.eventId = this.object.id;
    } else {
      createCommentDto.postId = this.object.id;
    }

    createCommentDto.content = this.content.concat();
    this.commentService.addComment(createCommentDto).subscribe(() => this.searchComments());
    this.content = '';
  }

  pageChange(page: number) {
    this.commentSearchDetails.pageable.page = page;
    this.searchComments();
  }

  searchComments(): void {
    this.commentService.getComments(this.commentSearchDetails).subscribe(page => {
        this.comments = page.content;
        this.totalComments = page.totalElements;
      }
    );
  }

  deleteComment(): void {
    // if(this.selectedComment === null) return;
    // this.commentService.deleteCommentByUuid(this.selectedComment.uuid);
    // this.op.hide();
  }

  toggleOverlay(event: any, comment: Comment): void {
    this.selectedComment = comment;
    this.op.toggle(event);
  }

  hideOverlay(): void {
    this.selectedComment = null;
  }

  private isEvent(object: Event | Post): object is Event {
    return (object as Event).organizingUnit !== undefined;
  }
}
