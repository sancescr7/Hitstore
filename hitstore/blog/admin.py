from django.contrib import admin

# Register your models here.

from .models import Brand, Blog, Comments

admin.site.register(Blog)
admin.site.register(Brand)
admin.site.register(Comments)
