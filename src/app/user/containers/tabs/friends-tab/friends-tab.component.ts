import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {EventInvitationsComponent} from "../../../components/event-invitations/event-invitations.component";
import {FriendRequestsListComponent} from "../../../components/friend-requests-list/friend-requests-list.component";
import {FriendsListComponent} from "../../../components/friends-list/friends-list.component";
import {InviteFriendComponent} from "../../../components/invite-friend/invite-friend.component";

@Component({
  selector: 'app-friends-tab',
  standalone: true,
    imports: [
        CardModule,
        EventInvitationsComponent,
        FriendRequestsListComponent,
        FriendsListComponent,
        InviteFriendComponent
    ],
  templateUrl: './friends-tab.component.html',
  styleUrl: './friends-tab.component.scss'
})
export class FriendsTabComponent {

}
