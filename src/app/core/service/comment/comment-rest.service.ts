import {inject, Injectable} from '@angular/core';
import {CommentService} from "./comment.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Comment} from "../../model/Comment";
import {CreateCommentDto} from "../../model/dto/CreateCommentDto";

@Injectable({
  providedIn: 'root'
})
export class CommentRestService implements CommentService {
  private http = inject(HttpClient)

  addComment(createCommentDto: CreateCommentDto): Observable<any> {
    return this.http.post("/api/comments", createCommentDto);
  }

  deleteComment(commentId: number): Observable<any> {
    throw new Error("Not implemented yet!");
  }

  getEventComments(eventId: number): Observable<Comment[]> {
    throw new Error("Not implemented yet!");
  }

  getPostComments(postId: number): Observable<Comment[]> {
    throw new Error("Not implemented yet!");
  }
}
