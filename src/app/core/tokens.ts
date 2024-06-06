import { InjectionToken } from '@angular/core';
import {EventService} from "./service/event/event.service";
import {PostService} from "./service/post/post.service";
import {CommentService} from "./service/comment/comment.service";
import {FriendService} from "./service/friend/friend.service";
import {AuthService} from "./service/auth/auth.service";
import {ReportService} from "./service/report/report.service";

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

export const POST_SERVICE
  = new InjectionToken<PostService>('Service for managing posts.');

export const COMMENT_SERVICE
  = new InjectionToken<CommentService>('Service for managing comments');

export const FRIEND_SERVICE
  = new InjectionToken<FriendService>('Service for managing friend');

export const AUTH_SERVICE
  = new InjectionToken<AuthService>('Service for methods related to authorization and authentication');

export const REPORT_SERVICE
  = new InjectionToken<ReportService>('Service for managing user\'s reports');
