import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import {NavMenuComponent} from "./core/components/nav-menu/nav-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MiNISpace-angular';
}
