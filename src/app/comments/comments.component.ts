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
import { CommentMockService } from '../core/service/comment/comment-mock.service';
import { CommentFactory } from '../core/model/factory/CommentFactory';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ListboxModule } from 'primeng/listbox';
import { OverlayPanel } from 'primeng/overlaypanel';

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
  @Input() comments!: Comment[];
  @ViewChild('op') op!: OverlayPanel;
  commentService: CommentService = inject(CommentMockService);
  commentFactory: CommentFactory = inject(CommentFactory);
  selectedComment: Comment | null = null;
  content: string = '';

  onEnterPressed() {
    this.addComment();
  }

  addComment(): void {
    if (this.content == '') return;
    this.commentService.addComment(this.commentFactory.createMockCommentFromData(this.content));
    this.content = '';
  }

  deleteComment(event: any): void {
    if(this.selectedComment === null) return;
    this.commentService.deleteCommentByUuid(this.selectedComment.uuid);
    this.op.hide();
  }

  toggleOverlay(event: any, comment: Comment): void {
    this.selectedComment = comment;
    this.op.toggle(event);
  }

  hideOverlay(event: any): void {
    this.selectedComment = null;
  }

}
