import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestTokenDto} from "../../model/dto/RequestTokenDto";
import {ActivatedRoute} from "@angular/router";
import {DOCUMENT, Location} from "@angular/common";

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
    return this.http.post<string>('/api/auth/usos/jwt', requestTokenDto);
  }

  private prepareCallbackUrl() {
    return this.document.location.origin + '/redirect?route=' + this.document.location.pathname;
  }
}
