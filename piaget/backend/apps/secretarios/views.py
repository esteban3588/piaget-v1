from rest_framework import viewsets
from .models import Grado, AlumnoXGrado
from .serializers import GradoSerializer, AlumnoXGradoSerializer
from apps.tutores.serializers import TutorSerializer, AlumnoXTutorSerializer, AlumnoSerializer, ParentescoSerializer
from apps.tutores.serializers import Tutor, Alumno, AlumnoXTutor, Parentesco

class GradoViewSet(viewsets.ModelViewSet):
    queryset = Grado.objects.all()
    serializer_class = GradoSerializer

class AlumnoXGradoViewSet(viewsets.ModelViewSet):
    queryset = AlumnoXGrado.objects.all()
    serializer_class = AlumnoXGradoSerializer

class AlumnoView(viewsets.ModelViewSet):
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializer

class TutorView(viewsets.ModelViewSet):
    queryset = Tutor.objects.all()
    serializer_class = TutorSerializer

class AlumnoXTutorView(viewsets.ModelViewSet):
    queryset = AlumnoXTutor.objects.all()
    serializer_class = AlumnoXTutorSerializer

class ParentescoView(viewsets.ModelViewSet):
    queryset = Parentesco.objects.all()
    serializer_class = ParentescoSerializer





