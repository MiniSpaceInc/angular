import {inject, Injectable} from '@angular/core';
import {UserService} from "./user.service";
import { Observable } from 'rxjs';
import { User } from '../../model/User';
import { UserSearchDetails } from '../../model/UserSearchDetails';
import { ObjectPageDto } from '../../model/dto/ObjectPageDto';
import {HttpClient} from "@angular/common/http";
import {Role} from "../../model/Role";

@Injectable({
  providedIn: 'root'
})
export class UserRestService implements UserService {
  private http = inject(HttpClient);

  searchForUsers(searchDetails: UserSearchDetails): Observable<ObjectPageDto<User>> {
      return this.http.post<ObjectPageDto<User>>('/api/users/search', searchDetails);
  }

  assignRole(userId: number, role: Role): Observable<any> {
    return this.http.post(`/api/users/${userId}/roles?role=${role}`, null);
  }

  removeRole(userId: number, role: Role): Observable<any> {
    return this.http.delete(`/api/users/${userId}/roles?role=${role}`);
  }
}
