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
        fields = ('dni_alumno', 'id_grado')
        read_only_fields = ('anio',)

class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = "__all__"

    def validate_nombre_rol(self, value):
        # Normalizar el nombre
        valor_normalizado = value.strip().lower()
        if Rol.objects.filter(nombre_rol=valor_normalizado).exists():
            raise serializers.ValidationError("Ese rol ya existe ")
        return valor_normalizado

class EmpleadoSerializer(serializers.ModelSerializer):
     #  esto hace que DRF acepte `id_rol` como un número (PrimaryKey)
    id_rol = serializers.PrimaryKeyRelatedField(
        queryset=Rol.objects.all()
    )
    #  esto es opcional: mostrar también el nombre del rol en las respuestas
    rol_nombre = serializers.CharField(
        source='id_rol.nombre_rol', read_only=True
    )

    class Meta:
        model = Empleado
        fields = [
            'dni_empleado',
            'nombre_empleado',
            'apellido_empleado',
            'telefono_empleado',
            'correo_empleado',
            'genero_empleado',
            'id_rol',        # se envía un número (id del rol)
            'rol_nombre'     # se recibe como solo lectura
        ]

class AsignaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asignatura
        fields = '__all__'

class DictadoClaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = DictadoClase
        fields = '__all__'