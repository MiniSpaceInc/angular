import {inject, Injectable} from '@angular/core';
import {PostService} from "./post.service";
import {Observable} from "rxjs";
import {Post} from "../../model/Post";
import {HttpClient} from "@angular/common/http";
import {ReactionType} from "../../model/Reactions";
import {ReactionsDto} from "../../model/dto/ReactionsDto";
import { CreatePostDto } from '../../model/dto/CreatePostDto';

@Injectable({
  providedIn: 'root'
})
export class PostRestService implements PostService {
  http = inject(HttpClient);

  getPostsForEvent(eventId: number): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts?eventId=' + eventId);
  }

  setReaction(postId: number, reaction: ReactionType | null): Observable<any> {
    return this.http.put(`/api/posts/${postId}/reactions${reaction ? '?reaction=' + reaction : ''}`, null);
  }

  getReactions(postId: number): Observable<ReactionsDto> {
    return this.http.get<ReactionsDto>(`/api/posts/${postId}/reactions`);
  }
  addNewPost(createPostDto: CreatePostDto): Observable<any> {
    return this.http.post("/api/posts/add", createPostDto);
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete(`/api/posts/${postId}`);
  }
}
