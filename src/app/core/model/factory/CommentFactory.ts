import {inject, Injectable} from "@angular/core";
import { Comment } from "../Comment";
import { v4 } from "uuid"
import {CreateCommentDto} from "../dto/CreateCommentDto";
import {CommentSearchDetailsDto} from "../dto/CommentSearchDetailsDto";
import {PageableFactory} from "./PageableFactory";

@Injectable({
    providedIn: 'root'
})
export class CommentFactory {
  private pageableFactory = inject(PageableFactory);

	createEmptyComment(): Comment {
		return {
			id: 0,
			uuid: '',
			content: '',
			date: '',
			author: '',
		};
	}

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

	createMockCommentFromData(content: string): Comment {
		return {
			id: 0,
			uuid: v4(),
			content: content,
			date: '12.12.2020',
			author: 'Bartosz Olszewski',
		};
	}
}
