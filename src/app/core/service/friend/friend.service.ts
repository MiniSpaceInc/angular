import {FriendSearchDetails} from "../../model/dto/FriendSearchDetails";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";
import {User} from "../../model/User";
import {Observable} from "rxjs";
import {FriendRequest} from "../../model/FriendRequest";

export interface FriendService {
  getFriendsPage(friendSearchDetails: FriendSearchDetails): Observable<ObjectPageDto<User>>;
  inviteFriend(userUsosId: string): Observable<any>;
  removeFromFriends(userId: number): Observable<any>;
  getFriendRequests(): Observable<FriendRequest[]>;
  acceptFriendRequest(requestId: number): Observable<any>;
  declineFriendRequest(requestId: number): Observable<any>;
}
