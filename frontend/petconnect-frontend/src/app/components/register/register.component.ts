import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router: Router, private http: HttpClient) {}

onSubmit(registerForm: any) {
  if (registerForm.valid) {
    // Capturar los datos del formulario y enviarlos al backend
    const userData: User = {
      username: registerForm.value.username,
      email: registerForm.value.email,
      password: registerForm.value.password,
      first_name: registerForm.value.first_name,
      last_name: registerForm.value.last_name
    };

    this.http.post('http://localhost:8000/api/users/', userData).subscribe(
      response => {
        console.log('Usuario registrado exitosamente:', response);
        this.router.navigate(['/petlist']);
      },
      error => {
        console.error('Error durante el registro:', error);
      }
    );
  } else {
    console.log('Formulario no válido');
  }
}
  
}
