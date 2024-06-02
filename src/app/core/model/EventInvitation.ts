import {User} from "./User";

export interface EventInvitation {
  id: number;
  fromUser: User;
  event: Event;
}
