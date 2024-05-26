import { Component, inject, Input, ViewChild } from '@angular/core';
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

  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  @Input() object!: Event | Post;
  @ViewChild('op') op!: OverlayPanel;
  comments: Comment[] = [];
  commentService: CommentService = inject(COMMENT_SERVICE);
  commentFactory: CommentFactory = inject(CommentFactory);
  selectedComment: Comment | null = null;
  content: string = '';

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

    createCommentDto.content = this.content;
    this.commentService.addComment(createCommentDto).subscribe();
    this.content = '';
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
