import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './services/auth.service';
import {environment} from '../environments/environment';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url === `${environment.apiUrl}login`) {
      return next.handle(request);
    }
    return next.handle(request.clone({
      headers: request.headers
        .set('Authorization', `Bearer ${AuthService.getToken()}`)
    }));
  }
}
