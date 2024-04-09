import { Component } from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {OrganizingUnitsListComponent} from "../../components/organizing-units-list/organizing-units-list.component";

@Component({
  selector: 'app-admin-console',
  standalone: true,
  imports: [
    TabViewModule,
    OrganizingUnitsListComponent
  ],
  templateUrl: './admin-console.component.html',
  styleUrl: './admin-console.component.scss'
})
export class AdminConsoleComponent {

}
