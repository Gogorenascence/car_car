
from django.contrib import admin
from .models import Appointment, AutomobileVO, Technician

@admin.register(Appointment)
class AppointementAdmin(admin.ModelAdmin):
    pass

@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    pass

@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    pass
