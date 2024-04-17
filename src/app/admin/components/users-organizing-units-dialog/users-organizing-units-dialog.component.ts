import {Component, inject, Input} from '@angular/core';
import {User} from "../../../core/model/User";
import {DialogModule} from "primeng/dialog";
import {OrganizingUnitsListComponent} from "../organizing-units-list/organizing-units-list.component";
import {OrganizingUnit} from "../../../core/model/OrganizingUnit";
import {OrganizingUnitMockService} from "../../../core/service/organizing-unit/organizing-unit-mock.service";
import {JsonPipe} from "@angular/common";
import {MessageService} from "primeng/api";

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
  private messageService = inject(MessageService);

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
    const add = !this.organizingUnitsIds.includes(organizingUnit.id);

    this.organizingUnitService.changeUserMembership(organizingUnit.id, this.user!.id, add)
      .subscribe(() => {
        if (this.organizingUnitsIds.includes(organizingUnit.id)) {
          this.organizingUnitsIds.splice(this.organizingUnitsIds.indexOf(organizingUnit.id), 1);
        } else {
          this.organizingUnitsIds.push(organizingUnit.id);
        }

        this.messageService.add({
          severity: 'success',
          summary: 'Sukces',
          detail: 'Użytkownikowi ' + this.user!.firstName + ' ' + this.user!.lastName
            + (add ? ' dodano' : ' usunięto') + ' jednostkę organizacyjną ' + organizingUnit.name + '.'
        })
      });
  }
}
