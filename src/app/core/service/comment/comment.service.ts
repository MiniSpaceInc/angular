import {Observable} from "rxjs";
import {Comment} from "../../model/Comment";
import {CreateCommentDto} from "../../model/dto/CreateCommentDto";
import {CommentSearchDetailsDto} from "../../model/dto/CommentSearchDetailsDto";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";

export interface CommentService {
    addComment(createCommentDto: CreateCommentDto): Observable<any>;
    deleteComment(commentId: number): Observable<any>;
    getComments(commentSearchDetails: CommentSearchDetailsDto): Observable<ObjectPageDto<Comment>>;
}
