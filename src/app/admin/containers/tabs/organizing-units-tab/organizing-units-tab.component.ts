import { Component } from '@angular/core';
import {OrganizingUnitsListComponent} from "../../../components/organizing-units-list/organizing-units-list.component";
import {DialogModule} from "primeng/dialog";
import {OrganizingUnitFormComponent} from "../../../components/organizing-unit-form/organizing-unit-form.component";

@Component({
  selector: 'app-organizing-units-tab',
  standalone: true,
  imports: [
    OrganizingUnitsListComponent,
    DialogModule,
    OrganizingUnitFormComponent
  ],
  templateUrl: './organizing-units-tab.component.html',
  styleUrl: './organizing-units-tab.component.scss'
})
export class OrganizingUnitsTabComponent {
  displayAddUnitDialog: boolean = false;

  showDialog() {
    this.displayAddUnitDialog = true;
  }
}
