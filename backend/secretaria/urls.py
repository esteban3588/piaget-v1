from django.urls import path, include
from secretaria import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'secretaria', views.AlumnosView, 'secretaria')


urlpatterns = [
    path('api/', include(router.urls) ),
]



