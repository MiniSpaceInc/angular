import { InjectionToken } from '@angular/core';
import {EventService} from "./service/event/event.service";

export const REQUEST_TOKEN_STORAGE_KEY
  = new InjectionToken<string>('Key for storing request token in local storage.');

export const REQUEST_TOKEN_SECRET_STORAGE_KEY
  = new InjectionToken<string>('Key for storing request token secret in local storage.');

export const JWT_STORAGE_KEY
  = new InjectionToken<string>('Key for storing JWT in local storage.');

export const DECODED_JWT_STORAGE_KEY
  = new InjectionToken<string>('Key for storing decoded JWT in local storage.');

export const EVENT_SERVICE
  = new InjectionToken<EventService>('Service for managing events.');
