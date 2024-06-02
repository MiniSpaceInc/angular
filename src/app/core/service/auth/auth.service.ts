import {inject, Injectable} from '@angular/core';
import {DECODED_JWT_STORAGE_KEY, JWT_STORAGE_KEY} from "../../tokens";
import {LocalStorageService} from "../local-storage.service";
import {jwtDecode} from "jwt-decode";
import {Role} from "../../model/Role";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorage = inject(LocalStorageService);
  private jwtKey = inject(JWT_STORAGE_KEY);
  private decodedJwtKey = inject(DECODED_JWT_STORAGE_KEY);

  public setAccessToken(accessToken: string) {
    this.localStorage.saveData(this.jwtKey, accessToken);
    this.localStorage.saveData(this.decodedJwtKey, jwtDecode(accessToken));
  }

  public getAccessToken(): string {
    return this.localStorage.getData(this.jwtKey);
  }

  public getDecodedAccessToken() {
    return this.localStorage.getData(this.decodedJwtKey);
  }

  public isUserLoggedIn(): boolean {
    return this.getAccessToken() !== null;
  }

  public removeAccessToken() {
    this.localStorage.removeData(this.jwtKey);
    this.localStorage.removeData(this.decodedJwtKey);
  }

  public userHasRole(role: Role): boolean {
    const jwt = this.getDecodedAccessToken();
    if(!jwt) {
      return false;
    }

    return jwt && Object.values(jwt['authorities']).find(r => r === role);
  }

  public getUserId(): number | undefined {
    return this.getDecodedAccessToken()['id'];
  }
}
