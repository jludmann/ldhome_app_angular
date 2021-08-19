import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  private lastRequest: any = null;

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

      console.log(this.lastRequest);
      this.lastRequest = req;

      const token = localStorage.getItem('token');

      let cloned;

      if (token && !this.tokenExpired(token)) {
          cloned = req.clone({
              setHeaders: {
                  Authorization:  'Bearer ' + token,
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json'
              }
          });
      }
      else {
          cloned = req.clone({
              setHeaders: {
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json'
              }
          });
      }
      return next.handle(cloned);
  }

  private tokenExpired(token: string): boolean {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date()).getTime() / 1000)) >= expiry;
  }
}
