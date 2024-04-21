import { Component } from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {RouterLink} from "@angular/router";
import {AdminConsoleButtonComponent} from "./admin-console-button/admin-console-button.component";

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    LoginComponent,
    RouterLink,
    AdminConsoleButtonComponent
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {

}
