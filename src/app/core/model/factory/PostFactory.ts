import { Injectable } from "@angular/core";
import { Post } from "../Post";

@Injectable({
    providedIn: 'root'
})
export class PostFactory {
  createEmptyPost(): Post {
      return {
        reactionsList: [],
        userReaction: null,
        id: 0,
          uuid: '',
          author: '',
          date: '',
          content: ''
      };
  }
}
