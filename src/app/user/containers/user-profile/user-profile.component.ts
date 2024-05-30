import { Component } from '@angular/core';
import {FriendsListComponent} from "../../components/friends-list/friends-list.component";
import {InviteFriendComponent} from "../../components/invite-friend/invite-friend.component";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    FriendsListComponent,
    InviteFriendComponent
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

}
