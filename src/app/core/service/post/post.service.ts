import { Post } from "../../model/Post";
import {Observable} from "rxjs";
import {ReactionType} from "../../model/Reactions";
import {ReactionsDto} from "../../model/dto/ReactionsDto";
import {CreatePostDto} from "../../model/dto/CreatePostDto";

export interface PostService {
  getPostsForEvent(eventId: number): Observable<Post[]>;
  setReaction(postId: number, reaction: ReactionType | null): Observable<any>;
  getReactions(postId: number): Observable<ReactionsDto>;
  addNewPost(createPostDto: CreatePostDto): Observable<any>;
}
