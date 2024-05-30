import {Component, inject, OnInit} from '@angular/core';
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
  private friendService = inject(FRIEND_SERVICE);
  friendsPerPage = 10;
  totalFriends = 0;
  friends: User[] = [];
  friendSearchDetails = inject(FriendSearchDetailsFactory).createEmptySearchDetails(this.friendsPerPage);

  ngOnInit(): void {
    this.loadUsers(0, this.friendsPerPage);
  }

  loadUsers(first: number, rows: number): void {
    this.friendSearchDetails.page = first / rows;
    this.friendSearchDetails.size = rows;
    this.friendService.getFriendsPage(this.friendSearchDetails).subscribe(
      page => {
        this.friends = page.content;
        this.totalFriends = page.totalElements;
      }
    );
  }
}
