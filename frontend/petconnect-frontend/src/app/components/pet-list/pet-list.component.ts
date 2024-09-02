import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Pet } from '../../models/pet.model';

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [], // Agregar aquí los módulos necesarios
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchPets();
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