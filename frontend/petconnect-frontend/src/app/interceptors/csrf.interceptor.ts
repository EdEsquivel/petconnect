// src/app/interceptors/csrf.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CsrfInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      // Si la URL contiene '/auth/google', no añadir el token CSRF
    if (req.url.includes('/auth/google')) {
      return next.handle(req);
    }

    // Obtén el token CSRF desde las cookies o desde donde lo estés almacenando
    const csrfToken = this.getCsrfTokenFromCookies();

    if (csrfToken) {
      req = req.clone({
        setHeaders: {
          'X-CSRFToken': csrfToken,
        },
        withCredentials: true, // Asegura que las cookies sean enviadas
      });
    }

    return next.handle(req);
  }

  private getCsrfTokenFromCookies(): string | null {
    // Implementa la lógica para obtener el token CSRF desde las cookies
    const match = document.cookie.match(/csrftoken=([^;]+)/);
    return match ? match[1] : null;
  }
}
