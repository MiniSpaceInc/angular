import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestTokenDto} from "../../model/dto/RequestTokenDto";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationUsosService {
  private http = inject(HttpClient);

  public requestToken() {
    return this.http.post<RequestTokenDto>('/api/auth/usos/request_token', {
      callbackUrl: window.location.href
    });
  }
}
