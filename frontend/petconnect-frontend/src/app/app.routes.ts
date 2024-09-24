import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { CreatePetComponent } from './components/create-pet/create-pet.component';

export const routes: Routes = [
  { path: '', component: PetListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-pet', component: CreatePetComponent },
];