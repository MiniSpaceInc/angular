import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
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
import {AuthService} from "../../service/auth/auth.service";
import {isPlatformBrowser} from "@angular/common";

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
  private authUsosService = inject(AuthorizationUsosService);
  private requestTokenKey = inject(REQUEST_TOKEN_STORAGE_KEY);
  private requestTokenSecretKey = inject(REQUEST_TOKEN_SECRET_STORAGE_KEY);
  private authService = inject(AuthService);
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if(isPlatformBrowser(this.platformId)) {
      this.authUsosService.getJwt({
        token: this.localStorage.getData(this.requestTokenKey),
        tokenSecret: this.localStorage.getData(this.requestTokenSecretKey),
        redirectUrl: '',
        verifier: this.route.snapshot.queryParams['oauth_verifier']
      }).subscribe(jwt => {
        this.authService.setAccessToken(jwt);
        this.router.navigate([this.route.snapshot.queryParams['route']]).then();
      });
    }
  }
}
