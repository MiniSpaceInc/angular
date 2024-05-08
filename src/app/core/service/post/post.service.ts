import { Post } from "../../model/Post";
import {Observable} from "rxjs";
import {ReactionType} from "../../model/Reactions";

export interface PostService {
  getPostsForEvent(eventId: number): Observable<Post[]>;
  setReaction(postId: number, reaction: ReactionType | null): Observable<any>;
}
