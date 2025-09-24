from rest_framework import viewsets
from .serializers import AlumnoSerializer, TutorSerializer, ParentescoSerializer, AlumnoXTutorSerializer
from ..models import Alumno, Tutor, Parentesco, AlumnoXTutor

class AlumnoViewSet(viewsets.ModelViewSet):
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializer

class TutorViewSet(viewsets.ModelViewSet):
    queryset = Tutor.objects.all()
    serializer_class = TutorSerializer

class ParentescoViewSet(viewsets.ModelViewSet):
    queryset = Parentesco.objects.all()
    serializer_class = ParentescoSerializer

class AlumnoXTutorViewSet(viewsets.ModelViewSet):
    queryset = AlumnoXTutor.objects.all()
    serializer_class = AlumnoXTutorSerializer
