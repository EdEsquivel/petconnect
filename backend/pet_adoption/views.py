from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from .models import Pet, Adoption, LostPet, FoundPet, Foundation, Donation # , User
from .serializers import (
    UserSerializer, PetSerializer, AdoptionSerializer,
    LostPetSerializer, FoundPetSerializer, FoundationSerializer, DonationSerializer
)
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view, permission_classes
# from django.views.decorators.csrf import csrf_exempt
# from django.http import JsonResponse
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from google.oauth2 import id_token
from google.auth.transport import requests
from django.conf import settings # Importa settings para acceder a la configuración
from rest_framework.authtoken.models import Token 

User = get_user_model()

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

# Vista para el inicio de sesión con Google
@csrf_exempt  # Temporalmente deshabilita la verificación CSRF
@api_view(['POST'])
@permission_classes([AllowAny])
def google_login(request):
    print("Received request for Google login")
    token = request.data.get('token')
    if not token:
        print("No token provided")
        return Response({'error': 'Token no proporcionado'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        print(f"Verifying token: {token[:10]}...")  # Imprime solo los primeros 10 caracteres del token por seguridad
        # Verificar el token de Google
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), settings.SOCIALACCOUNT_PROVIDERS['google']['APP']['client_id'])
        print("Token verified successfully")

        if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            raise ValueError('Wrong issuer.')

        # Obtener o crear el usuario
        email = idinfo['email']
        user, created = User.objects.get_or_create(email=email, defaults={'username': email})

        # Crear u obtener el token de autenticación
        token, _ = Token.objects.get_or_create(user=user)

        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        })

    except ValueError as e:
        print(f"Error validating token: {str(e)}")
        return Response({'error': 'Token inválido'}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        return Response({'error': 'Error interno del servidor'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)