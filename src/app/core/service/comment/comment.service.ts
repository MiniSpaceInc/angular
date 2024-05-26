import {Observable} from "rxjs";
import {Comment} from "../../model/Comment";
import {CreateCommentDto} from "../../model/dto/CreateCommentDto";

export interface CommentService {
    addComment(createCommentDto: CreateCommentDto): Observable<any>;
    deleteComment(commentId: number): Observable<any>;
    getEventComments(eventId: number): Observable<Comment[]>;
    getPostComments(postId: number): Observable<Comment[]>;
}
