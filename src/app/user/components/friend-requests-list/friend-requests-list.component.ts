import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {FRIEND_SERVICE} from "../../../core/tokens";
import {FriendRequest} from "../../../core/model/FriendRequest";
import {AcceptDeclineComponent} from "../../../core/components/accept-decline/accept-decline.component";

@Component({
  selector: 'app-friend-requests-list',
  standalone: true,
  imports: [
    CardModule,
    TableModule,
    AcceptDeclineComponent
  ],
  templateUrl: './friend-requests-list.component.html',
  styleUrl: './friend-requests-list.component.scss'
})
export class FriendRequestsListComponent implements OnInit {
  @Output() friendAdded = new EventEmitter<void>();
  private friendService = inject(FRIEND_SERVICE);
  friendRequests: FriendRequest[] = [];

  ngOnInit(): void {
    this.loadFriendRequests();
  }

  loadFriendRequests(): void {
    this.friendService.getFriendRequests().subscribe(
      requests => this.friendRequests = requests
    );
  }

  acceptFriendRequest(requestId: number): void {
    this.friendService.acceptFriendRequest(requestId).subscribe(
      () => {
        this.loadFriendRequests();
        this.friendAdded.emit();
      }
    );
  }

  declineFriendRequest(requestId: number): void {
    this.friendService.declineFriendRequest(requestId).subscribe(
      () => this.loadFriendRequests()
    );
  }
}
