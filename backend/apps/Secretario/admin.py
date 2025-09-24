from django.contrib import admin
from .models import Alumno, Tutor, Parentesco, AlumnoXTutor

@admin.register(Alumno)
class AlumnoAdmin(admin.ModelAdmin):
    list_display = ('dni_alumno', 'apellido_alumno', 'nombre_alumno', 'genero_alumno', 'fecha_nacimiento_alumno')
    search_fields = ('nombre_alumno', 'apellido_alumno', 'dni_alumno')
    list_filter = ('genero_alumno',)

@admin.register(Tutor)
class TutorAdmin(admin.ModelAdmin):
    list_display = ('dni_tutor', 'apellido_tutor', 'nombre_tutor', 'telefono_tutor', 'correo_tutor', 'genero_tutor')
    search_fields = ('nombre_tutor', 'apellido_tutor', 'dni_tutor')
    list_filter = ('genero_tutor',)

@admin.register(Parentesco)
class ParentescoAdmin(admin.ModelAdmin):
    list_display = ('parentesco_nombre',)

@admin.register(AlumnoXTutor)
class AlumnoXTutorAdmin(admin.ModelAdmin):
    list_display = ('alumno', 'tutor', 'parentesco')
    search_fields = ('alumno__nombre_alumno', 'tutor__nombre_tutor')
