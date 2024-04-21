import { Component } from '@angular/core';
import {UsersListComponent} from "../../../components/users-list/users-list.component";

@Component({
  selector: 'app-users-tab',
  standalone: true,
  imports: [
    UsersListComponent
  ],
  templateUrl: './users-tab.component.html',
  styleUrl: './users-tab.component.scss'
})
export class UsersTabComponent {

}
