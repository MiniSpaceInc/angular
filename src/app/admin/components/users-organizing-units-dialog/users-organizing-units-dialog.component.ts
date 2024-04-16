import {Component, Input} from '@angular/core';
import {User} from "../../../core/model/User";
import {DialogModule} from "primeng/dialog";
import {OrganizingUnitsListComponent} from "../organizing-units-list/organizing-units-list.component";
import {OrganizingUnit} from "../../../core/model/OrganizingUnit";

@Component({
  selector: 'app-users-organizing-units-dialog',
  standalone: true,
  imports: [
    DialogModule,
    OrganizingUnitsListComponent
  ],
  templateUrl: './users-organizing-units-dialog.component.html',
  styleUrl: './users-organizing-units-dialog.component.scss'
})
export class UsersOrganizingUnitsDialogComponent {
  @Input() user?: User;
  visible = false;

  show(user: User) {
    this.user = user;
    this.visible = true;
  }
}
