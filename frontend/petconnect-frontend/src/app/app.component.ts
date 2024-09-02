import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetListComponent } from "./components/pet-list/pet-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PetListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'petconnect-frontend';
}
