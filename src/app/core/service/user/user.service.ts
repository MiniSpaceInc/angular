import {UserSearchDetails} from "../../model/UserSearchDetails";
import {User} from "../../model/User";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";
import {Observable} from "rxjs";
import {Role} from "../../model/Role";

export interface UserService {
  searchForUsers(searchDetails: UserSearchDetails): Observable<ObjectPageDto<User>>;
  assignRole(userId: number, role: Role): Observable<any>;
  removeRole(userId: number, role: Role): Observable<any>;
}
