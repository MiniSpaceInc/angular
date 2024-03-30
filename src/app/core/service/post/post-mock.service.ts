import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../../model/Post';
import { mockPosts } from './mockPosts';

@Injectable({
    providedIn: 'root'
})
export class PostMockService implements PostService {
    getPosts(): Post[] {
        return mockPosts;
    }

}
