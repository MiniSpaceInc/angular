import {inject, Injectable} from '@angular/core';
import {FriendService} from "./friend.service";
import {FriendSearchDetails} from "../../model/dto/FriendSearchDetails";
import {Observable} from "rxjs";
import {ObjectPageDto} from "../../model/dto/ObjectPageDto";
import {User} from "../../model/User";
import {HttpClient} from "@angular/common/http";
import {FriendRequest} from "../../model/FriendRequest";

@Injectable({
  providedIn: 'root'
})
export class FriendRestService implements FriendService {
  private http = inject(HttpClient);

  getFriendsPage(friendSearchDetails: FriendSearchDetails): Observable<ObjectPageDto<User>> {
    return this.http.post<ObjectPageDto<User>>('/api/friends/search', friendSearchDetails);
  }

  inviteFriend(userUsosId: string): Observable<any> {
    return this.http.post(`/api/friends?userUsosId=${userUsosId}`, null);
  }

  removeFromFriends(userId: number): Observable<any> {
    return this.http.delete(`/api/friends/${userId}`);
  }

  getFriendRequests(): Observable<FriendRequest[]> {
    return this.http.get<FriendRequest[]>('/api/friends/requests');
  }

  acceptFriendRequest(requestId: number): Observable<any> {
    return this.http.post(`/api/friends/requests/${requestId}`, null);
  }

  declineFriendRequest(requestId: number): Observable<any> {
    return this.http.delete(`/api/friends/requests/${requestId}`);
  }

  getFriendsRegisteredForEvent(eventId: number): Observable<User[]> {
    return this.http.get<User[]>(`/api/friends?eventId=${eventId}`);
  }
}
