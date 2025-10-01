from django.db import models

class Rol(models.Model):
    id_rol = models.AutoField(primary_key=True)
    nombre_rol = models.CharField(max_length=45, unique=True)

    class Meta:
        db_table = 'roles'
        managed = True

    def save(self, *args, **kwargs):
        self.nombre_rol = self.nombre_rol.strip().lower()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.nombre_rol


class Empleado(models.Model):
    GENERO_OPCIONES = [
        ('M', 'Masculino'),
        ('F', 'Femenino'),
        ('O', 'Otro'),
    ]

    dni_empleado = models.IntegerField(primary_key=True)
    nombre_empleado = models.CharField(max_length=35)
    apellido_empleado = models.CharField(max_length=35)
    telefono_empleado = models.CharField(max_length=15, null=False)
    correo_empleado = models.EmailField(max_length=100, unique=True)
    genero_empleado = models.CharField(max_length=1, choices=GENERO_OPCIONES)
    id_rol = models.ForeignKey(Rol, on_delete=models.RESTRICT)

    class Meta:
        db_table = 'empleados'
        managed = True
        ordering = ['apellido_empleado', 'nombre_empleado']

    def __str__(self):
        return f"{self.apellido_empleado}, {self.nombre_empleado}"
