import {FriendSearchDetails} from "../../model/dto/FriendSearchDetails";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";
import {User} from "../../model/User";
import {Observable} from "rxjs";

export interface FriendService {
  getFriendsPage(friendSearchDetails: FriendSearchDetails): Observable<ObjectPageDto<User>>;
}
