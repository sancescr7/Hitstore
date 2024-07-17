from django.contrib import admin

# Register your models here.

from .models import Praducts,Brand

admin.site.register(Praducts)
admin.site.register(Brand)