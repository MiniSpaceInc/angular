import { Post } from "../../model/Post";
import {Observable} from "rxjs";

export interface PostService {
    getPostsForEvent(eventId: number): Observable<Post[]>;
}
