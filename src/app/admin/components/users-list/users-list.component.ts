import {Component, inject} from '@angular/core';
import {TableLazyLoadEvent, TableModule} from "primeng/table";
import { User } from '../../../core/model/User';
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {UserMockService} from "../../../core/service/user/user-mock.service";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {UserSearchDetails} from "../../../core/model/UserSearchDetails";
import {UserSearchDetailsFactory} from "../../../core/model/factory/UserSearchDetailsFactory";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    TableModule,
    CheckboxModule,
    FormsModule,
    JsonPipe,
    ToastModule
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  DEFAULT_USERS_PER_PAGE = 10;
  userService = inject(UserMockService);
  messageService = inject(MessageService);
  userSearchDetails: UserSearchDetails = inject(UserSearchDetailsFactory)
    .createEmptyUserSearchDetails(this.DEFAULT_USERS_PER_PAGE)

  users: User[] = [];
  totalUsers = 0;
  loading = false;
  usersPerPage = this.DEFAULT_USERS_PER_PAGE;

  setUserOrganizerRole(user: User, active: boolean) {
    this.userService.setOrganizerRole(user.id, active).subscribe(
      () => this.messageService.add({
        severity: 'success',
        summary: 'Sukces',
        detail: 'Użytkownikowi '
          + user.firstName + ' ' + user.lastName
          + (active ? ' nadano ' : ' odebrano ') + 'rolę organizatora'
      })
    );
  }

  loadUsers(event: TableLazyLoadEvent) {
    // this.userSearchDetails.name = event.filters!['name'] ? event.filters!['name'].value : '';
    // this.userSearchDetails.studentNumber = event.filters!['studentNumber'] ? event.filters!['studentNumber'].value : '';
    this.userSearchDetails.pageable.page = event.first! / this.DEFAULT_USERS_PER_PAGE;
    this.searchForUsers();
  }

  searchForUsers() {
    this.userService.searchForUsers(this.userSearchDetails).subscribe(
      usersPage => {
        console.log(usersPage);
        this.users = usersPage.content;
        this.totalUsers = usersPage.totalElements;
        this.loading = false;
      }
    )

    this.loading = true;
  }
}
