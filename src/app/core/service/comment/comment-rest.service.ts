import {inject, Injectable} from '@angular/core';
import {CommentService} from "./comment.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Comment} from "../../model/Comment";
import {CreateCommentDto} from "../../model/dto/CreateCommentDto";
import {CommentSearchDetailsDto} from "../../model/dto/CommentSearchDetailsDto";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";

@Injectable({
  providedIn: 'root'
})
export class CommentRestService implements CommentService {
  private http = inject(HttpClient);

  addComment(createCommentDto: CreateCommentDto): Observable<any> {
    return this.http.post("/api/comments", createCommentDto);
  }

  deleteComment(commentId: number): Observable<any> {
    throw new Error("Not implemented yet!");
  }

  getComments(commentSearchDetails: CommentSearchDetailsDto): Observable<ObjectPageDto<Comment>> {
    return this.http.post<ObjectPageDto<Comment>>("/api/comments/search", commentSearchDetails);
  }
}
