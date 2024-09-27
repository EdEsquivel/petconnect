import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Pet } from '../../models/pet.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-create-pet',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css'] 
})
export class CreatePetComponent {
  petData: Pet = {
    id: 0, // Necesario si la propiedad es requerida en la interfaz Pet
    name: '',
    species: 'dog', // Usa un valor por defecto válido
    breed: '',
    gender: 'male', // Usa un valor por defecto válido
    age: 0, // Usa un valor por defecto válido
    size: 'small', // Usa un valor por defecto válido
    description: 'Descripción por defecto', // Opcional
    image: '', // Opcional o puede ser agregado después
    status: 'available', // Usa un valor por defecto válido
    ownerId: 3 // Asegúrate de que esto se establezca correctamente
  };

  selectedFile: File | null = null;

  constructor(private apiService: ApiService, private router: Router) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.selectedFile = file;
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.petData.name);
    formData.append('species', this.petData.species);
    formData.append('breed', this.petData.breed);
    formData.append('gender', this.petData.gender);
    formData.append('age', this.petData.age.toString()); // Convierte a cadena si es necesario
    formData.append('size', this.petData.size);
    formData.append('status', this.petData.status);
    formData.append('description', this.petData.description);
    formData.append('owner', this.petData.ownerId.toString()); // Convierte a cadena si es necesario

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.apiService.createPet(formData).subscribe({
      next: (response) => {
        alert('Mascota creada exitosamente');
        this.router.navigate(['petlist']);
      },
      error: (error) => {
        alert('Error al crear la mascota');
        console.error(error.error);
      },
    });
  }
}
