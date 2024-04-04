import {inject, Injectable} from '@angular/core';
import {PostService} from "./post.service";
import {Observable} from "rxjs";
import {Post} from "../../model/Post";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostRestService implements PostService {
  http = inject(HttpClient);

  getPostsForEvent(eventId: number): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts?eventId=' + eventId);
  }
}
