import { Component } from '@angular/core';
import {FriendsListComponent} from "../../components/friends-list/friends-list.component";
import {InviteFriendComponent} from "../../components/invite-friend/invite-friend.component";
import {FriendRequestsListComponent} from "../../components/friend-requests-list/friend-requests-list.component";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    FriendsListComponent,
    InviteFriendComponent,
    FriendRequestsListComponent
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

}
