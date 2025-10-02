from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RolSerializer, EmpleadoSerializer
from .models import Rol, Empleado

class RolViewSet(viewsets.ModelViewSet):
    queryset = Rol.objects.all()
    serializer_class = RolSerializer

class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer
