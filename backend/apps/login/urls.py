from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views
from .views import RegisterView, LoginView, usuario_actual

router = DefaultRouter()


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('usuario/', usuario_actual, name='usuario-actual'),
]
