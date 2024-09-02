from django.shortcuts import render
from rest_framework import viewsets
from .models import User, Pet, Adoption, LostPet, FoundPet, Foundation, Donation
from .serializers import (
    UserSerializer, PetSerializer, AdoptionSerializer,
    LostPetSerializer, FoundPetSerializer, FoundationSerializer, DonationSerializer
)

# Vista para el modelo de Usuario
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Vista para el modelo de Mascota
class PetViewSet(viewsets.ModelViewSet):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer

# Vista para el modelo de Adopción
class AdoptionViewSet(viewsets.ModelViewSet):
    queryset = Adoption.objects.all()
    serializer_class = AdoptionSerializer

# Vista para el modelo de Animales Perdidos
class LostPetViewSet(viewsets.ModelViewSet):
    queryset = LostPet.objects.all()
    serializer_class = LostPetSerializer

# Vista para el modelo de Animales Encontrados
class FoundPetViewSet(viewsets.ModelViewSet):
    queryset = FoundPet.objects.all()
    serializer_class = FoundPetSerializer

# Vista para el modelo de Fundaciones
class FoundationViewSet(viewsets.ModelViewSet):
    queryset = Foundation.objects.all()
    serializer_class = FoundationSerializer

# Vista para el modelo de Donaciones
class DonationViewSet(viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
