import {User} from "./User";

export interface FriendRequest {
  sender: User;
  requestId: number;
}
