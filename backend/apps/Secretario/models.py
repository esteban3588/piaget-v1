from django.db import models

class Tutor(models.Model):
    dni_tutor = models.IntegerField(primary_key=True)
    nombre_tutor = models.CharField(max_length=35)
    apellido_tutor = models.CharField(max_length=35)
    telefono_tutor = models.CharField(max_length=15)
    correo_tutor = models.CharField(max_length=100)
    GENERO_CHOICES = [('M', 'Masculino'), ('F', 'Femenino'), ('O', 'Otro')]
    genero_tutor = models.CharField(max_length=1, choices=GENERO_CHOICES)

    def __str__(self):
        return f"{self.nombre_tutor} {self.apellido_tutor}"


class Alumno(models.Model):
    dni_alumno = models.IntegerField(primary_key=True)
    nombre_alumno = models.CharField(max_length=35)
    apellido_alumno = models.CharField(max_length=35)
    fecha_nacimiento_alumno = models.DateField()
    GENERO_CHOICES = [('M', 'Masculino'), ('F', 'Femenino'), ('O', 'Otro')]
    genero_alumno = models.CharField(max_length=1, choices=GENERO_CHOICES)
    observaciones_alumno = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.nombre_alumno} {self.apellido_alumno}"


class Parentesco(models.Model):
    id_parentesco = models.AutoField(primary_key=True)
    parentesco_nombre = models.CharField(max_length=45)

    def __str__(self):
        return self.parentesco_nombre


class AlumnoXTutor(models.Model):
    id_alumno_x_tutor = models.AutoField(primary_key=True)
    tutor = models.ForeignKey(Tutor, on_delete=models.CASCADE)
    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE)
    parentesco = models.ForeignKey(Parentesco, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.alumno} - {self.tutor} ({self.parentesco})"
