import {Component, inject, Input} from '@angular/core';
import {User} from "../../../core/model/User";
import {DialogModule} from "primeng/dialog";
import {OrganizingUnitsListComponent} from "../organizing-units-list/organizing-units-list.component";
import {OrganizingUnit} from "../../../core/model/OrganizingUnit";
import {OrganizingUnitMockService} from "../../../core/service/organizing-unit/organizing-unit-mock.service";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-users-organizing-units-dialog',
  standalone: true,
  imports: [
    DialogModule,
    OrganizingUnitsListComponent,
    JsonPipe
  ],
  templateUrl: './users-organizing-units-dialog.component.html',
  styleUrl: './users-organizing-units-dialog.component.scss'
})
export class UsersOrganizingUnitsDialogComponent {
  @Input() user?: User;
  private organizingUnitService = inject(OrganizingUnitMockService);

  visible = false;
  organizingUnitsIds: number[] = [];

  show(user: User) {
    this.user = user;
    this.visible = true;
    this.organizingUnitService.getUsersOrganizingUnits(user.id).subscribe(
organizingUnits => this.organizingUnitsIds = organizingUnits.map(ou => ou.id)
    );
  }

  changeMembership(organizingUnit: OrganizingUnit) {
    console.log('Changing membership for user', this.user, 'to organizing unit', organizingUnit);
  }
}
