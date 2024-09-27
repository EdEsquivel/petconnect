import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Pet } from '../../models/pet.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  isAuthenticated = false; // Variable para rastrear la autenticación

  constructor(private apiService: ApiService, private authService: AuthService) {}

  ngOnInit() {
    this.fetchPets();
    // Verificar si el usuario está autenticado
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  fetchPets() {
    this.apiService.getPets().subscribe(
      (data: Pet[]) => {
        this.pets = data;
      },
      (error: any) => {
        console.error('Error fetching pets:', error);
      }
    );
  }
}