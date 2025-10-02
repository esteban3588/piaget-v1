from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'roles', views.RolViewSet, basename='rol')
router.register(r'empleados', views.EmpleadoViewSet, basename='empleado')

urlpatterns = [
    path('', include(router.urls)),
]