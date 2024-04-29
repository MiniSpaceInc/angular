import { Injectable } from "@angular/core";
import { Comment } from "../Comment";

@Injectable({
    providedIn: 'root'
})
export class CommentFactory {
	createEmptyComment(): Comment {
		return {
			id: 0,
			uuid: '',
			content: '',
			date: '',
			author: '',
		};
	}

	createMockCommentFromData(content: string): Comment {
		return {
			id: 0,
			uuid: '',
			content: content,
			date: '12.12.2020',
			author: 'Bartosz Olszewski',
		};
	}


}