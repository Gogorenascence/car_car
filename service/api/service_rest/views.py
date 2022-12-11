from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import (
    TechnicianModelEncoder,
    AppointmentModelEncoder,
)
from .models import Technician, Appointment, AutomobileVO
@require_http_methods(["GET", "POST"])
def api_list_appointments(request, auto_vin=None):
    if request.method == "GET":
        if auto_vin == None:
            appointments= Appointment.objects.all()
        else:
            vin = auto_vin
            appointments = Appointment.objects.filter(vin=vin)
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentModelEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            technician = content["technician"]
            technician = Technician.objects.get(id=content["technician"])
            content["technician"] = technician

        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician"},
                status=404,
            )
        app_vin = content["app_vin"]
        print(content)
        autos = AutomobileVO.objects.all()
        auto_vins = []
        for auto in autos:
            auto_vins.append(auto.auto_vin)
        if app_vin in auto_vins:
            content["vip_status"] = True
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
                appointment,
                encoder=AppointmentModelEncoder,
                safe=False,
            )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_appointment(request, id):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(id=id)
            return JsonResponse(
                appointment,
                encoder=AppointmentModelEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Appointment does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            appointment = Appointment.objects.get(id=id)
            print(appointment)
            appointment.delete()
            return JsonResponse(
                appointment,
                encoder=AppointmentModelEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse({"message": "Appointment does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            Appointment.objects.filter(id=id).update(**content)
            appointment = appointment.objects.get(id=id)
            return JsonResponse(
                appointment,
                encoder=AppointmentModelEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianModelEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            print(content)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianModelEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the tech"}
            )
            response.status_code = 400
            return response
