import { inject, Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { CommentService } from "./comment.service";
import { CommentFactory } from "../../model/factory/CommentFactory";
import { mockComments } from './comment-mock';
import { Comment } from '../../model/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentMockService implements CommentService {
  commentFactory = inject(CommentFactory);
  comments: Comment[] = [...mockComments];

  addComment(comment: Comment): void {
    this.comments.push(comment);
  }

  deleteCommentByUuid(uuid: string): void {
    var commentIndex: number = this.comments.findIndex(comment => comment.uuid == uuid)
    if(commentIndex < 0 || commentIndex >= this.comments.length) return;
    this.comments.splice(commentIndex,1)
  }

  getCommentsByEventUuid(uuid: string): Observable<Comment[]> {
    return of(this.comments);
  }
}
