import {UserSearchDetails} from "../../model/UserSearchDetails";
import {User} from "../../model/User";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";
import {Observable} from "rxjs";

export interface UserService {
  searchForUsers(searchDetails: UserSearchDetails): Observable<ObjectPageDto<User>>;
  setOrganizerRole(userId: number, active: boolean): Observable<any>;
}
