import { Injectable } from "@angular/core";
import {CreatePostDto} from "../dto/CreatePostDto";

@Injectable({
    providedIn: 'root'
})
export class PostFactory {
  getCreatePostDto(eventId: number, content: string): CreatePostDto {
    return {
      eventId: eventId,
      content: content
    }
  }
}
