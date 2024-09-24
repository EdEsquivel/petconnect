import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, UserCredential } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Observable, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000';  // Ajusta esto a la URL del backend Django
  constructor(private auth: Auth, private http: HttpClient) {}

  // Método para iniciar sesión con Google y obtener el token de acceso
  loginWithGoogle(): Observable<any> {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider)).pipe(
      switchMap((result: UserCredential) => 
        from(result.user.getIdToken()).pipe(
          switchMap(token => 
            this.http.post(`${this.apiUrl}/api/auth/google/`, { token })
          )
        )
      )
    );
  }

  // Método para cerrar sesión
  logout(): Observable<void> {
    return from(signOut(this.auth));
  }
}
