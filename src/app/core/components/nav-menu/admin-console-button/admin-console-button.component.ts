import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-console-button',
  standalone: true,
  imports: [],
  templateUrl: './admin-console-button.component.html',
  styleUrl: './admin-console-button.component.scss'
})
export class AdminConsoleButtonComponent {
  router = inject(Router);

  onClick() {
    this.router.navigate(['/admin']).then();
  }
}
