from rest_framework import viewsets
from .serializers import AlumnoSerializer
from .models import Alumno
# Create your views here.


class AlumnosView(viewsets.ModelViewSet):
    serializer_class = AlumnoSerializer
    queryset = Alumno.objects.all()
