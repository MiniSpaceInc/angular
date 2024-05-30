import {inject, Injectable} from '@angular/core';
import {FriendService} from "./friend.service";
import {FriendSearchDetails} from "../../model/dto/FriendSearchDetails";
import {Observable} from "rxjs";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";
import {User} from "../../model/User";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FriendRestService implements FriendService {
  private http = inject(HttpClient);

  getFriendsPage(friendSearchDetails: FriendSearchDetails): Observable<ObjectPageDto<User>> {
    return this.http.post<ObjectPageDto<User>>('/api/friends/search', friendSearchDetails);
  }
}
