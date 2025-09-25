from django.urls import path, include
from secretaria import views
from rest_framework import routers
from .views import LoginView, RegisterView, TutorView, AlumnosView, EmpleadoView, RolView, GradoView, AlumnoXGradoView, usuario_actual
from rest_framework.routers import DefaultRouter

router = routers.DefaultRouter()
router.register(r'secretaria', views.AlumnosView, 'secretaria')
router.register(r'tutores', views.TutorView, 'tutores')
router.register(r'empleados', views.EmpleadoView, 'empleados')
router.register(r'roles', views.RolView, 'roles')
router.register(r'alumnos', views.AlumnosView, 'alumnos')
router.register(r'grados', views.GradoView, 'grados')
router.register(r'alumnosxgrado', views.AlumnoXGradoView, 'alumnosxgrado')

urlpatterns = [
    path('', include(router.urls)),
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('usuario-actual/', usuario_actual, name='usuario-actual'),
]

