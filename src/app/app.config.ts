import { provideAnimations } from "@angular/platform-browser/animations";
import { provideClientHydration } from '@angular/platform-browser';
import {ApplicationConfig, forwardRef} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import {
  AUTH_SERVICE,
  COMMENT_SERVICE,
  DECODED_JWT_STORAGE_KEY, EVENT_SERVICE, FRIEND_SERVICE,
  JWT_STORAGE_KEY, POST_SERVICE,
  REQUEST_TOKEN_SECRET_STORAGE_KEY,
  REQUEST_TOKEN_STORAGE_KEY
} from "./core/tokens";
import {authInterceptor} from "./core/interceptors/auth.interceptor";
import {MessageService} from "primeng/api";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ColumnFilter} from "primeng/table";
import {EventRestService} from "./core/service/event/event-rest.service";
import {PostRestService} from "./core/service/post/post-rest.service";
import {CommentRestService} from "./core/service/comment/comment-rest.service";
import {FriendRestService} from "./core/service/friend/friend-rest.service";
import {AuthService} from "./core/service/auth/auth.service";

export const appConfig: ApplicationConfig = {
  providers: [
    MessageService,
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor])
    ),
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
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColumnFilter),
      multi: true
    },
    {
      provide: EVENT_SERVICE,
      useClass: EventRestService
    },
    {
      provide: POST_SERVICE,
      useClass: PostRestService
    },
    {
      provide: COMMENT_SERVICE,
      useClass: CommentRestService
    },
    {
      provide: FRIEND_SERVICE,
      useClass: FriendRestService
    },
    {
      provide: AUTH_SERVICE,
      useClass: AuthService
    }
  ]
};
