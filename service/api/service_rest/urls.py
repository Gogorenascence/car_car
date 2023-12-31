from django.urls import path

from .views import api_show_appointment, api_list_appointments, api_list_technicians
urlpatterns = [
    path("appointments/", api_list_appointments, name="api_list_appointment"),
    path("appointments/<int:id>/",
        api_show_appointment,
        name="api_show_appointment",
    ),
    path("technicians/", api_list_technicians, name="api_list_technicians"),

]
