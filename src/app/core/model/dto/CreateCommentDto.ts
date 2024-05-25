export interface CreateCommentDto {
  postId: number | null;
  eventId: number | null;
  content: string;
}
