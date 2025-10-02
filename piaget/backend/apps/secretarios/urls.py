from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'grados', views.GradoViewSet, basename='grado')
router.register(r'alumnoxgrado', views.AlumnoXGradoViewSet, basename='alumnoxgrado')
router.register(r"alumno",views.AlumnoView,basename="alumno")
router.register(r"tutor",views.TutorView,basename="tutor")
router.register(r"alumnoxtutor",views.AlumnoXTutorView,basename="alumnoxtutor")
router.register(r"parentesco",views.ParentescoView,basename="parentesco")

urlpatterns = router.urls
