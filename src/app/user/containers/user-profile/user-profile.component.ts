import {Component, inject, OnInit} from '@angular/core';
import {FriendsListComponent} from "../../components/friends-list/friends-list.component";
import {InviteFriendComponent} from "../../components/invite-friend/invite-friend.component";
import {FriendRequestsListComponent} from "../../components/friend-requests-list/friend-requests-list.component";
import {EventInvitationsComponent} from "../../components/event-invitations/event-invitations.component";
import {CardModule} from "primeng/card";
import {
    OrganizingUnitsTabComponent
} from "../../../admin/containers/tabs/organizing-units-tab/organizing-units-tab.component";
import {ReportsViewComponent} from "../../../reports/containers/reports-view/reports-view.component";
import {TabViewModule} from "primeng/tabview";
import {UsersTabComponent} from "../../../admin/containers/tabs/users-tab/users-tab.component";
import {FriendsTabComponent} from "../tabs/friends-tab/friends-tab.component";
import {UserReportsTabComponent} from "../tabs/user-reports-tab/user-reports-tab.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    FriendsListComponent,
    InviteFriendComponent,
    FriendRequestsListComponent,
    EventInvitationsComponent,
    CardModule,
    OrganizingUnitsTabComponent,
    ReportsViewComponent,
    TabViewModule,
    UsersTabComponent,
    FriendsTabComponent,
    UserReportsTabComponent
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {
  private route = inject(ActivatedRoute);
  activeTab = 0;

  ngOnInit(): void {
    const tabIndex = this.route.snapshot.queryParams['tabIndex'];
    if(tabIndex) {
      this.activeTab = tabIndex;
    }
  }
}
