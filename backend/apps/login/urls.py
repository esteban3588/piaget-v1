from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'roles', views.RolViewSet, basename='rol')
router.register(r'empleados', views.EmpleadoViewSet, basename='empleado')

urlpatterns = router.urls
