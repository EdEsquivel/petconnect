from django.db import models
from django.contrib.auth.models import User

# Definición de Modelos

# Modelo para Mascotas
class Pet(models.Model):
    SPECIES_CHOICES = [
        ('dog', 'Dog'),
        ('cat', 'Cat'),
        # Agrega otras especies si es necesario
    ]

    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        # Agrega otros géneros si es necesario
    ]

    SIZE_CHOICES = [
        ('small', 'Small'),
        ('medium', 'Medium'),
        ('large', 'Large'),
    ]

    name = models.CharField(max_length=100)
    species = models.CharField(max_length=10, choices=SPECIES_CHOICES)
    breed = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    age = models.PositiveIntegerField()
    size = models.CharField(max_length=10, choices=SIZE_CHOICES)
    description = models.TextField()
    image = models.ImageField(upload_to='pet_images/')
    status = models.CharField(max_length=10, choices=[('available', 'Available'), ('adopted', 'Adopted')])
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

# Modelo para Adopciones
class Adoption(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]

    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)
    adopter = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)
    adopted_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.pet.name} - {self.adopter.username}"

# Modelo para Animales Perdidos
class LostPet(models.Model):
    name = models.CharField(max_length=100)
    species = models.CharField(max_length=10)
    breed = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    age = models.PositiveIntegerField()
    size = models.CharField(max_length=10)
    description = models.TextField()
    image = models.ImageField(upload_to='lost_pet_images/')
    date_lost = models.DateField()
    location = models.CharField(max_length=255)
    contact_info = models.CharField(max_length=255)

    def __str__(self):
        return self.name

# Modelo para Animales Encontrados
class FoundPet(models.Model):
    name = models.CharField(max_length=100)
    species = models.CharField(max_length=10)
    breed = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    age = models.PositiveIntegerField()
    size = models.CharField(max_length=10)
    description = models.TextField()
    image = models.ImageField(upload_to='found_pet_images/')
    date_found = models.DateField()
    location = models.CharField(max_length=255)
    contact_info = models.CharField(max_length=255)

    def __str__(self):
        return self.name

# Modelo para Fundaciones
class Foundation(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    contact_info = models.CharField(max_length=255)
    website = models.URLField()
    logo = models.ImageField(upload_to='foundation_logos/')

    def __str__(self):
        return self.name

# Modelo para Donaciones
class Donation(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    foundation = models.ForeignKey(Foundation, on_delete=models.CASCADE)
    donor = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()

    def __str__(self):
        return f"Donation of {self.amount} to {self.foundation.name}"
