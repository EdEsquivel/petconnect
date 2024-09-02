import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Asegúrate de importar la URL base desde el archivo de entorno
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl; // La URL base de la API

  constructor(private http: HttpClient) { }

  // Método para obtener la lista de mascotas
  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.apiUrl}pets/`);
  }

  // Agrega otros métodos para manejar diferentes endpoints si es necesario
}
