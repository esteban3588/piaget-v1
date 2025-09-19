from .models import Tutor, Empleado, Rol, Alumno
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import TutorSerializer, EmpleadoSerializer, AlumnoSerializer, RolSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import viewsets

class AlumnosView(viewsets.ModelViewSet):
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializer

class TutorView(viewsets.ModelViewSet):
    queryset = Tutor.objects.all()
    serializer_class = TutorSerializer

class EmpleadoView(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer

class RolView(viewsets.ModelViewSet):
    queryset = Rol.objects.all()
    serializer_class = RolSerializer

class RegisterView(APIView):
    def post(self, request):
        username = request.data.get("name")
        email = request.data.get("email")
        password = request.data.get("password")

        # Verificar si ya existe en Usuario
        if User.objects.filter(email=email).exists():
            return Response({"error": "El correo ya está registrado"}, status=status.HTTP_400_BAD_REQUEST)

        # Validar Tutor
        tutor = Tutor.objects.filter(correo_tutor=email).first()
        empleado = Empleado.objects.filter(correo_empleado=email).first()

        if not tutor and not empleado:
            return Response({"error": "El correo no pertenece a ningún tutor ni empleado autorizado."},
                            status=status.HTTP_400_BAD_REQUEST)

        # Verificar username duplicado
        if User.objects.filter(username=username).exists():
            return Response({"error": "El nombre de usuario ya está en uso."}, status=status.HTTP_400_BAD_REQUEST)

        # Crear usuario
        user = User.objects.create_user(username=username, email=email, password=password)

        # Crear tokens
        refresh = RefreshToken.for_user(user)

        rol = "Tutor"
        if empleado:
            try:
                rol_obj = Rol.objects.get(id_rol=empleado.id_rol)
                rol = rol_obj.nombre_rol
            except Rol.DoesNotExist:
                rol = "Empleado"

        return Response({
            "message": "Registro exitoso.",
            "user": {
                "username": user.username,
                "email": user.email,
            },
            "rol": rol,
            "tokens": {
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            },
        }, status=status.HTTP_201_CREATED)


class LoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        try:
            user = User.objects.get(email=email)
            username = user.username
        except User.DoesNotExist:
            return Response({"error": "Usuario no encontrado"}, status=status.HTTP_404_NOT_FOUND)

        user = authenticate(username=username, password=password)
        if not user:
            return Response({"error": "Credenciales inválidas"}, status=status.HTTP_401_UNAUTHORIZED)

        # Buscar rol
        rol = "Tutor"
        empleado = Empleado.objects.filter(correo_empleado=email).first()
        if empleado:
            try:
                rol_obj = Rol.objects.get(id_rol=empleado.id_rol)
                rol = rol_obj.nombre_rol
            except Rol.DoesNotExist:
                rol = "Empleado"

        refresh = RefreshToken.for_user(user)
        return Response({
            "refresh": str(refresh),
            "token": str(refresh.access_token),
            "rol": rol
        }, status=status.HTTP_200_OK)
