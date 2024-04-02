import { Component } from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    LoginComponent,
    RouterLink
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {

}
