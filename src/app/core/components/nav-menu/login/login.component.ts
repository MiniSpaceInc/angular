import {Component, inject} from '@angular/core';
import {AuthorizationUsosService} from "../../../service/auth/authorization-usos.service";
import {DOCUMENT} from "@angular/common";
import {LocalStorageService} from "../../../service/local-storage.service";
import {REQUEST_TOKEN_SECRET_STORAGE_KEY, REQUEST_TOKEN_STORAGE_KEY} from "../../../tokens";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService = inject(AuthorizationUsosService);
  private document = inject(DOCUMENT);
  private localStorage = inject(LocalStorageService);
  private requestTokenKey = inject(REQUEST_TOKEN_STORAGE_KEY);
  private requestTokenSecretKey = inject(REQUEST_TOKEN_SECRET_STORAGE_KEY);

  redirect(): void {
    this.authService.requestToken().subscribe(response => {
        this.localStorage.saveData(this.requestTokenKey, response.token);
        this.localStorage.saveData(this.requestTokenSecretKey, response.tokenSecret);
        this.document.location.href = response.redirectUrl;
      }
    )
  }
}