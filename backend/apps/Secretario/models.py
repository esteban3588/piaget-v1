from django.db import models
from datetime import date

class Tutor(models.Model):
    dni_tutor = models.IntegerField(primary_key=True)
    nombre_tutor = models.CharField(max_length=35)
    apellido_tutor = models.CharField(max_length=50)
    telefono_tutor = models.CharField(max_length=20)
    correo_tutor = models.EmailField(max_length=100)
    GENERO_CHOICES = [('M', 'Masculino'), ('F', 'Femenino'), ('O', 'Otro')]
    genero_tutor = models.CharField(max_length=1, choices=GENERO_CHOICES)

    class Meta:
        managed = True
        ordering = ['apellido_tutor', 'nombre_tutor']

    def __str__(self):
        return f"{self.apellido_tutor}, {self.nombre_tutor} (DNI: {self.dni_tutor})"


class Alumno(models.Model):
    GENERO_OPCIONES = [
        ('M', 'Masculino'),
        ('F', 'Femenino'),
        ('O', 'Otro'),
    ]

    dni_alumno = models.IntegerField(primary_key=True)
    nombre_alumno = models.CharField(max_length=50)
    apellido_alumno = models.CharField(max_length=50)
    fecha_nacimiento_alumno = models.DateField()
    genero_alumno = models.CharField(max_length=1, choices=GENERO_OPCIONES, null=True, blank=True)

    class Meta:
        managed = True
        ordering = ['apellido_alumno', 'nombre_alumno']

    def __str__(self):
        return f"{self.apellido_alumno}, {self.nombre_alumno} (DNI: {self.dni_alumno})"

    def get_edad(self):
        today = date.today()
        return today.year - self.fecha_nacimiento_alumno.year - (
            (today.month, today.day) < (self.fecha_nacimiento_alumno.month, self.fecha_nacimiento_alumno.day)
        )

    def obtener_tutores(self):
        return [
            {
                'dni_tutor': axt.tutor.dni_tutor,
                'nombre': axt.tutor.nombre_tutor,
                'apellido': axt.tutor.apellido_tutor,
                'telefono': axt.tutor.telefono_tutor,
                'correo': axt.tutor.correo_tutor,
                'genero': axt.tutor.genero_tutor,
                'parentesco': axt.parentesco.parentesco_nombre
            }
            for axt in self.alumnoxtutor_set.select_related('tutor', 'parentesco').all()
        ]


class Parentesco(models.Model):
    id_parentesco = models.AutoField(primary_key=True)
    parentesco_nombre = models.CharField(max_length=45)

    class Meta:
        managed = True

    def __str__(self):
        return self.parentesco_nombre


class AlumnoXTutor(models.Model):
    tutor = models.ForeignKey(Tutor, on_delete=models.CASCADE, related_name='alumnos')
    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE, related_name='tutores')
    parentesco = models.ForeignKey(Parentesco, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['alumno', 'tutor'], name='unique_alumno_tutor')
        ]
        managed = True
        ordering = ['alumno', 'tutor']

    def __str__(self):
        return f"{self.alumno} - {self.tutor} ({self.parentesco})"
