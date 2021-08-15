from rest_framework import viewsets
from crud import serializers
from crud import models


class NoteViewSet(viewsets.ModelViewSet):
    queryset = models.Note.objects.all()
    serializer_class = serializers.NoteSerializer
