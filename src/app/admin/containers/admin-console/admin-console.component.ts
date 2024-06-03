import { Component } from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {OrganizingUnitsListComponent} from "../../components/organizing-units-list/organizing-units-list.component";
import {OrganizingUnitsTabComponent} from "../tabs/organizing-units-tab/organizing-units-tab.component";
import {UsersTabComponent} from "../tabs/users-tab/users-tab.component";
import {ReportsViewComponent} from "../../../reports/containers/reports-view/reports-view.component";

@Component({
  selector: 'app-admin-console',
  standalone: true,
  imports: [
    TabViewModule,
    OrganizingUnitsListComponent,
    OrganizingUnitsTabComponent,
    UsersTabComponent,
    ReportsViewComponent
  ],
  templateUrl: './admin-console.component.html',
  styleUrl: './admin-console.component.scss'
})
export class AdminConsoleComponent {

}
