import { InjectionToken } from '@angular/core';

export const REQUEST_TOKEN_STORAGE_KEY
  = new InjectionToken<string>('Key for storing request token in local storage.');

export const REQUEST_TOKEN_SECRET_STORAGE_KEY
  = new InjectionToken<string>('Key for storing request token secret in local storage.');

export const JWT_STORAGE_KEY
  = new InjectionToken<string>('Key for storing JWT in local storage.');
