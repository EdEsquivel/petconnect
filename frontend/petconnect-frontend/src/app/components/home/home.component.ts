import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router, private authService: AuthService) {}

  goToRegisterForm() {
    this.router.navigate(['/register']);  // Redirige al formulario de registro
  }

  registerWithGoogle() {
    this.authService.loginWithGoogle();  // Llama al método de autenticación con Google
  }

  enterAsGuest() {
    this.router.navigate(['/petlist']);  // Redirige a la lista de mascotas para usuarios invitados
  }
}
