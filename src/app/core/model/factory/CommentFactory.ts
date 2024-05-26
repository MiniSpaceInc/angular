import {inject, Injectable} from "@angular/core";
import {CreateCommentDto} from "../dto/CreateCommentDto";
import {CommentSearchDetailsDto} from "../dto/CommentSearchDetailsDto";
import {PageableFactory} from "./PageableFactory";

@Injectable({
    providedIn: 'root'
})
export class CommentFactory {
  private pageableFactory = inject(PageableFactory);

  createEmptyCreateCommentDto(): CreateCommentDto {
    return {
      eventId: null,
      postId: null,
      content: ''
    }
  }

  createSearchDetails(itemsPerPage: number): CommentSearchDetailsDto {
    return {
      eventId: null,
      postId: null,
      pageable: this.pageableFactory.createPageableWithNoSorting(itemsPerPage)
    }
  }
}
