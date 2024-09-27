import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Pet } from '../../models/pet.model';
import { RouterModule } from '@angular/router';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { PetDetailModalComponent } from '../pet-detail-modal/pet-detail-modal.component';

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [RouterModule, FilterBarComponent, PetDetailModalComponent],  // Importamos el componente del modal aquí
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  filteredPets: Pet[] = []; // Almacenará la lista filtrada
  isAuthenticated = false;  // Variable para rastrear la autenticación
  noResults = false;        // Para mostrar mensaje cuando no haya resultados
  selectedPet: Pet | null = null; // Mascota seleccionada para mostrar en el modal

  constructor(private apiService: ApiService, private authService: AuthService) {}

  ngOnInit() {
    this.fetchPets();
    this.isAuthenticated = this.authService.isAuthenticated();  // Verificar si el usuario está autenticado
  }

  fetchPets() {
    this.apiService.getPets().subscribe(
      (data: Pet[]) => {
        this.pets = data;
        this.filteredPets = [...this.pets];  // Inicialmente, mostrar todas las mascotas
      },
      (error: any) => {
        console.error('Error fetching pets:', error);
      }
    );
  }

  // Nueva función para manejar el cambio de filtros
  onFiltersChanged(filters: any) {
    this.filteredPets = this.pets.filter(pet => {
      return (!filters.species || pet.species === filters.species)
        && (!filters.breed || pet.breed.includes(filters.breed))
        && (!filters.ageRange || this.ageInRange(pet.age, filters.ageRange))
        && (!filters.size || pet.size === filters.size);
    });
    this.noResults = this.filteredPets.length === 0;
  }

  ageInRange(age: number, range: string): boolean {
    const [min, max] = range.split('-').map(Number);
    return age >= min && age <= max;
  }

  // Nueva función para abrir el modal con los detalles de la mascota
  openModal(pet: Pet) {
    this.selectedPet = pet;
  }

  // Función para cerrar el modal
  closeModal() {
    this.selectedPet = null;
  }
}
