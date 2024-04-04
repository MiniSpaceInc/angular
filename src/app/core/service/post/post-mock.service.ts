import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../../model/Post';
import { mockPosts } from './mockPosts';
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PostMockService implements PostService {
    getPostsForEvent(eventId: number): Observable<Post[]> {
        return of(mockPosts);
    }

}
