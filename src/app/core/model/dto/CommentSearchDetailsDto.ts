import {PageableDto} from "./PageableDto";

export interface CommentSearchDetailsDto {
  eventId: number | null;
  postId: number | null;
  pageable: PageableDto;
}
