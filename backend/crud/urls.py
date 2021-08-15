from rest_framework import routers
from crud import views

route = routers.DefaultRouter()

route.register("note", views.NoteViewSet, basename="note")

urlpatterns = route.urls
