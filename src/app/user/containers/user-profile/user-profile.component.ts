import { Component } from '@angular/core';
import {FriendsListComponent} from "../../components/friends-list/friends-list.component";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    FriendsListComponent
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

}
