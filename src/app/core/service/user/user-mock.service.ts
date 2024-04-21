import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {delay, Observable, of} from "rxjs";
import {UserSearchDetails} from "../../model/UserSearchDetails";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";
import {User} from "../../model/User";
import {usersMock} from "./usersMock";
import {Role} from "../../model/Role";

@Injectable({
  providedIn: 'root'
})
export class UserMockService implements UserService {

  assignRole(userId: number, role: Role): Observable<any> {
    throw new Error('Method not implemented.');
  }

  removeRole(userId: number, role: Role): Observable<any> {
    throw new Error('Method not implemented.');
  }

  searchForUsers(searchDetails: UserSearchDetails): Observable<ObjectPageDto<User>> {
    const filteredUsers = this.filterUsersMock(searchDetails);
    const result = filteredUsers.slice(searchDetails.pageable.page * searchDetails.pageable.size, (searchDetails.pageable.page + 1) * searchDetails.pageable.size);

    return of({
      content: result,
      totalElements: filteredUsers.length,
      totalPages: Math.ceil(filteredUsers.length / searchDetails.pageable.size),
      size: result.length,
      number: searchDetails.pageable.page,
      numberOfElements: result.length,
      first: searchDetails.pageable.page === 0,
      last: searchDetails.pageable.page === Math.ceil(result.length / searchDetails.pageable.size) - 1,
      empty: filteredUsers.length === 0
    }).pipe(
      delay(200)
    );
  }

  filterUsersMock(userSearchDetails: UserSearchDetails) {
    return usersMock.filter(user => {
      const studentNumberOk = !userSearchDetails.studentNumber || user.studentNumber.toString().includes(userSearchDetails.studentNumber.toString());
      let nameOk = true;
      for (let name of userSearchDetails.name.split(' ')) {
        if (name === '\t' || name === '\n') {
          continue;
        }

        if (!user.firstName.toLowerCase().includes(name.toLowerCase()) && !user.lastName.toLowerCase().includes(name.toLowerCase())) {
          nameOk = false;
          break;
        }
      }

      return studentNumberOk && nameOk;
    });
  }
}
