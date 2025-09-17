from rest_framework import serializers
from .models import Parentesco, Tutor, Alumno, AlumnoXTutor, Grado, AlumnoXGrado, Rol, Empleado, Asignatura, DictadoClase

class ParentescoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Parentesco
        fields = ('parentesco_nombre',)

class TutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutor
        fields = '__all__'

class AlumnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumno
        fields = '__all__'

class AlumnoXTutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlumnoXTutor
        fields = ('dni_tutor', 'dni_alumno',)

class GradoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grado
        fields = '__all__'

class AlumnoXGradoSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlumnoXGrado
        field = ('dni_alumno', 'id_grado', 'anio',)

class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        field = ('nombre_rol',)

class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        field = '__all__'

class AsignaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asignatura
        field = '__all__'

class DictadoClaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = DictadoClase
        field = '__all__'