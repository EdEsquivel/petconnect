import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { CreatePetComponent } from './components/create-pet/create-pet.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'petlist', component: PetListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-pet', component: CreatePetComponent },
];