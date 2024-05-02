import {Observable} from "rxjs";
import {Comment} from "../../model/Comment";

export interface CommentService {
    addComment(comment: Comment): void;
    getCommentsByEventUuid(uuid: string): Observable<Comment[]>;
    deleteCommentByUuid(uuid: string): void;
}
