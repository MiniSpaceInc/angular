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

  addComment(comment: Comment): void {
    mockComments.push(comment);
  }
  getCommentsByEventUuid(uuid: string): Observable<Comment[]> {
    return of(mockComments);
  }
}
