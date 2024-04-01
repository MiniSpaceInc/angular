import { HttpInterceptorFn } from '@angular/common/http';
import {AuthService} from "../service/auth/auth.service";
import {inject} from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  if(auth.isUserLoggedIn()) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${auth.getAccessToken()}`,
      },
    });
  }

  return next(req);
};
