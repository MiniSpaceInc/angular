import {Component, inject, OnInit} from '@angular/core';
import {TableLazyLoadEvent, TableModule} from "primeng/table";
import { User } from '../../../core/model/User';
import {CheckboxModule} from "primeng/checkbox";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {UserMockService} from "../../../core/service/user/user-mock.service";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {UserSearchDetails} from "../../../core/model/UserSearchDetails";
import {UserSearchDetailsFactory} from "../../../core/model/factory/UserSearchDetailsFactory";
import {debounceTime, distinctUntilChanged} from "rxjs";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {
  UsersOrganizingUnitsDialogComponent
} from "../users-organizing-units-dialog/users-organizing-units-dialog.component";
import {ButtonModule} from "primeng/button";
import {UserRestService} from "../../../core/service/user/user-rest.service";
import {Role} from "../../../core/model/Role";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    TableModule,
    CheckboxModule,
    FormsModule,
    JsonPipe,
    ToastModule,
    ReactiveFormsModule,
    InputTextModule,
    DialogModule,
    UsersOrganizingUnitsDialogComponent,
    ButtonModule
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
  private DEFAULT_USERS_PER_PAGE = 10;
  private userService = inject(UserRestService);
  private messageService = inject(MessageService);
  private userSearchDetails: UserSearchDetails = inject(UserSearchDetailsFactory)
    .createEmptyUserSearchDetails(this.DEFAULT_USERS_PER_PAGE)

  usersFiltersForm = this.createForm();
  users: User[] = [];
  totalUsers = 0;
  loading = true;
  usersPerPage = this.DEFAULT_USERS_PER_PAGE;

  usersOrganizingUnitsDialogUser?: User;

  ngOnInit() {
    this.usersFiltersForm.get('name')!.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      this.userSearchDetails.name = value ? value : '';
      this.searchForUsers();
    });

    this.usersFiltersForm.get('studentNumber')!.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      this.userSearchDetails.studentNumber = value ? value : null;
      this.searchForUsers();
    });
  }

  setUserOrganizerRole(user: User, active: boolean) {
    const changeRole = active
      ? this.userService.assignRole(user.id, Role.ORGANIZER)
      : this.userService.removeRole(user.id, Role.ORGANIZER);

    changeRole.subscribe(
      () => this.messageService.add({
        severity: 'success',
        summary: 'Sukces',
        detail: 'Użytkownikowi '
          + user.firstName + ' ' + user.lastName
          + (active ? ' nadano ' : ' odebrano ') + 'rolę organizatora.'
      })
    );
  }

  loadUsers(event: TableLazyLoadEvent) {
    this.userSearchDetails.pageable.page = event.first! / this.DEFAULT_USERS_PER_PAGE;
    this.searchForUsers();
  }

  searchForUsers() {
    this.loading = true;

    this.userService.searchForUsers(this.userSearchDetails).subscribe(
      usersPage => {
        this.users = usersPage.content;
        this.totalUsers = usersPage.totalElements;
        this.loading = false;
      }
    )
  }

  createForm() {
    const _ = inject(FormBuilder);

    return _.group({
      name: [''],
      studentNumber: [null as number | null]
    })
  }

  protected readonly Role = Role;
}
