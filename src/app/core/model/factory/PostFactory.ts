import { Injectable } from "@angular/core";
import { Post } from "../Post";

@Injectable({
    providedIn: 'root'
})
export class PostFactory {
  createEmptyPost(): Post {
      return {
          id: 0,
          uuid: '',
          title: '',
          author: '',
          date: '',
          content: '',
      };
  }
}