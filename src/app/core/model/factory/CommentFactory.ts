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
}