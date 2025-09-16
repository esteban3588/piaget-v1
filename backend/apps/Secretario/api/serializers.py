# apps/Secretario/api/serializers.py
from rest_framework import serializers
from ..models import Alumno, Tutor, Parentesco, AlumnoXTutor

class AlumnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumno
        fields = '__all__'

class TutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutor
        fields = '__all__'

class ParentescoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parentesco
        fields = '__all__'

class AlumnoXTutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlumnoXTutor
        fields = '__all__'
