from rest_framework import viewsets
from .serializers import AlumnoSerializer
from .models import Alumno
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Tutor  
from .serializers import TutorSerializer 
# Create your views here.


class AlumnosView(viewsets.ModelViewSet):
    serializer_class = AlumnoSerializer
    queryset = Alumno.objects.all()

class TutorViewSet(viewsets.ModelViewSet):
    queryset = Tutor.objects.all()
    serializer_class = TutorSerializer

class RegisterView(APIView):
    def post(self, request):
        username = request.data.get("name")
        email = request.data.get("email")
        password = request.data.get("password")

        # Verificar si el correo ya está en uso en usuarios
        if User.objects.filter(email=email).exists():
            return Response(
                {"error": "El correo ya está registrado"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Verificar si el correo pertenece a un tutor
        try:
            tutor = Tutor.objects.get(correo_tutor=email)
        except Tutor.DoesNotExist:
            return Response(
                {"error": "El correo no pertenece a ningún usuario autorizado."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Verificar si el username ya existe
        if User.objects.filter(username=username).exists():
            return Response(
                {"error": "El nombre de usuario ya está en uso."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Crear usuario
        user = User.objects.create_user(username=username, email=email, password=password)

        # Crear tokens
        refresh = RefreshToken.for_user(user)

        return Response(
            {
                "message": "Registro exitoso.",
                "tutor": {
                    "nombre": tutor.nombre_tutor,
                    "apellido": tutor.apellido_tutor,
                    "correo": tutor.correo_tutor,
                },
                "user": {
                    "username": user.username,
                    "email": user.email,
                },
                "tokens": {
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                },
            },
            status=status.HTTP_201_CREATED,
        )
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
        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                "refresh": str(refresh),
                "token": str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Credenciales inválidas"}, status=status.HTTP_401_UNAUTHORIZED)