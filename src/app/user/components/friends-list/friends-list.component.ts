import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {TableModule} from "primeng/table";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {User} from "../../../core/model/User";
import {FRIEND_SERVICE} from "../../../core/tokens";
import {FriendSearchDetailsFactory} from "../../../core/model/factory/FriendSearchDetailsFactory";
import {JsonPipe} from "@angular/common";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-friends-list',
  standalone: true,
  imports: [
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    CardModule
  ],
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.scss'
})
export class FriendsListComponent implements OnInit {
  @Input() buttonClass: string | undefined;
  @Input() buttonText: string | undefined;
  @Output() buttonClick = new EventEmitter<number>();

  private friendService = inject(FRIEND_SERVICE);
  friendsPerPage = 10;
  totalFriends = 0;
  friends: User[] = [];
  friendSearchDetails = inject(FriendSearchDetailsFactory).createEmptySearchDetails(this.friendsPerPage);

  ngOnInit(): void {
    this.loadFriends();
  }

  pageChange(first: number, rows: number): void {
    this.friendSearchDetails.page = first / rows;
    this.friendSearchDetails.size = rows;
    this.loadFriends();
  }

  loadFriends(): void {
    this.friendService.getFriendsPage(this.friendSearchDetails).subscribe(
      page => {
        this.friends = page.content;
        this.totalFriends = page.totalElements;
      }
    );
  }

  removeFromFriends(userId: number): void {
    this.friendService.removeFromFriends(userId).subscribe(
      () => this.loadFriends()
    );
  }
}
