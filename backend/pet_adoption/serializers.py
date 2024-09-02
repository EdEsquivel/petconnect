from rest_framework import serializers
from .models import User, Pet, Adoption, LostPet, FoundPet, Foundation, Donation

# Serializador para el modelo de Usuario
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

# Serializador para el modelo de Mascota
class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ['id', 'name', 'species', 'breed', 'gender', 'age', 'size', 'description', 'image', 'status', 'owner']

# Serializador para el modelo de Adopción
class AdoptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adoption
        fields = ['id', 'pet', 'adopter', 'status', 'adopted_date']

# Serializador para el modelo de Animales Perdidos
class LostPetSerializer(serializers.ModelSerializer):
    class Meta:
        model = LostPet
        fields = ['id', 'name', 'species', 'breed', 'gender', 'age', 'size', 'description', 'image', 'date_lost', 'location', 'contact_info']

# Serializador para el modelo de Animales Encontrados
class FoundPetSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoundPet
        fields = ['id', 'name', 'species', 'breed', 'gender', 'age', 'size', 'description', 'image', 'date_found', 'location', 'contact_info']

# Serializador para el modelo de Fundaciones
class FoundationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Foundation
        fields = ['id', 'name', 'description', 'contact_info', 'website', 'logo']

# Serializador para el modelo de Donaciones
class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = ['id', 'amount', 'foundation', 'donor', 'date']
