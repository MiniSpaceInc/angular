import {User} from "./User";

export interface Comment {
  id: number;
  user: User;
  postId: number;
  eventId: number;
  content: string;
  dateCommented: string;
}
