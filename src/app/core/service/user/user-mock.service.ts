import { Injectable } from '@angular/core';
import {UserService} from "./user.service";
import {delay, Observable, of} from "rxjs";
import {UserSearchDetails} from "../../model/UserSearchDetails";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";
import {User} from "../../model/User";
import {usersMock} from "./usersMock";

@Injectable({
  providedIn: 'root'
})
export class UserMockService implements UserService {
  setOrganizerRole(userId: number, active: boolean): Observable<any> {
    usersMock.filter(user => user.id === userId)[0].isOrganizer = active;
    return of({});
  }

  searchForUsers(searchDetails: UserSearchDetails): Observable<ObjectPageDto<User>> {
    const users = this.filterUsersMock(searchDetails)
      .slice(searchDetails.pageable.page * searchDetails.pageable.size, (searchDetails.pageable.page + 1) * searchDetails.pageable.size);

    return of({
      content: users,
      totalElements: usersMock.length,
      totalPages: Math.ceil(usersMock.length / searchDetails.pageable.size),
      size: users.length,
      number: searchDetails.pageable.page,
      numberOfElements: usersMock.length,
      first: searchDetails.pageable.page === 0,
      last: searchDetails.pageable.page === Math.ceil(usersMock.length / searchDetails.pageable.size) - 1,
      empty: usersMock.length === 0
    }).pipe(
      delay(200)
    );
  }

  filterUsersMock(userSearchDetails: UserSearchDetails) {
    return usersMock;
  }
}
