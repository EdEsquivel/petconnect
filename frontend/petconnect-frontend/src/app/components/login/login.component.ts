import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule], // No es necesario importar HttpClientModule aquí
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService, private http: HttpClient) {}

  login() {
    this.authService.loginWithGoogle().subscribe({
      next: async ({ user, token }) => {
        console.log('Logged in:', user);
        const resolvedToken = await token; // Espera la promesa del token
        this.sendTokenToBackend(resolvedToken);
        console.log('Token:', resolvedToken); // Muestra el token en la consola
      },
      error: (error) => {
        console.error('Login failed:', error);
        if (error.error instanceof ErrorEvent) {
          console.error('Client side error:', error.error.message);
        } else {
          console.error(`Backend returned code ${error.status}, body was:`, error.error);
        }
      },
    });
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => console.log('Logged out'),
      error: (error) => console.error('Logout failed:', error),
    });
  }

  // Método para enviar el token al backend
  sendTokenToBackend(token: string) {
    this.http.post('http://localhost:8000/api/auth/google/', { token: token }).subscribe({
      next: (response) => console.log('Token sent to backend:', response),
      error: (error) => console.error('Failed to send token to backend:', error),
    });
  }
}
