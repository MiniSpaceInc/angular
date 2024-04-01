import {Component, inject} from '@angular/core';
import {AuthorizationUsosService} from "../../../service/auth/authorization-usos.service";
import {DOCUMENT} from "@angular/common";
import {LocalStorageService} from "../../../service/local-storage.service";
import {
  DECODED_JWT_STORAGE_KEY,
  JWT_STORAGE_KEY,
  REQUEST_TOKEN_SECRET_STORAGE_KEY,
  REQUEST_TOKEN_STORAGE_KEY
} from "../../../tokens";
import {jwtDecode} from "jwt-decode";

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
  localStorage = inject(LocalStorageService);
  requestTokenKey = inject(REQUEST_TOKEN_STORAGE_KEY);
  requestTokenSecretKey = inject(REQUEST_TOKEN_SECRET_STORAGE_KEY);
  decodedJwtKey = inject(DECODED_JWT_STORAGE_KEY);
  jwtKey = inject(JWT_STORAGE_KEY);

  redirect(): void {
    this.authService.requestToken().subscribe(response => {
        this.localStorage.saveData(this.requestTokenKey, response.token);
        this.localStorage.saveData(this.requestTokenSecretKey, response.tokenSecret);
        this.document.location.href = response.redirectUrl;
      }
    )
  }

  logout(): void {
    this.localStorage.removeData(this.decodedJwtKey);
    this.localStorage.removeData(this.jwtKey);
  }
}
