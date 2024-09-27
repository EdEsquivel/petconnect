import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '../../models/pet.model';

@Component({
  selector: 'app-pet-detail-modal',
  standalone: true,
  imports: [],
  templateUrl: './pet-detail-modal.component.html',
  styleUrl: './pet-detail-modal.component.css'
})
export class PetDetailModalComponent {
  @Input() pet: Pet | null = null;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  // Acción para aplicar a adopción
  applyForAdoption() {
    console.log('Aplicaste para adoptar a', this.pet?.name);
    // Lógica adicional para la adopción aquí.
  }
}
