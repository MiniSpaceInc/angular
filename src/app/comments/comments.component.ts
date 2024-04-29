import { Component, inject, Input } from '@angular/core';
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

  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  @Input() comments!: Comment[];
  commentService: CommentService = inject(CommentMockService);
  commentFactory: CommentFactory = inject(CommentFactory);
  content: string = '';

  onEnterPressed() {
    if (this.content !== '') {
      this.commentService.addComment(this.commentFactory.createMockCommentFromData(this.content));
    }
  }
}
