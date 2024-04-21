import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import {NavMenuComponent} from "./core/components/nav-menu/nav-menu.component";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavMenuComponent, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MiNISpace-angular';
}
