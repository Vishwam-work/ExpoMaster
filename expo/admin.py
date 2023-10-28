from django.contrib import admin
from .models import PerformaDoc

# Register your models here.
@admin.register(PerformaDoc)
class PerformaAdmin(admin.ModelAdmin):
    list_display=['firstName','lastName','username','city']