import { Component } from '@angular/core';
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    LoginComponent
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {

}
