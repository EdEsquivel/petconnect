from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet, PetViewSet, AdoptionViewSet, LostPetViewSet,
    FoundPetViewSet, FoundationViewSet, DonationViewSet, google_login
)

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'pets', PetViewSet)
router.register(r'adoptions', AdoptionViewSet)
router.register(r'lostpets', LostPetViewSet)
router.register(r'foundpets', FoundPetViewSet)
router.register(r'foundations', FoundationViewSet)
router.register(r'donations', DonationViewSet)

urlpatterns = [
    #path('rest-auth/google/', google_login, name='google_login'),
    path('auth/google/', google_login, name='google_login'),
    path('', include(router.urls)),
]
