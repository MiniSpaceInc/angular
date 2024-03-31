import {Component, inject} from '@angular/core';
import {AuthorizationUsosService} from "../../../service/auth/authorization-usos.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService = inject(AuthorizationUsosService);

  redirect(): void {
    this.authService.requestToken().subscribe(response => {
        window.location.href = response.redirectUrl;
      }
    )
  }
}
