import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../../model/Post';
import { mockPosts } from './mockPosts';
import {Observable, of} from "rxjs";
import {ReactionType} from "../../model/Reactions";
import {ReactionsDto} from "../../model/dto/ReactionsDto";
import {CreatePostDto} from "../../model/dto/CreatePostDto";

@Injectable({
    providedIn: 'root'
})
export class PostMockService implements PostService {
  getPostsForEvent(eventId: number): Observable<Post[]> {
      return of(mockPosts);
  }

  setReaction(postId: number, reaction: ReactionType | null): Observable<any> {
    // const post = mockPosts.find(e => e.id === postId)!;
    // if(post.userReaction) {
    //   post.reactionsList.find(r => r.type === post.userReaction)!.count--;
    // }
    //
    // if(reaction) {
    //   const reactions = post.reactionsList.find(r => r.type === reaction);
    //   if(reactions) {
    //     reactions.count++;
    //   } else {
    //     post.reactionsList.push({
    //       type: reaction,
    //       count: 1
    //     })
    //   }
    // }
    //
    // post.userReaction = reaction;
    // return of(HttpStatusCode.NoContent);
    throw new Error("Not implemented yet");
  }

  getReactions(eventId: number): Observable<ReactionsDto> {
    throw new Error("Not implemented yet!");
  }

  addNewPost(createPostDto: CreatePostDto): Observable<any> {
    throw new Error("Not implemented yet!");
  }
}
