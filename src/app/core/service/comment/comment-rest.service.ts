import {inject, Injectable} from '@angular/core';
import {CommentService} from "./comment.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Comment} from "../../model/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentRestService implements CommentService {
  private http = inject(HttpClient)

  addComment(comment: Comment): void {
    throw new Error("Not implemented yet!");
  }

  deleteCommentByUuid(uuid: string): void {
    throw new Error("Not implemented yet");
  }

  getCommentsByEventUuid(uuid: string): Observable<Comment[]> {
    throw new Error("Not implemented yet!");
  }
}
