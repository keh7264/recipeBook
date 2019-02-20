import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';

export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select('auth').pipe(
      switchMap((authState: fromAuth.State) => {
        const copiedReq = req.clone({
          params: req.params.set('auth', authState.token)
        });
        return next.handle(copiedReq);
      })
    );
  }
}
