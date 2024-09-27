import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, UserCredential, user } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Observable, from, switchMap, map, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000';  // URL del backend Django
  private ownerIdSubject = new BehaviorSubject<number | null>(null);  // Almacena el ownerId del usuario
  ownerId$ = this.ownerIdSubject.asObservable();  // Observable para suscribirse al ownerId

  constructor(private auth: Auth, private http: HttpClient) {}

  // Método para iniciar sesión con Google y obtener el token de acceso
  loginWithGoogle(): Observable<any> {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider)).pipe(
      switchMap((result: UserCredential) =>
        from(result.user.getIdToken()).pipe(
          switchMap(token =>
            this.http.post<{ ownerId: number }>(`${this.apiUrl}/api/auth/google/`, { token }).pipe(
              switchMap((response) => {
                this.ownerIdSubject.next(response.ownerId);  // Asignar el ownerId después de la autenticación
                return from([response]);  // Devolver el resultado original si es necesario
              })
            )
          )
        )
      )
    );
  }

  // Método para cerrar sesión
  logout(): Observable<void> {
    this.ownerIdSubject.next(null);  // Limpiar el ownerId cuando el usuario cierre sesión
    return from(signOut(this.auth));
  }
  // Método para obtener el ownerId actual
  getOwnerId(): number | null {
    return this.ownerIdSubject.value;
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.ownerIdSubject.value !== null;
  }
}
