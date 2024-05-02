import { Injectable } from "@angular/core";
import { Comment } from "../Comment";
import { v4 } from "uuid"

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
			uuid: v4(),
			content: content,
			date: '12.12.2020',
			author: 'Bartosz Olszewski',
		};
	}


}