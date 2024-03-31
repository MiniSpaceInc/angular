import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DOCUMENT} from "@angular/common";
import {RequestTokenDto} from "../../model/dto/RequestTokenDto";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationUsosService {
  private http = inject(HttpClient);
  private document = inject(DOCUMENT);

  public requestToken() {
    return this.http.post<RequestTokenDto>('/api/auth/usos/request_token', {
      callbackUrl: this.prepareCallbackUrl()
    });
  }

  public getJwt(requestTokenDto: RequestTokenDto) {
    return this.http.post<{accessToken: string}>('/api/auth/usos/jwt', requestTokenDto)
      .pipe(
        map(response => response.accessToken)
      );
  }

  private prepareCallbackUrl() {
    return this.document.location.origin + '/redirect?route=' + this.document.location.pathname;
  }
}
