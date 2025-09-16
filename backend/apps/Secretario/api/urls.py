# apps/Secretario/api/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AlumnoViewSet, TutorViewSet, ParentescoViewSet, AlumnoXTutorViewSet

router = DefaultRouter()
router.register(r'alumnos', AlumnoViewSet)
router.register(r'tutores', TutorViewSet)
router.register(r'parentescos', ParentescoViewSet)
router.register(r'alumnosxtutores', AlumnoXTutorViewSet)

urlpatterns = [
    path('', include(router.urls)), 
]
