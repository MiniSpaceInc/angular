import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private platformId = inject(PLATFORM_ID);

  saveData(key: string, data: any): void {
    if(isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }

  getData(key: string): any {
    const data = isPlatformBrowser(this.platformId) ? localStorage.getItem(key) : null;
    return data ? JSON.parse(data) : null;
  }

  removeData(key: string): void {
    if(isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }
}
