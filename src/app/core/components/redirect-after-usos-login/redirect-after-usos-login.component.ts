import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LocalStorageService} from "../../service/local-storage.service";
import {AuthorizationUsosService} from "../../service/auth/authorization-usos.service";
import {
  DECODED_JWT_STORAGE_KEY,
  JWT_STORAGE_KEY,
  REQUEST_TOKEN_SECRET_STORAGE_KEY,
  REQUEST_TOKEN_STORAGE_KEY
} from "../../tokens";
import {jwtDecode} from "jwt-decode";

@Component({
  selector: 'app-redirect-after-usos-login',
  standalone: true,
  imports: [],
  template: '',
  styles: ''
})
export class RedirectAfterUsosLoginComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private localStorage = inject(LocalStorageService);
  private authService = inject(AuthorizationUsosService);
  private requestTokenKey = inject(REQUEST_TOKEN_STORAGE_KEY);
  private requestTokenSecretKey = inject(REQUEST_TOKEN_SECRET_STORAGE_KEY);
  private jwtKey = inject(JWT_STORAGE_KEY);
  private decodedJwtKey = inject(DECODED_JWT_STORAGE_KEY);

  ngOnInit() {
    this.authService.getJwt({
      token: this.localStorage.getData(this.requestTokenKey),
      tokenSecret: this.localStorage.getData(this.requestTokenSecretKey),
      redirectUrl: '',
      verifier: this.route.snapshot.queryParams['oauth_verifier']
    }).subscribe(jwt => {
      this.localStorage.saveData(this.jwtKey, jwt);
      this.localStorage.saveData(this.decodedJwtKey, jwtDecode(jwt));
      this.router.navigate([this.route.snapshot.queryParams['route']]).then();
    });
  }
}
