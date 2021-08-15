from django.contrib import admin
from crud import models


@admin.register(models.Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ("title", "content", "created_at", "updated_at")
    list_filter = ("created_at", "updated_at")
    search_fields = ("title", "content")
