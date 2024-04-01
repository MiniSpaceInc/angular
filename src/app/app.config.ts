import { provideAnimations } from "@angular/platform-browser/animations";
import { provideClientHydration } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {
  DECODED_JWT_STORAGE_KEY,
  JWT_STORAGE_KEY,
  REQUEST_TOKEN_SECRET_STORAGE_KEY,
  REQUEST_TOKEN_STORAGE_KEY
} from "./core/tokens";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(withFetch()),
    {
      provide: REQUEST_TOKEN_STORAGE_KEY,
      useValue: 'requestToken'
    },
    {
      provide: REQUEST_TOKEN_SECRET_STORAGE_KEY,
      useValue: 'requestTokenSecret'
    },
    {
      provide: JWT_STORAGE_KEY,
      useValue: 'jwt'
    },
    {
      provide: DECODED_JWT_STORAGE_KEY,
      useValue: 'decodedJwt'
    }
  ]
};
