from django.urls import path, include
from secretaria import views
from rest_framework import routers
from .views import LoginView, RegisterView, TutorViewSet
from rest_framework.routers import DefaultRouter

router = routers.DefaultRouter()
router.register(r'secretaria', views.AlumnosView, 'secretaria')
router.register(r'tutores', TutorViewSet, 'tutores')


urlpatterns = [
    path('', include(router.urls)),
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
]



