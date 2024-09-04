import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login() {
    this.authService.loginWithGoogle().subscribe({
      next: (userCredential) => console.log('Logged in:', userCredential.user),
      error: (error) => console.error('Login failed:', error),
    });
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => console.log('Logged out'),
      error: (error) => console.error('Logout failed:', error),
    });
  }
}
